import { ReactNode } from 'react';

export interface RoadmapDomain {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
}

export interface RoadmapSection {
  title: string;
  items: Array<{
    name: string;
    description: string;
  }>;
}

export interface RoadmapPath {
  title: string;
  description: string;
  sections: RoadmapSection[];
}