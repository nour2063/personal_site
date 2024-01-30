import styles from "../styles/Scene.module.css"
import { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from "three";
import {MeshReflectorMaterial, BakeShadows, OrbitControls} from '@react-three/drei'
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { easing } from 'maath'


interface CameraRigProps {}

function CameraRig(props: CameraRigProps) {
    const ref = useRef<HTMLElement>(null!);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta);
        state.camera.lookAt(0, 0, 0);
    });

    return null; // You need to return something from the component
}

function Ground() {
    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 30]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#202020"
                metalness={0.8}
                mirror={1}
            />
        </mesh>
    );
}

interface BoxProps {
    position: [number, number, number]
}

function Box(props: BoxProps) {

    const ref = useRef<Mesh>(null!);

    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function Scene() {
    return (
        <div className={styles.Scene}>
            <Canvas
                shadows
                dpr={[1, 1.5]}
                camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
                eventPrefix="client"
            >
                {/* Lights */}
                <color attach="background" args={['#010E18']} />
                <hemisphereLight intensity={3} groundColor="white" />
                <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                {/* Main scene */}
                <group position={[-0, -1, 0]}>
                    <Box position={[-1.2, 0.75, 0]} />
                    <Box position={[1.2, 0.75, 0]} />
                    <Ground />
                    <pointLight distance={100} intensity={5} position={[-0.15, 2.2, 0]} color="orange" />
                </group>
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1} intensity={3} />
                </EffectComposer>
                {/* Camera movements */}
                <CameraRig />
                {/* Small helper that freezes the shadows for better performance */}
                <BakeShadows />
                <OrbitControls />
            </Canvas>
        </div>
    );
}
