import {useRef, useState} from "react";
import {Mesh} from "three";

interface BoxProps {
    position: [number, number, number]
}

export function Box(props: BoxProps) {

    const ref = useRef<Mesh>(null!);

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => {
                event.stopPropagation();
                hover(true)
            }}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[2, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}