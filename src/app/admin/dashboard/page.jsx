"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [editingId, setEditingId] = useState(null); // track which project is being edited

    // Fetch all projects
    const fetchProjects = async () => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data.projects || []));
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Logout handle

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/admin/login";
    };

    // Add or Edit project
    const handleSubmit = async () => {
        if (editingId) {
            // EDIT existing project
            await fetch(`/api/projects/${editingId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, category, description, icon }),
            });
            setEditingId(null);
        } else {
            // ADD new project
            await fetch("/api/projects", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, category, description, icon }),
            });
        }

        // Reset form
        setTitle("");
        setCategory("");
        setDescription("");
        setIcon("");

        fetchProjects();
    };

    // Fill form with project data for editing
    const handleEdit = (project) => {
        setEditingId(project._id);
        setTitle(project.title);
        setCategory(project.category);
        setDescription(project.description);
        setIcon(project.icon);
    };

    // Cancel edit
    const handleCancel = () => {
        setEditingId(null);
        setTitle("");
        setCategory("");
        setDescription("");
        setIcon("");
    };

    // Delete project
    const handleDelete = async (id) => {
        await fetch(`/api/projects/${id}`, { method: "DELETE" });
        setProjects(projects.filter((p) => p._id !== id));
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">

            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                    Logout
                </button>
            </div>

            {/* Form */}
            <div className="bg-zinc-900 p-6 rounded-xl mb-8 flex flex-col gap-3 max-w-md">
                <h2 className="font-semibold text-lg">
                    {editingId ? "Edit Project" : "Add Project"}
                </h2>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-zinc-800 px-4 py-2 rounded-lg text-white focus:outline-none"
                >
                    <option value="">Select Category</option>
                    <option value="web">Web</option>
                    <option value="mobile">Mobile</option>
                    <option value="branding">Branding</option>
                </select>

                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
                />

                <select
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    className="bg-zinc-800 px-4 py-2 rounded-lg text-white focus:outline-none"
                >
                    <option value="">Select Icon</option>
                    <option value="BsDisplay">Monitor (Web)</option>
                    <option value="TbWorld">Globe (Web)</option>
                    <option value="BsPhone">Phone (Mobile)</option>
                    <option value="BsController">Controller (Mobile)</option>
                    <option value="IoColorPaletteOutline">Palette (Branding)</option>
                    <option value="TbVectorBezierCircle">Vector (Branding)</option>
                </select>

                <div className="flex gap-3">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-yellow-500 text-black font-semibold py-2 rounded-lg"
                    >
                        {editingId ? "Update Project" : "Add Project"}
                    </button>

                    {editingId && (
                        <button
                            onClick={handleCancel}
                            className="flex-1 bg-zinc-700 text-white font-semibold py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project._id} className="bg-zinc-900 p-4 rounded-xl">
                        <span className="text-yellow-500 text-xs uppercase">{project.category}</span>
                        <h3 className="font-semibold mt-1">{project.title}</h3>
                        <p className="text-zinc-400 text-sm mt-1">{project.description}</p>
                        <p className="text-zinc-600 text-xs mt-1">Icon: {project.icon}</p>

                        <div className="flex gap-4 mt-3">
                            <button
                                onClick={() => handleEdit(project)}
                                className="text-yellow-400 text-sm"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(project._id)}
                                className="text-red-400 text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}