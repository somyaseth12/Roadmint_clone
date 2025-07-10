const features = [
  {
    icon: "⌨️",
    title: "No Sign-Up Needed",
    description: "Jump straight in—no account required.",
  },
  {
    icon: "$",
    title: "Forever Free",
    description: "Completely free to use. No fees. No paywalls. Ever.",
  },
  {
    icon: "🧭",
    title: "Personalized Daily Steps",
    description: "Your topic is broken down into clear, focused steps for each day.",
  },
  {
    icon: "❤️",
    title: "Progress Tracking",
    description: "Mark topics as 'learned' and watch your progress grow over time.",
  },
  {
    icon: "⬇️",
    title: "Export to CSV",
    description: "Download your entire roadmap and progress as a CSV file anytime.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Breakdown",
    description: "Smart topic segmentation—crafted with the help of AI.",
  },
  {
    icon: "💠",
    title: "Clean, Minimal UI",
    description: "No clutter. No distractions. Just focused learning.",
  },
  {
    icon: "☁️",
    title: "Offline Access",
    description: "Use your roadmap anytime—even without the internet.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-black text-white px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#111] border border-gray-800 p-6 rounded-lg shadow-md text-left hover:bg-[#1a1a1a] transition"
          >
            <div className="text-2xl mb-3">{feature.icon}</div>
            <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
