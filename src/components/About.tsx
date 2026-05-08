function About() {
    return (
        <div>
            <p className="section-label mb-4">About</p>
            <p className="font-display text-3xl font-normal leading-relaxed text-[#1a1a1a] dark:text-[#E8E4DC]">
                I'm a final-year Computer Science student at Asia Pacific University, originally from Indonesia.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]/60 dark:text-white/40 font-light">
                Passionate about programming, designing, and understanding how systems work from the ground up.
                I enjoy Web Development, exploring new technologies, and solving challenging problems —
                whether it's writing efficient code or digging into a new language.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                    { value: "3.76", label: "CGPA" },
                    { value: "C1", label: "IELTS Band 7.5" },
                    { value: "2×", label: "VC's List" },
                ].map(({ value, label }) => (
                    <div key={label} className="border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)] rounded-lg p-4">
                        <p className="font-display text-4xl font-bold text-[#1a1a1a] dark:text-[#E8E4DC]">{value}</p>
                        <p className="section-label mt-1">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About