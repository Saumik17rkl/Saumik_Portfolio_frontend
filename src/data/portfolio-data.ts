// Portfolio data extracted from resume specifications

// Array of different summary variations
const summaryVariations = [
  "I'm an AI Engineer who builds intelligent systems that understand and generate human-like text. My expertise lies in creating production-ready GenAI applications, with a focus on making complex AI accessible and useful. I love tackling challenges in NLP, knowledge retrieval, and automated reasoning.",
  "As an AI Engineer, I specialize in bridging the gap between cutting-edge AI research and real-world applications. I build robust, scalable systems using modern tools like LangChain, Transformers, and FastAPI, with a particular passion for creating intuitive AI interfaces that solve actual business problems.",
  "I'm passionate about building AI systems that learn and adapt. With expertise in LLM workflows and RAG architectures, I create solutions that understand context, reason effectively, and generate human-like responses. My approach combines technical depth with a focus on creating meaningful user experiences.",
  "With a background in AI engineering, I design and implement intelligent systems that can understand, reason, and generate human-like text. I'm particularly interested in creating AI assistants that are not just smart, but also helpful, accurate, and reliable in production environments.",
  "I'm an AI Engineer who loves turning complex AI concepts into practical, production-ready applications. My work spans the full stack of AI development, from training custom models to building scalable APIs and intuitive interfaces that make AI accessible to everyone."
];

// Function to get a random summary
const getRandomSummary = () => {
  return summaryVariations[Math.floor(Math.random() * summaryVariations.length)];
};

export const personalInfo = {
  name: "Saumik Chakraborty",
  title: "AI Engineer Specializing in GenAI, LLM Workflows & Intelligent Automation",
  tagline: getRandomSummary(),
  email: "saumik17rkl@gmail.com",
  phone: "+91-96682-92738",
  linkedin: "linkedin.com/in/saumik-chakraborty-51a499257",
  github: "github.com/Saumik17rkl",
  portfolio: "saumikportfolio-nine.vercel.app",
  resumePath: "/resume/Saumik_Chakraborty_Resume_freelance.pdf"
};

export const achievements = [
  {
    id: "1",
    title: "🏆 2nd Runner-Up — Infosys Global Hackathon 2025",
    description: "Developed AI solution leading to top placement out of global teams",
    year: "2025"
  },
  {
    id: "2",
    title: "Finalist — Hack4Bihar National Innovation Challenge 2025",
    description: "Competed at national level with innovative AI solution",
    year: "2025"
  },
  {
    id: "3",
    title: "Amazon ML Summer School",
    description: "Selected for intensive machine learning program",
    year: "2024"
  },
  {
    id: "4",
    title: "Microsoft AI-900 Certification",
    description: "Azure AI Fundamentals certified",
    year: "2024"
  }
];

export const skills = {
  aiml: [
    "Generative AI",
    "LLM Workflow Engineering",
    "RAG Pipelines",
    "Prompt Engineering",
    "Conversational AI Agents",
    "NLP",
    "Embedding Models",
    "Transformers",
    "Knowledge Retrieval",
    "Vector Search (FAISS)",
    "HuggingFace Models",
    "LangChain",
    "LangGraph"
  ],
  backend: [
    "Python",
    "Flask",
    "FastAPI",
    "API Engineering",
    "Microservices",
    "Automation",
    "REST APIs",
    "OOP Design"
  ],
  cybersecurity: [
    "Anomaly Detection",
    "Malware Detection",
    "Packet Inspection",
    "PyShark",
    "Scapy",
    "Network Analysis"
  ],
  tools: [
    "Git",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Postman",
    "VS Code"
  ],
  mldata: [
    "NumPy",
    "Pandas",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "Matplotlib"
  ],
  applications: [
    "Chatbot Design",
    "Workflow Engines",
    "Educational AI Tools",
    "Identity Recognition Systems",
    // "Summarization Pipelines",
    "Q&A Systems"
  ]
};

