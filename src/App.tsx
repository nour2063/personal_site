import React from 'react';
import './styles/App.css'
import {Sidebar} from "./components/sidebar";
import Background from "./components/background";
import photo from "./grass.jpg"

export function App() {
    return (
        <div className="App">
            <Background/>
            <main>
                <Sidebar/>
                <div className={"content"}>
                    <h1>Nour Elfangary</h1>
                    <hr/>
                    <p>
                        <div className={"image"}>
                            <img src={photo} alt=""/>
                        </div>
                        Young and full of energy, I’m a mixed reality developer currently obtaining a Master’s degree at
                        the University of Glasgow. My studies span across a wide range of computing subjects to gain a
                        holistic perspective of the discipline out of pure keen interest.
                    </p>
                    <p>
                        Born in Egypt, raised between Saudi Arabia, England, Qatar, and the UAE, and now living in
                        Scotland, I’ve grown accustomed to a transient and multicultural lifestyle. My future is
                        uncertain, but very exciting, and I look forward to where I end up next.
                    </p>
                    <hr/>
                </div>
            </main>
        </div>
    );
}
