import { Link } from "react-router-dom";
import { api } from "../api/api";

export default function Signup() {
  const submit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      await api.post("/signup", { name, email, password });
      alert("Signup successful! Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert("Signup failed. Email may already exist.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1f2937]/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-500/30 border border-white/10 p-8">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          📝 Sign Up
        </h2>

        {/* ✅ FORM IS REQUIRED */}
        <form onSubmit={submit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg bg-[#374151] text-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg bg-[#374151] text-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg bg-[#374151] text-white"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