export const projects = [
  {
    id: "rag-assistant",
    title: "RAG Conversational Learning Assistant",
    slug: "rag-conversational-learning-assistant",
    summary: "A personalized AI-powered learning assistant using Retrieval-Augmented Generation for topic learning, Q&A, summarization, and contextual conversation.",
    description: "Built a retrieval-based chatbot enabling simplified explanations, concept reinforcement, and multi-turn understanding for learners.",
    problem: "Many learners struggle with accessing personalized explanations and maintaining learning context across multiple interactions. Traditional search doesn't provide conversational understanding.",
    role: "Lead AI Engineer: Architecture design, RAG pipeline implementation, prompt engineering, backend API development, evaluation pipeline creation",
    techStack: ["Python", "Flask", "LangChain", "FAISS", "HuggingFace", "OpenAI", "Transformers"],
    category: ["RAG", "GenAI", "Education"],
    metrics: [
      { label: "Retrieval Accuracy", value: "19% improvement" },
      { label: "User Satisfaction", value: "95%" },
      { label: "Response Time", value: "<2s" }
    ],
    featured: true,
    architecture: "User Interface → Flask API → LangChain Orchestrator → FAISS Vector Store → LLM (GPT-4/Grok) → Response Generator → Evaluation Pipeline",
    approach: `
**Data Processing**: Implemented document chunking with semantic boundaries, generated embeddings using HuggingFace sentence-transformers, stored in file-based FAISS index with metadata mapping.

**RAG Pipeline**: Built multi-stage retrieval with hybrid search (semantic + keyword), implemented re-ranking for relevance, created contextual memory for conversation history.

**Prompting Strategy**: Designed multi-step prompts with chain-of-thought reasoning, implemented verification prompts for factual consistency, created adaptive difficulty adjustment based on user level.

**Backend Architecture**: Flask microservices with /api/query, /api/feedback, /api/history endpoints, implemented request queuing and rate limiting, added comprehensive error handling.

**Evaluation**: Reduced retrieval errors by 19% through optimization, implemented A/B testing for prompt variations, tracked user engagement and learning outcomes.
    `,
    evaluation: "Reduced retrieval errors by 19% (Source: Internship performance metrics). Achieved 95% user satisfaction through iterative prompt refinement.",
    reproduction: [
      "Clone repository and install dependencies (Flask, LangChain, FAISS)",
      "Prepare learning materials and generate embeddings",
      "Configure LLM API keys (OpenAI/Grok)",
      "Run embedding generation script",
      "Start Flask server on port 5000",
      "Test with sample queries via /api/query endpoint",
      "Monitor logs for retrieval quality metrics"
    ],
    repo: "https://github.com/Saumik17rkl/rag-learning-assistant",
    demo: null
  },
  {
    id: "llm-workflow",
    title: "Generative LLM Workflow Engine",
    slug: "generative-llm-workflow-engine",
    summary: "Advanced LLM workflow engine for topic extraction, contextual reasoning, and multi-step content generation using Python & LangChain.",
    description: "Designed multi-step reasoning flows, knowledge graphs, and automated task orchestration for educational and enterprise use cases.",
    problem: "Many content-generation tasks require multi-step reasoning, knowledge consolidation, and coherence across long contexts. Clients needed repeatable workflows that produce factually consistent outputs and can be audited.",
    role: "Lead Engineer: Prompt design, chain-of-thought orchestration, backend microservices, vector retrieval integration, evaluation pipelines",
    techStack: ["Python", "Flask", "LangChain", "LangGraph", "FAISS", "OpenAI", "Docker"],
    category: ["GenAI", "Backend"],
    metrics: [
      { label: "Workflow Accuracy", value: "92%" },
      { label: "Processing Speed", value: "5x faster" },
      { label: "Factual Consistency", value: "88%" }
    ],
    featured: true,
    architecture: "Frontend (React) → Backend API (Flask) → Orchestrator (LangChain/LangGraph) → Vector Store (FAISS) → LLM Provider (Grok/OpenAI) → Evaluation Pipeline → CI/CD",
    approach: `
Workflow Design: Implemented multi-step reasoning chains using LangGraph, created conditional branching based on context, built verification loops for output quality.

Knowledge Processing: Chunking strategy with semantic boundaries (512 tokens), embedding generation using sentence-transformers, metadata mapping for knowledge graph construction.

Prompting Architecture: Chain-of-thought prompts for complex reasoning, self-consistency checks across multiple generations, constrained generation with output format validation.

Backend Services: Flask microservices with /api/generate, /api/evaluate, /api/history, implemented request queuing with Redis, added comprehensive logging and monitoring.

Evaluation Pipeline: Automated fact-checking against knowledge base, coherence scoring using semantic similarity, human-in-the-loop validation for critical outputs.
    `,
    evaluation: "Achieved 92% workflow accuracy through iterative refinement. Improved explanation alignment by 14% using XAI validation techniques.",
    reproduction: [
      "Install Python 3.9+, Flask, LangChain, LangGraph, FAISS",
      "Set environment variables for LLM API keys",
      "Prepare knowledge base and generate embeddings",
      "Configure workflow definitions in YAML",
      "Run docker-compose up to start all services",
      "Test workflow via /api/generate with sample request",
      "Monitor evaluation metrics dashboard"
    ],
    repo: "https://github.com/Saumik17rkl/llm-workflow-engine",
    demo: null
  },
  {
    id: "face-recognition",
    title: "Face Recognition with Identity Reasoning",
    slug: "face-recognition-identity-reasoning",
    summary: "Face recognition & identity inference system using FaceNet and embedding verification.",
    description: "Integrated FaceNet embeddings with LLM-based reasoning achieving 95% accuracy.",
    problem: "Traditional face recognition systems lack contextual reasoning and explanation capabilities. Need for interpretable identity verification with confidence scores.",
    role: "ML Engineer: Model integration, embedding pipeline, verification logic, API development",
    techStack: ["Python", "FaceNet", "TensorFlow", "OpenCV", "Flask", "NumPy"],
    category: ["Research", "Backend"],
    metrics: [
      { label: "Accuracy", value: "95%" },
      { label: "False Positive Rate", value: "<2%" },
      { label: "Processing Speed", value: "0.5s per image" }
    ],
    featured: true,
    architecture: "Image Input → Face Detection (OpenCV) → FaceNet Embedding → Similarity Matching → Verification Logic → LLM Reasoning → Confidence Score",
    approach: `
Face Detection: Implemented MTCNN for robust face detection, handled multiple faces per image, added quality checks for input validation.

Embedding Generation: Used pretrained FaceNet model for 128-d embeddings, implemented batch processing for efficiency, added L2 normalization for distance calculation.

Matching Logic: Cosine similarity with adaptive thresholds, multi-factor verification (embeddings + metadata), confidence calibration based on similarity scores.

LLM Integration: Added contextual reasoning for edge cases, generated explainable verification reports, implemented fallback strategies for low-confidence matches.
    `,
    evaluation: "Achieved 95% accuracy on diverse test set (Source: Project evaluation report). Maintained <2% false positive rate through threshold tuning.",
    reproduction: [
      "Install Python, TensorFlow, OpenCV, Flask",
      "Download pretrained FaceNet model weights",
      "Prepare reference face database with embeddings",
      "Configure verification thresholds in config.py",
      "Run flask app to start API server",
      "Test with sample images via /api/verify endpoint",
      "Review confidence scores and explanations"
    ],
    repo: "https://github.com/Saumik17rkl/face-recognition-ai",
    demo: null
  },
  {
    id: "malware-detection",
    title: "Malware Detection System",
    slug: "malware-detection-system",
    summary: "Opcode-level ML classifier with behavior signatures and explainable visualization.",
    description: "Built an opcode-level ML classifier with behavior signatures and explainable visualization for teaching cybersecurity concepts.",
    problem: "Traditional signature-based malware detection fails against polymorphic threats. Need for ML-based behavioral analysis with interpretability.",
    role: "ML/Security Engineer: Feature extraction, model training, XAI implementation, visualization",
    techStack: ["Python", "Scikit-Learn", "TensorFlow", "LIME", "Matplotlib", "PyTorch"],
    category: ["Security", "Research"],
    metrics: [
      { label: "Detection Rate", value: "94%" },
      { label: "False Positives", value: "3.2%" },
      { label: "Model Explainability", value: "LIME+SHAP" }
    ],
    featured: false,
    architecture: "Binary File → Opcode Extraction → Feature Engineering → CNN/LSTM Model → Behavior Signature → XAI Explanation → Classification",
    approach: `
Feature Extraction: Extracted opcode sequences from PE files, n-gram analysis for pattern detection, behavioral feature engineering (API calls, registry access).

Model Architecture: CNN for spatial opcode patterns, LSTM for sequential behavior analysis, ensemble combining both approaches.

Explainability: LIME for local explanations, SHAP values for feature importance, visualization of critical opcode patterns.

**Evaluation**: Cross-validation on diverse malware families, adversarial testing against obfuscated samples, real-time performance optimization.
    `,
    evaluation: "Achieved 94% detection rate with 3.2% false positive rate. Successfully explained 89% of classifications using XAI techniques.",
    reproduction: [
      "Install Python, Scikit-Learn, TensorFlow, LIME",
      "Download malware dataset (VirusTotal, MalwareBazaar)",
      "Run feature extraction script on samples",
      "Train model using train.py with provided config",
      "Evaluate on test set with evaluation metrics",
      "Generate XAI explanations for predictions",
      "Visualize opcode patterns and behavior signatures"
    ],
    repo: "https://github.com/Saumik17rkl/malware-detection-ml",
    demo: null
  },
  {
    id: "network-traffic",
    title: "Network Traffic Analysis & Packet Inspection",
    slug: "network-traffic-analysis",
    summary: "ML models for anomaly detection and cybersecurity education using PyShark/Scapy.",
    description: "Created ML models for anomaly detection and cybersecurity education using PyShark/Scapy-based datasets.",
    problem: "Network intrusion detection requires real-time analysis of packet flows. Need for ML-based anomaly detection with minimal false positives.",
    role: "Security/ML Engineer: Packet capture pipeline, feature engineering, anomaly detection models",
    techStack: ["Python", "PyShark", "Scapy", "Scikit-Learn", "Pandas", "NetworkX"],
    category: ["Security", "Backend"],
    metrics: [
      { label: "Anomaly Detection", value: "91% accuracy" },
      { label: "Real-time Processing", value: "1000 pkts/s" },
      { label: "False Alarm Rate", value: "4.5%" }
    ],
    featured: false,
    architecture: "Network Interface → Packet Capture (PyShark) → Feature Extraction → Anomaly Detection Model → Alert System → Visualization Dashboard",
    approach: `
**Packet Capture**: Used PyShark for live packet capture, implemented filtering for relevant protocols, stored packet features in time-series format.

Feature Engineering: Extracted flow-based features (duration, packet count, byte count), protocol distribution analysis, temporal pattern detection.

Anomaly Detection: Isolation Forest for unsupervised detection, autoencoders for rare event identification, ensemble methods for robustness.

Evaluation: Tested on CICIDS2017 dataset, real-world network traffic validation, latency optimization for real-time processing.
    `,
    evaluation: "91% anomaly detection accuracy on CICIDS2017 benchmark. Achieved real-time processing of 1000 packets/second.",
    reproduction: [
      "Install Python, PyShark, Scapy, Scikit-Learn",
      "Configure network interface for packet capture",
      "Download CICIDS2017 dataset for training",
      "Run feature extraction on training data",
      "Train anomaly detection models",
      "Test on live network traffic",
      "Monitor alerts and visualization dashboard"
    ],
    repo: "https://github.com/Saumik17rkl/network-anomaly-detection",
    demo: null
  },
  {
    id: "language-translator",
    title: "Indian Regional Language Translator",
    slug: "indian-language-translator",
    summary: "Multilingual speech-to-text and text-to-text translation system for English/Hindi/Regional languages.",
    description: "Multilingual speech-to-text and text-to-text translation system for English/Hindi/Regional languages using transformer models and contextual embeddings.",
    problem: "Language barriers limit access to educational content in India. Need for accurate multilingual translation with regional language support.",
    role: "NLP Engineer: Model selection, fine-tuning, translation pipeline, API development",
    techStack: ["Python", "HuggingFace", "Transformers", "IndicNLP", "Flask", "FastAPI"],
    category: ["GenAI", "Education"],
    metrics: [
      { label: "Translation Quality", value: "BLEU 38.5" },
      { label: "Languages Supported", value: "12" },
      { label: "Processing Speed", value: "200 words/s" }
    ],
    featured: false,
    architecture: "Input (Text/Speech) → Language Detection → Transformer Model (IndicBART/mBART) → Post-processing → Output Translation → TTS (optional)",
    approach: `
Model Selection: Used IndicBART for Indian languages, mBART-50 for general multilingual, fine-tuned on domain-specific data.

Pipeline: Automatic language detection, contextual translation with memory, post-processing for grammar and fluency.

Speech Integration: Whisper for speech-to-text, language-specific TTS engines, end-to-end speech translation pipeline.

Optimization: Model quantization for faster inference, caching for common translations, batch processing for documents.
    `,
    evaluation: "Achieved BLEU score of 38.5 on IndicNLP benchmark. Supports 12 Indian regional languages with 95%+ language detection accuracy.",
    reproduction: [
      "Install Python, HuggingFace Transformers, IndicNLP",
      "Download pretrained IndicBART/mBART models",
      "Fine-tune on domain-specific parallel corpus",
      "Set up FastAPI server with translation endpoint",
      "Test translations for accuracy and fluency",
      "Deploy with Docker for scalability",
      "Monitor translation quality metrics"
    ],
    repo: "https://github.com/Saumik17rkl/indian-language-translator",
    demo: null
  },
  {
    id: "ai-calling-agent",
    title: "Autonomous AI Calling Agent",
    slug: "autonomous-ai-calling-agent",
    summary: "Automated calling agent with real-time intent detection, interruption handling, STT/TTS processing.",
    description: "Automated calling agent with real-time intent detection, interruption handling, STT/TTS processing, and dynamic memory.",
    problem: "Customer service calls require real-time understanding and natural conversation flow. Need for AI agents that handle interruptions and maintain context.",
    role: "AI Engineer: Conversational design, intent detection, STT/TTS integration, state management",
    techStack: ["Python", "Whisper", "TTS", "LangChain", "Twilio", "Redis", "FastAPI"],
    category: ["GenAI", "Backend"],
    metrics: [
      { label: "Intent Accuracy", value: "89%" },
      { label: "Response Latency", value: "<1.5s" },
      { label: "Call Completion", value: "94%" }
    ],
    featured: false,
    architecture: "Phone Call → STT (Whisper) → Intent Detection → LLM Processing → Response Generation → TTS → Phone Output + Memory Store (Redis)",
    approach: `
Speech Processing: Real-time STT using Whisper, noise cancellation and enhancement, speaker diarization for multi-party calls.

Intent Detection: Trained intent classifier on call transcripts, context-aware intent refinement, confidence thresholding for fallbacks.

Conversation Management: State machine for call flow, dynamic memory with Redis, interruption handling with partial response generation.

Integration: Twilio for telephony, FastAPI for backend services, event-driven architecture for real-time processing.
    `,
    evaluation: "89% intent detection accuracy on customer service calls. Average response latency <1.5s including STT and TTS processing.",
    reproduction: [
      "Install Python, Whisper, Twilio SDK, Redis",
      "Configure Twilio phone number and webhooks",
      "Set up intent detection model",
      "Configure LLM API (GPT-4/Grok) for responses",
      "Start Redis for state management",
      "Run FastAPI server with call handlers",
      "Test with sample calls and monitor logs"
    ],
    repo: "https://github.com/Saumik17rkl/ai-calling-agent",
    demo: null
  },
  {
    id: "ai-breakup-agent",
    title: "AI Breakup Agent (Mental Health Support)",
    slug: "ai-breakup-agent",
    summary: "Empathetic agent with sentiment analysis, adaptive prompting, and safe response structures.",
    description: "Developed an empathetic agent with sentiment analysis, adaptive prompting, and safe response structures for mental health support.",
    problem: "People going through breakups need empathetic support but may not have access to professional help. Need for safe, supportive AI conversation.",
    role: "AI/Ethics Engineer: Conversational design, sentiment analysis, safety guardrails, ethical AI implementation",
    techStack: ["Python", "LangChain", "HuggingFace", "Flask", "Sentiment Analysis", "Crisis Detection"],
    category: ["GenAI", "Research"],
    metrics: [
      { label: "User Satisfaction", value: "4.7/5" },
      { label: "Crisis Detection", value: "98% accuracy" },
      { label: "Response Appropriateness", value: "96%" }
    ],
    featured: false,
    architecture: "User Input → Sentiment Analysis → Crisis Detection → LLM with Safety Prompts → Response Filtering → Mental Health Resources → Output",
    approach: `
Safety First: Crisis detection using sentiment and keyword analysis, automatic escalation to professional resources, strict content filtering for harmful responses.

Empathetic Design: Trained on counseling conversation patterns, adaptive tone based on emotional state, validation and active listening prompts.

Sentiment Analysis: Real-time emotion tracking, conversation mood progression, trigger detection and de-escalation.

    `,
    evaluation: "4.7/5 user satisfaction rating. 98% accuracy in crisis detection with zero false negatives for high-risk situations.",
    reproduction: [
      "Install Python, LangChain, HuggingFace, Flask",
      "Configure sentiment analysis model",
      "Set up crisis detection keywords and thresholds",
      "Implement safety-filtered LLM prompts",
      "Add mental health resource database",
      "Test with diverse emotional scenarios",
      "Deploy with strict privacy controls"
    ],
    repo: null,
    demo: null
  }
];

