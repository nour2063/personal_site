import styles from "../styles/Scene.module.css"
import {Canvas, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";
import { OrbitControls } from '@react-three/drei'
import {Mesh} from "three";

interface BoxProps {
    position: [number, number, number];
}

function Box(props: BoxProps) {

    const ref = useRef<Mesh>(null!);

    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta;
        }
    });


    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => setClicked(!clicked)}
            onPointerOver={(event) => {
                event.stopPropagation();
                setHovered(true);
            }}
            onPointerOut={(event) => setHovered(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function Scene() {
    return (
        <div className={styles.Scene}>
            <Canvas className={styles.Scene}>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}