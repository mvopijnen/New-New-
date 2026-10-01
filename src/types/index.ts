export type CategoryId = 'eerste-date' | 'samen' | 'vrienden' | 'familie' | 'verdiepen' | 'nieuwe-ontmoeting';

export interface Question {
  id: string;
  categoryId: CategoryId;
  text: string;
  categoryLabel: string;
  followUp?: string;
  moodTag?: 'speels' | 'diep' | 'ongemakkelijk' | 'ontwapenend' | 'verrassend';
}

export interface CategoryWorld {
  id: CategoryId;
  title: string;
  leadSentence: string;
  description: string;
  tone: string;
  accentColor: string;
  bgTint: string;
  borderTint: string;
  sampleQuestions: string[];
}

export interface Situation {
  id: string;
  title: string;
  context: string;
  quote: string;
  timeframe: string;
  bgTone: string;
}
