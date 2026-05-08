const links = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
]

type NavbarProps = {
    mobile?: boolean
}

function Navbar({ mobile = false }: NavbarProps) {
    const scroll = (id: string) => {
        const suffix = mobile ? "-m": ""
        document.getElementById(id + suffix)?.scrollIntoView({ behavior: "smooth" })
    }

    // ── Mobile: sticky bottom tab bar ──
    if (mobile) {
        return (
            <nav className="overflow-x-scroll fixed bottom-0 left-0 right-0 z-50 bg-[#F5F2ED]/90 dark:bg-[#0E0E0E]/90 backdrop-blur-md border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]">
                <div className="flex justify-around items-center h-16 px-2">
                    {links.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => scroll(id)}
                            className="flex flex-col items-center px-2 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <span className="section-label text-[9px] tracking-widest">{label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        )
    }

    return (
        <nav className="px-8 py-5 border-t border-[rgba(255,255,255,0.06)] bg-[#0E0E0E] dark:bg-[#0E0E0E] bg-[#F5F2ED]">
            <div className="flex gap-6 flex-wrap justify-around">
                {links.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => scroll(id)}
                        className="nav-link section-label text-[#1a1a1a] dark:text-[#E8E4DC] hover:opacity-100 transition-opacity"
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Contact line */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                <a href="mailto:victorio.nanda.cs@gmail.com" className="text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    victorio.nanda.cs@gmail.com
                </a>
                <a href="https://github.com/VictoSN" target="_blank" rel="noreferrer" className="text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/victorio-nanda" target="_blank" rel="noreferrer" className="text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    LinkedIn
                </a>
                <span className="text-sm text-[#1a1a1a]/40 dark:text-white/30">+60 17 553 6908</span>
            </div>
        </nav>
    )
}

export default Navbar