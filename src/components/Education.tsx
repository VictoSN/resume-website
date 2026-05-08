const education = [
    {
        school: "Asia Pacific University",
        degree: "BSc (Hons) Computer Science",
        detail: "CGPA 3.76 · Vice Chancellor's List 2023–24 & 2024–25",
        period: "2023 – Present",
    },
    {
        school: "De Montfort University",
        degree: "BSc (Hons) Computer Science",
        detail: "APU-DMU Dual Degree Programme",
        period: "2023 – Present",
    },
    {
        school: "Red Hat",
        degree: "System Administration I (RH124)",
        detail: "Certification",
        period: "2024–2025",
    },
    {
        school: "IELTS",
        degree: "Band 7.5 (C1)",
        detail: "International English Language Testing System",
        period: "2023",
    },
]

function Education() {
    return (
        <div>
            <p className="section-label mb-6">Education</p>
            <div className="space-y-6">
                {education.map((e) => (
                    <div key={e.school} className="flex justify-between items-start gap-4">
                        <div>
                            <p className="font-display text-lg font-semibold text-[#1a1a1a] dark:text-[#E8E4DC] leading-tight">
                                {e.school}
                            </p>
                            <p className="text-sm text-[#1a1a1a]/70 dark:text-white/50 mt-0.5">{e.degree}</p>
                            <p className="text-xs text-[#1a1a1a]/40 dark:text-white/30 mt-0.5 font-light">{e.detail}</p>
                        </div>
                        <span className="section-label whitespace-nowrap mt-1">{e.period}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education