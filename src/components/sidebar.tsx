import Tilt from "react-parallax-tilt";

export function Sidebar({ setActive }: { setActive: (key: string) => void }) {
    return (
        <Tilt className={"side"}>
            <div className={"button"} onClick={() => setActive("links")}>my links</div>
            <div className={"button"} onClick={() => setActive("projects")}>projects</div>
            <div className={"button"} onClick={() => setActive("photos")}>photos</div>
            <div className={"button"} onClick={() => setActive("friends")}>friends</div>
            <div className={"button"} id={"more"}>more soon...</div>
        </Tilt>
    );
}