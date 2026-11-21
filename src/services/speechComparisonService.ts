export type WordMatchStatus = 'correct' | 'omitted' | 'different' | 'extra';

export interface WordComparisonToken {
  word: string;
  expected?: string;
  status: WordMatchStatus;
}

export interface SpeechComparisonResult {
  expectedNormalized: string;
  spokenNormalized: string;
  tokens: WordComparisonToken[];
  correctWords: string[];
  omittedWords: string[];
  differentWords: { expected: string; actual: string }[];
  extraWords: string[];
  textualMatchPct: number;
  disclaimer: string;
}

export function normalizeSpeechText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”"]/g, '')
    .replace(/[.,!?;:()—–\-¿¡]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function compareSpokenText(expectedText: string, spokenText: string): SpeechComparisonResult {
  const expectedNormalized = normalizeSpeechText(expectedText);
  const spokenNormalized = normalizeSpeechText(spokenText);

  const exp = expectedNormalized ? expectedNormalized.split(' ') : [];
  const act = spokenNormalized ? spokenNormalized.split(' ') : [];

  const n = exp.length;
  const m = act.length;

  // Word-level edit distance DP for clean alignment
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array<number>(m + 1).fill(0));
  for (let i = 0; i <= n; i += 1) dp[i][0] = i;
  for (let j = 0; j <= m; j += 1) dp[0][j] = j;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      if (exp[i - 1] === act[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  const reversed: WordComparisonToken[] = [];
  let i = n;
  let j = m;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && exp[i - 1] === act[j - 1]) {
      reversed.push({ word: exp[i - 1], status: 'correct' });
      i -= 1;
      j -= 1;
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      reversed.push({ word: act[j - 1], expected: exp[i - 1], status: 'different' });
      i -= 1;
      j -= 1;
    } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      reversed.push({ word: exp[i - 1], status: 'omitted' });
      i -= 1;
    } else {
      reversed.push({ word: act[j - 1], status: 'extra' });
      j -= 1;
    }
  }

  const tokens = reversed.reverse();
  const correctWords: string[] = [];
  const omittedWords: string[] = [];
  const differentWords: { expected: string; actual: string }[] = [];
  const extraWords: string[] = [];

  for (const t of tokens) {
    if (t.status === 'correct') correctWords.push(t.word);
    else if (t.status === 'omitted') omittedWords.push(t.word);
    else if (t.status === 'different') {
      differentWords.push({ expected: t.expected ?? '', actual: t.word });
    } else {
      extraWords.push(t.word);
    }
  }

  const textualMatchPct = n > 0 ? Math.round((correctWords.length / n) * 100) : 0;

  return {
    expectedNormalized,
    spokenNormalized,
    tokens,
    correctWords,
    omittedWords,
    differentWords,
    extraWords,
    textualMatchPct,
    disclaimer:
      'Coincidencia textual (Textual match): compares transcribed words only. It is NOT a phonetic, accent, or pronunciation grade.'
  };
}