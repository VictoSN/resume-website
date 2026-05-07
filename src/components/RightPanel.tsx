type RightPanelProps = {
    onSelect: (section: string) => void
}

function RightPanel({ onSelect }: RightPanelProps) {
    return (
        <div className="w-[50%] grid grid-cols-2 gap-10">
            <button onClick={() => onSelect('aboutMe')} className="text-4xl">About Me</button>
            <button onClick={() => onSelect('projects')} className="text-4xl">Projects</button>
            <button onClick={() => onSelect('addInfo')} className="text-4xl">Additional</button>
            <button onClick={() => onSelect('contact')} className="text-4xl">Contact</button>
        </div>
    )
}

export default RightPanel