export const services = [
  {
    id: "genai-llm",
    title: "GenAI & LLM Engineering",
    icon: "Brain",
    description: "Design and implement sophisticated LLM workflows with multi-step reasoning, prompt optimization, and production-ready GenAI systems.",
    details: [
      "Prompt engineering and optimization",
      "Multi-step reasoning flows",
      "LLM workflow engines (LangGraph, LangChain)",
      "Long-context handling",
      "Output verification and quality assurance",
      "Responsible AI implementation"
    ],
    techStack: ["LangChain", "LangGraph", "OpenAI", "Grok", "HuggingFace", "Python"],
    examples: "Designing reasoning loops, knowledge graphs, prompt workflows for clinical decision support, educational modules, enterprise task automation."
  },
  {
    id: "rag-conversational",
    title: "RAG Pipelines & Conversational AI",
    icon: "MessageSquare",
    description: "Build intelligent retrieval-augmented generation systems with optimized search, contextual memory, and multi-turn conversation capabilities.",
    details: [
      "RAG optimization and fine-tuning",
      "Retrieval accuracy improvement (19% better)",
      "FAISS vector search implementation",
      "Multi-turn conversation structures",
      "Contextual memory management",
      "Knowledge routing and hybrid search"
    ],
    techStack: ["FAISS", "LangChain", "Vector DBs", "Embeddings", "Transformers"],
    examples: "Enterprise knowledge bases, learning assistants, customer support bots, document Q&A systems."
  },
  {
    id: "backend-engineering",
    title: "Python Backend Engineering",
    icon: "Server",
    description: "Build robust, scalable backend services with Flask/FastAPI, RESTful APIs, microservices architecture, and production-grade automation.",
    details: [
      "Microservices architecture",
      "REST API design and implementation",
      "Automation scripts and utilities",
      "Data pipelines and processing",
      "OOP design patterns",
      "Debugging and exception handling",
      "Production-grade documentation"
    ],
    techStack: ["Python", "Flask", "FastAPI", "Docker", "Redis", "PostgreSQL"],
    examples: "AI model serving APIs, data processing pipelines, automated workflow systems, integration services."
  },
  {
    id: "cybersecurity-ml",
    title: "Cybersecurity ML Systems",
    icon: "Shield",
    description: "Develop machine learning solutions for threat detection, anomaly detection, and network security with explainable AI.",
    details: [
      "Anomaly detection models",
      "Packet inspection (PyShark, Scapy)",
      "Malware detection (opcode-level)",
      "Network traffic analysis",
      "CNN/LSTM security models",
      "Explainable security AI"
    ],
    techStack: ["PyShark", "Scapy", "TensorFlow", "Scikit-Learn", "LIME", "SHAP"],
    examples: "Intrusion detection systems, malware classifiers, network anomaly detection, threat intelligence."
  },
  {
    id: "educational-ai",
    title: "Educational AI Systems",
    icon: "GraduationCap",
    description: "Create intelligent learning tools with concept simplification, multilingual support, and adaptive learning workflows.",
    details: [
      "Concept simplification and explanation",
      "Structured learning workflows",
      "AI-powered translators (12+ languages)",
      "Multilingual reasoning pipelines",
      "Learning assistants and tutors",
      "XAI-based explanation alignment (14% improvement)"
    ],
    techStack: ["IndicNLP", "Transformers", "RAG", "LangChain", "Educational Datasets"],
    examples: "Personalized learning assistants, multilingual education platforms, concept simplification tools, automated tutoring."
  },
  {
    id: "intelligent-agents",
    title: "Intelligent Agents & Automation",
    icon: "Bot",
    description: "Design autonomous AI agents with real-time decision making, multi-modal processing, and intelligent task orchestration.",
    details: [
      "Autonomous calling agents (RL, STT/TTS)",
      "Sentiment-aware conversational agents",
      "Task orchestration engines",
      "Script automation for ML workflows",
      "Dynamic memory and state management",
      "Real-time intent detection"
    ],
    techStack: ["LangChain", "Whisper", "TTS", "Twilio", "Redis", "Reinforcement Learning"],
    examples: "Customer service automation, mental health support bots, voice-enabled assistants, workflow automation."
  }
];

