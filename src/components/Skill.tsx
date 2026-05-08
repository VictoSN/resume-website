import cisco from "../assets/cisco.svg";
import css from "../assets/css.svg";
import dualboot from "../assets/dualboot.svg";
import express from "../assets/express.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import labview from "../assets/labview.svg";
import linux from "../assets/linux.svg";
import mongodb from "../assets/mongodb.svg";
import node from "../assets/node.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import sql from "../assets/sql.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import virtualbox from "../assets/virtualbox.svg";
import windows from "../assets/windows.svg";
import wordpress from "../assets/wordpress.svg";

const categories = [
    {
        label: "Frontend",
        items: [
            { name: "HTML", icon: html },
            { name: "CSS", icon: css },
            { name: "JavaScript", icon: javascript },
            { name: "TypeScript", icon: typescript },
            { name: "React.js", icon: react },
            { name: "Tailwind CSS", icon: tailwind },
        ],
    },
    {
        label: "Backend",
        items: [
            { name: "Node.js", icon: node },
            { name: "Express.js", icon: express },
            { name: "Python", icon: python },
            { name: "Java", icon: java },
        ],
    },
    {
        label: "Database",
        items: [
            { name: "MongoDB", icon: mongodb },
            { name: "MongoDB Atlas", icon: mongodb },
            { name: "SQL", icon: sql },
            { name: "Microsoft SSMS", icon: sql },
        ],
    },
    {
        label: "Tools",
        items: [
            { name: "Git", icon: git },
            { name: "GitHub", icon: github },
            { name: "Figma", icon: figma },
            { name: "WordPress", icon: wordpress },
            { name: "Cisco Packet Tracer", icon: cisco },
            { name: "NI LabVIEW", icon: labview },
            { name: "VirtualBox", icon: virtualbox },
            { name: "WSL", icon: linux },
        ],
    },
    {
        label: "Platforms",
        items: [
            { name: "Linux", icon: linux },
            { name: "Windows", icon: windows },
            { name: "Dual Boot", icon: dualboot },
        ],
    },
];

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
                                <div className="flex flex-col items-center space-y-2 ">
                                    <img src={item.icon} className="w-[20px] dark:invert brightness-0"/>
                                    <span
                                        key={item.name}
                                        className="text-xs px-3 py-1 rounded-full border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.08)] text-[#1a1a1a]/70 dark:text-white/50 font-light hover:border-[rgba(0,0,0,0.3)] dark:hover:border-[rgba(255,255,255,0.25)] transition-colors"
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill