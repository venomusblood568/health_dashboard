import React from "react";

const activityData = [
  { day: "Mon", bars: [40, 20, 32] },
  { day: "Tues", bars: [64, 48, 36] },
  { day: "Wed", bars: [30, 25, 18] },
  { day: "Thurs", bars: [38, 28, 42] },
  { day: "Fri", bars: [64, 50, 40] },
  { day: "Sat", bars: [36, 24, 32] },
  { day: "Sun", bars: [28, 18, 38] },
];

const colors = ["bg-cyan-400", "bg-gray-300", "bg-indigo-600"];

const ActivityChart = () => {
  return (
    <div className="bg-[#f6f9ff] rounded-2xl p-6 shadow w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1f1f3e]">Activity</h2>
        <p className="text-sm text-gray-400">3 appointment on this week</p>
      </div>

      <div className="flex justify-between items-end h-48">
        {activityData.map(({ day, bars }, i) => (
          <div key={day} className="flex flex-col items-center space-y-2 relative">
            {/* Vertical Line Behind Bars */}
            <div className="absolute h-full w-0.5 bg-gray-200 -z-10"></div>

            {/* Bar Group */}
            <div className="flex flex-col justify-end items-center space-y-1 h-full">
              {bars.map((height, j) => (
                <div
                  key={j}
                  className={`${colors[j % colors.length]} w-2 rounded-full`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>

            {/* Day Label */}
            <span className="text-xs text-gray-500 mt-2">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
