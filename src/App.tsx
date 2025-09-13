import React, {useEffect, useRef, useState} from 'react';
import './styles/App.css'
// import highRes from "./assets/highRes.jpg";
import mediumRes from "./assets/mediumRes.jpg";
import lowRes from "./assets/lowRes.jpg";
import {Block} from "./components/block";
import {IoMenu} from "react-icons/io5";
import {Sidebar} from "./components/sidebar";
import {IoIosArrowBack} from "react-icons/io";


export function App() {

    const [display, setDisplay] = useState<boolean>(false);
    const [background, setBackground] = useState(lowRes);
    const [active, setActive] = useState("about");

    const scrollRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [active]);

    const showMenu = () => {
        setDisplay(!display);
    }

    const hideMenu = () => {
        setDisplay(false);
    }

    return (
        <div className="App">
            <img className={"background"} src={background} alt=""/>
            <div className={"vignette"} onClick={hideMenu} ref={scrollRef}>
                <Block display={display} active={active} setActive={setActive} handleBack={handleBack}/>
            </div>
            <Sidebar setActive={setActive} hideMenu={hideMenu} id={display ? "show" : "hide"}/>
            <div className="mobileMenu" onClick={showMenu}><IoMenu/></div>
            <div className={"button"} id={active === "about" ? "hide" : "backMobile"} onClick={handleBack}><IoIosArrowBack/></div>
        </div>
    );
}
