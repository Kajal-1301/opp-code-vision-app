"use client";

import { useState, useEffect } from "react";

export default function MessagesTab() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    setMessages(data.messages || []);
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/contact/${id}`, { method: "DELETE" });
    setMessages(messages.filter((m) => m._id !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      {messages.length === 0 ? (
        <p className="text-zinc-400">No messages yet.</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="bg-zinc-900 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">{msg.name}</h3>
                <p className="text-zinc-400 text-sm">{msg.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-zinc-600 text-xs">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="text-red-400 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-yellow-500 text-sm mt-2 font-medium">{msg.subject}</p>
            <p className="text-zinc-300 text-sm mt-1">{msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
}