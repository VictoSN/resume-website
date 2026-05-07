type SlideDrawerProps = {
    isDrawerOpen: boolean
    section: string
    onClose: () => void
}

function SlideDrawer({ isDrawerOpen, section, onClose }: SlideDrawerProps) {
    return (
        <div className={`fixed top-0 right-0 h-full w-[80%] bg-white dark:bg-gray-800 z-20 transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            <h1 className="text-2xl">{section}</h1>
        </div>
    )
}

export default SlideDrawer