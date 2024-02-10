import '../styles/App.css'
import {MouseEventHandler, ReactNode} from "react";

interface Props {
    icon: ReactNode;
    id: string;
    function: MouseEventHandler<HTMLDivElement>;
}

export function Button(props: Props) {
    return (
        <div className={'button'} id={props.id} onClick={props.function} >
            {props.icon}
        </div>
    );
}