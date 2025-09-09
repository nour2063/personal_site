import React from "react";

interface AboutProps {
    className?: string
}

export function About({className}: AboutProps) {
    return (
        <div className={className}>
            <hr/>
            <p>
                As a software developer currently pursuing a Master’s degree at the University of Glasgow,
                I am building a holistic perspective on computing by exploring a wide range of technical subjects.
            </p>
            <p>
                My recent work has been centred on extended reality and spatial computing, which I believe will become
                the fundamental medium for future user experiences. I am driven by the conviction that nearly any
                concept involving a user and a computer can be translated into a richer, more intuitive 3D interaction.
            </p>
            <p>
                My personal background has prepared me well for this dynamic field. Born in Egypt and raised across
                Saudi Arabia, England, Qatar, and the UAE before moving to Scotland, I thrive in multicultural and
                fast-paced settings. This global upbringing has made me inherently adaptable and excited for the next
                challenge, wherever it may be.
            </p>
            <p>
                I'm a pretty outdoorsy guy. My hobbies include running, cycling, hiking, and climbing. When it's cold
                outside though you'd find me in the kitchen baking cookies instead. I love video games, especially ones
                that have a unique gimmick or interaction, and controversial movies I can debate over with my friends
                for hours.
            </p>
            <hr/>
        </div>
    );
}