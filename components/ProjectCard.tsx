import React from "react";

interface ProjectProps {
  imageUrl: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[]; // e.g., ["Node", "Express", "Next.js", "React", "React-Router", "Firebase"]
  liveLink?: string;
  repoLink?: string;
  // Add more links if needed
}

const ProjectCard: React.FC<ProjectProps> = ({
  imageUrl,
  title,
  description,
  features,
  techStack,
  liveLink,
  repoLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow-md p-6 max-w-4xl">
      {/* Left - Image Container */}
      <div className="md:w-1/2 rounded-md border border-gray-300 bg-green-100 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="md:w-1/2 flex flex-col justify-between px-6 py-4">
        <div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <ul className="list-decimal list-inside mb-4 space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-green-100 border border-green-400 rounded text-green-700 text-sm font-semibold cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition"
            >
              Live Link
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow-md transition"
            >
              Repo Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
