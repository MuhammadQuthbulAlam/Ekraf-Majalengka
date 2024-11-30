"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Indikator loading
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, action: "login" }),
    });

    setLoading(false);
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      const data = await res.json();
      alert(
        data.error ||
          "Login gagal, silakan periksa kembali username dan password."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-sm border-2 border-slate-400 w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          LOGIN
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-white border-2 border-slate-400 text-slate-700 rounded-sm placeholder-slate-300 outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white border-2 border-slate-400 text-slate-700 rounded-sm placeholder-slate-300 outline-none focus:ring-2 focus:ring-slate-400 transition"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 bg-sky-400 text-white font-bold rounded-sm border-2 border-slate-400 hover:opacity-90 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
