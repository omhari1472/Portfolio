'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// ---------------------------------------------------------------------------
// Knowledge base – keyword rules evaluated top-to-bottom, first match wins
// ---------------------------------------------------------------------------
type QA = { keywords: RegExp; response: string };

const qa: QA[] = [
  {
    keywords: /\b(hi|hello|hey|howdy|sup|greetings|yo)\b/i,
    response:
      "Hey! I'm Hari's portfolio bot. Ask me anything — his skills, experience, current job, projects, or how to get in touch. What are you curious about?",
  },
  {
    keywords: /\b(who (is|are) (hari|you)|about hari|introduce|tell me about (him|hari|yourself))\b/i,
    response:
      "Hari Om is a Full-Stack Developer & AI Engineer based in Bengaluru, India. He builds scalable web products and AI-powered tools — currently shipping a cold-email sequencer at Watevs (UK) and previously built Chrome extensions, LLM-powered features, and payment infrastructure at NxtJob.ai.",
  },
  {
    keywords: /\bwatevs\b|\bcold.?email\b|\boutreach\b|\bsequencer\b|\buk.?(startup|job|company)\b/i,
    response:
      "Hari joined Watevs in February 2026 — a UK-based ad-tech startup focused on cold-email outreach. He's building the Sequencer: a campaign engine that plans multi-step email sequences, dispatches them at scale via Go services, tracks replies in real time, and surfaces analytics in a Svelte dashboard. Stack: Go · Svelte · ElysiaJS · Bun · TypeScript.",
  },
  {
    keywords: /\bnxtjob\b|\bnxt.?job\b/i,
    response:
      "At NxtJob.ai (Sep 2024 – Jan 2026) Hari wore many hats. As an intern he built an ERP/CRM backend, a Google Calendar sync module, a Drive-like file system, and an AI job-scanner called Omega. After promotion to SDE he revamped Chrome extensions, added LLM+RAG chat-reply AI, built a LinkedIn Optimizer, and engineered a multi-gateway payments platform (Razorpay, Stripe, PhonePe…).",
  },
  {
    keywords: /\b(skill|tech|stack|language|tool|framework|know|use|proficient|expert)\b/i,
    response:
      "Hari's core stack:\n• Frontend: React, Next.js, Svelte, TypeScript, Tailwind CSS\n• Backend: Node.js, Go, ElysiaJS, Bun, REST & GraphQL APIs\n• AI/ML: LLMs, RAG, vector DBs, Python\n• Data: MySQL, PostgreSQL, Drizzle ORM\n• Cloud/Infra: AWS SES, S3, Docker\n• Tools: Git, Biome, Framer Motion\n\nHe picks the right tool for the job rather than dogmatically sticking to one ecosystem.",
  },
  {
    keywords: /\b(project|built|created|made|portfolio|side.?project|personal)\b/i,
    response:
      "Some highlights from Hari's project portfolio:\n• Omega — AI job-scanner that reduced resume-creation time by 90%\n• Multi-gateway payments platform (PhonePe, Razorpay, Stripe, Cashfree, Paytm)\n• LLM+RAG chat-reply AI for LinkedIn & WhatsApp extensions\n• Sequencer — cold-email campaign engine at Watevs\n• Google Drive-like file system with nested folders & live previews\n\nCheck the Projects section for the full list!",
  },
  {
    keywords: /\b(educat|degree|college|university|study|cgpa|grade|academic)\b/i,
    response:
      "Hari is pursuing his undergraduate degree with a CGPA of 8.4/10. He balances academics with full-time professional work, which shows in both his grades and his shipped products.",
  },
  {
    keywords: /\b(hackathon|competition|contest|prize|award|win)\b/i,
    response:
      "Hari has participated in multiple hackathons, building full-stack prototypes under tight deadlines. These experiences sharpened his ability to scope projects quickly and ship working demos. Check the Hackathons section for specific events and outcomes!",
  },
  {
    keywords: /\b(contact|hire|reach|email|linkedin|connect|available|freelance|open to)\b/i,
    response:
      "You can reach Hari at:\n• Email: omhari1472@gmail.com\n• LinkedIn: linkedin.com/in/om-hari\n• GitHub: github.com/omhari1472\n\nHe's open to interesting opportunities, collaborations, and conversations about tech.",
  },
  {
    keywords: /\b(location|where|based|live|city|country|india|bengaluru|uk|london)\b/i,
    response:
      "Hari is based in Bengaluru, India, and currently working remotely for Watevs, a UK startup. He's comfortable with distributed teams and async collaboration across time zones.",
  },
  {
    keywords: /\b(experience|year|senior|junior|career|job|work|history)\b/i,
    response:
      "Hari has 1.5+ years of professional experience:\n• Watevs (Feb 2026 – Present) — Software Engineer, cold-email platform\n• NxtJob.ai SDE (Jun 2025 – Jan 2026) — AI features & payments\n• NxtJob.ai Intern (Sep 2024 – May 2025) — ERP, CRM, calendar, file system\n\nHe started shipping production code from day one of his internship.",
  },
  {
    keywords: /\b(ai|llm|machine.?learning|ml|rag|gpt|openai|artificial intelligence|vector)\b/i,
    response:
      "AI is a major focus for Hari. He's built LLM + RAG pipelines for context-aware chat replies, created Omega (an AI job-scanner that analyses job descriptions and maps candidate skills), and worked with vector databases and embeddings. He treats AI as a practical engineering layer rather than a research curiosity.",
  },
  {
    keywords: /\b(go|golang)\b/i,
    response:
      "Hari uses Go at Watevs for high-throughput email dispatch services — Go's goroutines and low memory footprint make it ideal for bulk email delivery at scale. He enjoys writing idiomatic Go for performance-critical backend work.",
  },
  {
    keywords: /\b(svelte|sveltekit)\b/i,
    response:
      "Hari built the campaign management dashboard at Watevs with Svelte. He appreciates Svelte's minimal boilerplate and compile-time reactivity, which makes it great for data-heavy dashboards that need snappy UI updates.",
  },
  {
    keywords: /\b(elysia|elysium|bun)\b/i,
    response:
      "At Watevs Hari uses ElysiaJS (a Bun-native TypeScript HTTP framework) for internal API services. The Bun runtime's speed and ElysiaJS's end-to-end type safety are a great fit for a fast-moving startup.",
  },
  {
    keywords: /\b(thank|thanks|awesome|great|cool|nice|helpful)\b/i,
    response:
      "Happy to help! Feel free to ask anything else about Hari, or scroll through the portfolio for more details.",
  },
  {
    keywords: /\b(bye|goodbye|cya|see you|later|quit|close)\b/i,
    response: "Take care! Feel free to come back if you have more questions about Hari.",
  },
];

