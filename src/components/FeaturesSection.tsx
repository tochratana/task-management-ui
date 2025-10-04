import React from "react";
import { Cloud, Clock, FileText, Info, Users, Edit3 } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
      title: "Use it everywhere",
      description:
        'Notes stay updated across all your devices, automatically and in real time. There\'s no "sync" button: it just works.',
    },
    {
      icon: <Edit3 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
      title: "Stay organized",
      description: "Add tags to find notes quickly with instant searching.",
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
      title: "Work together",
      description:
        "Share a to-do list, post some instructions, or publish your notes online.",
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
      title: "Go back in time",
      description:
        "Notes are backed up with every change, so you can see what you noted last week or last month.",
    },
    {
      icon: <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
      title: "Markdown support",
      description: "Write, preview, and publish your notes in Markdown format.",
    },
    {
      icon: <Info className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
      title: "It's free",
      description:
        "Apps, backups, syncing, sharing – it's all completely free.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Comprehensive underneath,
            <br className="hidden sm:block" /> simple on the surface
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-left group hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
