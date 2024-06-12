import React, {useEffect, useRef} from 'react';
import './styles/App.css';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {IoDocumentTextOutline} from "react-icons/io5";
import CV from "./CV.pdf";
import VanillaTilt from "vanilla-tilt";
import {motion} from "framer-motion";

function Tilt(props: any) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        // @ts-ignore
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <main ref={tilt} {...rest} />;
}

export function App() {

    interface Position {
        x: number,
        y: number
    }

    const tiltOptions = {
        scale: 1.1,
        speed: 5000,
        max: 10
    };

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
        }
        document.body.addEventListener('pointermove', syncPointer)
    })

  return (
      <>
          <Tilt className="box" options={tiltOptions}>
              <div className={'main'}>
                  <article data-glow>
                      <h1>Nour Elfangary</h1>
                  </article>
                  <article data-glow>
                      <h3>About Me</h3>
                      <hr/>
                      <p> Born and raised internationally, I'm a young professional software developer currently
                          studying Computer Science at the University of Glasgow. As I approach my final year of
                          studies, I look forward
                          to entering the work force and watch myself continue to learn and grow. </p>
                      <hr/>
                  </article>
              </div>
              <div className={'side'}>
                  <motion.a href={CV} target="_blank" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                      <article data-glow>
                          <IoDocumentTextOutline/>
                          CV
                      </article>
                  </motion.a>
                  <motion.a href="https://github.com/nour2063" target="_blank" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                      <article data-glow>
                          <FaGithub/>
                          GitHub
                      </article>
                  </motion.a>
                  <motion.a href="https://www.linkedin.com/in/nour-elfangary/" target="_blank" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                      <article data-glow>
                          <FaLinkedin/>
                          LinkedIn
                      </article>
                  </motion.a>
                  <motion.a href="https://www.instagram.com/noureldineee_/" target="_blank" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                      <article data-glow>
                          <FaInstagram/>
                          Instagram
                      </article>
                  </motion.a>
              </div>
          </Tilt>
      </>
  );
}
