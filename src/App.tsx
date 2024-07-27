import React, {useEffect} from 'react';
import './styles/App.css';
import Tilt from "react-parallax-tilt";
import grass from "./grass.jpg";
import {Sidebar} from "./components/sidebar";
import {CiMenuBurger} from "react-icons/ci";

export function App() {

    interface Position {
        x: number,
        y: number
    }

    useEffect(() => {

        const syncPointer = (props: Position) => {
            document.documentElement.style.setProperty('--x', props.x.toFixed(2))
            document.documentElement.style.setProperty(
                '--xp',
                (props.x / window.innerWidth).toFixed(2)
            )
            document.documentElement.style.setProperty('--y', props.y.toFixed(2))
        };
        document.body.addEventListener('pointermove', syncPointer);
    });

  return (
      <div className={"container"}>
          <main>
              <Sidebar/>
              <div className={"main"}>
                  <Tilt className={"container"} perspective={2500} tiltMaxAngleX={10} tiltMaxAngleY={10} gyroscope={true}>
                      <div className={"top"}>
                          <div className={"card"} id={"menu"}>
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
      </div>
  );
}
