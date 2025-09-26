import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, Award, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { COURSES } from '@/types/course';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses = () => {
  const courseDetails = {
    'genai': {
      duration: '140+ Hours',
      students: '500+',
      projects: '15+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '35-40 Hours',
          topics: [
            {
              title: 'Foundations of AI & GenAI (3 hrs)',
              subtopics: ['AI vs ML vs DL vs GenAI', 'History & breakthroughs in Generative AI', 'Key models: GPT, Stable Diffusion, MidJourney', 'Real-world applications & industry use cases']
            },
            {
              title: 'Introduction to LLMs (5 hrs)',
              subtopics: ['How LLMs work: tokens, embeddings, transformers', 'Pretraining vs fine-tuning', 'Popular open-source LLMs (LLaMA, Mistral, Falcon)', 'Hosted APIs (OpenAI, Anthropic, Cohere)']
            },
            {
              title: 'Prompt Engineering (6 hrs)',
              subtopics: ['Zero-shot, few-shot prompting', 'Instruction-tuning', 'Role-based prompts & system instructions', 'Structured prompting with templates', 'Prompt chaining']
            },
            {
              title: 'GenAI Tools & APIs (6 hrs)',
              subtopics: ['OpenAI API basics (chat completions, embeddings)', 'Hugging Face Spaces & Models', 'Google Gemini, Anthropic Claude', 'VS Code + GitHub Copilot']
            },
            {
              title: 'Hands-on with Text, Image, Audio (8 hrs)',
              subtopics: ['Text: Q&A, summarization, rewriting', 'Images: DALL·E, Stable Diffusion, MidJourney basics', 'Audio: TTS (text-to-speech), STT (speech-to-text)', 'Safety & ethics in GenAI']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '45-50 Hours',
          topics: [
            {
              title: 'Model Fine-Tuning (8 hrs)',
              subtopics: ['Fine-tuning vs adapter methods (LoRA, PEFT)', 'Hugging Face Trainer basics', 'Training domain-specific chatbots', 'Evaluating model performance']
            },
            {
              title: 'Retrieval-Augmented Generation (RAG) (7 hrs)',
              subtopics: ['Why RAG is needed', 'Embeddings for semantic search', 'Vector databases: Pinecone, FAISS, Weaviate', 'Implementing a RAG-based chatbot']
            },
            {
              title: 'Multi-Modal Generative AI (6 hrs)',
              subtopics: ['Text-to-image (Stable Diffusion, DALL·E)', 'Text-to-audio (ElevenLabs, Bark)', 'Text-to-video (Pika Labs, RunwayML)', 'Vision+Language (CLIP, BLIP-2)']
            },
            {
              title: 'GenAI in Software Development (6 hrs)',
              subtopics: ['Copilot for code generation', 'AI-powered debugging', 'Test case generation', 'AI-assisted documentation']
            },
            {
              title: 'Application Development with LangChain (8 hrs)',
              subtopics: ['LangChain basics (chains, memory, tools, agents)', 'Connecting APIs & databases', 'Advanced prompting with LangChain', 'Deploying apps with Streamlit/Gradio']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '55+ Hours',
          topics: [
            {
              title: 'Advanced Transformer Architectures (8 hrs)',
              subtopics: ['Deep dive into attention mechanisms', 'Scaling laws, efficiency (quantization, pruning, distillation)', 'LoRA & PEFT methods']
            },
            {
              title: 'Scaling & Deployment (7 hrs)',
              subtopics: ['Serving LLMs with Docker + FastAPI', 'Cloud deployment (AWS, GCP, Azure)', 'Cost optimization & monitoring']
            },
            {
              title: 'AI Safety & Responsible AI (6 hrs)',
              subtopics: ['Bias in LLMs', 'Prompt injection & jailbreaks', 'Guardrails (Azure Safety, Llama Guard)', 'Responsible AI policies']
            },
            {
              title: 'Autonomous AI & Agentic Systems (8 hrs)',
              subtopics: ['What is Agentic AI (self-directed AI agents)', 'LangChain Agents (tool-use, reasoning, planning)', 'AutoGPT, BabyAGI, CrewAI', 'Multi-agent collaboration (team of agents with roles)']
            },
            {
              title: 'Anthropic Model Context Protocol (MCP) (8 hrs)',
              subtopics: ['Introduction to MCP and context-sharing', 'How MCP allows AI models/tools to communicate', 'Structured context passing across agents', 'MCP + Agentic AI integration']
            },
            {
              title: 'Enterprise GenAI Applications (8 hrs)',
              subtopics: ['Healthcare: diagnostic copilots', 'Finance: fraud/risk copilots', 'Retail: AI-powered assistants', 'Media: generative pipelines (text → video → marketing)']
            }
          ]
        }
      },
      prerequisites: ['Basic Python programming', 'Understanding of APIs', 'Mathematical foundation'],
      outcomes: ['Build AI-powered applications', 'Implement LLM solutions', 'Master prompt engineering', 'Deploy AI systems', 'Create Agentic AI systems']
    },
    'blockchain': {
      duration: '150+ Hours',
      students: '300+',
      projects: '12+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '40 Hours',
          topics: [
            {
              title: 'Blockchain Fundamentals (6 hrs)',
              subtopics: ['What is Blockchain? History & evolution (Bitcoin → Ethereum → Web3)', 'Centralized vs Decentralized', 'Distributed Ledger Technology (DLT) basics', 'Consensus mechanisms overview']
            },
            {
              title: 'Cryptography & Security Basics (6 hrs)',
              subtopics: ['Public/Private Keys', 'Hashing (SHA-256, Keccak)', 'Merkle Trees', 'Digital Signatures']
            },
            {
              title: 'Bitcoin & Ethereum Basics (6 hrs)',
              subtopics: ['Bitcoin UTXO model', 'Ethereum Accounts, Gas & Transactions', 'Testnets (Sepolia, Holesky)', 'Using Etherscan & Blockchain explorers']
            },
            {
              title: 'Smart Contract Introduction (8 hrs)',
              subtopics: ['Solidity basics: variables, functions, modifiers', 'Remix IDE for contract deployment', 'Events & logs', 'Simple contract deployment']
            },
            {
              title: 'Tools & Wallets (6 hrs)',
              subtopics: ['MetaMask setup & transactions', 'Ganache for local blockchain', 'Web3.js / Ethers.js introduction', 'DApp structure']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '50 Hours',
          topics: [
            {
              title: 'Advanced Smart Contracts (10 hrs)',
              subtopics: ['Solidity: Inheritance, Libraries, Structs', 'Security patterns (Ownable, Pausable)', 'Hardhat/Truffle for testing & deployment', 'Upgradeable contracts']
            },
            {
              title: 'Token Standards (8 hrs)',
              subtopics: ['ERC-20 Fungible Tokens', 'ERC-721 NFTs', 'ERC-1155 Multi-tokens', 'Gas optimization in tokens']
            },
            {
              title: 'DeFi Basics (10 hrs)',
              subtopics: ['What is DeFi? Lending, borrowing, yield farming', 'Automated Market Makers (Uniswap model)', 'Liquidity Pools & Staking', 'Governance tokens']
            },
            {
              title: 'Oracles & Off-Chain Data (7 hrs)',
              subtopics: ['What are Oracles?', 'Chainlink basics', 'Connecting contracts to external APIs', 'Real-world use cases']
            },
            {
              title: 'Scaling Solutions (7 hrs)',
              subtopics: ['Layer 2: Polygon, Arbitrum, Optimism', 'Rollups, Plasma, State Channels', 'Bridges between chains']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '60 Hours',
          topics: [
            {
              title: 'Blockchain Architecture & Consensus (10 hrs)',
              subtopics: ['Proof of Work vs Proof of Stake vs Delegated Proof of Stake', 'Byzantine Fault Tolerance (BFT)', 'Sharding & scalability models', 'Blockchain governance']
            },
            {
              title: 'Enterprise Blockchain (10 hrs)',
              subtopics: ['Hyperledger Fabric (Peers, Orderers, Channels)', 'Writing chaincode in Go', 'R3 Corda basics (Java/Kotlin)', 'Identity & permissioned blockchains']
            },
            {
              title: 'Interoperability & Cross-Chain (8 hrs)',
              subtopics: ['Blockchain bridges', 'Polkadot & Substrate (Rust)', 'Cosmos SDK & IBC protocol', 'Cross-chain asset swaps']
            },
            {
              title: 'Security & Auditing (8 hrs)',
              subtopics: ['Vulnerabilities (Reentrancy, Overflow, DoS)', 'Audit tools: MythX, Slither', 'Using OpenZeppelin contracts', 'Best practices & bug bounties']
            },
            {
              title: 'Real-World Applications & Future Trends (8 hrs)',
              subtopics: ['Blockchain in Supply Chain, Healthcare, Voting', 'Stablecoins & CBDCs', 'Decentralized Identity (DID)', 'Zero-Knowledge Proofs (ZK-SNARKs, ZK-Rollups)']
            }
          ]
        }
      },
      prerequisites: ['Programming basics (JavaScript/Python)', 'Web development concepts', 'Basic cryptography understanding'],
      outcomes: ['Build blockchain applications', 'Develop smart contracts', 'Create DeFi protocols', 'Launch NFT projects', 'Design enterprise blockchain solutions']
    },
    'data-science': {
      duration: '215+ Hours',
      students: '800+',
      projects: '16+',
      levels: {
        beginner: {
          title: 'Beginner Level - Foundations',
          duration: '60 Hours',
          topics: [
            {
              title: 'Introduction to Data Science (4 hrs)',
              subtopics: ['What is Data Science?', 'Data Science lifecycle (CRISP-DM)', 'Key roles: Data Scientist, Data Analyst, ML Engineer', 'Tools overview (Jupyter, Anaconda, Colab)']
            },
            {
              title: 'Python for Data Science (10 hrs)',
              subtopics: ['Python basics refresher (loops, functions, OOP)', 'NumPy: arrays, broadcasting, linear algebra', 'Pandas: Series, DataFrame, indexing, groupby', 'Matplotlib & Seaborn: plots, subplots, styles']
            },
            {
              title: 'Data Acquisition & Wrangling (8 hrs)',
              subtopics: ['Importing CSV, Excel, JSON, SQL databases', 'APIs for data (REST APIs, requests library)', 'Web scraping with BeautifulSoup/Scrapy', 'Cleaning data: duplicates, missing values, inconsistent formats']
            },
            {
              title: 'Data Visualization & EDA (8 hrs)',
              subtopics: ['Matplotlib advanced: subplots, annotations', 'Seaborn: heatmaps, pairplots, violinplots', 'Plotly for interactive dashboards', 'Hands-on: Exploratory Data Analysis (EDA)']
            },
            {
              title: 'Statistics & Probability for DS (10 hrs)',
              subtopics: ['Descriptive stats (mean, median, mode, std dev)', 'Probability theory basics', 'Distributions (Normal, Binomial, Poisson, Exponential)', 'Central Limit Theorem', 'Confidence intervals, p-values', 'Hypothesis testing (t-test, ANOVA, Chi-square)']
            },
            {
              title: 'Intro to Machine Learning (10 hrs)',
              subtopics: ['ML workflow (train, validate, test split)', 'Supervised vs Unsupervised Learning', 'Regression (Linear, Polynomial)', 'Classification (Logistic Regression, KNN)', 'Metrics: accuracy, precision, recall, F1']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level - Core ML',
          duration: '70 Hours',
          topics: [
            {
              title: 'Supervised ML Algorithms (12 hrs)',
              subtopics: ['Decision Trees, Random Forests', 'Support Vector Machines (SVM)', 'Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'Evaluation metrics (ROC, AUC, confusion matrix)']
            },
            {
              title: 'Unsupervised ML Algorithms (10 hrs)',
              subtopics: ['K-Means clustering', 'Hierarchical clustering', 'DBSCAN', 'Dimensionality reduction (PCA, t-SNE)']
            },
            {
              title: 'Feature Engineering & Model Optimization (8 hrs)',
              subtopics: ['Feature selection (Variance threshold, RFE)', 'Encoding categorical variables (One-hot, Label encoding)', 'Normalization & standardization', 'Hyperparameter tuning (GridSearchCV, RandomizedSearchCV, Optuna)']
            },
            {
              title: 'Time Series Analysis (10 hrs)',
              subtopics: ['Moving averages, trends, seasonality', 'ARIMA, SARIMA models', 'Prophet (Facebook Prophet)', 'LSTMs for time series']
            },
            {
              title: 'Deep Learning Foundations (12 hrs)',
              subtopics: ['Neural networks basics (perceptrons, backpropagation)', 'Activation functions (ReLU, Sigmoid, Softmax)', 'Optimizers (SGD, Adam, RMSprop)', 'Keras/TensorFlow basics']
            },
            {
              title: 'Natural Language Processing (NLP) (10 hrs)',
              subtopics: ['Text preprocessing (stemming, lemmatization, tokenization)', 'Bag of Words & TF-IDF', 'Word embeddings (Word2Vec, GloVe, FastText)', 'Sentiment analysis (Naive Bayes, Logistic Regression)']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level - AI & Big Data',
          duration: '85 Hours',
          topics: [
            {
              title: 'Advanced Deep Learning (15 hrs)',
              subtopics: ['Convolutional Neural Networks (CNN)', 'Recurrent Neural Networks (RNN, LSTM, GRU)', 'Attention mechanism', 'Transfer Learning (ResNet, VGG, MobileNet)']
            },
            {
              title: 'Advanced NLP & Transformers (15 hrs)',
              subtopics: ['Sequence-to-sequence models', 'Attention mechanism explained', 'Transformers (BERT, GPT)', 'Hugging Face library', 'Text summarization, question answering']
            },
            {
              title: 'Reinforcement Learning (10 hrs)',
              subtopics: ['Q-Learning fundamentals', 'Deep Q-Networks (DQN)', 'Policy Gradient methods', 'Applications in robotics & gaming']
            },
            {
              title: 'Big Data & Distributed ML (12 hrs)',
              subtopics: ['Introduction to Big Data ecosystem', 'Apache Spark with PySpark for ML', 'MLlib for distributed ML', 'Integration with Hadoop & Hive']
            },
            {
              title: 'MLOps – Deploying ML Models (15 hrs)',
              subtopics: ['Deploy ML models with Flask/FastAPI', 'Model packaging with Docker', 'CI/CD for ML pipelines', 'Model monitoring & retraining', 'Cloud deployment (AWS Sagemaker, GCP Vertex AI, Azure ML)']
            },
            {
              title: 'Ethics, Fairness & Responsible AI (8 hrs)',
              subtopics: ['Bias in ML models', 'Explainability (LIME, SHAP)', 'AI safety & regulation', 'Case studies on fairness']
            }
          ]
        }
      },
      prerequisites: ['Basic mathematics & statistics', 'Python programming', 'Data analysis fundamentals'],
      outcomes: ['Analyze complex datasets', 'Build ML models', 'Create data visualizations', 'Deploy ML solutions', 'Handle big data technologies']
    },
    'devops': {
      duration: '140+ Hours',
      students: '600+',
      projects: '10+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '40 Hours',
          topics: [
            {
              title: 'Introduction to DevOps (3 hrs)',
              subtopics: ['Evolution of Software Development (Waterfall → Agile → DevOps)', 'DevOps principles and lifecycle', 'Key tools overview (Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, Monitoring)']
            },
            {
              title: 'Linux Fundamentals for DevOps (5 hrs)',
              subtopics: ['Basic Linux commands (file system, permissions, process management)', 'Shell scripting basics', 'User & group management', 'Package management (apt, yum, dnf)']
            },
            {
              title: 'Version Control with Git & GitHub (6 hrs)',
              subtopics: ['Git architecture, Git workflow (clone, commit, push, pull, merge)', 'Branching strategies (Git Flow, trunk-based development)', 'GitHub features: Issues, Pull Requests, Actions basics', 'Secret scanning with Gitleaks']
            },
            {
              title: 'Build Automation with Maven/Gradle (4 hrs)',
              subtopics: ['Build lifecycle & dependency management', 'Creating and packaging applications', 'Integration with CI/CD']
            },
            {
              title: 'Containerization with Docker (7 hrs)',
              subtopics: ['Docker architecture (images, containers, volumes, networks)', 'Dockerfile creation & optimization', 'Pushing/pulling from Docker Hub', 'Secure image best practices']
            },
            {
              title: 'Continuous Integration with Jenkins (5 hrs)',
              subtopics: ['Jenkins installation & pipeline basics', 'Jenkins master-agent setup', 'Job configuration & parameterized builds', 'Integration with Git']
            },
            {
              title: 'Automated Testing with Selenium & JUnit (5 hrs)',
              subtopics: ['Introduction to automated testing', 'Writing test cases with Selenium', 'Maven integration with testing', 'Headless browser testing']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '45 Hours',
          topics: [
            {
              title: 'Container Orchestration with Kubernetes (8 hrs)',
              subtopics: ['Kubernetes architecture (nodes, pods, deployments, services)', 'ConfigMaps, Secrets, StatefulSets, DaemonSets', 'Autoscaling (HPA, VPA)', 'Ingress & LoadBalancer setup']
            },
            {
              title: 'Configuration Management with Ansible & Puppet (6 hrs)',
              subtopics: ['Ansible: Playbooks, roles, dynamic inventory', 'Puppet: Manifests, modules, agents', 'Configuring cloud servers (AWS EC2 examples)']
            },
            {
              title: 'Infrastructure as Code with Terraform (6 hrs)',
              subtopics: ['Terraform basics (providers, resources, state, variables, outputs)', 'AWS provisioning: VPC, EC2, S3', 'Modules, workspaces & security best practices']
            },
            {
              title: 'Continuous Delivery with GitLab CI/CD (5 hrs)',
              subtopics: ['GitLab runners (shared vs self-hosted)', 'Stages, jobs, caching, artifacts', 'Docker integration in GitLab pipelines', 'Deployments to AWS (ECR, ECS, EC2)']
            },
            {
              title: 'Continuous Monitoring (6 hrs)',
              subtopics: ['Prometheus: setup, metrics, PromQL queries', 'Grafana: dashboard creation, alerts', 'ELK Stack (Elasticsearch, Logstash, Kibana) basics']
            },
            {
              title: 'Generative AI in DevOps (2 hrs)',
              subtopics: ['GitHub Copilot for code suggestions', 'Automating scripts and error handling', 'AI-assisted documentation']
            },
            {
              title: 'Security Basics in DevOps (4 hrs)',
              subtopics: ['DevSecOps introduction', 'Static Application Security Testing (SAST)', 'Dynamic Application Security Testing (DAST)', 'Dependency scanning']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '55 Hours',
          topics: [
            {
              title: 'Advanced Kubernetes & Security (8 hrs)',
              subtopics: ['RBAC & Network Policies', 'Pod Security Standards', 'Image scanning & runtime protection', 'Kubernetes auditing & monitoring']
            },
            {
              title: 'AWS EKS & Cloud Native Workloads (6 hrs)',
              subtopics: ['Provisioning AWS EKS with Terraform', 'Cluster autoscaler setup', 'Add-ons (ALB Ingress Controller, ExternalDNS)', 'Compliance checks']
            },
            {
              title: 'Service Mesh with Istio (6 hrs)',
              subtopics: ['Istio architecture', 'mTLS, ingress & egress', 'Traffic management (blue-green, canary)', 'Observability with Istio dashboards']
            },
            {
              title: 'Policy-as-Code with OPA Gatekeeper (4 hrs)',
              subtopics: ['OPA fundamentals', 'Constraint templates & policies', 'Integrating OPA into CI/CD pipelines']
            },
            {
              title: 'Secrets Management (4 hrs)',
              subtopics: ['Vault basics (KV secrets, policies, tokens)', 'AWS Secrets Manager', 'Kubernetes External Secrets Operator']
            },
            {
              title: 'GitOps with ArgoCD & Kustomize (6 hrs)',
              subtopics: ['GitOps fundamentals', 'Declarative deployments with ArgoCD', 'Application rollback & sync waves', 'Using Kustomize for environment overlays']
            },
            {
              title: 'DevSecOps & Compliance (6 hrs)',
              subtopics: ['End-to-end security integration in pipelines', 'DefectDojo for vulnerability management', 'Compliance frameworks (CIS, NIST, PCI-DSS)']
            }
          ]
        }
      },
      prerequisites: ['Linux command line experience', 'Basic programming/scripting', 'Networking fundamentals'],
      outcomes: ['Implement CI/CD pipelines', 'Manage containerized applications', 'Automate infrastructure', 'Optimize cloud deployments', 'Ensure security compliance']
    },
    'microservices': {
      duration: '150+ Hours',
      students: '400+',
      projects: '15+',
      levels: {
        beginner: {
          title: 'Beginner Level',
          duration: '40-45 Hours',
          topics: [
            {
              title: 'Microservices Fundamentals (4 hrs)',
              subtopics: ['Monolith vs SOA vs Microservices', 'Microservices advantages & challenges', '12-Factor app principles', 'Industry use cases (Netflix, Amazon, Uber)']
            },
            {
              title: 'Java Microservices with Spring Boot (8 hrs)',
              subtopics: ['Spring Boot project setup (Maven/Gradle)', 'REST controllers, DTOs, exception handling', 'Data access with Spring Data JPA', 'Testing with JUnit + Postman', 'Swagger/OpenAPI docs']
            },
            {
              title: 'Python Microservices with Flask & FastAPI (8 hrs)',
              subtopics: ['Flask basics: routes, request handling', 'FastAPI async APIs with Pydantic models', 'CRUD APIs with SQLAlchemy', 'Dependency injection in FastAPI', 'Auto-generated API docs (Swagger, Redoc)']
            },
            {
              title: 'Database Integration (6 hrs)',
              subtopics: ['SQL databases: PostgreSQL/MySQL', 'NoSQL databases: MongoDB basics', 'ORM: Hibernate (Java), SQLAlchemy (Python)', 'Database migrations (Flyway, Alembic)']
            },
            {
              title: 'Containerization with Docker (7 hrs)',
              subtopics: ['Docker concepts: images, containers, volumes', 'Dockerizing Java Spring Boot service', 'Dockerizing Python FastAPI service', 'Networking in Docker', 'Multi-service setup with Docker Compose']
            }
          ]
        },
        intermediate: {
          title: 'Intermediate Level',
          duration: '50 Hours',
          topics: [
            {
              title: 'Inter-Service Communication (7 hrs)',
              subtopics: ['REST communication', 'gRPC for microservices', 'API Gateway: Kong, Nginx, Spring Cloud Gateway']
            },
            {
              title: 'Messaging & Event-Driven Architecture (7 hrs)',
              subtopics: ['Synchronous vs asynchronous communication', 'RabbitMQ producers/consumers in Java + Python', 'Kafka basics: topics, partitions, producers, consumers', 'Event sourcing vs CQRS']
            },
            {
              title: 'Service Discovery & Configuration (7 hrs)',
              subtopics: ['Eureka service registry (Spring Cloud)', 'Consul for Python microservices', 'Centralized config with Spring Cloud Config Server', 'Environment variables, secrets management']
            },
            {
              title: 'Security in Microservices (7 hrs)',
              subtopics: ['Authentication vs Authorization', 'JWT authentication flow', 'Spring Security with OAuth2', 'FastAPI JWT + OAuth2 integration', 'Role-based access control (RBAC)']
            },
            {
              title: 'Observability (7 hrs)',
              subtopics: ['Centralized logging with ELK stack', 'Distributed tracing with Zipkin/Jaeger', 'Metrics collection with Prometheus', 'Visualization with Grafana']
            }
          ]
        },
        advanced: {
          title: 'Advanced Level',
          duration: '60 Hours',
          topics: [
            {
              title: 'Microservices Design Patterns (8 hrs)',
              subtopics: ['Saga pattern for distributed transactions', 'Circuit breaker (Resilience4j, Hystrix)', 'Strangler Fig & API Composition', 'Bulkhead & Retry patterns']
            },
            {
              title: 'CI/CD Pipelines for Microservices (8 hrs)',
              subtopics: ['CI/CD with Jenkins pipelines', 'GitLab CI/CD for multi-service apps', 'Docker build & push to registry', 'Automated integration tests']
            },
            {
              title: 'Cloud-Native Microservices (10 hrs)',
              subtopics: ['Kubernetes fundamentals (pods, services, deployments)', 'Ingress controller setup', 'ConfigMaps & Secrets', 'Horizontal Pod Autoscaling (HPA)', 'Deploying microservices on EKS/GKE/AKS']
            },
            {
              title: 'Service Mesh & Advanced Security (8 hrs)',
              subtopics: ['Istio basics: sidecar proxy, ingress/egress', 'Mutual TLS between microservices', 'Policy enforcement with OPA Gatekeeper', 'Zero-trust networking in microservices']
            },
            {
              title: 'Resiliency & Production Best Practices (8 hrs)',
              subtopics: ['Canary & blue-green deployments', 'API versioning strategies', 'Observability with OpenTelemetry', 'Handling failures gracefully', 'Cost optimization & scaling strategies']
            }
          ]
        }
      },
      prerequisites: ['Java or Python programming', 'REST API development', 'Database design concepts'],
      outcomes: ['Design microservices architecture', 'Implement distributed systems', 'Handle service communication', 'Deploy cloud-native applications', 'Optimize system performance']
    }
  };

  return (
    <div   style={{ backgroundColor: "#f5d3f2ff"}}>
      <Header />
      {/* Hero Section */}
      <div className="relative overflow-hidden"  style={{ backgroundColor: "#f4bde1ff" }}>
        <div className="container mx-auto px-4 py-12  bg-gradient-subtle">
          <div className="bg-gradient-subtle text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-gradient-accent text-accent-foreground shadow-glow">
              <BookOpen className="w-4 h-4 mr-2" />
              Comprehensive Course Catalog
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
              Master Future Technologies
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive deep into cutting-edge technologies with our comprehensive training programs. 
              Each course is designed with detailed curriculum and hands-on projects.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>2000+ Students Trained</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Flexible Learning</span>
              </div>
            </div>

            <Link to="/pricing">
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-glow">
                Know the Price
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue={COURSES[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mb-8 h-auto p-2 bg-muted/50">
            {COURSES.map((course) => (
              <TabsTrigger 
                key={course.id} 
                value={course.id} 
                className="flex-col h-auto p-3 text-xs lg:text-sm whitespace-normal text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="text-lg mb-1">{course.icon}</div>
                <div className="font-medium">{course.title.split(' ')[0]}</div>
                <div className="text-xs opacity-75 hidden lg:block">{course.title.split(' ').slice(1).join(' ')}</div>
              </TabsTrigger>
            ))}
          </TabsList>

          {COURSES.map((course) => (
            <TabsContent key={course.id} value={course.id} className="space-y-8">
              {/* Course Overview */}
              <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-elegant">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{course.title}</CardTitle>
                      <CardDescription className="text-lg">{course.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{courseDetails[course.id as keyof typeof courseDetails].duration}</div>
                      <div className="text-sm text-muted-foreground">Total Duration</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{courseDetails[course.id as keyof typeof courseDetails].students}</div>
                      <div className="text-sm text-muted-foreground">Students Trained</div>
                    </div>
                    <div className="text-center p-4 bg-success/5 rounded-lg">
                      <BookOpen className="w-6 h-6 text-success mx-auto mb-2" />
                      <div className="font-semibold text-foreground">{courseDetails[course.id as keyof typeof courseDetails].projects}</div>
                      <div className="text-sm text-muted-foreground">Hands-on Projects</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg">
                      <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
                      <div className="font-semibold text-foreground">Certificate</div>
                      <div className="text-sm text-muted-foreground">Upon Completion</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Agenda by Levels */}
              <div className="space-y-6">
                {/* Beginner Level */}
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Badge className="mr-3 bg-success text-success-foreground">🟢 Beginner</Badge>
                      {courseDetails[course.id as keyof typeof courseDetails].levels.beginner.title}
                    </CardTitle>
                    <CardDescription>
                      Duration: {courseDetails[course.id as keyof typeof courseDetails].levels.beginner.duration} | Foundation Level Training
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseDetails[course.id as keyof typeof courseDetails].levels.beginner.topics.map((topic, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-3">{topic.title}</h4>
                          <ul className="space-y-1">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1 h-1 bg-success rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Intermediate Level */}
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Badge className="mr-3 bg-primary text-primary-foreground">🟡 Intermediate</Badge>
                      {courseDetails[course.id as keyof typeof courseDetails].levels.intermediate.title}
                    </CardTitle>
                    <CardDescription>
                      Duration: {courseDetails[course.id as keyof typeof courseDetails].levels.intermediate.duration} | Practical Implementation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseDetails[course.id as keyof typeof courseDetails].levels.intermediate.topics.map((topic, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-3">{topic.title}</h4>
                          <ul className="space-y-1">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Advanced Level */}
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center">
                      <Badge className="mr-3 bg-accent text-accent-foreground">🔴 Advanced</Badge>
                      {courseDetails[course.id as keyof typeof courseDetails].levels.advanced.title}
                    </CardTitle>
                    <CardDescription>
                      Duration: {courseDetails[course.id as keyof typeof courseDetails].levels.advanced.duration} | Expert Level Mastery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseDetails[course.id as keyof typeof courseDetails].levels.advanced.topics.map((topic, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-foreground mb-3">{topic.title}</h4>
                          <ul className="space-y-1">
                            {topic.subtopics.map((subtopic, subIndex) => (
                              <li key={subIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {subtopic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Prerequisites & Outcomes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Prerequisites</CardTitle>
                    <CardDescription>Foundation knowledge required</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {courseDetails[course.id as keyof typeof courseDetails].prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card backdrop-blur-sm border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Learning Outcomes</CardTitle>
                    <CardDescription>Skills you'll master</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {courseDetails[course.id as keyof typeof courseDetails].outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <Award className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <Card  style={{ backgroundColor: "#f5d3f2ff"}} className="text-primary-foreground border-0 shadow-glow mt-8">
                <CardContent className="text-center p-8">
                  <h3 style={{ color: "#6a3866ff"}} className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
                  <p style={{ color: "#455ba4ff"}} className="mb-6 opacity-90">
                    Choose from flexible pricing options that fit your learning goals and budget.
                  </p>
                  <Link to="/pricing">
                    <Button size="lg" variant="secondary" className="shadow-elegant">
                      View Pricing Options
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;