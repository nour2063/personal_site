import {Button} from "./Button";
import React, {MouseEventHandler, ReactNode} from "react";

interface Props {
    buttons: [ReactNode, string, MouseEventHandler<HTMLDivElement>][]
}

export function ButtonBelt(props: Props) {
    return (
        <div className={'button-belt'}>
            {
                props.buttons.map((button) => {
                    return (<Button icon={button[0]} id={button[1]} function={button[2]} />)
                })
            }
        </div>
    );
}