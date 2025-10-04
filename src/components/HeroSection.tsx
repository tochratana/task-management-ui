import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          The simplest way to
          <br className="hidden sm:block" /> keep notes
        </h1>
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed px-4">
          All your notes, synced on all your devices. Set Simplerote now for
          iOS,
          <br className="hidden sm:block" /> Android, Mac, Windows, Linux, or in
          your browser.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded font-medium
                duration-200 text-sm sm:text-base"
        >
          Sign up now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
