import React from "react";
import { Badge } from "../../../ui/badge";

const RecommendedTopics = () => {
  const topics = [
    "Media",
    "Docker",
    "Math",
    "Race",
    "Photography",
    "Data Engineering",
    "Music",
  ];

  return (
    <div>
      <div>
        <h1 className="text-primarygrey text-[16px]  font-bold leading-[20px] second-font mb-6">
          Recommended topics
        </h1>
      </div>
      <div className="flex flex-wrap gap-2 max-w-md mx-auto cursor-pointer mb-16">
        {topics.map((topic, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-2 second-font text-sm font-normal"
          >
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTopics;
