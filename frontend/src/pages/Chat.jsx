import { useState } from "react";
import { api } from "../api/api";
import { useEffect, useRef } from "react";


export default function Chat() {
const [messages, setMessages] = useState([
  { from: "bot", text: "👋 Hello! I’m your ALPHA College Assistant." },
]);

const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);
const [errorLock, setErrorLock] = useState(false);

const messagesEndRef = useRef(null);

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);


const sendMessage = async () => {
  if (!input.trim() || loading) return;

  const userText = input;

  setMessages((prev) => [...prev, { from: "user", text: userText }]);
  setInput("");
  setLoading(true);
  setErrorLock(false);

  try {
    const res = await fetch(
      "http://localhost:5678/webhook/YOUR_WEBHOOK_ID/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionStorage.getItem("sessionId"),
          question: userText,
        }),
      }
    );

    const raw = await res.text();

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      throw new Error("Invalid n8n response");
    }

    const reply =
      data.answer || data.output || "🤖 I didn’t understand that.";

    setMessages((prev) => [...prev, { from: "bot", text: reply }]);
  } catch (err) {
    if (!errorLock) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server error. Please try again later." },
      ]);
      setErrorLock(true);
    }
  } finally {
    setLoading(false);
  }
};


  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/*  TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-indigo-600 flex items-center justify-between px-6 text-white shadow z-30">

        <h1 className="text-lg font-bold">ALPHA</h1>
        <button
          onClick={logout}
          className="bg-white text-indigo-600 px-4 py-1.5 rounded-md text-sm font-semibold"
        >
          Logout
        </button>
      </header>

      {/*  CHAT CONTAINER */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-3xl bg-[#1f2937]/90 rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">

     {/*  MESSAGES AREA */}
<div className="flex-1 p-6 space-y-4 overflow-y-auto">
  {messages.map((msg, i) => (
    <div
      key={i}
      className={`max-w-[75%] px-4 py-3 rounded-xl text-sm ${
        msg.from === "bot"
          ? "bg-[#374151] text-white self-start"
          : "bg-indigo-600 text-white self-end ml-auto"
      }`}
    >
      {msg.text}
    </div>
  ))}

  {/*  AUTO-SCROLL TARGET (MUST BE LAST) */}
  <div ref={messagesEndRef} />
</div>


          {/* Input */}
          <div className="p-4 bg-[#111827] flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-[#1f2937] text-white px-4 py-3 rounded-lg outline-none border border-white/10 focus:ring-2 focus:ring-indigo-500"
            />

            <button
              onClick={sendMessage}
              className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700"
            >
              Send
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
