import { RoadmapPath } from '../../types/roadmap';

export const computerScienceRoadmap: RoadmapPath = {
  title: "Computer Science Path",
  description: "A comprehensive guide to computer science fundamentals, covering theoretical concepts, algorithms, and system design principles.",
  sections: [
    {
      title: "Programming Fundamentals",
      items: [
        {
          name: "Data Types & Variables",
          description: "Master fundamental data types, variables, operators, and basic programming constructs."
        },
        {
          name: "Control Structures",
          description: "Learn loops, conditionals, and program flow control mechanisms for effective programming."
        },
        {
          name: "Functions & Modularity",
          description: "Understand function design, parameter passing, and code organization principles."
        },
        {
          name: "Object-Oriented Programming",
          description: "Study classes, inheritance, polymorphism, and object-oriented design patterns."
        }
      ]
    },
    {
      title: "Data Structures",
      items: [
        {
          name: "Arrays & Lists",
          description: "Implement and use fundamental data structures for storing sequential data."
        },
        {
          name: "Trees & Graphs",
          description: "Master hierarchical and network data structures for complex data relationships."
        },
        {
          name: "Hash Tables",
          description: "Learn efficient key-value storage and retrieval using hash functions."
        },
        {
          name: "Advanced Structures",
          description: "Study specialized data structures like heaps, tries, and balanced trees."
        }
      ]
    },
    {
      title: "Algorithms",
      items: [
        {
          name: "Sorting & Searching",
          description: "Implement and analyze fundamental algorithms for data organization and retrieval."
        },
        {
          name: "Graph Algorithms",
          description: "Study pathfinding, spanning trees, and network flow algorithms."
        },
        {
          name: "Dynamic Programming",
          description: "Master optimization techniques for solving complex computational problems."
        },
        {
          name: "Algorithm Analysis",
          description: "Learn to analyze time and space complexity using Big O notation."
        }
      ]
    },
    {
      title: "Systems & Architecture",
      items: [
        {
          name: "Computer Architecture",
          description: "Understand CPU design, memory hierarchy, and computer organization."
        },
        {
          name: "Operating Systems",
          description: "Study process management, memory management, and system programming."
        },
        {
          name: "Networking",
          description: "Learn network protocols, architecture, and distributed systems concepts."
        },
        {
          name: "Database Systems",
          description: "Master database design, querying, and transaction management principles."
        }
      ]
    }
  ]
};