export const experienceTimeline = [
  {
    id: "1",
    role: "AI/ML Intern",
    company: "Nirveon X Omnicare Pvt. Ltd.",
    duration: "Feb 2025 – Sep 2025",
    achievements: [
      "Engineered structured prompt workflows for clinical decision support, improving reasoning clarity and reliability",
      "Developed Flask-based microservices enabling secure and efficient AI-driven educational modules",
      "Optimized RAG pipelines, reducing retrieval errors and improving factual stability by 19%"
    ],
    tools: ["Python", "Flask", "LangChain", "RAG", "LLMs", "Docker"],
    side: "left"
  },
  {
    id: "2",
    role: "AI Research Intern",
    company: "Finessefleet Foundation",
    duration: "Jan 2025 – Jul 2025",
    achievements: [
      "Built multilingual reasoning prompts for complex academic domains, simplifying dense content for learners",
      "Applied XAI methods to validate conceptual clarity, improving explanation alignment by 14%",
      "Conducted research on long-context learning, knowledge routing, and structured content generation"
    ],
    tools: ["Python", "Transformers", "XAI", "NLP", "Educational AI"],
    side: "right"
  }
];

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  institution: "NIST University",
  location: "Berhampur, Odisha, India",
  duration: "2022 - 2026 (Expected)",
  gpa: "8.5/10",
  focus: [
    "Artificial Intelligence & Machine Learning",
    "Deep Learning & Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Data Structures & Algorithms",
    "Software Engineering"
  ]
};

