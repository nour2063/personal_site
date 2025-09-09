interface SidebarProps {
    id?: string
    setActive: (key: string) => void
}

export function Sidebar({id, setActive}: SidebarProps) {
    return (
        <div className={"side"} id={id}>
            <div className={"button"} onClick={() => setActive("projects")}>projects</div>
            <div className={"button"} onClick={() => setActive("photos")}>photos</div>
            <div className={"button"} onClick={() => setActive("friends")}>friends</div>
            <div className={"button"} id={"more"}>more soon...</div>
        </div>
    );
}