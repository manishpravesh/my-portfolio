import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  tools,
  description,
  githubLink,
  liveLink,
  color,
}: any) => (
  <div
    className={`bg-white border-4 border-black rounded-3xl  p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}
  >
    <div
      className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}
    ></div>

    <div className="mt-4 flex justify-between items-start mb-4">
      <div>
        <h3 className="text-2xl font-shrikhand">{title}</h3>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse">
          PROJECT
        </span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 text-white p-2 rounded-lg hover:bg-black transition-colors"
          aria-label={`${title} GitHub`}
        >
          <FaGithub />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label={`${title} Live Demo`}
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {tools.map((t: string) => (
        <span
          key={t}
          className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md"
        >
          {t}
        </span>
      ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
      {description.map((point: string, i: number) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "CoRide - A Ride Pooling Platform",
      color: "bg-custom-blue",
      tools: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "PostGIS",
        "Redis",
        "Socket.io",
        "Mapbox",
        "Razorpay",
      ],
      githubLink: "https://github.com/manishpravesh/coRide",
      liveLink: "https://co-ride-two.vercel.app/",
      description: [
        "Built 30+ RESTful APIs with JWT auth and role-based access control, including PostGIS-powered proximity matching under 50ms.",
        "Implemented event-driven architecture with Socket.io and Redis pub/sub for real-time ride tracking across 50+ concurrent connections.",
        "Optimized PostgreSQL queries with GiST indexing and Redis caching, reducing average API response time by 40%.",
      ],
    },
    {
      title: "LAW-GPT",
      color: "bg-custom-purple",
      tools: [
        "React",
        "Node.js",
        "Python",
        "HuggingFace",
        "LLM",
        "NLP",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Stripe",
        "JWT",
      ],
      githubLink: "https://github.com/manishpravesh/lwGPT",
      liveLink: "https://lw-gpt.vercel.app/",
      description: [
        "Built a SaaS platform with JWT authentication and 3-tier role-based access control for 5+ user entities with persistent sessions.",
        "Integrated Stripe Checkout and webhook-driven payment verification across subscription tiers with automatic role upgrades.",
        "Implemented Redis-backed usage limiting with TTL counters to enforce per-plan quotas and reduce database load by 30%.",
      ],
    },
    {
      title: "DevTinder",
      color: "bg-custom-red",
      tools: [
        "React",
        "Node.js",
        "Express",
        "JavaScript",
        "MongoDB",
        "Socket.io",
      ],
      githubLink: "https://github.com/manishpravesh/devtinder",
      liveLink: "https://devtinder-iota.vercel.app/",
      description: [
        "Architected a full-stack platform with swipe-based developer matching, secured by JWT and cookie-based authentication.",
        "Built a college-aware, skill-driven recommendation engine for precise developer discovery.",
        "Implemented real-time messaging and notifications with Socket.io on top of scalable REST APIs and MongoDB persistence.",
      ],
    },
    {
      title: "LANDIT AI",
      color: "bg-custom-pink",
      tools: [
        "Python",
        "Flask",
        "REST APIs",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Web Scraping",
        "NLP",
      ],
      githubLink: "https://github.com/manishpravesh/res-coldMail-Gen",
      liveLink: "https://landit-ai.vercel.app/",
      description: [
        "Built an NLP pipeline to process unstructured resume and job-posting data into actionable outreach insights at scale.",
        "Designed persistent feedback loops to capture user interactions for qualitative analysis and continuous product iteration.",
        "Developed robust ingestion pipelines with explicit error handling and documented future-ready product requirements.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 px-4 mx-auto max-w-7xl  bg-custom-yellow border-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo transform -rotate-1">
          <h2 className="text-3xl font-shrikhand text-white">PROJECTS 🏗️</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
