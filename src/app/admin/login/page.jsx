"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin/dashboard"); // redirect to dashboard
      } else {
        setError(data.message || "Login failed");
      }

    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-zinc-400 text-sm mt-2">Opp Code Vision Dashboard</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="text-zinc-400 text-sm mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gmail.com"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-zinc-400 text-sm mb-2 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 transition-all duration-300 text-black font-semibold py-3 rounded-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}