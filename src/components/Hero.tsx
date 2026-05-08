import profilePic from "../assets/profilePicture.jpg"
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import copyDark from "../assets/copyDark.svg";
import copyLight from "../assets/copyLight.svg";
import { useState } from "react";

type HeroProps = {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

function Hero({ darkMode, setDarkMode }: HeroProps) {
    const [copied, setCopied] = useState(false)

    const copyLink = async () => {
        navigator.clipboard.writeText('victorio-nanda.vercel.app')
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="flex-1 flex flex-col relative overflow-hidden">
            {/* Portrait */}
            <div className="relative flex-1 min-h-0">
                <img
                    src={profilePic}
                    className="w-full h-full object-cover object-top"
                    alt="Victorio Suwita Nanda"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent dark:from-[#0E0E0E] from-[#F5F2ED]" />

                {/* Controls */}
                <div className="absolute top-5 right-5 flex gap-3">
                    <button 
                        onClick={copyLink} 
                        className="relative p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                    >
                        <img src={darkMode ? copyLight : copyDark} className="w-4 h-4" alt="Copy link" />
                        {copied && (
                            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-black/70 text-white px-2 py-0.5 rounded">
                                Copied!
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="relative p-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-colors"
                    >
                        <img src={darkMode ? moon : sun} className="w-4 h-4" alt="Toggle theme" />
                    </button>
                </div>
            </div>

            {/* Name & Title */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-16">
                <p className="section-label text-white [text-shadow:1px_1px_0_black] dark:text-white/100 mb-2">
                    Portfolio
                </p>
                <h1 className="font-display text-3xl font-bold leading-tight text-white [text-shadow:1px_1px_0_black] dark:text-white mb-1">
                    Victorio Suwita Nanda
                </h1>
                <p className="text-sm text-white [text-shadow:1px_1px_0_black] dark:text-white/50 font-light tracking-wide">
                    CS Undergraduate · Indonesia
                </p>
            </div>
        </div>
    )
}

export default Hero