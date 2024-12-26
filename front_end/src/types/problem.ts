export interface ProblemCategory {
  id: string;
  title: string;
  description: string;
  count: number;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
}