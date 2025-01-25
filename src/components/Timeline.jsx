import React, { useState } from "react";

const Resume = ({ resumeData }) => {
  const [activeFilter, setActiveFilter] = useState("education");

  // Combine and process timeline items
  const timelineItems = [
    ...(resumeData?.education || []).map((item) => ({
      ...item,
      type: "education",
      date: item.YearOfPassing,
      title: item.UniversityName,
      subtitle: item.specialization,
      description: item.Achievements,
    })),
    ...(resumeData?.work || []).map((item) => ({
      ...item,
      type: "work",
      date: item.YearOfLeaving,
      title: item.CompanyName,
      subtitle: item.specialization,
      description: item.Achievements,
    })),
    ...(resumeData?.experience || []).map((item) => ({
      ...item,
      type: "experience",
      date: item.YearOfLeaving,
      title: item.Role,
      subtitle: item.CompanyName,
      description: item.Description,
    })),
  ].sort((a, b) => b.date - a.date);

  const filteredItems = timelineItems.filter(
    (item) => item.type === activeFilter
  );

  const formatDate = (item) => {
    if (item.type === "experience" || item.type === "work") {
      return `${item.MonthOfStarting} ${item.YearOfStarting} - ${item.MonthOfLeaving} ${item.YearOfLeaving}`;
    }
    return `${item.MonthOfLeaving || item.MonthOfPassing} ${item.date}`;
  };

  const handleFullResume = () => {
    //linked to drive with full resume
    window.open(
      "https://drive.google.com/file/d/1s1e97GqTHW2a_RZO-8hsRvoF_vVzV0d2/view?usp=sharing"
    );
  };
  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 mt-5"
      id="resume"
    >
      <div className="mb-6">
        <div className="flex justify-between items-center border-b">
          <div className="flex space-x-2">
            {["education", "work", "experience"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-medium capitalize transition-colors ${
                  activeFilter === filter
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <button
            onClick={handleFullResume}
            className="px-3 py-2 font-medium capitalize transition-colors bg-orange-400 text-white rounded-full hover:bg-orange-500"
          >
            See full resume
          </button>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        {/* Timeline line - centered within its space */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 transform translate-x-[-1px] bg-orange-400"></div>

        {/* Timeline items */}
        <div className="space-y-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot - adjusted positioning */}
              <div
                className={`absolute left-4 top-6 w-3 h-3 rounded-full transform -translate-x-1/2 bg-orange-400`}
              ></div>

              {/* Content */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                  <span>{item.subtitle}</span>
                  <span className="text-gray-400">&bull;</span>
                  <span className="italic">{formatDate(item)}</span>
                </div>
                <p className="mt-2 text-gray-700">{item.description}</p>

                {/* Type indicator */}
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full text-white bg-orange-400`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
