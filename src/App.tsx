import React from 'react';
import './styles/App.css';
import Tilt from "react-parallax-tilt";
import grass from "./grass.jpg";
import {Sidebar} from "./components/sidebar";
import {CiMenuBurger} from "react-icons/ci";

export function hideMenu() {
    document.getElementsByClassName("background-blur")[0].setAttribute("id", "hide");
    document.getElementsByClassName("side")[0].setAttribute("id", "hideMenu");
}

function showMenu() {
    document.getElementsByClassName("background-blur")[0].setAttribute("id", "show");
    document.getElementsByClassName("side")[0].setAttribute("id", "mobile");
}

export function App() {

    return (
        <div className={"container"}>
            <main>
                <Sidebar/>
                <div className={"main"}>
                    <Tilt className={"container"} perspective={2500} tiltMaxAngleX={10} tiltMaxAngleY={10} gyroscope={true}>
                        <div className={"top"}>
                            <div className={"card"} id={"menu"} onClick={showMenu}>
                                  <CiMenuBurger />
                            </div>
                            <div className={"card"} id={"title"}>
                                  <h1>Nour Elfangary</h1>
                            </div>
                        </div>
                        <div className={"card"} id={"bio"}>
                            <h3>About Me</h3>
                            <hr/>
                            <p>
                                <img src={grass} alt={""}/>
                                Born in Cairo and raised internationally, I'm a young professional software developer
                                currently
                                studying Computer Science at the University of Glasgow. </p>
                            <p>
                                As I approach my final year of studies, I look forward
                                to entering the workforce and watch myself continue to learn more.
                            </p>
                            <hr/>
                        </div>
                    </Tilt>
                    <Tilt className={"card"}>
                        <h3>my stuff (coming soon, work in progress)</h3>
                    </Tilt>
                </div>
            </main>
            <div className={"background-blur"} onClick={hideMenu}></div>
        </div>
    );
}
