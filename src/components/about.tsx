import React from "react";

interface AboutProps {
    className?: string
}

export function About({className}: AboutProps) {
    return (
        <div className={className}>
            <hr/>
            <p>
                I’m a software developer currently obtaining a Master’s degree at
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
    );
}