import React, { useState } from "react";

const faqs = [
  {
    question: "Is this app really free?",
    answer: "Yes! Roadmint is completely free to use — no hidden fees, no paywalls.",
  },
  {
    question: "Do I need to sign up to use this?",
    answer: "No sign-up is required. You can get started immediately.",
  },
  {
    question: "Can I customize the learning pace or days?",
    answer: "Absolutely! You can adjust your learning pace anytime to fit your schedule.",
  },
  {
    question: "Do I need to understand JSON?",
    answer: "Not at all! Everything is handled for you behind the scenes.",
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, your progress is saved locally and visually tracked.",
  },
  {
    question: "Will I lose my data if I refresh?",
    answer: "Nope. Your progress is saved in local storage so it persists even after refreshing.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 mb-8">
          Answers to the most common questions about the Roadmint app, learning pace, and features.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e1e] rounded-lg p-4 cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
              </div>
              {openIndex === idx && (
                <p className="mt-3 text-gray-400 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
