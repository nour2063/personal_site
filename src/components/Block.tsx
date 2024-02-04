import {useRef, useState} from "react";
import {Mesh} from "three";
import {RoundedBox} from "@react-three/drei";
import {Bloom, EffectComposer, Outline, Select, Selection} from "@react-three/postprocessing";

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
            <EffectComposer autoClear={false} disableNormalPass>
                <Outline blur edgeStrength={2.5} />
                <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={6} />
            </EffectComposer>
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
                    onPointerOut={(event) => hover(false)}
                >
                            <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} specular={'#000000'} shininess={10} />
                </RoundedBox>
            </Select>
        </Selection>
    )
}