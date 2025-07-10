// Required package installations (run in your terminal):
// npm install framer-motion

import { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  "Web Development",
  "Data Structures and Algorithms",
  "Machine Learning",
  "Artificial Intelligence",
  "Python Programming",
  "C++ Programming",
  "System Design",
  "Operating Systems",
  "Computer Networks",
  "Database Management Systems",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Mobile App Development",
  "Blockchain Development",
  "Game Development",
  "Computer Architecture",
  "Linux and Shell Scripting",
  "Frontend Development (HTML, CSS, JS, React)",
  "Backend Development (Node.js, Django, Spring Boot)",
  "Software Engineering Principles",
  "Git and Version Control",
  "Data Science",
  "Natural Language Processing (NLP)",
  "Quantum Computing (Beginner Level)"
];

export default function RoadmintHeroClone() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-12 px-4">
        <h1 className="text-5xl font-bold mb-4">Roadmap</h1>
        <p className="text-center max-w-xl text-gray-300 mb-8">
          Make sure your topic is clear, specific, and well-defined — the more precise it is, the better the roadmap you'll get!
        </p>

        {/* Search Box */}
        <div className="flex items-center w-full max-w-xl rounded-full px-2 py-1 bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500">
          <input
            type="text"
            className="flex-1 bg-black text-white px-4 py-3 focus:outline-none placeholder-gray-400 border-none shadow-none rounded-l-full"
            placeholder="Topic Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-full hover:opacity-90">
            🔍
          </button>
        </div>

        {/* Topic Tags */}
        <div className="mt-10 max-w-4xl flex flex-wrap justify-center gap-3">
          {topics.map((topic, idx) => (
            <span
              key={idx}
              className="bg-black border border-slate-600 text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition"
              
            >
              {topic}
            </span>

          ))}
        </div>
      </div>
    </div>
  );
}
