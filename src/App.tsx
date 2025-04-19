import React, {useState} from 'react';
import './styles/App.css'
import {Sidebar} from "./components/sidebar";
import Background from "./components/background";
import photo from "./grass.jpg"
import Tilt from "react-parallax-tilt";
import {About} from "./components/about";
import {Links} from "./components/links";
import {IoIosArrowBack} from "react-icons/io";

export function App() {
    const [active, setActive] = useState("about");

    const handleBack = () => {
        setActive("about");
    };

    return (
        <div className="App">
            <Background/>
            <div>
                <h1>Nour Elfangary
                    {active === "about" && (
                        <Tilt className={"image"}>
                            <img src={photo} alt=""/>
                        </Tilt>
                    )}
                </h1>
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
                </main>
            </div>
        </div>
    );
}
