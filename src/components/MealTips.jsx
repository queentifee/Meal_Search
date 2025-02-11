import React from "react";

function MealTips() {
  return (
    <div className="relative mx-auto px-6 lg:px-20 py-10">
      {/* Parent Container: Flexbox for 70%-30% layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - 70% */}
        <div className="w-full lg:w-[60%]">
          {/* Title */}
          <h2 className="bebas-neue-goals text-left my-3 text-2xl font-bold text-black">
            MEAL TIPS
          </h2>
          {/* Line Section */}
          <div className="relative w-full">
            <div className="w-full h-0.5 bg-gray-200"></div>
            <div className="w-32 mb-0.5 h-0.5 bg-red-500"></div>
          </div>
        </div>

        {/* Right Section - 30% */}
        <div className="w-full lg:w-[40%]">
          {/* Title */}
          <h2 className="bebas-neue-goals text-left my-3 text-2xl font-bold text-black">
            HEALTH TIPS
          </h2>
          {/* Line Section */}
          <div className="relative w-full">
            <div className="w-full h-0.5 bg-gray-200"></div>
            <div className="w-32 mb-0.5 h-0.5 bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealTips;
