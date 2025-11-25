export interface ProjectVariant {
  shortDescription: string;
  longDescription: string[];
  keyPoints: string[];
}

export interface ProjectExplanation {
  id: string;
  title: string;
  variants: ProjectVariant[];
  metrics: {
    name: string;
    value: string;
  }[];
  technologies: string[];
  getRandomVariant: () => ProjectVariant;
}

// -------------------------
// Variant Generator
// -------------------------
const generateVariants = (
  baseVariants: Omit<ProjectVariant, "keyPoints">[],
  keyPoints: string[][]
): ProjectVariant[] => {
  return baseVariants.map((variant, idx) => ({
    ...variant,
    keyPoints: keyPoints[idx % keyPoints.length],
  }));
};

// -------------------------
// Project Factory
// -------------------------
const createProject = (
  id: string,
  title: string,
  baseVariants: Omit<ProjectVariant, "keyPoints">[],
  keyPoints: string[][],
  metrics: { name: string; value: string }[],
  technologies: string[]
): ProjectExplanation => {
  const variants = generateVariants(baseVariants, keyPoints);

  return {
    id,
    title,
    variants,
    metrics,
    technologies,
    getRandomVariant: () => variants[Math.floor(Math.random() * variants.length)],
  };
};

// ... (keep the existing interfaces and helper functions)

