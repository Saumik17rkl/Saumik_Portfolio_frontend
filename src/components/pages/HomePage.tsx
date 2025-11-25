import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  Send,
  Sparkles,
  Code,
  Bot,
  Box,
  Layers,
  Server,
  Brain,
  Shield
} from 'lucide-react';
import { personalInfo, projects, featuresStrip, achievements } from '../../data/portfolio-data';
import { generateAIIntro, generateAITagline } from '../../utils/aiintrogenration';
import { motion, AnimatePresence } from "framer-motion";
import { chatbotData } from '../../data/chatbot-data';

interface Message {
  id: number | string;
  text: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
  isTyping?: boolean;
  suggestions?: string[];
}

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const highlightProjects = projects.filter((p) => p.featured).slice(0, 5);
  const [dynamicIntro, setDynamicIntro] = useState('');
  const [dynamicTagline, setDynamicTagline] = useState('');
  const [randomImage, setRandomImage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Saumik's AI assistant. How can I help you today?",
      sender: 'bot',
      suggestions: chatbotData
        .filter(item => item.tags?.includes('intro') || item.tags?.includes('skills'))
        .flatMap(item =>
          Array.isArray(item.question) ? item.question[0] : item.question
        )
        .slice(0, 3)
    }
  ]);

  useEffect(() => {
    setDynamicIntro('AI Engineer Specializing in GenAI, LLM Workflows & Intelligent Automation');
    setDynamicTagline('I build scalable AI-driven experiences using Generative AI, RAG pipelines, LLM workflow engines, advanced chatbots, and intelligent automation systems. Passionate about building production-ready AI solutions with Python, Flask, FastAPI, LangChain, and modern ML tooling.');

    const profileImages = [
      '/images/image.jpg',
      '/images/mypic.jpg',
      '/images/photo.jpg',
      '/images/pic.jpg',
      '/images/your-photo.jpg'
    ];
    if (profileImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * profileImages.length);
      setRandomImage(profileImages[randomIndex]);
    }

    const timer = setTimeout(() => {
      setDynamicIntro(generateAIIntro());
      setDynamicTagline(generateAITagline());
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const findBestMatch = (message: string) => {
    const lowerMessage = message.toLowerCase().trim();
    if (!lowerMessage) return null;

    const exactMatch = chatbotData.find(item =>
      Array.isArray(item.question)
        ? item.question.some(q => q.toLowerCase() === lowerMessage)
        : item.question.toLowerCase() === lowerMessage
    );

    if (exactMatch) return exactMatch;

    const getSimilarity = (a: string, b: string) => {
      const aWords = new Set(a.toLowerCase().split(/\s+/));
      const bWords = new Set(b.toLowerCase().split(/\s+/));
      const intersection = new Set([...aWords].filter(x => bWords.has(x)));
      return intersection.size / Math.max(aWords.size, bWords.size);
    };

    let bestMatch = chatbotData
      .map(item => ({
        ...item,
        score: Math.max(
          ...(Array.isArray(item.question)
            ? item.question.map(q => getSimilarity(q, lowerMessage))
            : [getSimilarity(item.question, lowerMessage)]
          ),
          ...(item.tags?.map(tag => getSimilarity(tag, lowerMessage)) || [])
        )
      }))
      .sort((a, b) => b.score - a.score)[0];

    if (bestMatch && bestMatch.score > 0.3) {
      return bestMatch;
    }

    const fallbackResponses = [
      "I'm not entirely sure I caught that. Could you rephrase your question?",
      "I want to make sure I understand correctly. Could you ask that in a different way?",
      "I'm still learning! Could you try asking about my skills, experience, or projects?",
      "I didn't quite get that. Maybe try asking about my work with AI, backend development, or any of my projects?"
    ];
    return {
      answer: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
      followUp: ["What technologies do you work with?", "Tell me about your experience", "What projects have you built?"]
    };
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = message.trim();
    if (!userMessage) return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date(),
      suggestions: []
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    setIsTyping(true);

    try {
      const thinkingTime = Math.min(800 + Math.random() * 800, 1500);
      await new Promise(resolve => setTimeout(resolve, thinkingTime));

      const match = findBestMatch(userMessage);
      if (!match) throw new Error('No matching response found');

      const typingTime = Math.min(match.answer.length * 30, 2000);
      await new Promise(resolve => setTimeout(resolve, typingTime));

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: match.answer,
          sender: 'bot',
          suggestions: match.followUp || [],
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text: "I'm having trouble understanding. Could you try rephrasing your question?",
          sender: 'bot',
          timestamp: new Date(),
          suggestions: ["What can you tell me about yourself?", "What projects have you worked on?", "What technologies do you use?"]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const shouldGroupWithPrevious = (current: Message, previous: Message | null) => {
    if (!previous || current.sender !== previous.sender) return false;
    const timeDiff = (current.timestamp?.getTime() || 0) - (previous.timestamp?.getTime() || 0);
    return timeDiff < 5 * 60 * 1000;
  };

  // ChatWindow component
  const ChatWindow = () => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
      messagesEndRef.current?.scrollIntoView({ behavior });
    };

    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      if (isNearBottom) {
        scrollToBottom('auto');
      }
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        scrollToBottom('auto');
      }, 100);
      return () => clearTimeout(timer);
    }, [messages]);

    const handleSuggestionClick = (suggestion: string) => {
      setMessage(suggestion);
      setTimeout(() => {
        const input = document.querySelector('textarea');
        input?.focus();
        const form = document.querySelector('form');
        form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }, 10);
    };

    return (
      <motion.div
        className="fixed bottom-24 right-8 w-80 bg-[#1A1F26] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
        style={{ height: '500px' }}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="bg-[#00E6FF] p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-[#0A0F14]" />
            <span className="font-semibold text-[#0A0F14]">Saumik's AI</span>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="text-[#0A0F14] hover:text-[#0A0F14]/80"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          ref={chatContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto p-4 space-y-1"
        >
          {messages.map((msg, index) => {
            const previousMessage = index > 0 ? messages[index - 1] : null;
            const showHeader = !shouldGroupWithPrevious(msg, previousMessage);
            const isBotTyping = 'isTyping' in msg && msg.isTyping;

            return (
              <React.Fragment key={msg.id}>
                {showHeader && msg.sender === 'bot' && (
                  <div className="flex items-center justify-center my-2">
                    <div className="text-xs text-gray-400 bg-[#2A2F36] px-2 py-0.5 rounded-full">
                      Saumik's AI • {formatTime(msg.timestamp ?? new Date())}
                    </div>
                  </div>
                )}
                <div
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} ${
                    showHeader ? 'mt-3' : 'mt-1'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-[#00E6FF] text-[#0A0F14] rounded-br-none'
                        : 'bg-[#2A2F36] text-white rounded-bl-none'
                    } transition-all duration-200 hover:opacity-90`}
                  >
                    {isBotTyping ? (
                      <div className="flex space-x-1.5 py-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    ) : (
                      <>
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
                        {msg.sender === 'bot' && 'suggestions' in msg && msg.suggestions && msg.suggestions.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {msg.suggestions.map((suggestion, i) => (
                              <button
                                key={i}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="text-xs bg-[#3A3F46] hover:bg-[#4A4F56] text-gray-200 px-3 py-1.5 rounded-full transition-colors"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {msg.sender === 'user' && (
                  <div className="flex justify-end pr-1">
                    <span className="text-xs text-gray-400">
                      {formatTime(msg.timestamp || new Date())}
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
          {isTyping && !messages.some(m => 'isTyping' in m) && (
            <div className="flex justify-start">
              <div className="bg-[#2A2F36] rounded-2xl px-4 py-2.5 rounded-bl-none">
                <div className="flex space-x-1.5 py-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>
        <div className="p-4 border-t border-[#2A2F36] bg-[#1A1F26]">
          <form onSubmit={handleSendMessage} className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (message.trim()) {
                    handleSendMessage(e);
                  }
                }
              }}
              placeholder="Message Saumik's AI..."
              rows={1}
              className="w-full bg-[#2A2F36] text-white rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#00E6FF] resize-none max-h-32 overflow-y-auto"
              style={{ minHeight: '48px' }}
            />
            <button
              type="submit"
              disabled={!message.trim() || isTyping}
              className={`absolute right-3 bottom-3 p-1.5 rounded-full transition-colors ${
                message.trim()
                  ? 'bg-[#00E6FF] text-[#0A0F14] hover:bg-[#00D1EB]'
                  : 'text-gray-500 cursor-not-allowed'
              }`}
              aria-label="Send message"
            >
              {isTyping ? (
                <div className="w-5 h-5 border-2 border-[#0A0F14] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
            {message.length === 0 && messages.length === 0 && (
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {["What can you tell me about yourself?", "What projects have you worked on?", "What technologies do you use?"].map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setMessage(suggestion)}
                    className="text-xs bg-[#2A2F36] hover:bg-[#3A3F46] text-gray-200 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    );
  };

  // ChatButton component
  const ChatButton = () => (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        className={`p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isChatOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-[#00E6FF] hover:bg-[#00c4e0]'
        }`}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F14] to-[#1A1F26] text-white">
      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Your existing content here */}
      </div>
      {/* Chat interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-8 w-96 max-w-[90vw] bg-[#1A1F26] rounded-2xl shadow-2xl overflow-hidden z-40 border border-[#2A2F36] flex flex-col"
            style={{ height: '70vh', maxHeight: '600px' }}
          >
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>
      <ChatButton />

      {/* Hero Section */}
      <section
        className="py-24 px-6"
        style={{ paddingTop: 'calc(var(--section-padding) * 0.88)', paddingBottom: 'calc(var(--section-padding) * 0.88)' }}
      >
        <div className="mx-auto grid md:grid-cols-2 gap-12 items-center" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="space-y-6">
            <h1
              className="text-[#E8F0F8]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3rem',
                fontWeight: 700,
                letterSpacing: '-0.5px',
                lineHeight: '1.2',
              }}
            >
              {dynamicIntro || 'AI Engineer Specializing in GenAI, LLM Workflows & Intelligent Automation'}
            </h1>
            <p
              className="text-[#A8B4C0]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: '1.6',
              }}
            >
              {dynamicTagline || personalInfo.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full">
              <span className="text-[#E8F0F8]" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                {achievements[0].title}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-full text-[#0A0F14]"
                style={{
                  background: 'linear-gradient(135deg, #00E6FF 0%, #0077FF 100%)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                }}
              >
                Hire Me
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-5 py-3 rounded-full glass-panel hover:bg-[rgba(255,255,255,0.08)] text-[#E8F0F8]"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                }}
              >
                View My Projects
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="glass-panel rounded-3xl p-6 flex items-center justify-center w-full h-full min-h-[400px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  key={randomImage}
                  src={randomImage}
                  alt="Profile"
                  className="max-w-full max-h-[300px] w-auto h-auto rounded-full object-cover border-2 border-[#00E6FF]"
                  style={{
                    boxShadow: "0 0 60px rgba(0, 230, 255, 0.4)",
                    aspectRatio: "1/1"
                  }}
                  initial={{ opacity: 0, scale: 0.6, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Feature Cards */}
      <section className="py-20 px-6 bg-[#0D1218]">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-[#E8F0F8] mb-12 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 600,
            }}
          >
            Featured Projects & Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {highlightProjects.map((project, index) => {
              const icons = [Brain, MessageSquare, Sparkles, Shield, Code];
              const Icon = icons[index % icons.length];
              return (
                <div key={project.id} className="glass-panel rounded-2xl p-7 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 glass-panel rounded-xl">
                      <Icon className="w-6 h-6 text-[#00E6FF]" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[#E8F0F8] mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          fontWeight: 600,
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-[#A8B4C0]"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9375rem',
                          lineHeight: '1.6',
                        }}
                      >
                        {project.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 glass-panel rounded-full text-[#A8B4C0]"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate('projects')}
                    className="glass-panel rounded-lg px-4 py-2 hover:bg-[rgba(255,255,255,0.08)] text-[#00E6FF]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}
                  >
                    View Case Study
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 px-6">
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {featuresStrip.map((feature) => {
              const iconMap: Record<string, any> = {
                Bot,
                Box,
                Layers,
                Code,
                Server,
              };
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={feature.label}
                  className="glass-panel rounded-full px-5 py-2.5 flex items-center gap-2"
                >
                  {Icon && <Icon className="w-4 h-4 text-[#00E6FF]" strokeWidth={1.8} />}
                  <span
                    className="text-[#A8B4C0]"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}
                  >
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
