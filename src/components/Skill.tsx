const categories = [
    {
        label: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS"],
    },
    {
        label: "Backend",
        items: ["Node.js", "Express.js", "Python", "Java", "C", "R"],
    },
    {
        label: "Database",
        items: ["MongoDB", "MongoDB Atlas", "SQL", "Microsoft SSMS"],
    },
    {
        label: "Tools",
        items: ["Git", "GitHub", "Figma", "WordPress", "Cisco Packet Tracer", "NI LabVIEW", "VirtualBox", "WSL"],
    },
    {
        label: "Platforms",
        items: ["Linux (Ubuntu/Arch/Debian/Rocky/Lubuntu)", "Windows", "Dual Boot"],
    },
]

function Skill() {
    return (
        <div>
            <p className="section-label mb-6">Skills</p>
            <div className="space-y-5">
                {categories.map(({ label, items }) => (
                    <div key={label}>
                        <p className="text-xs text-[#1a1a1a]/40 dark:text-white/30 mb-2 font-light tracking-widest uppercase">{label}</p>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="text-xs px-3 py-1 rounded-full border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.08)] text-[#1a1a1a]/70 dark:text-white/50 font-light hover:border-[rgba(0,0,0,0.3)] dark:hover:border-[rgba(255,255,255,0.25)] transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill