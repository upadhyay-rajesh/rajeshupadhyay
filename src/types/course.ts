export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
}

export interface CourseTier {
  id: string;
  courseId: string;
  name: 'Basic' | 'Intermediate' | 'Advanced' | 'Complete Package';
  price: number;
  originalPrice?: number;
  duration: string;
  features: string[];
  popular?: boolean;
  savings?: number;
}

export interface CartItem {
  courseId: string;
  tierId: string;
  courseName: string;
  tierName: string;
  price: number;
  quantity: number;
}

export const COURSES: Course[] = [
  {
    id: 'genai',
    title: 'Generative AI & Machine Learning',
    description: 'Master AI/ML fundamentals, LLMs, prompt engineering, and practical AI applications',
    icon: '🤖',
    topics: ['AI/ML Fundamentals', 'Large Language Models', 'Prompt Engineering', 'AI Applications']
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Learn blockchain technology, smart contracts, DeFi, and Web3 development',
    icon: '⛓️',
    topics: ['Blockchain Basics', 'Smart Contracts', 'DeFi Development', 'Web3 Integration']
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Master Python, Machine Learning, Data Visualization, and Statistical Analysis',
    icon: '📊',
    topics: ['Python Programming', 'Machine Learning', 'Data Visualization', 'Statistics']
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Computing',
    description: 'Master CI/CD, containerization, cloud platforms, and infrastructure automation',
    icon: '⚙️',
    topics: ['CI/CD Pipelines', 'Docker & Kubernetes', 'AWS/Azure', 'Infrastructure as Code']
  },
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    description: 'Design and build scalable microservices with modern patterns and practices',
    icon: '🏗️',
    topics: ['Service Architecture', 'API Design', 'Service Mesh', 'Distributed Systems']
  }
];

export const TIERS: Record<string, CourseTier[]> = {
  'genai': [
    {
      id: 'basic',
      courseId: 'genai',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['AI/ML Fundamentals', 'Python for AI', 'Basic Neural Networks', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'genai',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['LLM Implementation', 'Prompt Engineering', 'AI Model Training', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'genai',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Custom AI Solutions', 'Production AI Systems', 'Advanced Projects', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'genai',
      name: 'Complete Package',
      price: 49999,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 5001,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'blockchain': [
    {
      id: 'basic',
      courseId: 'blockchain',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['Blockchain Fundamentals', 'Cryptocurrency Basics', 'Smart Contract Intro', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'blockchain',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Solidity Programming', 'DApp Development', 'Web3 Integration', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'blockchain',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['DeFi Protocols', 'Advanced Smart Contracts', 'Security Auditing', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'blockchain',
      name: 'Complete Package',
      price: 49999,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 5001,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'data-science': [
    {
      id: 'basic',
      courseId: 'data-science',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['Python Fundamentals', 'Data Analysis Basics', 'Pandas & NumPy', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'data-science',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Machine Learning', 'Data Visualization', 'Real Projects', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'data-science',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Deep Learning', 'Advanced ML', 'Industry Projects', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'data-science',
      name: 'Complete Package',
      price: 49999,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 5001,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'devops': [
    {
      id: 'basic',
      courseId: 'devops',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['DevOps Fundamentals', 'CI/CD Basics', 'Docker Introduction', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'devops',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Kubernetes', 'Cloud Platforms', 'Infrastructure Automation', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'devops',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Advanced Orchestration', 'Monitoring & Logging', 'Security DevOps', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'devops',
      name: 'Complete Package',
      price: 49999,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 5001,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ],
  'microservices': [
    {
      id: 'basic',
      courseId: 'microservices',
      name: 'Basic',
      price: 15000,
      duration: '2 months',
      features: ['Microservices Basics', 'API Design', 'Service Communication', 'Community Support']
    },
    {
      id: 'intermediate',
      courseId: 'microservices',
      name: 'Intermediate',
      price: 20000,
      duration: '3 months',
      features: ['Service Mesh', 'Event-Driven Architecture', 'Monitoring & Tracing', 'Mentorship Support']
    },
    {
      id: 'advanced',
      courseId: 'microservices',
      name: 'Advanced',
      price: 20000,
      duration: '3 months',
      features: ['Advanced Patterns', 'Distributed Systems', 'Performance Optimization', '1-on-1 Mentoring']
    },
    {
      id: 'complete',
      courseId: 'microservices',
      name: 'Complete Package',
      price: 49999,
      originalPrice: 55000,
      duration: '8 months',
      popular: true,
      savings: 5001,
      features: ['All Basic + Intermediate + Advanced', 'Lifetime Access', 'Job Placement Support', 'Certificate']
    }
  ]
};