import { Category } from '../types/visualization';

export const visualizationCategories: Category[] = [
  {
    id: 'backtracking',
    label: 'Backtracking',
    algorithms: [
      { id: 'hamiltonian-cycles', label: 'Hamiltonian Cycles', path: '/visualization/backtracking/hamiltonian-cycles' },
      { id: 'knights-tour', label: "Knight's Tour Problem", path: '/visualization/backtracking/knights-tour' },
      { id: 'n-queens', label: 'N-Queens Problem', path: '/visualization/backtracking/n-queens' },
      { id: 'sum-of-subsets', label: 'Sum of Subsets', path: '/visualization/backtracking/sum-of-subsets' }
    ]
  },
  {
    id: 'branch-and-bound',
    label: 'Branch and Bound',
    algorithms: [
      { id: 'travelling-salesman', label: 'Travelling Salesman', path: '/visualization/branch-and-bound/travelling-salesman' },
      { id: 'knapsack', label: '0/1 Knapsack', path: '/visualization/branch-and-bound/knapsack' },
      { id: 'job-assignment', label: 'Job Assignment', path: '/visualization/branch-and-bound/job-assignment' }
    ]
  },
  {
    id: 'brute-force',
    label: 'Brute Force',
    algorithms: [
      { id: 'binary-search-tree', label: 'Binary Search Tree', path: '/visualization/brute-force/binary-search-tree' },
      { id: 'depth-limited-search', label: 'Depth-Limited Search', path: '/visualization/brute-force/depth-limited-search' },
      { id: 'topological-sort', label: 'Topological Sort', path: '/visualization/brute-force/topological-sort' },
      { id: 'binary-tree-traversal', label: 'Binary Tree Traversal', path: '/visualization/brute-force/binary-tree-traversal' },
      { id: 'bipartiteness-test', label: 'Bipartiteness Test', path: '/visualization/brute-force/bipartiteness-test' },
      { id: 'breadth-first-search', label: 'Breadth-First Search', path: '/visualization/brute-force/breadth-first-search' },
      { id: 'bridge-finding', label: 'Bridge Finding', path: '/visualization/brute-force/bridge-finding' },
      { id: 'bubble-sort', label: 'Bubble Sort', path: '/visualization/brute-force/bubble-sort' },
      { id: 'comb-sort', label: 'Comb Sort', path: '/visualization/brute-force/comb-sort' },
      { id: 'cycle-sort', label: 'Cycle Sort', path: '/visualization/brute-force/cycle-sort' }
    ]
  },
  {
    id: 'dynamic-programming',
    label: 'Dynamic Programming',
    algorithms: [
      { id: 'bellman-ford', label: "Bellman-Ford's Shortest Path", path: '/visualization/dynamic-programming/bellman-ford' },
      { id: 'catalan-number', label: 'Catalan Number', path: '/visualization/dynamic-programming/catalan-number' },
      { id: 'fibonacci', label: 'Fibonacci Sequence', path: '/visualization/dynamic-programming/fibonacci' },
      { id: 'floyd-warshall', label: "Floyd-Warshall's Shortest Path", path: '/visualization/dynamic-programming/floyd-warshall' },
      { id: 'integer-partition', label: 'Integer Partition', path: '/visualization/dynamic-programming/integer-partition' },
      { id: 'knapsack', label: 'Knapsack Problem', path: '/visualization/dynamic-programming/knapsack' }
    ]
  }
];