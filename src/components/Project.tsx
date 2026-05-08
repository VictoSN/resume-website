import githubFull from "../assets/githubFull.svg"

const projects = [
    {
        title: "MERN Note Application",
        type: "Full-Stack",
        stack: ["MongoDB", "Express.js", "React", "Node.js"],
        description: "Note-taking web app with CRUD features, categories, favorites, and REST API integration. Responsive light/dark mode with localStorage preferences.",
        link: "https://github.com/VictoSN/note-app"
    },
    {
        title: "Todo List Application",
        type: "Full-Stack",
        stack: ["MongoDB", "Express.js", "Node.js"],
        description: "Task management app with creation, editing, completion tracking, and deletion. MongoDB Atlas integration for real-time updates.",
        link: "https://github.com/VictoSN/todo-app"
    },
]

function Project() {
    return (
        <div>
            <p className="section-label mb-6">Projects</p>
            <div className="space-y-6">
                {projects.map((p, i) => (
                    <div key={p.title} className="group border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(0,0,0,0.18)] dark:hover:border-[rgba(255,255,255,0.14)] transition-colors">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <span className="section-label">{String(i + 1).padStart(2, '0')} · {p.type}</span>
                                <h3 className="font-display text-lg font-semibold text-[#1a1a1a] dark:text-[#E8E4DC] mt-1">
                                    {p.title}
                                </h3>
                            </div>
                        </div>
                        <p className="text-sm text-[#1a1a1a]/55 dark:text-white/40 font-light leading-relaxed mb-4">
                            {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <a href={p.link}>
                                <img src={githubFull} className="w-[20px] p-[1px] relative rounded-full bg-white backdrop-blur-sm hover:bg-white/40 transition-colors" />
                            </a>
                            {p.stack.map((s) => (
                                <span key={s} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] text-[#1a1a1a]/50 dark:text-white/40 tracking-wide uppercase font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project