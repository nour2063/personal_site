export function Sidebar({ setActive }: { setActive: (key: string) => void }) {
    return (
        <div className={"side"}>
            <div className={"button"} onClick={() => setActive("projects")}>projects</div>
            <div className={"button"} onClick={() => setActive("photos")}>photos</div>
            <div className={"button"} onClick={() => setActive("friends")}>friends</div>
            <div className={"button"} id={"more"}>more soon...</div>
        </div>
    );
}