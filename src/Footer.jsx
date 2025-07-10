export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        {/* Logo + Text */}
        <div className="flex justify-center items-center gap-4">
          <div className="text-2xl font-bold">
            <span className="text-white">Road</span>
            <span className="text-green-400">mint</span>
          </div>
          <div className="text-sm text-gray-400 border-l border-gray-600 pl-4">
            All rights reserved © 2025 Roadmint
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Get a personalized free AI-powered learning roadmap in seconds. No sign-up & Account needed. Free forever. Track your progress and export your learning data.
        </p>
      </div>
    </footer>
  );
}
