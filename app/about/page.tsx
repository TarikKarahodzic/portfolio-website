import { JSX } from "react";
import { events, Events } from "../../data/events";
import { FaReact, FaWordpress, FaGithub, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiTypescript, SiPython, SiDotnet, SiSharp } from "react-icons/si";
import { MdVolunteerActivism } from "react-icons/md";
import TechIcon from "../../components/TechIcon";

type TagStyle = {
  grad: string;
  text: string;
  ring: string;
  icon: JSX.Element;
};

const techStack = [
  { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
  { icon: <SiPython />, label: "Python", color: "text-yellow-500" },
  { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-400" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-black" },
  { icon: <FaReact />, label: "React", color: "text-sky-500" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-400" },
  { icon: <FaWordpress />, label: "WordPress", color: "text-blue-700" },
  { icon: <SiSupabase />, label: "Supabase", color: "text-green-500" },
  { icon: <FaPhp />, label: "PHP", color: "text-indigo-600" },
  { icon: <SiSharp />, label: "C#", color: "text-purple-600" },
  { icon: <SiDotnet />, label: ".NET", color: "text-violet-700" },
  { icon: <FaGithub />, label: "GitHub", color: "text-gray-700" },
];

const tagStyles: Record<string, TagStyle> = {
  Education: {
    grad: "from-sky-500 to-indigo-500",
    text: "text-sky-900",
    ring: "ring-sky-300/60",
    icon: <FaGraduationCap />,
  },
  "Work Experience": {
    grad: "from-emerald-500 to-teal-500",
    text: "text-emerald-900",
    ring: "ring-emerald-300/60",
    icon: <FaBriefcase />,
  },
  Volunteering: {
    grad: "from-amber-500 to-orange-500",
    text: "text-amber-900",
    ring: "ring-amber-300/60",
    icon: <MdVolunteerActivism />,
  },
};

export default function Page() {
  return (
    <main>
      <section className="md:px-6">
        <div className="mx-auto max-w-7xl pt-30 pb-16">
          <h1 className="text-6xl px-6 font-bold pb-3 text-moss">About me</h1>
          <p className="text-base px-6 text-charcoal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-14 pb-16">
        {/* Center gradient line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -ml-[2px] h-full w-1 bg-gradient-to-b from-indigo-400 via-blue-400 to-emerald-400 opacity-70"
        />
        {/* Soft glow behind the line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-20 bg-gradient-to-b from-indigo-400/10 via-blue-400/10 to-emerald-400/10 blur-2xl"
        />

        <ol className="space-y-24">
          {events.map((e, i) => {
            const isLeft = i % 2 === 0;
            const color = tagStyles[e.tags] ?? { grad: "from-gray-400 to-gray-600", text: "text-gray-900", ring: "ring-gray-300/60", icon: <span className="inline-block h-2 w-2 rounded-full bg-white/90" /> };

            return (
              <li key={`${e.title}-${i}`} className="relative">
                {/* Card row */}
                <div className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>
                  {/* Card */}
                  <article
                    className={`group w-full sm:w-[44%] rounded-2xl border border-white/10 bg-white/70 p-6 shadow-xl backdrop-blur-md transition
                              hover:-translate-y-1 hover:shadow-2xl dark:bg-white/5 dark:text-neutral-200`}
                  >
                    {/* Year + Tag */}
                    <div className="mb-3 flex items-center gap-3">
                      <time className="text-sm font-medium text-charcoal">
                        {e.start_year}
                        {e.end_year && e.end_year !== e.start_year ? ` – ${e.end_year}` : !e.end_year ? " – Present" : ""}
                      </time>

                      {/* tag chip */}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${color.grad} px-3 py-1 text-xs font-semibold text-white shadow-sm`}
                      >
                        {/* tiny dot */}
                        <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                        {color.icon}
                        {e.tags}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-moss dark:moss">
                      {e.title}
                    </h3>

                    <p className="text-sm font-medium text-charcoal">
                      {e.org}
                    </p>

                    <p className="mt-2 text-[15px] leading-7 text-charcoal">
                      {e.description}
                    </p>

                    {/* subtle bottom accent on hover */}
                    <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r ${color.grad} opacity-0 transition group-hover:opacity-100`} />
                  </article>

                  {/* Center dot (+ connector arm) */}
                  <div className="absolute left-1/2 z-10 -translate-x-1/2">
                    {/* arm from line to card */}
                    <span
                      className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "right-3" : "left-3"} h-0.5 w-14 bg-white/40`}
                      aria-hidden
                    />
                    {/* main dot */}
                    <span
                      className={`relative block h-5 w-5 rounded-full bg-gradient-to-br ${color.grad} ring-4 ${color.ring}`}
                    >
                      {/* glow/ping */}
                      <span className={`absolute inset-0 -z-10 h-5 w-5 animate-ping rounded-full bg-gradient-to-br ${color.grad} opacity-30`} />
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="py-20 text-center bg-primary px-5">
        <h2 className="text-5xl font-bold mb-12 text-charcoal">
          Skills & Tools
        </h2>
        <div className="flex justify-center gap-12 flex-wrap max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <TechIcon key={index} icon={tech.icon} label={tech.label} color={tech.color} />
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-moss mb-8">Languages</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { label: "Bosnian – Native" },
            { label: "English – Advanced (C1)" },
            { label: "German – Basic (A2)" },
            { label: "French – Basic (A1)" },
          ].map((lang, i) => (
            <span
              key={i}
              className="bg-moss backdrop-blur-md border border-white/20 text-white/90 px-5 py-3 rounded-xl flex items-center gap-2 text-lg font-semibold transition hover:-translate-y-1 hover:shadow-lg"
            >
              {lang.label}
            </span>
          ))}
        </div>

      </section>
    </main>
  );
}