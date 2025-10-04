import React from "react";

const DeviceMockup: React.FC = () => {
  return (
    <div className="w-full">
      <div
        className="relative w-full bg-no-repeat bg-cover flex items-center"
        style={{
          backgroundImage:
            "url('https://simplenote.com/wp-content/uploads/2020/07/img_simplenote_hero.png')",
          backgroundPosition: "0 0",
          minHeight: "500px",
        }}
      >
        <div className="max-w-md px-6">
          {/* Your content goes here */}
          <div className="flex gap-4">
            {/* Example button placeholder */}
            <button className="bg-white text-gray-900 px-4 py-2 rounded shadow">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
