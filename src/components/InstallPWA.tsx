"use client";
import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const ModernPWASection: React.FC = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [promptInstall, setPromptInstall] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Check if running in a PWA
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Check if the browser supports service workers
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setPromptInstall(e as BeforeInstallPromptEvent);
      setSupportsPWA(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!promptInstall) return;

    promptInstall.prompt();
    await promptInstall.userChoice;
    setPromptInstall(null);
  };

  return (
    <section className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Install Our App
        </h2>
        <p className="text-gray-400 mb-10 sm:mb-14 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
          Get instant access with our Progressive Web App.
          <br className="hidden sm:block" />
          Works seamlessly across all your devices.
        </p>

        <div className="max-w-md mx-auto">
          {isInstalled ? (
            <div className="bg-gradient-to-r from-gray-800 to-gray-750 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-500/20 rounded-full p-3">
                  <svg
                    className="w-8 h-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">App Installed</h3>
              <p className="text-gray-400 text-sm">
                {`You're all set! The app is ready to use.`}
              </p>
            </div>
          ) : supportsPWA ? (
            <button
              onClick={handleInstall}
              className="group relative w-full bg-gradient-to-r from-gray-800 to-gray-750 hover:from-gray-700 hover:to-gray-650 border-2 border-gray-700 hover:border-blue-500 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full p-4 transition-colors duration-300">
                  <Download className="w-10 h-10 text-blue-400 group-hover:text-blue-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    Click to install
                  </div>
                  <div className="text-2xl font-bold">Progressive Web App</div>
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  Fast, reliable, and works offline
                </div>
              </div>
            </button>
          ) : (
            <div className="bg-gradient-to-r from-gray-800 to-gray-750 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-500/20 rounded-full p-3">
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Installation Pending
              </h3>
              <p className="text-gray-400 text-sm">
                The install option will appear once your browser meets the
                criteria.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            ✨ No app store required • 🚀 Instant updates • 💾 Works offline
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernPWASection;
