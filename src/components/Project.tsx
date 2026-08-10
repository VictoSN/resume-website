import githubFull from "../assets/svg/githubFull.svg"
import lectureCaptureDark from "../assets/pictures/LectureCaptureDark.png"
import lectureCaptureLight from "../assets/pictures/LectureCaptureLight.png"
import spotifyDark from "../assets/pictures/spotifyDark.png"
import noteAppDark from "../assets/pictures/noteAppDark.png"
import noteAppLight from "../assets/pictures/noteAppLight.png"

const getProjects = (darkMode: boolean) => [
    {
        title: "LectureCapture",
        type: "Desktop",
        stack: ["PyQt6", "PyTesseract", "faster-whisper", "Google Gemini", "SQLite"],
        description: "A PyQt6 desktop app that turns lectures into structured notes — captures full-screen or region screenshots with snipping tool-like functionality, then runs OCR and Speech-to-Text fully locally on device.",
        bullet: [
            "Built a Python app using PyQt6 that turns lectures into structured notes with OCR + Speech-to-Text",
            "Tesseract OCR and faster-whisper Speech-to-Text run fully locally on device",
            "Optional Google Gemini API for OCR, Speech-to-Text, summaries, quizzes, and translate/define functionalities",
            "Stored data locally in SQLite, packaged into an installer with PyInstaller + Inno Setup"
        ],
        link: "https://github.com/VictoSN/LectureCapture",
        picture: darkMode ? lectureCaptureDark : lectureCaptureLight
    },
    {
        title: "not-spotify",
        type: "Full-Stack",
        stack: ["React", "TypeScript", "ASP.NET Core", "AWS", "Stripe", "SignalR"],
        description: "A collaborative music streaming web app built with a React + TypeScript frontend and ASP.NET Core API, deployed on AWS with S3 media storage, CloudFront, ECS + ALB, RDS, and Lambda.",
        bullet: [
            "Collaborated with 2 others to build a music streaming web app with a React + TypeScript frontend and ASP.NET Core API",
            "Deployed on AWS: S3 media storage, CloudFront, ECS + ALB, RDS, and Lambda",
            "Implemented homepage algorithms, Stripe billing, and SignalR real-time chat and presence"
        ],
        link: "https://github.com/VictoSN/not-spotify",
        picture: darkMode ? spotifyDark : spotifyDark
    },
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
        picture: darkMode ? noteAppDark : noteAppLight
    },
]

function Project({ darkMode }: { darkMode: boolean }) {
    const projects = getProjects(darkMode)

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
                        <ul className="space-y-2">
                            {p.bullet.map((b, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[#1a1a1a]/60 dark:text-white/40 font-light leading-relaxed">
                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0 opacity-40" />
                                    {b}
                                </li>
                            ))}
                        </ul>
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