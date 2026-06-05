"use client";

import { useState, useEffect } from "react";

export default function TestimonialsTab() {
  const [testimonials, setTestimonials] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "", initials: "", role: "", review: "", tag: "",
  });

  const fetchTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setTestimonials(data.testimonials || []);
  };

  useEffect(() => { fetchTestimonials(); }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editingId) {
      await fetch(`/api/testimonials/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setEditingId(null);
    } else {
      await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }
    setForm({ name: "", initials: "", role: "", review: "", tag: "" });
    fetchTestimonials();
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      initials: item.initials,
      role: item.role,
      review: item.review,
      tag: item.tag,
    });
  };

  const handleDelete = async (id) => {
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    setTestimonials(testimonials.filter((t) => t._id !== id));
  };

  return (
    <div>
      {/* Form */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-8 flex flex-col gap-3 max-w-md">
        <h2 className="font-semibold text-lg">
          {editingId ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <input name="name" value={form.name} onChange={handleChange}
          placeholder="Client Name"
          className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
        />

        <input name="initials" value={form.initials} onChange={handleChange}
          placeholder="Initials (e.g. PS)"
          className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
        />

        <input name="role" value={form.role} onChange={handleChange}
          placeholder="Role (e.g. CEO, TechCorp)"
          className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
        />

        <input name="tag" value={form.tag} onChange={handleChange}
          placeholder="Tag (e.g. AI Chatbot)"
          className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
        />

        <textarea name="review" value={form.review} onChange={handleChange}
          placeholder="Review"
          rows={3}
          className="bg-zinc-800 px-4 py-2 rounded-lg text-white placeholder-zinc-500 focus:outline-none resize-none"
        />

        <div className="flex gap-3">
          <button onClick={handleSubmit}
            className="flex-1 bg-yellow-500 text-black font-semibold py-2 rounded-lg"
          >
            {editingId ? "Update" : "Add Testimonial"}
          </button>
          {editingId && (
            <button onClick={() => setEditingId(null)}
              className="flex-1 bg-zinc-700 text-white font-semibold py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Testimonials List */}
      <div className="flex flex-col gap-4">
        {testimonials.map((item) => (
          <div key={item._id} className="bg-zinc-900 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-zinc-400 text-sm">{item.role}</p>
              </div>
              <span className="text-yellow-500 text-xs">{item.tag}</span>
            </div>
            <p className="text-zinc-300 text-sm mt-2 italic">"{item.review}"</p>
            <div className="flex gap-4 mt-3">
              <button onClick={() => handleEdit(item)} className="text-yellow-400 text-sm">Edit</button>
              <button onClick={() => handleDelete(item._id)} className="text-red-400 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}