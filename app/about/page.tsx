import { events, Events } from "../../data/events";

const tagStyles: Record<string, { grad: string; text: string; ring: string }> = {
  "Education": { grad: "from-sky-500 to-indigo-500", text: "text-sky-900", ring: "ring-sky-300/60" },
  "Work Experience": { grad: "from-emerald-500 to-teal-500", text: "text-emerald-900", ring: "ring-emerald-300/60" },
  "Volunteering": { grad: "from-amber-500 to-orange-500", text: "text-amber-900", ring: "ring-amber-300/60" },
};

export default function Page() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-7xl pt-30 pb-26">
          <h1 className="text-6xl pb-3 text-primary">About me</h1>
          <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24">
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
            const color = tagStyles[e.tags] ?? { grad: "from-gray-400 to-gray-600", text: "text-gray-900", ring: "ring-gray-300/60" };

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
                      <time className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {e.year}
                      </time>

                      {/* tag chip */}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${color.grad} px-3 py-1 text-xs font-semibold text-white shadow-sm`}
                      >
                        {/* tiny dot */}
                        <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                        {e.tags}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-white">
                      {e.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-neutral-600 dark:text-neutral-300">
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
    </main>
  );
}