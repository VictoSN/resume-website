import cisco from "../assets/svg/cisco.svg";
import css from "../assets/svg/css.svg";
import dualboot from "../assets/svg/dualboot.svg";
import express from "../assets/svg/express.svg";
import figma from "../assets/svg/figma.svg";
import git from "../assets/svg/git.svg";
import github from "../assets/svg/github.svg";
import html from "../assets/svg/html.svg";
import java from "../assets/svg/java.svg";
import javascript from "../assets/svg/javascript.svg";
import labview from "../assets/svg/labview.svg";
import linux from "../assets/svg/linux.svg";
import mongodb from "../assets/svg/mongodb.svg";
import node from "../assets/svg/node.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import sql from "../assets/svg/sql.svg";
import tailwind from "../assets/svg/tailwind.svg";
import typescript from "../assets/svg/typescript.svg";
import virtualbox from "../assets/svg/virtualbox.svg";
import windows from "../assets/svg/windows.svg";
import wordpress from "../assets/svg/wordpress.svg";

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
                    <div key={label} className="space-y-5">
                        <p className="font-display text-lg font-semibold text-[#1a1a1a] dark:text-[#E8E4DC] leading-tight">{label}</p>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <div className="flex flex-col items-center space-y-2 ">
                                    <img src={item.icon} className="w-[25px] dark:invert brightness-0"/>
                                    <span
                                        key={item.name}
                                        className="text-sm px-3 py-1 rounded-full border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.08)] text-[#1a1a1a]/70 dark:text-white/50 font-light hover:border-[rgba(0,0,0,0.3)] dark:hover:border-[rgba(255,255,255,0.25)] transition-colors"
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