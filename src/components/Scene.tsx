import styles from "../styles/Scene.module.css"
import { useRef, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { Mesh } from "three";
import {MeshReflectorMaterial, BakeShadows, OrbitControls} from '@react-three/drei'
import {Bloom, EffectComposer} from "@react-three/postprocessing";


// function CameraRig() {
//     useFrame((state, delta) => {
//         easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta);
//         state.camera.lookAt(0, 0, 0);
//     });
//     return null;
// }

function Ground() {
    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]}/>
            <MeshReflectorMaterial
                blur={[500, 100]}
                resolution={512}
                mixBlur={100}
                mixStrength={2}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color={'rgba(95,104,117,0.25)'}
                mirror={0.3}
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
            onPointerOver={(event) => {
                event.stopPropagation();
                hover(true)
            }}
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
                <hemisphereLight intensity={1} groundColor="white" />
                <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                {/* Main scene */}
                <group position={[-0, -1, 0]}>
                    <Box position={[-1.2, 0.75, 0]} />
                    <Box position={[1.2, 0.75, 0]} />
                    <Ground />
                    <pointLight distance={10} intensity={10} position={[-0.15, 2.2, 2]} color="orange" />
                </group>
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1} intensity={10} />
                </EffectComposer>
                {/* Camera movements */}
                {/*<CameraRig />* //todo use these camera controls for final  /}
                {/* Small helper that freezes the shadows for better performance */}
                <BakeShadows />
                <OrbitControls minPolarAngle={1} maxPolarAngle={Math.PI/2} maxDistance={10} />
            </Canvas>
        </div>
    );
}
