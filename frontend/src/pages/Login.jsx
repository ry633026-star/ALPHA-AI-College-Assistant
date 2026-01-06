import { Link } from "react-router-dom";
import { api } from "../api/api";

export default function Login() {
  const submit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await api.post("/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      window.location.href =
        res.data.role === "admin" ? "/admin" : "/chat";
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* 🔐 Login Card */}
      <div className="w-full max-w-md bg-[#1f2937]/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-500/30 border border-white/10 p-8">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
          🔑 Login
        </h2>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg bg-[#374151] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg bg-[#374151] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/40"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          New user?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
