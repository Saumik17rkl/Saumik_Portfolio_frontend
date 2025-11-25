// src/utils/aiIntroGenerator.ts

export const generateAIMovieIntro = () => {
  const openings = [
    "In a world where technology defines reality... ",
    "From the depths of innovation emerges... ",
    "In an era where AI reshapes human potential... ",
    "Once in a generation, a mind emerges... ",
    "In the digital frontier of tomorrow... ",
    "When the world needed a new kind of thinker... ",
    "In the realm where code meets creativity... ",
    "From the intersection of art and algorithms... ",
    "In the age of intelligent machines... ",
    "When artificial intelligence meets human ingenuity... ",
  ];

  const descriptors = [
    "visionary technologist",
    "digital architect of tomorrow",
    "maestro of machine intelligence",
    "pioneer of intelligent systems",
    "orchestrator of algorithms",
    "conductor of computational creativity",
    "architect of artificial minds",
    "sculptor of silicon dreams",
    "navigator of neural networks",
    "composer of code and cognition",
    "alchemist of AI transformation",
    "virtuoso of digital innovation",
    "symphony conductor of systems",
    "renaissance mind of the digital age",
    "quantum thinker in a binary world"
  ];

  const specializations = [
    "crafting intelligent systems that redefine possibility",
    "turning complex problems into elegant solutions",
    "bridging the gap between human and artificial intelligence",
    "designing the cognitive architecture of tomorrow",
    "orchestrating the dance of data and algorithms",
    "pioneering the next wave of computational intelligence",
    "sculpting the future with lines of code and machine learning",
    "transforming abstract concepts into tangible innovations",
    "engineering intelligence that learns, adapts, and evolves",
    "weaving neural networks into the fabric of daily life",
    "championing the ethical development of artificial minds",
    "pushing the boundaries of what machines can understand",
    "creating systems that think, learn, and create"
  ];

  const taglines = [
    "Where vision meets execution in the digital frontier.",
    "Proving that in the age of AI, the most important code is still human.",
    "Because the future belongs to those who can imagine it first.",
    "Transforming the ordinary into the extraordinary, one algorithm at a time.",
    "In a world of copy-paste, be an original algorithm.",
    "Crafting intelligence that doesn't just compute, but understands.",
    "Where artificial intelligence meets authentic innovation.",
    "Building tomorrow's technology with today's vision.",
    "The architect of digital evolution.",
    "In code we trust, in innovation we believe."
  ];

  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return {
    opening: random(openings),
    name: "Saumik",
    descriptor: random(descriptors),
    specialization: random(specializations),
    tagline: random(taglines),
    fullIntro: function() {
      return `${this.opening}Meet ${this.name}, ${this.descriptor} ${this.specialization}. ${this.tagline}`;
    }
  };
};

// Original function for backward compatibility
export const generateAIIntro = () => {
  const prefixes = [
    "I'm Saumik, ",
    "Hey, I'm Saumik, ",
    "Hi there! I'm Saumik, ",
    "Hello! Saumik here, ",
    "Yo! Saumik here, ",
    "Greetings, I'm Saumik, ",
    "Saumik here — ",
    "Hi, Saumik here, ",
    "What's up? I'm Saumik, ",
    "Namaste! I'm Saumik, ",
  ];
  
  const roles = [
    "an AI engineer",
    "a machine learning engineer",
    "a deep learning practitioner",
    "a generative AI developer",
    "an LLM and RAG specialist",
    "a backend + AI systems engineer",
    "a computer vision enthusiast",
    "an applied AI researcher",
    "a data-driven problem solver",
    "an automation-focused engineer",
    "a creative technologist",
    "a multimodal AI builder",
    "an AI workflow architect",
    "an intelligent systems developer"
  ];
  
  const focuses = [
    "building intelligent systems",
    "creating scalable AI pipelines",
    "developing end-to-end ML workflows",
    "designing LLM-based automation",
    "building RAG and agentic systems",
    "solving complex technical challenges",
    "developing robust backend architectures",
    "engineering high-performance AI models",
    "crafting seamless AI-driven experiences",
    "experimenting with multimodal models",
    "optimizing inference and model pipelines",
    "bridging software engineering with AI",
    "creating real-world GenAI applications",
    "designing automation tools that scale",
    "building user-centric AI solutions"
  ];

  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return random(prefixes) + random(roles) + " focused on " + random(focuses) + ".";
};

export const generateAITagline = () => {
  const taglineParts = [
    "I build scalable AI-driven experiences using ",
    "Specializing in developing ",
    "Passionate about creating ",
    "Expert in building ",
    "Focused on delivering "
  ];

  const techStacks = [
    "Generative AI, RAG pipelines, and LLM workflow engines",
    "advanced chatbots and intelligent automation systems",
    "production-ready AI solutions with Python and modern ML tooling",
    "end-to-end AI systems with FastAPI and LangChain",
    "scalable AI applications with Flask and cloud technologies",
    "intelligent systems using machine learning and deep learning"
  ];

  const purposes = [
    "to solve complex business challenges.",
    "that drive innovation and efficiency.",
    "with a focus on performance and scalability.",
    "that transform industries through AI.",
    "that push the boundaries of what's possible with AI.",
    "that deliver real business value."
  ];

  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  return random(taglineParts) + random(techStacks) + " " + random(purposes);
};