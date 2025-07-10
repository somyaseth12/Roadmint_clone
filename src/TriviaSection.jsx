import React, { useState } from "react";

export default function TriviaSection() {
  const [selected, setSelected] = useState(null);
  const correctAnswer = "Nougat";

  const answers = ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow", "Nougat"];

  return (
    <div className="bg-[#1e1e1e] text-white px-6 py-10 rounded-xl shadow-lg max-w-4xl mx-auto my-12">
      <p className="text-blue-300 text-lg font-semibold mb-4">💡 Daily Trivia :</p>
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        What is the code name for the mobile operating system Android 7.0?
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {answers.map((answer) => (
          <button
            key={answer}
            onClick={() => setSelected(answer)}
            className={`px-6 py-3 rounded-md font-medium transition ${
              selected === answer
                ? answer === correctAnswer
                  ? "bg-green-600"
                  : "bg-red-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