export const certifications = [
  "Amazon ML Summer School 2024",
  "Microsoft AI-900: Azure AI Fundamentals",
  "Google Data Analytics Professional Certificate",
  "AWS GenAI & NLP Certifications",
  "Oracle Cloud HCM Essentials",
  "Tata Data Visualization Virtual Internship",
  "PwC Data Analytics Virtual Internship"
];

export const featuresStrip = [
  { icon: "Bot", label: "AI Chatbot — Grok API" },
  { icon: "Box", label: "Interactive 3D Illustration" },
  { icon: "Layers", label: "Glassmorphism UI" },
  { icon: "Code", label: "React + Tailwind Frontend" },
  { icon: "Server", label: "Production Flask Backend" }
];
// Update the imports if needed
// import { v4 as uuidv4 } from 'uuid';

// // Add project type definition
// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   technologies: string[];
//   features: string[];
//   metrics: {
//     name: string;
//     value: string;
//   }[];
//   featured: boolean;
//   architecture: string;
//   approach: string;
//   evaluation: string;
//   reproduction: string[];
//   challenges: string[];
//   results: string[];
//   demoUrl?: string;
//   githubUrl?: string;
//   tags: string[];
//   timeline: string;
//   role: string;
//   impact: string;
//   learnings: string[];
// }

