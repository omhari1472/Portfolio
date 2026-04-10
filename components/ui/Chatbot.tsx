'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, RotateCcw, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// ---------------------------------------------------------------------------
// Knowledge base – keyword rules evaluated top-to-bottom, first match wins
// ---------------------------------------------------------------------------
type QA = { keywords: RegExp; response: string };

const qa: QA[] = [
  {
    keywords: /\b(hi|hello|hey|howdy|sup|greetings|yo)\b/i,
    response:
      "Hey! I'm Hari's portfolio assistant. Ask me anything — his skills, experience, current role, projects, or how to get in touch.",
  },
  {
    keywords: /\b(who (is|are) (hari|you)|about hari|introduce|tell me about (him|hari|yourself))\b/i,
    response:
      "Hari Om is an AI Systems Engineer & Backend Engineer based in Bengaluru, India — currently building distributed infrastructure and AI agents at OutEngine, a UK startup. He built Surtur (100k+ email/day dispatch engine) and an AI orchestration agent that routes a single prompt across 4 services. Previously at NxtJob.ai where he shipped Chrome extensions, LLM+RAG features, and payment infrastructure.",
  },
  {
    keywords: /\b(surtur|email.?engine|dispatch.?engine|warmup.?engine|email.?warmup)\b/i,
    response:
      "Surtur is a distributed email dispatch and warmup engine Hari built at OutEngine. It processes 100,000+ emails/day across hundreds of rotating mailboxes using a 5-queue Redis/BullMQ architecture (send, interact, action, analytics, monitoring). Features include connection pooling with per-account token lifecycle management, inbox placement simulation, bounce detection, real-time seed health scoring, per-mailbox deliverability analytics, and webhook-based alerting. There's also a SvelteKit ops dashboard in active production use.",
  },
  {
    keywords: /\b(ai.?agent|orchestrat|ai.?orchestrat|natural.?language.?prompt|single.?prompt)\b/i,
    response:
      "Hari is building an AI orchestration agent at OutEngine that collapses a 4-service outbound sales pipeline into a single natural language prompt. Instead of manually working through data sourcing → contact enrichment → inbox warmup → sequence execution (~2 hours of setup), a customer types one sentence and the agent autonomously routes across all four services — replacing what was previously a multi-tool, multi-step manual workflow.",
  },
  {
    keywords: /\boutengine\b|\bcold.?email\b|\boutreach\b|\bsequencer\b|\buk.?(startup|job|company)\b/i,
    response:
      "Hari joined OutEngine in February 2026 — a UK-based startup. He built Surtur, a distributed email dispatch and warmup engine processing 100,000+ emails/day, and is building an AI orchestration agent that routes a single prompt across 4 services. Stack: NestJS · TypeScript · Redis · BullMQ · IMAP · OAuth2 · SvelteKit.",
  },
  {
    keywords: /\bnxtjob\b|\bnxt.?job\b/i,
    response:
      "At NxtJob.ai (Sep 2024 – Jan 2026) Hari wore many hats. As an intern he built an ERP/CRM backend, a Google Calendar sync module, a Drive-like file system, and the Omega AI resume engine. After promotion to SDE he revamped Chrome extensions, added LLM+RAG chat-reply AI, built a LinkedIn Optimizer, and engineered a multi-gateway payments platform (Razorpay, Stripe, PhonePe, Cashfree, Paytm).",
  },
  {
    keywords: /\b(skill|tech|stack|language|tool|framework|know|use|proficient|expert)\b/i,
    response:
      "Hari's core stack:\n• Backend: NestJS, Node.js, TypeScript, REST APIs\n• Distributed Systems: Redis, BullMQ, IMAP, OAuth2, connection pooling\n• AI/ML: LLMs, RAG, vector DBs, tool routing, OpenAI\n• Frontend: React, Next.js, SvelteKit, Tailwind CSS\n• Data: MySQL, PostgreSQL, Drizzle ORM\n• Cloud/Infra: AWS SES, S3, Docker\n\nHis current focus is distributed backend systems and AI agent orchestration.",
  },
  {
    keywords: /\b(project|built|created|made|portfolio|side.?project|personal)\b/i,
    response:
      "Key projects Hari has shipped:\n• Surtur — distributed email engine, 100k+ emails/day, 5-queue Redis/BullMQ pipeline\n• AI Orchestration Agent — one natural language prompt routes across 4 services, replacing ~2hrs of manual setup\n• NxtJob Chrome Extension — 3,000+ installs, 4.6★, LLM+RAG chat replies\n• Omega — LLM+RAG resume engine, 90% time reduction for 500+ users\n• Google Calendar NPM package — 150+ downloads in first 4 days\n\nCheck the Projects section for the full list!",
  },
  {
    keywords: /\b(educat|degree|college|university|study|cgpa|grade|academic)\b/i,
    response:
      "Hari is pursuing his undergraduate degree with a CGPA of 8.4/10. He balances academics with full-time professional work — shipping production systems while maintaining strong grades.",
  },
  {
    keywords: /\b(hackathon|competition|contest|prize|award|win)\b/i,
    response:
      "Hari has participated in multiple hackathons, building full-stack prototypes under tight deadlines. Top 8 finish is among his highlights. These experiences sharpened his ability to scope projects quickly and ship working demos.",
  },
  {
    keywords: /\b(contact|hire|reach|email|linkedin|connect|available|freelance|open to)\b/i,
    response:
      "You can reach Hari at:\n• Email: omhari1472@gmail.com\n• LinkedIn: linkedin.com/in/om-hari\n• GitHub: github.com/omhari1472\n\nHe's open to senior backend & AI roles at US/UK startups. IST (UTC+5:30) — available for UK/US overlap.",
  },
  {
    keywords: /\b(location|where|based|live|city|country|india|bengaluru|uk|london)\b/i,
    response:
      "Hari is based in Bengaluru, India, and currently working remotely for OutEngine, a UK startup. He's comfortable with distributed teams and async collaboration — available for UK/US time overlap.",
  },
  {
    keywords: /\b(experience|year|senior|junior|career|job|work|history)\b/i,
    response:
      "Hari has 1.5+ years of professional experience:\n• OutEngine (Feb 2026 – Present) — Software Engineer; built Surtur (100k+ emails/day) and an AI orchestration agent\n• NxtJob.ai SDE (Jun 2025 – Jan 2026) — AI features, LLM+RAG, multi-gateway payments\n• NxtJob.ai Intern (Sep 2024 – May 2025) — Omega AI resume engine, ERP/CRM backend, AWS SES automation\n\nHe's been shipping production code from day one.",
  },
  {
    keywords: /\b(ai|llm|machine.?learning|ml|rag|gpt|openai|artificial intelligence|vector)\b/i,
    response:
      "AI is a major focus for Hari. He's built LLM + RAG pipelines for context-aware chat replies, created Omega (an AI job-scanner that analyses job descriptions and maps candidate skills), and is currently building an AI orchestration agent that routes natural language prompts across 4 services. He treats AI as a practical engineering layer, not a research curiosity.",
  },
  {
    keywords: /\b(redis|bullmq|queue|distributed)\b/i,
    response:
      "Distributed systems are Hari's core strength. At OutEngine he architected a 5-queue Redis/BullMQ pipeline (send, interact, action, analytics, monitoring) for Surtur — processing 100k+ emails/day with connection pooling, token lifecycle management, and per-mailbox deliverability scoring.",
  },
  {
    keywords: /\b(nestjs|nest\.js)\b/i,
    response:
      "Hari uses NestJS as his primary backend framework — it's the backbone of Surtur at OutEngine. He values NestJS's DI system and modular architecture for building production-grade services at scale.",
  },
  {
    keywords: /\b(svelte|sveltekit)\b/i,
    response:
      "Hari built the ops dashboard at OutEngine with SvelteKit — covering campaign management, sequence builder, seed monitor, and weekly performance reporting. He appreciates SvelteKit's compile-time reactivity for data-heavy dashboards.",
  },
  {
    keywords: /\b(thank|thanks|awesome|great|cool|nice|helpful)\b/i,
    response:
      "Happy to help! Feel free to ask anything else, or scroll through the portfolio for more details.",
  },
  {
    keywords: /\b(bye|goodbye|cya|see you|later|quit|close)\b/i,
    response: "Take care! Feel free to come back if you have more questions about Hari.",
  },
];

