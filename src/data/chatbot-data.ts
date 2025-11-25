interface ChatbotQA {
  question: string | string[];
  answer: string;
  tags?: string[];
  followUp?: string[];
}

type ChatbotData = ChatbotQA[];

export const chatbotData: ChatbotData = [
  
  // PERSONAL INTRODUCTION
  // ---------------------------------------
  {
    question: ["Who are you?", "What's your name?", "Introduce yourself"],
    answer:
      "I'm Saumik Chakraborty, an AI Engineer specializing in GenAI, LLM workflows, prompt engineering, RAG systems, and Python-based backend development. I build AI-driven applications, reasoning engines, and ML workflows.",
    tags: ["intro", "about", "identity"],
    followUp: ["What do you specialize in?", "What projects have you built?"]
  },

  {
    question: ["Where are you from?", "Where do you live?"],
    answer: "I'm based in India, currently working on AI/ML engineering, research, and full-stack AI systems.",
    tags: ["location"]
  },

  // ---------------------------------------
  // CORE SKILLS
  // ---------------------------------------
  {
    question: ["What are your skills?", "What technologies do you know?"],
    answer:
      "My core skills include GenAI, LLM workflows, RAG, reasoning optimization, backend APIs (FastAPI), Python development, ML models, XAI, embeddings, evaluation pipelines, cybersecurity ML, and automation tooling.",
    tags: ["skills", "tech", "ai"],
    followUp: ["Do you work with LLMs?", "Do you build backend APIs?"]
  },

  {
    question: ["Do you work with LLMs?", "LLM experience"],
    answer:
      "Yes. I design multi-step LLM workflows, structured reasoning chains, prompt engineering frameworks, and RAG-based knowledge bots. I also work with long-context learning and knowledge routing.",
    tags: ["llm", "genai"]
  },

  {
    question: ["Do you have RAG experience?", "Have you built RAG?"],
    answer:
      "Yes. I build optimized retrieval pipelines using FAISS, LangChain, embeddings, and ranking strategies. I've improved retrieval accuracy and factual stability in multiple RAG systems.",
    tags: ["rag", "retrieval"]
  },

  {
    question: ["Do you know FastAPI?", "Backend skills"],
    answer:
      "Yes. I build Python-based backend microservices using FastAPI, PostgreSQL, automation utilities, data processing pipelines, and modular backend architectures.",
    tags: ["backend", "fastapi"]
  },

  // ---------------------------------------
  // EXPERIENCE
  // ---------------------------------------
  {
    question: ["Tell me about your internships", "Your experience"],
    answer:
      "I interned as an AI/ML Engineer at NirveonX Omnicare, building FastAPI microservices, RAG pipelines, and inference optimization workflows. I also worked as an AI Research Intern at Finessefleet, focusing on multilingual reasoning, XAI validation, and long-context research.",
    tags: ["experience", "internship"]
  },

  {
    question: ["What did you do at NirveonX?", "NirveonX experience"],
    answer:
      "I built backend APIs, optimized retrieval workflows, reduced hallucinations by 19%, developed Python utilities, and contributed to SDLC tasks including debugging, documentation, and microservice development.",
    tags: ["internship", "nirveonx"]
  },

  {
    question: ["What did you do at Finessefleet?", "Finessefleet experience"],
    answer:
      "I developed multilingual reasoning prompts, used XAI for validation, built evaluation scripts, improved explanation alignment by 14%, and researched long-context learning and structured content generation.",
    tags: ["internship", "research"]
  },

  // ---------------------------------------
  // PROJECTS
  // ---------------------------------------
  {
    question: ["Tell me about your projects", "What projects have you done?"],
    answer:
      "I've built GenAI workflow engines, RAG conversational assistants, multilingual translators, cybersecurity ML systems, anomaly detection models, malware classifiers, a face recognition + identity reasoning system, and an AI breakup agent.",
    tags: ["projects", "portfolio"],
    followUp: ["Tell me about the RAG assistant", "Explain your malware detection project"]
  },

  {
    question: ["What is your RAG project?", "RAG assistant"],
    answer:
      "I built a RAG conversational learning assistant using FAISS-based search, optimized ranking, multi-turn memory, and explanation-focused retrieval. It simplifies learning and reinforces concepts.",
    tags: ["rag", "project"]
  },

  {
    question: ["Explain your GenAI workflow engine", "What is your LLM workflow engine?"],
    answer:
      "It's a multi-step LLM orchestration system using LangGraph with reasoning loops, memory graphs, tool-calling support, and automated task execution pipelines.",
    tags: ["genai", "workflow"]
  },

  {
    question: ["Tell me about your malware detection project"],
    answer:
      "I built an opcode-level malware classifier combining ML models, entropy analysis, behavioral signatures, and explainable visualizations for cybersecurity education.",
    tags: ["cybersecurity", "malware"]
  },

  {
    question: ["Tell me about your face recognition project"],
    answer:
      "I integrated FaceNet embeddings with LLM-based identity reasoning, reaching 95% disambiguation accuracy.",
    tags: ["face recognition"]
  },

  {
    question: ["Tell me about the AI Breakup Agent"],
    answer:
      "It's an emotional-support chatbot with sentiment analysis, contextual memory, adaptive prompting, and safety-controlled responses.",
    tags: ["mental health", "nlp"]
  },

  // ---------------------------------------
  // EDUCATION + ACHIEVEMENTS
  // ---------------------------------------
  {
    question: ["What's your education?", "Where do you study?"],
    answer:
      "I'm pursuing a B.Tech in Computer Science and Engineering at NIST University, graduating in 2026.",
    tags: ["education"]
  },

  {
    question: ["What are your achievements?", "Any awards?"],
    answer:
      "I was the 2nd Runner-Up at Infosys Global Hackathon 2025 and a finalist at Hack4Bihar National Innovation Challenge.",
    tags: ["achievements", "awards"]
  },

  // ---------------------------------------
  // CERTIFICATIONS
  // ---------------------------------------
  {
    question: ["What certifications do you have?", "Your certifications"],
    answer:
      "Amazon ML Summer School, Microsoft AI-900, Google Data Analytics, AWS GenAI, AWS NLP, Oracle Cloud HCM, and multiple Tata & PwC virtual internships.",
    tags: ["certifications"]
  },

  // ---------------------------------------
  // CONTACT
  // ---------------------------------------
  {
    question: ["How can I contact you?", "Your email?"],
    answer:
      "You can reach me at saumik17rkl@gmail.com or connect through the contact section or LinkedIn.",
    tags: ["contact"]
  },

  {
    question: ["Are you available for opportunities?", "Hiring?"],
    answer:
      "Yes. I'm open to AI/ML engineering roles, GenAI development, backend engineering, and research-focused work.",
    tags: ["work", "opportunities"]
  },

  // ---------------------------------------
  // FALLBACKS
  // ---------------------------------------
  {
    question: ["I don't understand", "What?", "Say again"],
    answer:
      "Try asking about my projects, skills, internships, experience, achievements, or the technologies I work with.",
    tags: ["fallback"]
  },

  {
    question: ["Thanks", "Thank you"],
    answer: "Glad to help. Want to know more about my AI work?",
    tags: ["gratitude"]
  },
];

export default chatbotData;
