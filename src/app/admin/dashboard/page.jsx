"use client";

import { useState } from "react";
import ProjectsTab from "./ProjectsTab";
import MessagesTab from "./MessagesTab";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("projects");

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-5 py-2 rounded-lg font-medium text-sm transition-all
            ${activeTab === "projects"
              ? "bg-yellow-500 text-black"
              : "bg-zinc-800 text-white"
            }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-5 py-2 rounded-lg font-medium text-sm transition-all
            ${activeTab === "messages"
              ? "bg-yellow-500 text-black"
              : "bg-zinc-800 text-white"
            }`}
        >
          Messages
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "projects" && <ProjectsTab />}
      {activeTab === "messages" && <MessagesTab />}

    </div>
  );
}