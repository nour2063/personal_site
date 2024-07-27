import Tilt from "react-parallax-tilt";
import CV from "../CV.pdf";
import {IoDocumentTextOutline} from "react-icons/io5";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import React from "react";
import {FaUserGroup} from "react-icons/fa6";

export function Sidebar() {
    return (
        <div className={"side"}>
            <a href={CV} target="_blank" rel="noopener noreferrer">
                <Tilt scale={1.1} className={"card"}>
                    <IoDocumentTextOutline/>
                    CV
                </Tilt>
            </a>
            <a href="https://github.com/nour2063" target="_blank" rel="noopener noreferrer">
                <Tilt scale={1.1} className={"card"}>
                    <FaGithub/>
                    GitHub
                </Tilt>
            </a>
            <a href="https://www.linkedin.com/in/nour-elfangary/" target="_blank" rel="noopener noreferrer">
                <Tilt scale={1.1} className={"card"}>
                    <FaLinkedin/>
                    LinkedIn
                </Tilt>
            </a>
            <a href="https://www.instagram.com/noureldineee_/" target="_blank" rel="noopener noreferrer">
                <Tilt scale={1.1} className={"card"}>
                    <FaInstagram/>
                    Instagram
                </Tilt>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <Tilt scale={1.1} className={"card"}>
                    <FaUserGroup/>
                    friends
                </Tilt>
            </a>
        </div>
    );
}