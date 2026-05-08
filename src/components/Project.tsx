import githubFull from "../assets/svg/githubFull.svg"
import noteAppDark from "../assets/pictures/noteAppDark.png"
import noteAppLight from "../assets/pictures/noteAppLight.png"
import todoApp from "../assets/pictures/todoApp.png"
import { useEffect } from "react"

const projects = [
    {
        title: "MERN Note Application",
        type: "Full-Stack",
        stack: ["MongoDB", "Express.js", "React", "Node.js"],
        description: "A full-stack note-taking web app built with the MERN stack, designed for efficient note management with real-time database sync and a clean, responsive interface.",
        bullet: [
            "Create, edit, and delete notes with instant MongoDB updates",
            "Organize notes using categories and favorites",
            "Light/Dark mode with saved user preferences",
            "Fully responsive UI for mobile and desktop"
        ],
        link: "https://github.com/VictoSN/note-app",
        picture: noteAppDark
    },
    {
        title: "Todo List Application",
        type: "Full-Stack",
        stack: ["MongoDB", "Express.js", "Node.js"],
        description: "A simple full-stack task management app using MongoDB, Express, and Node.js with real-time updates and REST API integration.",
        bullet: [
            "Add, edit, complete, and delete tasks",
            "Tasks synced directly with MongoDB (single source of truth)",
            "Separate views for active and completed tasks"
        ],
        link: "https://github.com/VictoSN/todo-app",
        picture: todoApp
    },
]

function Project({ darkMode }: { darkMode: boolean }) {
    useEffect(() => {
        projects[0].picture = !darkMode ? noteAppDark : noteAppLight
    }, [darkMode])

    return (
        <div>
            <p className="section-label mb-6">Projects</p>
            <div className="space-y-6">
                {projects.map((p, i) => (
                    <div key={p.title} className="flex flex-col gap-2 group border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-xl p-3 md:p-6 hover:border-[rgba(0,0,0,0.18)] dark:hover:border-[rgba(255,255,255,0.14)] transition-colors">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <span className="section-label">{String(i + 1).padStart(2, '0')} · {p.type}</span>
                                <h3 className="font-display text-xl font-semibold text-[#1a1a1a] dark:text-[#E8E4DC] mt-1">
                                    {p.title}
                                </h3>
                            </div>
                        </div>
                        <img src={p.picture}/>
                        <span className="text-sm text-[#1a1a1a]/55 dark:text-white/40 font-light leading-relaxed">
                            {p.description}
                        </span>
                        <div>
                            {p.bullet.map((b, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[#1a1a1a]/60 dark:text-white/40 font-light leading-relaxed">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0 opacity-40" />
                                    {b}
                                </li>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <a href={p.link}>
                                <img src={githubFull} className="w-[20px] p-[1px] relative rounded-full bg-white backdrop-blur-sm hover:bg-white/40 transition-colors" />
                            </a>
                            {p.stack.map((s) => (
                                <span key={s} className="text-[11px] px-2.5 py-0.5 rounded-full bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] text-[#1a1a1a]/50 dark:text-white/40 tracking-wide uppercase font-medium">
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