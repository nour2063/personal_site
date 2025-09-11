import React, {useEffect, useState} from 'react';
import './styles/App.css'
// import highRes from "./assets/highRes.jpg";
import mediumRes from "./assets/mediumRes.jpg";
import lowRes from "./assets/lowRes.jpg";
import {Block} from "./components/block";
import {IoMenu} from "react-icons/io5";
import {Sidebar} from "./components/sidebar";


export function App() {

    const [display, setDisplay] = useState<boolean>(false);
    const [background, setBackground] = useState(lowRes);
    const [active, setActive] = useState("about");

    const handleBack = () => {
        setActive("about");
    };

    useEffect(() => {
        const midRes = new Image();
        midRes.src = mediumRes;
        midRes.onload = () => {
            setBackground(mediumRes);
        };

        // const hiRes = new Image();
        // hiRes.src = highRes;
        // hiRes.onload = () => {
        //     setBackground(highRes);
        // }
    }, []);

    const showMenu = () => {
        setDisplay(!display);
    }

    const hideMenu = () => {
        setDisplay(false);
    }

    return (
        <div className="App">
            <img className={"background"} src={background} alt=""/>
            <div className={"vignette"}>
                <Block display={display} hideMenu={hideMenu} active={active} setActive={setActive} handleBack={handleBack}/>
            </div>
            <Sidebar setActive={setActive} id={display ? "show" : "hide"}/>
            <div className="mobileMenu" onClick={showMenu}><IoMenu/></div>
        </div>
    );
}
