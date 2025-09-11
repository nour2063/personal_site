import React from "react";

interface FriendsProps {
    className?: string
}

export function Friends({className}: FriendsProps) {

    const openLink = (link : string) => {
        window.open(link, "_blank");
    };

    return (
        <div className={className} id={"friends"}>
            <div className="button" onClick={() => openLink("https://jacksondam.com")}>Jackson Dam</div>
            <div className="button" onClick={() => openLink("https://andreig.dev")}>Andrei Ghiță</div>
            <div className="button" onClick={() => openLink("https://andreiboghean.com")}>Andrei Boghean</div>
            <div className="button" onClick={() => openLink("https://lukeormiston.com")}>Luke Ormiston</div>
            <div className="button" onClick={() => openLink("https://frasermiller.dev")}>Fraser Miller</div>
            <div className="button" onClick={() => openLink("https://vyrz.dev")}>Benjamin Parsons-Willis</div>
            <div className="button" onClick={() => openLink("https://stefvuck.dev/")}>Stefan Vučković</div>
        </div>
    );
}