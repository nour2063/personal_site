import styles from "../styles/Scene.module.css"
import { Box } from './Box'
import {Canvas, useFrame} from '@react-three/fiber'
import {MeshReflectorMaterial, BakeShadows} from '@react-three/drei'
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import { easing } from 'maath';
import {SphereSystem} from "./SphereSystem";


function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

function Ground() {
    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]}/>
            <MeshReflectorMaterial
                blur={[500, 100]}
                resolution={256}
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

export default function Scene() {
    return (
        <div className={styles.Scene}>
            <Canvas
                shadows
                dpr={[1, 1.5]}
                camera={{position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20}}
                eventPrefix="client"
            >
                {/* Lights */}
                <color attach="background" args={['#010E18']}/>
                <hemisphereLight intensity={1} groundColor="white"/>
                <pointLight distance={50} intensity={1.5} position={[0, 0, 0]} color={'white'}/>
                {/* Main scene */}
                <group position={[-0, -2, 0]}>
                    <Box position={[0, 0.75, -1]}/>
                    <SphereSystem position={[0, 6, -10]}/>
                    <Ground/>
                </group>
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1} intensity={10}/>
                </EffectComposer>
                {/* Camera movements */}
                <CameraRig/>
                {/* Small helper that freezes the shadows for better performance */}
                <BakeShadows/>
                {/*<OrbitControls minPolarAngle={1} maxPolarAngle={Math.PI/2} maxDistance={15} />*/}
            </Canvas>
        </div>
    );
}
