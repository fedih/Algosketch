export interface Algorithm {
  id: string;
  label: string;
  path: string;
}

export interface Category {
  id: string;
  label: string;
  algorithms: Algorithm[];
}