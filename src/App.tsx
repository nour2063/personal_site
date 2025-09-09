import React, {useState} from 'react';
import './styles/App.css'
import Background from "./components/background";
import {Block} from "./components/block";
import {IoMenu} from "react-icons/io5";


export function App() {

    const [display, setDisplay] = useState<boolean>(false);

    const showMenu = () => {
        setDisplay(!display);
    }

    const hideMenu = () => {
        setDisplay(false);
    }

    return (
        <div className="App">
            <Background/>
            <Block display={display} hideMenu={hideMenu}/>
            <div className="mobileMenu" onClick={showMenu}><IoMenu/></div>
        </div>
    );
}