const SUGGESTIONS = [
  "Where does Hari work now?",
  "What's the Sequencer?",
  "What are his skills?",
  "How to contact Hari?",
];

function getResponse(text: string): string {
  for (const { keywords, response } of qa) {
    if (keywords.test(text)) return response;
  }
  return "I'm not sure about that one! Try asking about Hari's experience, skills, current job at Watevs, projects, or how to get in touch.";
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type Message = {
  id: number;
  role: 'user' | 'bot';
  text: string;
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: 'bot',
      text: "Hi! I'm Hari's portfolio assistant. Ask me about his experience, skills, projects, or how to reach him.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setShowSuggestions(false);
    const userMsg: Message = { id: Date.now(), role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: getResponse(trimmed),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700 + Math.random() * 400);
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send(input);
  }

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-accent-cyan flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            style={{ maxHeight: 'min(560px, calc(100dvh - 120px))' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 backdrop-blur-md border-b border-white/10">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg select-none">
                🤖
              </div>
              <div>
                <p className="font-semibold text-white text-sm leading-tight">Hari's Assistant</p>
                <p className="text-white/60 text-xs">Ask me anything about Hari</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white/60 text-xs">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#0d0d14]/95 backdrop-blur-md">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-br-sm'
                        : 'bg-white/8 border border-white/10 text-foreground rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/8 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-purple-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Suggested questions */}
              {showSuggestions && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-1 flex flex-wrap gap-2"
                >
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500/20 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 bg-[#0d0d14]/95 border-t border-white/8 backdrop-blur-md">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Hari…"
                className="flex-1 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/60 transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', colorScheme: 'dark' }}
              />
              <motion.button
                onClick={() => send(input)}
                disabled={!input.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-accent-cyan flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
