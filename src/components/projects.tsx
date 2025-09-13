import React from "react";
import Tilt from "react-parallax-tilt";
import {IoIosArrowForward, IoIosLock} from "react-icons/io";
import {HiDotsHorizontal} from "react-icons/hi";
import placeholder from "../assets/projects/placeholder.svg";
import trailblazer from "../assets/projects/trailblazer.gif";
import babyEscape from "../assets/projects/babyEscape.gif";
import neuroArcade from "../assets/projects/neuroArcade.png";
import oneHandedSwiper from "../assets/projects/oneHandedSwiper.gif";
import cp from "../assets/projects/cp.gif";
import solitaire from "../assets/projects/solitaire.jpg";
import {FiExternalLink} from "react-icons/fi";

interface ProjectsProps {
    className?: string
}

export function Projects({className}: ProjectsProps) {

    const openLink = (link : string) => {
        window.open(link, "_blank");
    };

    return (
        <div className={className} id={"projects"}>
            <div className="button" id={"noLink"}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={placeholder} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>World-locked Online AR Voxel Art Platform</h4>
                    <hr/>
                    <ul>
                        <li>A real-time, cross-platform AR app using the Niantic SDK, leveraging its Visual Positioning
                            System (VPS) and
                            live meshing to create a persistent, shared digital canvas over the physical world.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2025—</h6>
                    <h6>in progress</h6>
                    <HiDotsHorizontal/>
                </div>
            </div>
            <div className="button" id={"noLink"}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={placeholder} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>AR Judgy Fridge</h4>
                    <hr/>
                    <ul>
                        <li>A foundational prototype for an emotionally intelligent, conversational AI in augmented
                            reality (AR).
                        </li>
                        <li>Integrates computer vision with large language models (LLMs) to understand and respond to
                            human language and behaviour with visible, emotional feedback, simulating a
                            natural exchange.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2025</h6>
                    <h6>private</h6>
                    <IoIosLock/>
                </div>
            </div>
            <div className="button" onClick={() => openLink("https://github.com/nour2063/trailblazer")}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={trailblazer} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>Trailblazer</h4>
                    <hr/>
                    <ul>
                        <li>An exploration of interactions and visuals in mixed reality for the context of cycling.
                        </li>
                        <li>Designed a mixed reality gamified cycling experience inspired by Snake and Tron for the
                            Meta Quest 3.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2024—2025</h6>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className="button" onClick={() => openLink("https://github.com/nathanlogie/neuro_arcade")}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={neuroArcade} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>NeuroArcade</h4>
                    <hr/>
                    <ul>
                        <li>A unified web app implemented with Django + React to display, process, and upload results
                            from
                            neuroscience research “brain games” played by humans and AI models hosted on third party
                            platforms.
                        </li>
                        <li>Took on lead demonstrator role in an Agile Scrum team.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2023—2024</h6>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className="button" onClick={() => openLink("https://github.com/babyEscape/babyEscape")}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={babyEscape} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>babyEscape</h4>
                    <hr/>
                    <ul>
                        <li>An escape room in virtual reality where the player embodies a baby. Designed with the
                            “grab move” locomotion technique to imitate crawling, and the use of microphone input
                            for puzzle interaction.
                        </li>
                        <li>Developed in a team of 4, with a focus on providing unique XR interactions and mitigating
                            cyber sickness.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2024</h6>
                    <h6>coursework</h6>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className="button" id={"noLink"}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={placeholder} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>BB84 Quantum Key Exchange Protocol Qiskit Implementation</h4>
                    <hr/>
                    <ul>
                        <li>
                            A simulated BB84 quantum key exchange protocol built with Qiskit on Qbraid for an assignment
                            in Quantum Computing.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2025</h6>
                    <h6>coursework</h6>
                    <IoIosLock/>
                </div>
            </div>
            <div className="button" id={"noLink"}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={placeholder} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>Dockerized Minecraft Server with On-Demand Remote Control through Discord API</h4>
                    <hr/>
                    <ul>
                        <li>
                            An endeavour I took on after learning cloud system infrastructure to deploy a dockerized
                            Minecraft server on the Google Cloud Compute Engine.
                        </li>
                        <li>
                            A separate low-spec virtual machine ran a python script which handled the Discord bot
                            serving as a chat interface for remotely controlling the application.
                        </li>
                        <li>
                            It also frequently polled the server player count, and suspended the server image when
                            it was inactive to save on cost. Players would type in "/start" in Discord to resume the image.
                        </li>
                    </ul>
                </div>
                <div className="link" id={"noLink"}>
                    <h6>2025</h6>
                    <h6>private</h6>
                    <IoIosLock/>
                </div>
            </div>
            <div className="button" onClick={() => openLink("https://combinatorialpress.com/article/jcmcc/Volume%20047/vol-047-paper%206.pdf")}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={cp} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>Infectious Firefighter Problem Constraint Program</h4>
                    <hr/>
                    <ul>
                        <li>
                            The firefighter problem is defined by a discrete-time model of a diffusive process on a
                            graph, where a fire breaks out at a set of vertices.
                        </li>
                        <li>
                            This problem is a modified version which includes an infectious defence.
                        </li>
                        <li>
                            Model's success is attributed to the use of an auxiliary variable for each node indicating
                            whether or not it is scheduled to change in any given turn.
                        </li>
                        <li>
                            Solves a 6x6 grid with an initial fire in (2, 3) in just 143ms on an M3 Macbook Pro, far
                            exceeding the expectations of the course coordinator.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2024</h6>
                    <h6>coursework</h6>
                    <FiExternalLink />
                </div>
            </div>
            <div className="button" id={"noLink"}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={solitaire} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>CLI Solitaire built with Haskell</h4>
                    <hr/>
                    <ul>
                        <li>
                            The game Solitaire in a command line interface built with functional programming principles
                            in Haskell.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2024</h6>
                    <h6>coursework</h6>
                    <IoIosLock/>
                </div>
            </div>
            <div className="button" onClick={() => openLink("https://github.com/babyEscape/babyEscape")}>
                <Tilt className={"tilt"}>
                    <img className={"photo"} src={oneHandedSwiper} alt=""/>
                </Tilt>
                <div className={"blurb"}>
                    <h4>One-Handed Swiper</h4>
                    <hr/>
                    <ul>
                        <li>
                            A proof-of-concept React-based web app for a swipe interaction prototype with playing cards.
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h6>2024</h6>
                    <h6>coursework</h6>
                    <IoIosArrowForward/>
                </div>
            </div>
        </div>
    );
}