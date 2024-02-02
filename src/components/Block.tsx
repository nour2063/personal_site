import {useRef, useState} from "react";
import {Mesh} from "three";
import {RoundedBox} from "@react-three/drei";
import {Select, Selection} from "@react-three/postprocessing";

interface BoxProps {
    position: [number, number, number]
    args: [number, number, number]
}

export function Block(props: BoxProps) {

    const ref = useRef<Mesh>(null!);

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    return (
        <Selection>
            <Select enabled={hovered}>
                <RoundedBox
                    {...props}
                    ref={ref}
                    scale={clicked ? 1.5 : 1}
                    onClick={(event) => click(!clicked)}
                    onPointerOver={(event) => {
                        event.stopPropagation();
                        hover(true)
                    }}
                    onPointerOut={(event) => hover(false)}>

                            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
                </RoundedBox>
            </Select>
        </Selection>
    )
}