import {MouseEventHandler} from "react";

interface SidebarProps {
    id?: string
    setActive: (key: string) => void
    hideMenu?: MouseEventHandler<HTMLDivElement>
}

export function Sidebar({id, setActive, hideMenu}: SidebarProps) {
    return (
        <div className={"side"} id={id} onClick={hideMenu}>
            <div className={"button"} id={"item-1"} onClick={() => setActive("projects")}>projects</div>
            <div className={"button"} onClick={() => setActive("photos")}>photos</div>
            <div className={"button"} onClick={() => setActive("friends")}>friends</div>
            {/*<div className={"button"} id={"more"}>more soon...</div>*/}
        </div>
    );
}