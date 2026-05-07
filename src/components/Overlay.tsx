type OverlayProps = {
    isDrawerOpen: boolean
    onClose: () => void
}

function Overlay({ isDrawerOpen, onClose }: OverlayProps) {
    if (!isDrawerOpen) return null

    return (
        <div onClick={onClose} className="fixed inset-0 bg-black/40 z-10"/>
    )
}

export default Overlay