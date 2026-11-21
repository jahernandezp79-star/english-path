// Authoring helpers: build Exercise/Vocab objects compactly. Content only; no engine logic.
import type { Exercise, Vocab } from '../types';
export const v = (word: string, translation: string, pron: string, stress?: string): Vocab => ({ word, translation, pron, stress });
export const mc = (id: string, prompt: string, options: string[], answer: number, feedback: string, instructions = 'Choose the correct answer.'): Exercise => ({ id, type: 'multiple-choice', instructions, prompt, options, answer, feedback });
export const rc = (id: string, prompt: string, options: string[], answer: number, feedback: string, passage?: string): Exercise => ({ id, type: 'reading-comprehension', instructions: 'Read the text and choose the answer.', prompt, options, answer, feedback, passage });
export const tf = (id: string, prompt: string, answer: boolean, feedback: string): Exercise => ({ id, type: 'true-false', instructions: 'True or false?', prompt, answer, feedback });
export const fb = (id: string, prompt: string, answer: string, feedback: string, accept?: string[], instructions = 'Complete the sentence.'): Exercise => ({ id, type: 'fill-blank', instructions, prompt, answer, accept, feedback });
export const wo = (id: string, words: string[], answer: string[], feedback: string): Exercise => ({ id, type: 'word-order', instructions: 'Put the words in order.', prompt: 'Build the sentence.', words, answer, feedback });
export const mt = (id: string, instructions: string, pairs: [string, string][], feedback: string): Exercise => ({ id, type: 'matching', instructions, prompt: 'Match each item.', pairs, feedback });
export const tr = (id: string, instructions: string, prompt: string, answer: string, feedback: string, accept?: string[]): Exercise => ({ id, type: 'sentence-transformation', instructions, prompt, answer, accept, feedback });
export const sa = (id: string, prompt: string, rubric: string): Exercise => ({ id, type: 'short-answer', instructions: 'Write your answer, then compare it with the guide.', prompt, rubric, feedback: 'Open answers are self-checked in this version.' });
