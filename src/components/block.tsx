import Tilt from "react-parallax-tilt";
import {About} from "./about";
import {Links} from "./links";
import {IoIosArrowBack} from "react-icons/io";
import photo from "../grass.jpg";
import {Sidebar} from "./sidebar";
import React, {useState} from "react";

export function Block() {

    const [active, setActive] = useState("about");

    const handleBack = () => {
        setActive("about");
    };

    return (
        <div className="block">
            <header>
                <h1>Nour Elfangary</h1>
                {active === "about" && (
                    <div className={"panel"}>
                        <Links className={"miniLinks"}/>
                        <Tilt className={"image"}>
                            <img src={photo} alt=""/>
                        </Tilt>
                    </div>
                )}
            </header>
            <main>
                <Sidebar setActive={setActive}/>
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