const SUGGESTIONS = [
  "Where does Hari work now?",
  "What is Surtur?",
  "What's the AI agent?",
  "How to contact Hari?",
];

function getResponse(text: string): string {
  for (const { keywords, response } of qa) {
    if (keywords.test(text)) return response;
  }
  return "I'm not sure about that one! Try asking about Hari's experience, skills, current role at OutEngine, projects like Surtur, or how to get in touch.";
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type Message = {
  id: number;
  role: 'user' | 'bot';
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: 0,
  role: 'bot',
  text: "Hi! I'm Hari's portfolio assistant. Ask me about his experience, skills, projects, or how to reach him.",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setHasNewMessage(false);
    }
  }, [isOpen]);

  // Show notification badge after 3s to nudge visitors
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setHasNewMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  function clearChat() {
    setMessages([INITIAL_MESSAGE]);
    setShowSuggestions(true);
    setInput('');
  }

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
    }, 600 + Math.random() * 500);
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') send(input);
  }

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-shadow"
        style={{
          background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
          boxShadow: isOpen ? '0 0 40px rgba(249,115,22,0.5)' : '0 0 24px rgba(249,115,22,0.3)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        {/* Notification badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 flex items-center justify-center"
              style={{ borderColor: '#0A0A0A' }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.span>
          )}
        </AnimatePresence>

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
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden"
            style={{
              maxHeight: 'min(560px, calc(100dvh - 120px))',
              border: '1px solid rgba(249,115,22,0.2)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(249,115,22,0.1)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 backdrop-blur-md border-b"
              style={{
                background: 'linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(234,88,12,0.08) 100%)',
                borderColor: 'rgba(249,115,22,0.15)',
              }}
            >
              {/* Avatar — HO initials */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 select-none"
                style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)', fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: 'white', fontSize: '16px', letterSpacing: '0.04em' }}
              >
                HO
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight" style={{ color: '#F0EDE8' }}>
                  Hari&apos;s Assistant
                </p>
                <p className="text-xs truncate" style={{ color: '#888' }}>
                  Ask me anything about Hari
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: 'status-pulse 2s ease-in-out infinite' }} />
                  <span className="text-xs" style={{ color: '#666' }}>Online</span>
                </div>
                {/* Clear chat */}
                {messages.length > 1 && (
                  <motion.button
                    onClick={clearChat}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="transition-colors"
                    style={{ color: '#555' }}
                    title="Clear chat"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </motion.button>
                )}
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 backdrop-blur-md"
              style={{ background: 'rgba(10,10,10,0.96)' }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[84%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                    style={
                      msg.role === 'user'
                        ? {
                            background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
                            color: 'white',
                            borderBottomRightRadius: '4px',
                          }
                        : {
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(249,115,22,0.12)',
                            color: '#C8C5C0',
                            borderBottomLeftRadius: '4px',
                          }
                    }
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
                  <div
                    className="px-4 py-3 rounded-2xl flex gap-1.5 items-center"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(249,115,22,0.12)',
                      borderBottomLeftRadius: '4px',
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#F97316' }}
                        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
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
                    <motion.button
                      key={s}
                      onClick={() => send(s)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-xs px-3 py-1.5 rounded-full transition-colors"
                      style={{
                        border: '1px solid rgba(249,115,22,0.3)',
                        color: '#FB923C',
                        background: 'rgba(249,115,22,0.06)',
                      }}
                    >
                      {s}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-3 py-3 backdrop-blur-md border-t"
              style={{ background: 'rgba(10,10,10,0.96)', borderColor: 'rgba(249,115,22,0.1)' }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Hari…"
                className="flex-1 rounded-xl px-3.5 py-2.5 text-sm placeholder:text-white/30 focus:outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(249,115,22,0.15)',
                  color: '#F0EDE8',
                  colorScheme: 'dark',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.15)'; }}
              />
              <motion.button
                onClick={() => send(input)}
                disabled={!input.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)' }}
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
