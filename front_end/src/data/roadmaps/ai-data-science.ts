import { RoadmapPath } from '../../types/roadmap';

export const aiDataScienceRoadmap: RoadmapPath = {
  title: "AI & Data Science Path",
  description: "A comprehensive guide to becoming an AI & Data Science professional, covering mathematics, programming, and machine learning concepts.",
  sections: [
    {
      title: "Mathematics & Statistics",
      items: [
        {
          name: "Linear Algebra",
          description: "Master vectors, matrices, eigenvalues, and linear transformations essential for machine learning algorithms."
        },
        {
          name: "Calculus & Optimization",
          description: "Learn derivatives, gradients, and optimization techniques used in training machine learning models."
        },
        {
          name: "Probability & Statistics",
          description: "Understand probability distributions, hypothesis testing, and statistical inference for data analysis."
        },
        {
          name: "Information Theory",
          description: "Study entropy, information gain, and other concepts fundamental to machine learning."
        }
      ]
    },
    {
      title: "Programming & Tools",
      items: [
        {
          name: "Python Programming",
          description: "Master Python programming with focus on NumPy, Pandas, and scientific computing libraries."
        },
        {
          name: "Data Structures & Algorithms",
          description: "Learn essential data structures and algorithms for efficient data processing and model implementation."
        },
        {
          name: "Version Control & Git",
          description: "Use Git for code versioning and collaboration in data science projects."
        },
        {
          name: "Development Environment",
          description: "Set up and use Jupyter notebooks, IDEs, and other development tools for data science."
        }
      ]
    },
    {
      title: "Machine Learning",
      items: [
        {
          name: "Supervised Learning",
          description: "Master classification and regression algorithms including decision trees, SVMs, and neural networks."
        },
        {
          name: "Unsupervised Learning",
          description: "Learn clustering, dimensionality reduction, and other unsupervised learning techniques."
        },
        {
          name: "Deep Learning",
          description: "Study neural networks architectures, CNNs, RNNs, and modern deep learning frameworks."
        },
        {
          name: "Model Evaluation",
          description: "Implement cross-validation, metrics, and model selection techniques for robust evaluation."
        }
      ]
    },
    {
      title: "Data Engineering",
      items: [
        {
          name: "Data Collection",
          description: "Learn web scraping, API integration, and database management for data gathering."
        },
        {
          name: "Data Preprocessing",
          description: "Master data cleaning, feature engineering, and preprocessing techniques."
        },
        {
          name: "Big Data Technologies",
          description: "Use distributed computing frameworks and big data tools for large-scale data processing."
        },
        {
          name: "Data Visualization",
          description: "Create effective visualizations and dashboards to communicate insights from data."
        }
      ]
    }
  ]
};