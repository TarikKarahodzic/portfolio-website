"use client";

import { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Rocket,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";
import {
  FaReact,
  FaWordpress,
  FaGithub,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiTypescript,
  SiPython,
  SiDotnet,
  SiSharp,
  SiMongodb,
  SiExpress,
  SiExpo,
  SiPostman,
  SiReactquery,
} from "react-icons/si";
import TechIcon from "./TechIcon";

const tabs = [
  { id: "about", label: "About Me", icon: <User size={18} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
  { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
  { id: "skills", label: "Skills", icon: <Rocket size={18} /> },
];

const techStack = [
  // --- 1. Frontend & UI Development ---
  { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
  { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-600" },
  { icon: <FaReact />, label: "React", color: "text-sky-500" },
  { icon: <SiReactquery />, label: "React Native", color: "text-sky-500" },
  { icon: <SiExpo />, label: "Expo", color: "text-gray-900" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-black" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-400" },

  // --- 2. Backend & Server-Side (Node, PHP, .NET) ---
  { icon: <FaNodeJs />, label: "Node.js", color: "text-green-500" },
  { icon: <SiExpress />, label: "Express.js", color: "text-gray-800" },
  { icon: <SiPython />, label: "Python", color: "text-yellow-500" },
  { icon: <FaJava />, label: "Java", color: "text-red-600" },
  { icon: <FaPhp />, label: "PHP", color: "text-indigo-600" },
  { icon: <SiSharp />, label: "C#", color: "text-purple-600" },
  { icon: <SiDotnet />, label: ".NET", color: "text-violet-700" },

  // --- 3. Databases & BaaS (Backend as a Service) ---
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-600" },
  { icon: <SiSupabase />, label: "Supabase", color: "text-green-500" },

  // --- 4. CMS & Version Control ---
  { icon: <FaWordpress />, label: "WordPress", color: "text-blue-700" },
  { icon: <SiPostman />, label: "Postman", color: "text-orange-500" },
  { icon: <FaGithub />, label: "GitHub", color: "text-gray-700" },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      {/* Tabs */}
      <div className="grid grid-cols-4 mb-8 gap-2 bg-orange-50 rounded-full max-w-5xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center rounded-full px-6 py-5 transition duration-500 font-medium
                ${
                  activeTab === tab.id
                    ? "bg-moss/90 text-white font-semibold"
                    : "text-moss hover:bg-moss/20"
                }`}
          >
            <span className="w-5 h-5 md:mr-2 flex items-center">
              {tab.icon}
            </span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-12">
        {activeTab === "about" && (
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* Left: text content */}
            <div className="flex-1 max-w-5xl bg-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Software Developer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                Recent Information Technology graduate with a comprehensive
                skill set in full-stack web development (frontend & backend),
                mobile development, software development, and testing. I am a
                driven, continuous learner eager to apply my knowledge and
                creativity on innovative projects within a dynamic team.
              </p>

              <div className="flex flex-col gap-y-6 text-gray-800">
                <div className="flex">
                  <span className="font-semibold w-24">Name:</span>
                  <span>Tarik Karahodžić</span>
                </div>
                <Link href="tel:+387644035111">
                  <div className="flex">
                    <span className="font-semibold w-24">Phone:</span>
                    <span>+387 64 403 5111</span>
                  </div>
                </Link>
                <Link href="mailto:karahodzictarik@outlook.com">
                  <div className="flex">
                    <span className="font-semibold w-24">Email:</span>
                    <span>karahodzictarik@outlook.com</span>
                  </div>
                </Link>
                <Link href="https://linkedin.com/in/tarik-karahodzic/">
                  <div className="flex">
                    <span className="font-semibold w-24">LinkedIn:</span>
                    <span>tarik-karahodzic</span>
                  </div>
                </Link>
                <div className="flex">
                  <span className="font-semibold w-24">Language:</span>
                  <span>
                    Bosnian (Fluent), English (C1), German (A1), French (A1)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            {/* Grid 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 01.2025 - Present
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  WordPress Developer
                </h3>
                <p className="text-gray-600 text-sm">
                  FabLab | Sarajevo, Bosnia and Herzegovina
                </p>
                <p className="text-gray-700 mt-4">
                  Successfully converting design mockups from Figma into
                  high-performance, fully responsive WordPress websites
                  utilizing Elementor and custom themes. My focus is on
                  designing and developing sites from scratch with strong
                  attention to SEO, mobile responsiveness and speed. I am
                  customizing themes, extending functionality with third-party
                  plugins and widgets and managing the full lifecycle from site
                  launch and maintenance to efficiently implementing client
                  revisions.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 09.2025 - 10.2025
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  Backend Developer
                </h3>
                <p className="text-gray-600 text-sm">
                  Pontis Technology (Internship) | Zagreb, Croatia
                </p>
                <p className="text-gray-700 mt-4">
                  I focused on full-stack development, building Web API from
                  scratch by mastering the fundamentals of C# and the .NET
                  libraries. This education included advanced topics such as
                  implementing SOLID principles. The entire process leveraged
                  MSSQL and SSMS for database creation, all managed efficiently
                  using Git and source control.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 10.2023 - 02.2024
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  Laboratory Demonstrator
                </h3>
                <p className="text-gray-600 text-sm">
                  International Burch University | Ilidža, Bosnia and
                  Herzegovina
                </p>
                <p className="text-gray-700 mt-4">
                  Provided instructional support in Object-Oriented Programming,
                  primarily assisting the professor and offering direct guidance
                  to students to help them successfully complete their coding
                  assignments.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 02.2023- 08.2023
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  Social Media Manager
                </h3>
                <p className="text-gray-600 text-sm">
                  Marvolt | Prague, Czechia
                </p>
                <p className="text-gray-700 mt-4">
                  Drove brand visibility and engagement by managing and
                  executing effective digital marketing campaigns across Meta
                  Ads (Facebook and Instagram) and Google Ads. This role
                  involved strategic planning, creating compelling ad copy and
                  creative, curating daily content and ensuring strict brand
                  consistency. I was also responsible for tracking performance,
                  analyzing campaign data and adjusting strategies to maximize
                  results.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 02.2022- 05.2023
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 text-sm">
                  Vectrum d.o.o. | Sarajevo, Bosnia and Herzegovina
                </p>
                <p className="text-gray-700 mt-4">
                  For Vectrum company, I was responsible for the full lifecycle
                  of their website, including its design, development, and
                  ongoing maintenance, utilizing foundational web technologies
                  like HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            {/* Grid 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 2021 - 2024
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  Bachelor of Information Technology
                </h3>
                <p className="text-gray-600 text-sm">
                  International Burch University | Ilidža, Bosnia and Herzegovina
                </p>
                <p className="text-gray-700 mt-4">
                  My Bachelor of Information Technology from International Burch
                  University (2021–2024) provided a comprehensive technical
                  foundation, emphasizing Core Programming (databases, data
                  structures, algorithms), Software Development (OOP, software
                  engineering), and Web Development. The curriculum integrated
                  essential professional skills, including team leadership and
                  the application of modern methodology like Agile, reinforced
                  by practical experience and real-world problem-solving.
                </p>
              </div>

              <div className="p-6 rounded-lg shadow bg-white">
                <div className="flex items-center text-moss text-sm font-bold pb-1">
                  <CalendarDays className="mr-1" /> 2023 - 2023
                </div>
                <h3 className="font-semibold text-xl pb-1">
                  Bachelor of Computer Science
                </h3>
                <p className="text-gray-600 text-sm">
                  Riga Technical University | Riga, Latvia
                </p>
                <p className="text-gray-700 mt-4">
                  The mobility was an Erasmus+ Student Exchange project
                  conducted in Riga, Latvia. This is a prestigious European
                  Union program that funds study and training periods abroad.
                  RTU$apos;s Computer Systems programs generally focus on software
                  engineering, computer systems development, database
                  technologies and potentially fundamentals of AI.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-center gap-12 flex-wrap mx-auto">
              {techStack.map((tech, index) => (
                <TechIcon
                  key={index}
                  icon={tech.icon}
                  label={tech.label}
                  color={tech.color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
