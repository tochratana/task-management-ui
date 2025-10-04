import React from "react";

interface Testimonial {
  quote: string;
  source: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "If you're not using Simplenote, you're missing out.",
      source: "TechCrunch",
    },
    {
      quote:
        "If you're looking for a cross-platform note-taking tool with just enough frills, it's hard to look beyond Simplenote.",
      source: "MacWorld",
    },
    {
      quote:
        "If you want a truly distraction-free environment then you can't do better than Simplenote for your note-taking needs.",
      source: "Zapier",
    },
  ];

  return (
    <section className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16">
          What people are saying
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-200"
            >
              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">
                {testimonial.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
