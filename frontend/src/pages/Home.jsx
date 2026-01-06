import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-white">

      {/*  NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-20 bg-[#1f2937]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
            🤖 ALPHA - College Assistant
          </h1>

          <div className="flex gap-3">
            <Link
              to="/signup"
              className="text-sm text-gray-300 hover:text-white"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="px-4 py-1.5 bg-indigo-600 rounded-lg text-sm hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/*  HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="relative max-w-4xl w-full bg-[#1f2937]/90 rounded-3xl p-10 text-center shadow-2xl shadow-indigo-500/40 border border-white/10">

          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl blur-3xl bg-indigo-600/20 -z-10" />

          <div className="text-6xl mb-4">🤖</div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            ALPHA: Your Smart College Assistant
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            ALPHA provides instant, accurate answers to all admissions,
            curriculum, and administrative queries using a powerful
            <span className="text-white font-semibold"> Node.js backend </span>
            and an
            <span className="text-white font-semibold"> n8n AI workflow</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-indigo-600 rounded-xl text-lg font-semibold shadow-lg shadow-indigo-600/50 hover:bg-indigo-700 transition"
            >
              🔑 Start Chatting
            </Link>

            <Link
              to="/signup"
              className="px-8 py-4 rounded-xl border border-indigo-500 text-indigo-400 text-lg hover:bg-indigo-500/10 transition"
            >
              📝 Join Now
            </Link>
          </div>
        </div>
      </section>

      {/*  FEATURES */}
      <section className="pb-20 px-6">
        <h3 className="text-3xl font-bold text-center text-indigo-400 mb-12">
          Key Features of the System
        </h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-[#1f2937]/80 rounded-2xl p-6 border border-white/10 shadow-xl hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">💬</div>
            <h4 className="text-xl font-semibold mb-3">
              Real-time AI Chatbot
            </h4>
            <p className="text-gray-400 text-sm">
              The core functionality is powered by the chatbot page which
              connects to an n8n workflow for instant conversational AI
              responses and maintains session history.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#1f2937]/80 rounded-2xl p-6 border border-white/10 shadow-xl hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">🧑‍💻</div>
            <h4 className="text-xl font-semibold mb-3">
              User Registration & Login
            </h4>
            <p className="text-gray-400 text-sm">
              Users sign up and log in securely using JWT authentication.
              User data is handled by Node.js and stored securely in the
              database.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#1f2937]/80 rounded-2xl p-6 border border-white/10 shadow-xl hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-semibold mb-3">
              Administrative Control
            </h4>
            <p className="text-gray-400 text-sm">
              A protected admin dashboard allows administrators to view
              all registered users fetched securely from the backend.
            </p>
          </div>

        </div>

        <p className="text-center text-gray-500 text-xs mt-10">
          Note: Main actions adapt based on your login status.
        </p>
      </section>
    </div>
  );
}
