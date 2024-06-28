import React, {useEffect} from 'react';
import './styles/App.css';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {IoDocumentTextOutline} from "react-icons/io5";
import CV from "./CV.pdf";
import Tilt from "react-parallax-tilt";
import {FaUserGroup} from "react-icons/fa6";
import grass from "./grass.jpg";
import desert from "./desert.jpg";

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
            document.documentElement.style.setProperty(
                '--yp',
                (props.y / window.innerHeight).toFixed(2)
            )
        };
        document.body.addEventListener('pointermove', syncPointer);
    });

  return (
      <div className={"container"}>
          <main>
              <div className={"side"}>
                  <Tilt scale={1.1}>
                      <a href={CV} target="_blank" rel="noopener noreferrer">
                          <article data-glow>
                              <IoDocumentTextOutline/>
                              CV
                          </article>
                      </a>
                  </Tilt>
                  <Tilt scale={1.1}>
                      <a href="https://github.com/nour2063" target="_blank" rel="noopener noreferrer">
                          <article data-glow>
                              <FaGithub/>
                              GitHub
                          </article>
                      </a>
                  </Tilt>
                  <Tilt scale={1.1}>
                      <a href="https://www.linkedin.com/in/nour-elfangary/" target="_blank" rel="noopener noreferrer">
                          <article data-glow>
                              <FaLinkedin/>
                              LinkedIn
                          </article>
                      </a>
                  </Tilt>
                  <Tilt scale={1.1}>
                      <a href="https://www.instagram.com/noureldineee_/" target="_blank" rel="noopener noreferrer">
                          <article data-glow>
                              <FaInstagram/>
                              Instagram
                          </article>
                      </a>
                  </Tilt>
              </div>
              <Tilt className={"main"} perspective={2500} tiltMaxAngleX={10} tiltMaxAngleY={10} gyroscope={true}>
                  <article data-glow>
                      <h1>Nour Elfangary</h1>
                  </article>
                  <article data-glow>
                      <h3>About Me</h3>
                      <hr/>
                      <p>
                          <img src={grass} id={"left"} alt={""}/>
                          Born in Cairo and raised internationally, I'm a young professional software developer
                          currently
                          studying Computer Science at the University of Glasgow. </p>
                      <p>
                          <img src={desert} id={"right"} alt={""}/>
                          As I approach my final year of studies, <br/> I look forward
                          to entering the workforce and watch myself continue to learn more.
                      </p>

                      <hr/>
                  </article>
              </Tilt>
          </main>
          <div className={"footer"}>
              <Tilt scale={1.1}>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                      <article data-glow>
                          <FaUserGroup />
                          my friends
                      </article>
                  </a>
              </Tilt>
              <Tilt>
                  <article data-glow>
                      <h3>my stuff</h3>
                  </article>
              </Tilt>
          </div>
      </div>
  );
}
