'use client';


import { motion } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ChatWindow({ onClose }) {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Initial message
    useEffect(() => {
        // Optional: Pre-fill greeting if empty? The array is empty by default which shows the "Hi" placeholder in render.
    }, []);

    const [input, setInput] = useState(''); // Local state management

    // ... (refs and effects)



    // ... (render)

    const messagesEndRef = useRef(null);



    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Manual Handler to bypass Form blocking
    // Manual Handler to bypass Form blocking
    // Manual Handler to bypass Form blocking
    const handleSend = async (e) => {
        e?.preventDefault();
        if (!input?.trim()) return;

        const userMsg = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg] })
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            let assistantContent = data.content;

            // Magic Command Parser: [[SCROLL: section]]
            const scrollMatch = assistantContent.match(/\[\[SCROLL: (.*?)\]\]/);
            if (scrollMatch) {
                const sectionId = scrollMatch[1];
                // alert("Auto-Scrolling to: " + sectionId); 
                const element = document.getElementById(sectionId);

                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
                // Hide the command from the user interface
                const cleanContent = assistantContent.replace(/\[\[SCROLL: .*?\]\]/, '').trim();
                assistantContent = cleanContent;
            }

            const assistantMsg = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: assistantContent,
            };

            setMessages(prev => [...prev, assistantMsg]);
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Error: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend(e);
        }
    };

    const handleCustomInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] flex flex-col bg-[#1a0b2e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-Outfit">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shadow-inner">
                        <Bot className="w-6 h-6 text-white" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a0b2e] rounded-full"></div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">AI Assistant</h3>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Online
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-2 opacity-60">
                        <Bot className="w-12 h-12 mb-2" />
                        <p>Hi! I'm Wijith's AI Assistant.</p>
                        <p className="text-sm">Ask me about his skills, projects, or experience!</p>
                    </div>
                )}

                {messages.map((m) => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                ? 'bg-purple-600 text-white rounded-br-none'
                                : 'bg-white/10 text-gray-200 border border-white/5 rounded-bl-none'
                                }`}
                        >
                            {m.content}
                        </div>
                    </motion.div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                            <span className="text-xs text-gray-400">Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input - DIV ONLY (No Form) */}
            <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="relative flex items-center">
                    <input
                        value={input || ''}
                        onChange={handleCustomInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="w-full pl-4 pr-12 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-black/30 transition-all font-light"
                    />
                    <button
                        type="button"
                        onClick={handleSend}
                        className="absolute right-2 p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading || !input?.trim()}
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