// -------------------------
// PROJECT DATA
// -------------------------
export const projectExplanations: ProjectExplanation[] = [
  // 1. RAG Conversational Learning Assistant
  createProject(
    "rag-assistant",
    "RAG Conversational Learning Assistant",
    [
      {
        shortDescription: "AI-powered learning assistant using Retrieval-Augmented Generation for interactive learning experiences.",
        longDescription: [
          "Implemented advanced RAG architecture with dynamic context retrieval and multi-hop reasoning",
          "Achieved 19% improvement in answer accuracy through optimized retrieval mechanisms"
        ]
      }
    ],
    [
      [
        "Context-aware responses with source attribution",
        "Multi-format content support (text, images, code)",
        "Adaptive learning paths based on user interactions"
      ],
      [
        "Real-time knowledge retrieval from multiple sources",
        "Personalized content recommendations",
        "Seamless integration with educational platforms"
      ]
    ],
    [
      { name: "Retrieval Accuracy", value: "19% improvement" },
      { name: "User Satisfaction", value: "95%" },
      { name: "Response Time", value: "<2s" }
    ],
    ["Python", "Flask", "LangChain", "FAISS", "HuggingFace", "React", "TypeScript"]
  ),

  // 2. Diffusion VRAM Estimator
  createProject(
    "diffusion-vram",
    "Diffusion Model VRAM Estimator",
    [
      {
        shortDescription: "Tool for predicting VRAM requirements of stable diffusion models with high accuracy.",
        longDescription: [
          "Developed regression models to predict VRAM usage across different hardware configurations",
          "Achieved 95% accuracy in VRAM prediction for various model architectures"
        ]
      }
    ],
    [
      [
        "Supports multiple diffusion model architectures",
        "Hardware-agnostic predictions",
        "CLI and web interface available"
      ]
    ],
    [
      { name: "Prediction Accuracy", value: "95%" },
      { name: "Supported Models", value: "10+" },
      { name: "Response Time", value: "<100ms" }
    ],
    ["Python", "PyTorch", "FastAPI", "Docker", "Scikit-learn"]
  ),

  // 3. Billboard Detection System
  createProject(
    "billboard-detection",
    "Real-time Billboard Detection",
    [
      {
        shortDescription: "Flask-based system for detecting and analyzing billboards in real-time video streams.",
        longDescription: [
          "Implemented YOLOv5 for high-accuracy object detection",
          "Designed RESTful API for easy integration with client applications"
        ]
      }
    ],
    [
      [
        "Real-time processing at 30 FPS",
        "90%+ mAP on custom dataset",
        "Easy-to-use web interface"
      ]
    ],
    [
      { name: "Detection Accuracy", value: "92% mAP" },
      { name: "Processing Speed", value: "30 FPS" },
      { name: "Model Size", value: "45MB" }
    ],
    ["Python", "Flask", "YOLOv5", "OpenCV", "Docker"]
  ),

  // 4. A2A Orchestration with LangGraph
  createProject(
    "a2a-orchestration",
    "Agent-to-Agent Orchestration",
    [
      {
        shortDescription: "Framework for building and orchestrating multi-agent AI systems using LangGraph.",
        longDescription: [
          "Developed dynamic task routing between specialized AI agents",
          "Implemented self-healing mechanisms for agent failures"
        ]
      }
    ],
    [
      [
        "Dynamic agent composition",
        "Self-healing architecture",
        "Real-time monitoring"
      ]
    ],
    [
      { name: "Agents Supported", value: "10+" },
      { name: "Fault Tolerance", value: "99.9%" },
      { name: "Throughput", value: "1000+ RPM" }
    ],
    ["Python", "LangGraph", "FastAPI", "Docker", "Kubernetes"]
  ),

  // 5. Student Multi-Agent System
  createProject(
    "student-multi-agent",
    "AI-Powered Learning Assistant",
    [
      {
        shortDescription: "Multi-agent system for personalized student learning experiences.",
        longDescription: [
          "Implemented multiple specialized agents for different learning tasks",
          "Integrated with various educational content providers"
        ]
      }
    ],
    [
      [
        "Personalized learning paths",
        "Multi-modal content delivery",
        "Progress tracking"
      ]
    ],
    [
      { name: "Student Engagement", value: "85%+" },
      { name: "Learning Outcomes", value: "30% improvement" },
      { name: "Active Users", value: "1000+" }
    ],
    ["Python", "LangChain", "FastAPI", "React", "MongoDB"]
  ),

  // 6. Network Traffic Analysis
  createProject(
    "network-analysis",
    "AI-Powered Network Security",
    [
      {
        shortDescription: "Real-time network traffic analysis and intrusion detection system.",
        longDescription: [
          "Trained ML models for detecting various network attacks",
          "Built real-time monitoring dashboard with Streamlit"
        ]
      }
    ],
    [
      [
        "Real-time packet inspection",
        "Anomaly detection",
        "Automated threat response"
      ]
    ],
    [
      { name: "Detection Accuracy", value: "96%" },
      { name: "False Positive Rate", value: "<2%" },
      { name: "Processing Speed", value: "1000+ pps" }
    ],
    ["Python", "Scikit-learn", "Streamlit", "Scapy", "Docker"]
  ),

  // 7. Face Recognition LLM
  createProject(
    "face-recognition",
    "Advanced Face Recognition System",
    [
      {
        shortDescription: "Face recognition system with LLM-powered explanations.",
        longDescription: [
          "Integrated state-of-the-art face recognition with explainable AI",
          "Achieved 98% accuracy on LFW benchmark"
        ]
      }
    ],
    [
      [
        "Real-time face detection",
        "Face verification/identification",
        "Explainable AI outputs"
      ]
    ],
    [
      { name: "Accuracy", value: "98%" },
      { name: "Processing Time", value: "200ms" },
      { name: "Supported Faces", value: "1M+" }
    ],
    ["Python", "PyTorch", "OpenCV", "FastAPI", "Docker"]
  )
];



  // -------------------------
  // WORKFLOW ENGINE
  // -------------------------
  createProject(
    "llm-workflow",
    "Generative LLM Workflow Engine",
    [
      {
        shortDescription:
          "Orchestrating complex AI workflows with precision and efficiency.",
        longDescription: [
          "Developed a resilient pipeline engine capable of managing multi-step LLM operations.",
          "Enabled dynamic branching, model orchestration, and inference optimization.",
        ],
      },
      {
        shortDescription:
          "Enterprise-grade workflow automation for AI applications.",
        longDescription: [
          "Automated high-value knowledge workflows across enterprise use cases.",
          "Ensured stability through versioning, rollback, and monitoring primitives.",
        ],
      },
    ],
    [
      [
        "Drag-and-drop visual workflow builder",
        "Support for conditional routing and parallel chains",
        "End-to-end performance monitoring dashboard",
      ],
      [
        "Integration-ready for multiple LLM providers",
        "Role-based workflow control for teams",
        "Versioned workflow deployments with rollback",
      ],
    ],
    [
      { name: "Workflow Accuracy", value: "92%" },
      { name: "Processing Speed", value: "5x faster" },
      { name: "Factual Consistency", value: "88%" },
    ],
    ["Python", "Flask", "LangChain", "LangGraph", "FAISS", "Docker", "Kubernetes"]
  )


// -------------------------
// HELPERS
// -------------------------
export function getProjectById(id: string) {
  const project = projectExplanations.find((p) => p.id === id);
  if (!project) return null;

  return {
    ...project,
    variant: project.getRandomVariant(),
  };
}

export function getFeaturedProjects() {
  const featuredIds = ["rag-assistant", "llm-workflow", "face-recognition"];

  return projectExplanations
    .filter((p) => featuredIds.includes(p.id))
    .map((project) => ({
      ...project,
      variant: project.getRandomVariant(),
    }));
}

export function getRandomProject() {
  const project =
    projectExplanations[Math.floor(Math.random() * projectExplanations.length)];

  return {
    ...project,
    variant: project.getRandomVariant(),
  };
}
