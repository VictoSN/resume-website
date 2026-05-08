const bullets = [
    "Built a Staff Management System streamlining leave and expense tracking with automated approval workflows",
    "Engineered a Scheduling System replacing WhatsApp/spreadsheet coordination with a centralized calendar interface",
    "Delivered full-stack features independently from planning to deployment in a real production environment",
    "Enhanced UI/UX with responsive mobile and tablet views, improving usability and cross-device accessibility",
]

function Experience() {
    return (
        <div>
            <p className="section-label mb-6">Experience</p>

            <div>
                <div className="flex flex-col mb-3">
                    <div className="flex flex-col md:flex-row justify-between">
                        <p className="font-display text-xl font-semibold text-[#1a1a1a] dark:text-[#E8E4DC] leading-tight">Novas Academy</p>
                        <span className="section-label whitespace-nowrap mt-1">Jul – Nov 2025</span>
                    </div>
                    <p className="text-base text-[#1a1a1a]/60 dark:text-white/40 mt-0.5">Information Technology Intern</p>
                </div>

                <p className="text-sm text-[#1a1a1a]/40 dark:text-white/30 mb-4 font-light">
                    Developed and maintained WordPress systems improving internal workflow efficiency.
                </p>

                <ul className="space-y-2">
                    {bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-[#1a1a1a]/60 dark:text-white/40 font-light leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0 opacity-40" />
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience