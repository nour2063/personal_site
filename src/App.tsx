import React from 'react';
import './styles/App.css'
import {Sidebar} from "./components/sidebar";
import Background from "./components/background";

export function App() {
    return (
        <div className="App">
            <Background/>
            <main>
                <Sidebar/>
                <div className={"content"}>
                    lorem ipsum
                </div>
            </main>
        </div>
    );
}