// // Update the projects array
// export const projects: Project[] = [
//   {
//     id: uuidv4(),
//     title: "RAG Conversational Learning Assistant",
//     description: "AI-powered learning assistant using Retrieval-Augmented Generation for interactive learning experiences.",
//     technologies: ["Python", "Flask", "LangChain", "FAISS", "HuggingFace", "React", "TypeScript"],
//     features: [
//       "Personalized learning experiences through adaptive content retrieval",
//       "Context-aware Q&A with source attribution",
//       "Multi-document summarization for efficient learning"
//     ],
//     metrics: [
//       { name: "Retrieval Accuracy", value: "19% improvement" },
//       { name: "User Satisfaction", value: "95%" },
//       { name: "Response Time", value: "<2s" }
//     ],
//     featured: true,
//     architecture: "Frontend (React) → Backend API (Flask) → Orchestrator (LangChain/LangGraph) → Vector Store (FAISS) → LLM Provider (Grok/OpenAI) → Evaluation Pipeline → CI/CD",
//     approach: `
// Workflow Design: Implemented multi-step reasoning chains using LangGraph, created conditional branching based on context, built verification loops for output quality.

// Knowledge Processing: Chunking strategy with semantic boundaries (512 tokens), embedding generation using sentence-transformers, metadata mapping for knowledge graph construction.

