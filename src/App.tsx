import React from 'react';
import './styles/App.css'
import Background from "./components/background";
import {Block} from "./components/block";


export function App() {

    return (
        <div className="App">
            <Background/>
            <Block/>
        </div>
    );
}
