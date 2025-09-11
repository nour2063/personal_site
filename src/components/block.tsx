import Tilt from "react-parallax-tilt";
import {About} from "./about";
import {Links} from "./links";
import {IoIosArrowBack} from "react-icons/io";
import photo from "../assets/profile.jpg";
import {Sidebar} from "./sidebar";
import React, {MouseEventHandler} from "react";


interface BlockProps {
    display: boolean,
    hideMenu: MouseEventHandler<HTMLDivElement>
    active: string,
    setActive:  (key: string) => void
    handleBack: MouseEventHandler<HTMLDivElement>
}

export function Block({hideMenu, active, setActive, handleBack}: BlockProps) {

    return (
        <div className="block" onClick={hideMenu}>
            <header>
                <h1>Nour Elfangary</h1>
                {active === "about" && (
                    <div className={"panel"}>
                        <Links className={"miniLinks"}/>
                        <Tilt className={"tilt"}>
                            <img className={"profile"} src={photo} alt=""/>
                        </Tilt>
                    </div>
                )}
            </header>
            <main>
                <Sidebar setActive={setActive} id={"mainScreen"}/>
                <div className={"content"}>
                    {active !== "about" && (
                        <div className={"button"} id={"back"} onClick={handleBack}>
                            <IoIosArrowBack className={"icon"}/>
                            back
                        </div>
                    )}
                    <About className={active === "about" ? "show" : "hide"}/>
                    <Links className={active === "links" ? "show" : "hide"}/>
                    {/*<Projects className={active === "projects" ? "show" : "hide"}/>*/}
                    {/*<Photos className={active === "photos" ? "show" : "hide"}/>*/}
                    {/*<Friends className={active === "friends" ? "show" : "hide"}/>*/}
                </div>
                <div className="mobileBuffer"/>
            </main>
        </div>
    );
}