// Prompting Architecture: Chain-of-thought prompts for complex reasoning, self-consistency checks across multiple generations, constrained generation with output format validation.

// Backend Services: Flask microservices with /api/generate, /api/evaluate, /api/history, implemented request queuing with Redis, added comprehensive logging and monitoring.

// Evaluation Pipeline: Automated fact-checking against knowledge base, coherence scoring using semantic similarity, human-in-the-loop validation for critical outputs.
//     `,
//     evaluation: "Achieved 92% workflow accuracy through iterative refinement. Improved explanation alignment by 14% using XAI validation techniques.",
//     reproduction: [
//       "Clone the repository from GitHub",
//       "Set up Python environment with requirements.txt",
//       "Configure API keys in .env file",
//       "Run the development server"
//     ],
//     challenges: [
//       "Handling complex user queries with multiple intents",
//       "Reducing latency for real-time responses",
//       "Ensuring factual accuracy of generated content"
//     ],
//     results: [
//       "Reduced response generation time by 40% through model optimization",
//       "Achieved 95% user satisfaction in beta testing",
//       "Successfully deployed to production with 99.9% uptime"
//     ],
//     demoUrl: "https://demo.rag-assistant.com",
//     githubUrl: "https://github.com/yourusername/rag-assistant",
//     tags: ["AI", "NLP", "Education", "Full-stack"],
//     timeline: "Jan 2023 - Present",
//     role: "Lead Developer & AI Engineer",
//     impact: "Enabled personalized learning for 10,000+ students with 4.8/5 average rating",
//     learnings: [
//       "Importance of prompt engineering for reliable AI outputs",
//       "Value of user feedback in iterative development",
//       "Challenges of scaling AI systems in production"
//     ]
//   },
//   // Add other projects with the same structure
// ];

// // Add helper functions
// export const getFeaturedProjects = (): Project[] => 
//   projects.filter(project => project.featured);

// export const getProjectById = (id: string): Project | undefined => 
//   projects.find(project => project.id === id);

// export const getProjectsByTag = (tag: string): Project[] =>
//   projects.filter(project => 
//     project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
//   );

// Export default projects;
