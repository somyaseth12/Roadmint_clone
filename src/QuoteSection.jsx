export default function QuoteSection() {
  return (
    <div className="bg-black text-white px-4 py-16 flex flex-col items-center space-y-12">
      {/* Quote */}
      <div className="text-center max-w-2xl">
        <p className="text-gray-400 text-xl italic mb-2">Quote</p>
        <p className="text-2xl md:text-3xl font-semibold italic leading-relaxed">
          “The weak can never forgive. Forgiveness is the attribute of the strong.”
        </p>
        <p className="mt-4 text-sm font-medium text-gray-300">— Mahatma Gandhi</p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-3xl space-y-4">
        {/* Daily Tip */}
        <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-md">
          <p className="text-blue-300 font-semibold mb-2">💡 Daily Tip :</p>
          <p className="text-lg font-medium">A well-named function is better than a long comment.</p>
        </div>

        {/* Fun Developer Stat */}
        <div className="bg-[#1e1e1e] rounded-xl p-6 shadow-md">
          <p className="text-purple-300 font-semibold mb-2">🧠 Fun Developer Stat :</p>
          <p className="text-lg font-medium">
            55% of developers read changelogs like bedtime stories.
          </p>
        </div>

        
      </div>
    </div>
  );
}
