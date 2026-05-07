import { useEffect, useState } from "react";

import profilePic from "../assets/profilePicture.jpg"
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import copyDark from "../assets/copyDark.svg";
import copyLight from "../assets/copyLight.svg";

type LeftPanelProps = {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

function LeftPanel({ darkMode, setDarkMode }: LeftPanelProps) {    

    const copyLink = () => {
        navigator.clipboard.writeText('victorio-nanda.vercel.app')
    }

    return (
        <div className="w-[50%] flex items-center justify-center">
            <div className="flex absolute top-5 left-5 gap-2 ">
                <button onClick={() => {setDarkMode(!darkMode)}}> 
                   <img src={darkMode ? moon : sun} className="w-[25px] h-[25px]" alt="Light/Dark Mode Button" />
                </button>
                <button onClick={copyLink}>
                    <img src={darkMode ? copyLight: copyDark} className="w-[25px] h-[25px]" alt="Copy Link Button" />
                </button>
            </div>
            <div className="flex flex-col gap-5">
                <img src={profilePic} className="w-[350px] h-[350px] object-cover rounded-full overflow-hidden" alt="Profile Picture"/>
                <h1 className="text-4xl">Victorio Suwita Nanda</h1>
            </div>
        </div>
    )
}

export default LeftPanel