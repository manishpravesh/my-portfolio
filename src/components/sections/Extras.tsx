import React from "react";
import { FaBriefcase, FaUsers, FaTrophy } from "react-icons/fa";

const Extras = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-custom-red border-4 border-black rounded-3xl shadow-neo">
      <div id="extra" className="flex flex-col gap-8 relative z-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-custom-pink rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>

        <div className="bg-custom-green px-8 py-3 border-4 border-black w-fit shadow-neo rounded-full">
          <h2 className="text-3xl font-shrikhand text-black">
            EXPERIENCE & LEADERSHIP 💼
          </h2>
        </div>

        <div className="bg-white border-4 border-black p-6 rounded-[3rem] border-b-8 border-r-8 relative hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="text-3xl text-custom-red" />
            <h3 className="text-2xl font-shrikhand">
              SDE Intern @ Entrepreneur Growth Labs
            </h3>
          </div>
          <p className="text-sm font-mono bg-custom-blue text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-4 shadow-sm">
            Bangalore | Aug 2025 - Dec 2025
          </p>
          <ul className="list-disc list-inside space-y-2 text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
            <li>
              Built and deployed micro backend services integrating LinkedIn
              APIs, OAuth2, and webhooks for secure multi-account automation.
            </li>
            <li>
              Optimized automated hiring pipelines, improving screening by{" "}
              <span className="font-bold">60%</span> and reducing manual effort
              by <span className="font-bold">80%</span>.
            </li>
            <li>
              Delivered multiple client-facing backend features with reliable
              API integrations and on-time production rollout.
            </li>
          </ul>
        </div>

        <div className="bg-white border-4 border-black p-6 rounded-[3rem] border-b-8 border-r-8 relative hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-3xl text-custom-blue" />
            <h3 className="text-2xl font-shrikhand">
              Club Lead @ PyC Coding Club
            </h3>
          </div>
          <p className="text-sm font-mono bg-custom-green text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-4 shadow-sm">
            IIIT Bhagalpur | Sep 2024 - Present
          </p>
          <ul className="list-disc list-inside space-y-2 text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
            <li>
              Mentored <span className="font-bold">40+ students</span> in
              competitive programming and DSA.
            </li>
            <li>
              Organized <span className="font-bold">5+ coding contests</span>{" "}
              with <span className="font-bold">200+ participants</span>.
            </li>
            <li>
              Selected as a PyC core member among top 20 from 300+ applicants.
            </li>
          </ul>
        </div>
      </div>

      <div
        id="achievements"
        className="flex flex-col gap-8 relative z-10 lg:mt-20"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-custom-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="bg-black px-8 py-3 border-4 rounded-4xl border-white w-fit">
          <h2 className="text-3xl font-shrikhand text-custom-yellow">
            ACHIEVEMENTS 🏆
          </h2>
        </div>

        <div className="bg-custom-yellow text-black border-4 p-8 rounded-[3rem] border-b-8 border-r-8 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black animate-pulse"></div>

          <ul className="space-y-4 relative z-10">
            <li className="flex gap-3 items-start">
              <FaTrophy className="mt-1 text-xl text-custom-red" />
              <span className="font-medium">
                Achieved <span className="font-bold">3★ on CodeChef</span>,
                demonstrating strong algorithmic and optimization skills.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaTrophy className="mt-1 text-xl text-custom-red" />
              <span className="font-medium">
                Reached <span className="font-bold">1850+ rating</span> and{" "}
                <span className="font-bold">Knight</span> level on LeetCode.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaTrophy className="mt-1 text-xl text-custom-red" />
              <span className="font-medium">
                Solved <span className="font-bold">1000+</span> problems across
                LeetCode, CodeChef, and Codeforces.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaTrophy className="mt-1 text-xl text-custom-red" />
              <span className="font-medium">
                Secured <span className="font-bold">61st rank</span> out of
                1,900 participants (Top 8.2%) in CodeChef Starters 197 Div3.
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <FaTrophy className="mt-1 text-xl text-custom-red" />
              <span className="font-medium">
                Selected as PyC Coding Club core member among top 20 out of
                300+ applicants at IIIT Bhagalpur.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Extras;
