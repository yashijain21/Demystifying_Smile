import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Send, Bot, User, Phone, MapPin, RefreshCw, AlertCircle, HelpCircle } from "lucide-react";
import { ChatMessage } from "../types";

export default function AIAdvisor() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Starter FAQ suggestions
  const starters = [
    "Do dental implants hurt during or after placement?",
    "How much do clear aligners cast in Sector 53 Noida?",
    "What services are covered in a Smile Makeover?",
    "How does a single-sitting Root Canal Treatment (RCT) work?"
  ];

  useEffect(() => {
    // Initial welcome message from the assistant
    setMessages([
      {
        role: "model",
        text: "👋 Warm greetings! I am the **Demystifying Smiles Virtual Dental Advisor**. I am here to help answer your restorative and cosmetic dental questions, guide you on what treatments look like, and prepare you for your visit to our clinic in Sector 53, Noida. \n\n*Please note: while I can share comprehensive dental information, an in-person clinical checkup by Dr. is required to establish a secure treatment plan. What are your dental worries or dental goals today?*",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, submitting]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || submitting) return;

    const userMessage: ChatMessage = {
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages // Pass conversational history to maintain state
        })
      });

      if (!res.ok) throw new Error("Consultation API returned an error");
      const data = await res.json();

      setMessages(prev => [...prev, {
        role: "model",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);

    } catch (err: any) {
      console.error(err);
      setMessages(prev => [...prev, {
        role: "model",
        text: "My apologies! I encountered a network interruption connecting to our AI server. Please feel free to retry, or call our front desk directly at **+91 98910 73008** for prompt human help!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <section className="py-10 md:py-16 bg-logo-blue-50/40 min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        
        {/* Header Block card */}
        <div className="bg-slate-900 rounded-t-3xl p-6 border-b border-slate-800 shadow-lg text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-logo-blue-500/15 text-logo-blue-500 flex items-center justify-center border border-logo-blue-500/30">
              <Sparkles className="w-6 h-6 animate-pulse text-logo-orange-500" />
            </div>
            <div>
              <h2 className="text-white font-display text-lg sm:text-xl font-bold flex items-center gap-1.5">
                <span>AI Clinical Consultation Assistant</span>
              </h2>
              <p className="text-xs text-slate-400">Demystifying Smiles Dental Portal • Instant Help</p>
            </div>
          </div>

          <div className="text-right text-xs font-mono text-slate-400">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-logo-blue-500/10 text-logo-blue-700 border border-logo-blue-500/15">
              <span className="w-1.5 h-1.5 rounded-full bg-logo-blue-500 animate-ping"></span>
              Gemini-3.5 Active
            </span>
          </div>
        </div>

        {/* Main Messenger Arena Container */}
        <div className="bg-white border-x border-slate-150 shadow-md flex flex-col h-[500px]">
          
          {/* Chat log scrollarea */}
          <div 
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-left"
          >
            {messages.map((msg, idx) => {
              const isAi = msg.role === "model";
              return (
                <div 
                  key={idx} 
                  className={`flex gap-3 max-w-[85%] ${isAi ? "mr-auto" : "ml-auto flex-row-reverse"}`}
                >
                  {/* Avatar Initials indicator */}
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-bold text-xs ${
                    isAi 
                      ? "bg-logo-blue-50 text-logo-blue-700 border border-logo-blue-100" 
                      : "bg-slate-900 text-white"
                  }`}>
                    {isAi ? <Bot className="w-4 h-4 text-logo-orange-600" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Body speech bubble */}
                  <div className="space-y-1">
                    <div 
                      className={`rounded-2xl px-4.5 py-3 text-sm leading-relaxed ${
                        isAi 
                          ? "bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100" 
                        : "bg-logo-orange-500 text-white rounded-tr-none shadow-sm shadow-logo-orange-500/10"
                      }`}
                    >
                      {/* Very simple markdown parser for bold styling used by Gemini */}
                      {msg.text.split("\n").map((para, pIdx) => (
                        <p key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
                          {para.split("**").map((textPart, tpIdx) => {
                            if (tpIdx % 2 === 1) {
                              return <strong key={tpIdx} className="font-extrabold">{textPart}</strong>;
                            }
                            return textPart;
                          })}
                        </p>
                      ))}
                    </div>
                    {msg.timestamp && (
                      <span className={`block text-[9px] text-slate-400 font-mono tracking-wide ${isAi ? "text-left" : "text-right"}`}>
                        {msg.timestamp}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Submitting Loading indicator */}
            {submitting && (
              <div className="flex gap-3 max-w-[80%] mr-auto items-center">
                <div className="w-8 h-8 rounded-full bg-logo-blue-50 text-logo-blue-700 flex items-center justify-center border border-logo-blue-100">
                  <Bot className="w-4 h-4 text-logo-orange-600" />
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-none px-4.5 py-3 text-xs text-slate-500 font-medium flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-logo-blue-600" />
                  <span>Dr. Assistant is formulating a clinical response...</span>
                </div>
              </div>
            )}
          </div>

          {/* Prompt FAQ suggestions footer */}
          <div className="bg-slate-50 p-4 border-t border-slate-100 text-left">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Suggested patient FAQ:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {starters.map((starter, qIdx) => (
                <button
                  key={qIdx}
                  type="button"
                  onClick={() => handleSendMessage(starter)}
                  disabled={submitting}
                  className="bg-white hover:bg-logo-blue-50 border border-slate-200 hover:border-logo-blue-200/50 text-[#1e293b] text-xs py-1.5 px-3 rounded-full shadow-xs transition-all text-left max-w-full truncate cursor-pointer disabled:opacity-50"
                  id={`starter-faq-${qIdx}`}
                >
                  {starter}
                </button>
              ))}
            </div>
          </div>

          {/* Form input controls footer */}
          <form 
            onSubmit={handleFormSubmit} 
            className="p-4 bg-white border-t border-slate-150 flex gap-2 items-center"
          >
            <input 
              type="text" 
              required
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={submitting}
              placeholder="Ask anything about implants, teeth whitening, aligners cost, pain..."
              className="flex-1 bg-slate-50 border border-slate-200 focus:bg-white focus:border-logo-blue-600 rounded-xl px-4 py-3 text-sm focus:outline-none text-slate-800"
              id="ai-chat-input"
            />
            <button
              type="submit"
              disabled={submitting || !inputText.trim()}
              className="bg-logo-orange-600 hover:bg-logo-orange-700 disabled:opacity-40 p-3 h-11 w-11 rounded-xl text-white shadow-md flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              aria-label="Send message"
              id="ai-send-btn"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

        {/* Warning notification footer */}
        <div className="bg-slate-100 border-x border-b border-slate-150 rounded-b-3xl p-4.5 text-left text-xs text-slate-500 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>
            <strong>Disclaimer:</strong> The dental virtual advisor has been designed using generative model AI 
            (Gemini 3.5 Flash). It serves purely for educational guidance. For dental symptoms, tooth pain, or swelling, emergency clinical evaluation can be booked instantly inside our clinic at Noida using our scheduling form.
          </span>
        </div>

      </div>
    </section>
  );
}
