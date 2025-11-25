import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import {
  generateProjectExplanation,
  generateWelcomeMessage,
} from "../../utils/projectExplanations";

interface Message {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

export function ChatBot({ className = "" }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);

  // INITIAL BOT MESSAGE (dynamic from generateWelcomeMessage)
  const [messages, setMessages] = useState<Message[]>(() => {
    const welcome = generateWelcomeMessage();
    return [
      {
        id: "1",
        role: "bot",
        content: welcome.fullMessage,
        timestamp: new Date(),
      },
    ];
  });

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(Math.random().toString(36).substring(7));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // Keyboard shortcut toggle
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // FUNCTION: Decide whether user is asking about a project
  const detectProjectQuery = (text: string) => {
    const keywords = ["project", "work", "portfolio", "experience"];
    return keywords.some((kw) => text.toLowerCase().includes(kw));
  };

  // FUNCTION: Handle sending messages
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userText = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      let botResponse = "";

      if (detectProjectQuery(userText)) {
        // Choose a random project title
        const projectOptions = [
          "AI-Powered Chat Interface",
          "Machine Learning Pipeline",
          "Full-Stack Web Application",
          "Data Visualization Dashboard",
          "Cloud-Native Solution",
          "Generative AI Project",
        ];
        const projectName =
          projectOptions[Math.floor(Math.random() * projectOptions.length)];

        const explanation = generateProjectExplanation(projectName);

        botResponse = `One of Saumik’s notable projects is **${projectName}**. ${explanation}  
Would you like details about tech stack, challenges, or results?`;
      } else {
        // Normal backend chat logic
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId.current,
            message: userText,
            history: messages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) throw new Error("Chat API error");

        const data = await res.json();
        botResponse =
          data.reply ||
          "I’m sorry — I didn’t fully understand that. Try rephrasing.";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content:
          "I'm having trouble connecting right now. The backend chat service might be down — try again shortly.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-6 bottom-6 z-50 w-16 h-16 rounded-full flex items-center justify-center bg-[#00E6FF] hover:bg-[#00c4e0] transition-all shadow-lg ${className}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-[#0A0F14]" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="w-7 h-7 text-[#0A0F14]" strokeWidth={2} />
        )}
      </button>

      {/* CHAT WINDOW - Positioned at bottom right */}
      {/* CHAT WINDOW - Bottom Right Position */}
{isOpen && (
  <div
    className="fixed z-40 rounded-2xl flex flex-col backdrop-blur-sm bg-[#0D1218]/90 border border-white/10 shadow-2xl"
    style={{
      width: "320px",
      height: "400px",
      maxWidth: "calc(100vw - 3rem)",
      right: '1rem',
      bottom: '5.5rem', // Positioned above the chat button
      position: 'fixed'
    }}
  >
          {/* HEADER */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div>
              <h3 className="text-[#E8F0F8] font-heading">SaumikBot</h3>
              <p className="text-[#6B7685] text-sm">
                Ask about projects & AI engineering
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#A8B4C0] hover:text-[#00E6FF]"
            >
              <X className="w-5 h-5" strokeWidth={1.8} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-[#00E6FF] text-black"
                      : "glass-panel text-[#E8F0F8]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-panel p-2 rounded-2xl text-[#A8B4C0] text-sm">
                  Generating response…
                </div>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message…"
                className="flex-1 px-3 py-1.5 text-sm rounded-lg bg-white/5 text-[#E8F0F8] placeholder:text-[#6B7685] outline-none border border-white/10 focus:border-[#00E6FF]/50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 rounded-lg glass-panel text-[#00E6FF] hover:bg-white/10 disabled:opacity-50"
              >
                <Send className="w-5 h-5" strokeWidth={1.8} />
              </button>
            </div>

            <p className="text-[#6B7685] mt-2 text-[0.75rem]">
              Nothing is stored — each message is ephemeral.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
