import githubFull from "../assets/svg/githubFull.svg";
import email from "../assets/svg/email.svg";
import phone from "../assets/svg/phone.svg";
import linkedin from "../assets/svg/linkedin.svg";

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
            <div>
                <nav className="overflow-x-scroll fixed bottom-0 left-0 right-0 z-50 bg-[#F5F2ED]/90 dark:bg-[#0E0E0E]/90 backdrop-blur-md border-t border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.06)]">
                    <div className="flex justify-around items-center h-16 px-2">
                        {links.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => scroll(id)}
                                className="flex flex-col items-center px-0 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            >
                                <span className="large-section-label section-label !text-[9px] tracking-widest">{label}</span>
                            </button>
                        ))}
                    </div>
                </nav>
                <div className="-mt-5 px-8 flex flex-wrap gap-x-4 gap-y-1">
                    <a href="mailto:victorio.nanda.cs@gmail.com" className="text-xs text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                        <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={email}/>
                        Email
                    </a>
                    <a href="https://github.com/VictoSN" target="_blank" rel="noreferrer" className="text-xs text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                        <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={githubFull}/>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/victorio-nanda" target="_blank" rel="noreferrer" className="text-xs text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                        <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={linkedin}/>
                        LinkedIn
                    </a>
                    <a href="tel:+60-17-553-6908" target="_blank" rel="noreferrer" className="text-xs text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                        <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={phone}/>
                        Phone
                    </a>
                </div>
            </div>
        )
    }

    return (
        <nav className="px-8 py-5 border-t border-[rgba(255,255,255,0.06)] bg-[#0E0E0E] dark:bg-[#0E0E0E] bg-[#F5F2ED]">
            <div className="flex gap-6 flex-wrap justify-around">
                {links.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => scroll(id)}
                        className="nav-link section-label text-[#1a1a1a] dark:text-[#E8E4DC] hover:opacity-100 transition-opacity cursor-pointer"
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Contact line */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                <a href="mailto:victorio.nanda.cs@gmail.com" className="text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={email}/>
                    Email
                </a>
                <a href="https://github.com/VictoSN" target="_blank" rel="noreferrer" className="text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={githubFull}/>
                    GitHub
                </a>
                <a href="https://linkedin.com/in/victorio-nanda" target="_blank" rel="noreferrer" className="gap-1 text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={linkedin}/>
                    LinkedIn
                </a>
                <a href="tel:+60-17-553-6908" target="_blank" rel="noreferrer" className="text-sm text-[#1a1a1a]/40 dark:text-white/30 hover:text-[#1a1a1a]/70 dark:hover:text-white/60 transition-colors nav-link">
                    <img className="w-[15px] opacity-40 dark:opacity-100 dark:invert brightness-0" src={phone}/>
                    Phone
                </a>
            </div>
        </nav>
    )
}

export default Navbar