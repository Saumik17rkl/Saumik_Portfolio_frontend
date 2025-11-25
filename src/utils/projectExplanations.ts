// src/utils/projectExplanations.ts

export const generateProjectExplanation = (projectTitle: string) => {
  const projectVerbs = [
    "showcases",
    "demonstrates",
    "highlights",
    "exemplifies",
    "showcases my expertise in",
    "is a testament to my skills in",
    "illustrates my proficiency with",
    "embodies my approach to",
    "showcases innovative use of",
    "demonstrates practical application of"
  ];

  const projectAspects = [
    "modern web development",
    "AI/ML integration",
    "scalable architecture",
    "user-centric design",
    "real-time data processing",
    "cloud-native solutions",
    "responsive interfaces",
    "data visualization",
    "API development",
    "machine learning workflows",
    "natural language processing",
    "computer vision",
    "generative AI",
    "large language models",
    "MERN stack development"
  ];

  const projectImpacts = [
    "delivering exceptional user experiences",
    "solving complex technical challenges",
    "pushing the boundaries of what's possible",
    "creating efficient and maintainable code",
    "leveraging cutting-edge technologies",
    "transforming ideas into reality",
    "bridging the gap between concept and execution",
    "delivering robust and scalable solutions",
    "creating intuitive user interfaces",
    "optimizing performance and efficiency"
  ];

  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return `${projectTitle} ${random(projectVerbs)} ${random(projectAspects)}, ${random(projectImpacts)}.`;
};

export const generateWelcomeMessage = () => {
  const greetings = [
    "Hello there! I'm SaumikBot, your guide to Saumik's portfolio.",
    "Hi! I'm here to tell you about Saumik's work and expertise in AI and development.",
    "Greetings! I'm SaumikBot, here to showcase Saumik's technical journey and projects.",
    "Welcome! I'm SaumikBot, here to highlight Saumik's skills and experience in technology.",
    "Hey! I'm SaumikBot, your virtual guide to Saumik's professional portfolio."
  ];

  const capabilities = [
    "I can tell you about his projects, technical skills, and experience in AI and software development.",
    "Ask me about his work with machine learning, web development, or any of his technical projects.",
    "I'm here to provide insights into his expertise in building intelligent systems and applications.",
    "Feel free to ask about his technical stack, project challenges, or professional background.",
    "I can share details about his approach to problem-solving and technical implementation."
  ];

  const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return {
    greeting: random(greetings),
    capability: random(capabilities),
    fullMessage: `${random(greetings)} ${random(capabilities)} What would you like to know?`
  };
};