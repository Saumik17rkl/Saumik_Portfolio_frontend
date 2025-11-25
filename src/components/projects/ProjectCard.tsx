// -------------------------------
// BASIC PROFILE DATA
// -------------------------------
export const personalInfo = {
  name: "Saumik Chakraborty",
  title: "AI Engineer Specializing in GenAI, LLM Workflows & Intelligent Automation",
  tagline:
    "I build scalable AI-driven experiences using Generative AI, RAG pipelines, LLM workflow engines, advanced chatbots, and intelligent automation systems.",
  email: "saumik17rkl@gmail.com",
  phone: "+91-96682-92738",
  linkedin: "linkedin.com/in/saumik-chakraborty-51a499257",
  github: "github.com/Saumik17rkl",
  portfolio: "saumikportfolio-nine.vercel.app",
  resumePath: "/resume/Saumik_Chakraborty_Resume_freelance.pdf"
};
import React from 'react';
import { ProjectExplanation } from '../../data/projectExplanations';

interface ProjectCardProps {
  project: ProjectExplanation & { variant: ReturnType<ProjectExplanation['getRandomVariant']> };
  variant?: 'compact' | 'detailed';
  className?: string;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'detailed',
  className = '',
  onClick
}) => {
  const { variant: projectVariant } = project;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm 
        rounded-xl p-6 hover:shadow-xl transition-all duration-300 
        border border-gray-700/50 hover:border-blue-500/30
        ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs px-2.5 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/20">
              Featured
            </span>
          )}
        </div>

        {variant === 'compact' ? (
          <p className="text-gray-300 leading-relaxed">{projectVariant.shortDescription}</p>
        ) : (
          <div className="space-y-4 flex-grow">
            <p className="text-gray-300 leading-relaxed">{projectVariant.shortDescription}</p>
            
            <div className="space-y-3">
              <button 
                onClick={toggleExpand}
                className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span className="mr-1.5">Key Features</span>
                <svg 
                  className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {(variant === 'detailed' || isExpanded) && (
                <ul className="space-y-2.5 pl-1">
                  {projectVariant.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="text-blue-400 mr-2.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300 group-hover:text-blue-100 transition-colors text-sm">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {projectVariant.longDescription && (
              <div className="mt-4 p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-blue-300 mb-2.5 flex items-center">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI-Powered Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {projectVariant.longDescription.map((desc, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed flex">
                      <span className="text-blue-400 mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, variant === 'compact' ? 3 : 5).map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1.5 bg-blue-900/40 text-blue-200 rounded-full 
                hover:bg-blue-800/60 hover:text-white transition-colors 
                border border-blue-800/50 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {variant === 'compact' && project.technologies.length > 3 && (
            <span className="text-xs px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {variant === 'detailed' && (
          <div className="mt-6 grid grid-cols-3 gap-3 bg-gray-800/40 rounded-lg p-3.5 border border-gray-700/50">
            {project.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center p-2 rounded-lg hover:bg-gray-700/40 transition-all duration-200 group"
              >
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-200 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 group-hover:text-blue-200 transition-colors">
                  {metric.name}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-gray-700/80 hover:bg-gray-600/90 text-gray-200 rounded-lg transition-all 
                        hover:shadow-md hover:shadow-blue-500/10 border border-gray-600/50"
              onClick={e => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </a>
          )}
          <button 
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg transition-all 
              bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 
              text-white font-medium hover:shadow-lg hover:shadow-blue-500/20
              border border-blue-500/30`}
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick();
              else console.log('View project:', project.id);
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>{variant === 'compact' ? 'View Details' : 'Case Study'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
export const achievements = [
  { id: "1", title: "🏆 2nd Runner-Up — Infosys Global Hackathon 2025", description: "Developed AI solution leading to top placement out of global teams", year: "2025" },
  { id: "2", title: "Finalist — Hack4Bihar National Innovation Challenge 2025", description: "Competed at national level with innovative AI solution", year: "2025" },
  { id: "3", title: "Amazon ML Summer School", description: "Selected for intensive machine learning program", year: "2024" },
  { id: "4", title: "Microsoft AI-900 Certification", description: "Azure AI Fundamentals certified", year: "2024" }
];

export const skills = {
  aiml: ["Generative AI","LLM Workflow Engineering","RAG Pipelines","Prompt Engineering","Conversational AI Agents","NLP","Embedding Models","Transformers","Knowledge Retrieval","Vector Search (FAISS)","HuggingFace Models","LangChain","LangGraph"],
  backend: ["Python","Flask","FastAPI","API Engineering","Microservices","Automation","REST APIs","OOP Design"],
  cybersecurity: ["Anomaly Detection","Malware Detection","Packet Inspection","PyShark","Scapy","Network Analysis"],
  tools: ["Git","Docker","GitHub Actions","Linux","Postman","VS Code"],
  mldata: ["NumPy","Pandas","TensorFlow","PyTorch","Scikit-Learn","Matplotlib"],
  applications: ["Chatbot Design","Workflow Engines","Educational AI Tools","Identity Recognition Systems","Summarization Pipelines","Q&A Systems"]
};

// -------------------------------
// NEW PROJECT VARIANT SYSTEM
// -------------------------------
export interface ProjectVariant {
  shortDescription: string;
  longDescription: string[];
  keyPoints: string[];
}

export interface ProjectExplanation {
  id: string;
  title: string;
  variants: ProjectVariant[];
  metrics: { name: string; value: string }[];
  technologies: string[];
  architecture: string;
  reproduction: string[];
  results: string[];
  challenges: string[];
  featured: boolean;
  impact: string;
  role: string;
  timeline: string;
  learnings: string[];
  demoUrl?: string;
  githubUrl?: string;
  getRandomVariant: () => ProjectVariant;
}

// -------------------------------
// HELPERS
// -------------------------------
const generateVariants = (
  baseVariants: Omit<ProjectVariant, "keyPoints">[],
  keyPoints: string[][]
): ProjectVariant[] =>
  baseVariants.map((variant, i) => ({
    ...variant,
    keyPoints: keyPoints[i % keyPoints.length]
  }));

const createProject = (
  id: string,
  title: string,
  baseVariants: Omit<ProjectVariant, "keyPoints">[],
  keyPoints: string[][],
  metrics: { name: string; value: string }[],
  technologies: string[],
  architecture: string,
  reproduction: string[],
  challenges: string[],
  results: string[],
  timeline: string,
  role: string,
  impact: string,
  learnings: string[],
  featured = false,
  demoUrl?: string,
  githubUrl?: string
): ProjectExplanation => {
  const variants = generateVariants(baseVariants, keyPoints);

  return {
    id,
    title,
    variants,
    metrics,
    technologies,
    architecture,
    reproduction,
    challenges,
    results,
    timeline,
    role,
    impact,
    learnings,
    featured,
    demoUrl,
    githubUrl,
    getRandomVariant: () => variants[Math.floor(Math.random() * variants.length)],
  };
};

// -------------------------------
// FINAL PROJECT ARRAY WITH VARIANTS
// -------------------------------
export const projectExplanations: ProjectExplanation[] = [
  createProject(
    "rag-assistant",
    "RAG Conversational Learning Assistant",

    // --------------------- VARIANTS ---------------------
    [
      {
        shortDescription: "AI-driven RAG assistant for contextual learning.",
        longDescription: [
          "Provides personalized answers using retrieval-enhanced reasoning.",
          "Delivers accurate, context-aware learning support through multi-step LLM pipelines."
        ]
      },
      {
        shortDescription: "Adaptive educational AI with real-time retrieval.",
        longDescription: [
          "Understands user intent and retrieves relevant academic knowledge.",
          "Tracks context across conversations to enhance student understanding."
        ]
      }
    ],

    // --------------------- KEY POINTS ---------------------
    [
      [
        "Context-aware responses with citation",
        "Semantic retrieval with FAISS",
        "Adaptive conversation memory"
      ],
      [
        "Multi-document summarization",
        "User-level personalization",
        "Instant doubt solving"
      ]
    ],

    // --------------------- METRICS ---------------------
    [
      { name: "Retrieval Accuracy", value: "19% improvement" },
      { name: "User Satisfaction", value: "95%" },
      { name: "Response Time", value: "<2s" }
    ],

    // --------------------- TECHNOLOGIES ---------------------
    ["Python", "Flask", "LangChain", "FAISS", "HuggingFace", "React", "TypeScript"],

    // --------------------- ARCHITECTURE ---------------------
    "React → Flask → LangChain → FAISS → LLM → Evaluation Layer",

    // --------------------- REPRODUCTION ---------------------
    ["Clone repo", "Install dependencies", "Add API keys", "Run backend", "Start frontend"],

    // --------------------- CHALLENGES ---------------------
    ["Low-latency retrieval", "Multi-intent query understanding", "Factual consistency"],

    // --------------------- RESULTS ---------------------
    ["40% faster responses", "95% satisfaction", "10k+ users"],

    "Jan 2023 – Present",
    "Lead Developer & AI Engineer",
    "Enabled personalized learning at scale.",
    ["Prompt engineering mastery", "RAG performance optimization"],

    true,
    "https://demo.rag-assistant.com",
    "https://github.com/yourusername/rag-assistant"
  )
];

// -------------------------------
// GETTERS
// -------------------------------
export const getProjectById = (id: string) =>
  projectExplanations.find((p) => p.id === id);

export const getFeaturedProjects = () =>
  projectExplanations
    .filter((p) => p.featured)
    .map((p) => ({ ...p, variant: p.getRandomVariant() }));

export const getProjectsByTag = (tag: string) =>
  projectExplanations.filter((p) =>
    p.technologies.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
