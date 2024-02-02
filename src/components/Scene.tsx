import styles from "../styles/Scene.module.css"
import { Block } from './Block'
import {Canvas, useFrame} from '@react-three/fiber'
import {MeshReflectorMaterial, BakeShadows} from '@react-three/drei'
import {Bloom, EffectComposer, Outline, Vignette} from "@react-three/postprocessing";
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
                mixBlur={100}
                mixStrength={20}
                depthScale={10}
                minDepthThreshold={3}
                maxDepthThreshold={5}
                color={'rgba(130,140,154,0.25)'}
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
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1} intensity={5} />
                    <Vignette eskil={false} offset={0.05} darkness={0.75} />
                    <Outline blur edgeStrength={100} />
                </EffectComposer>
                {/* Lights */}
                <color attach="background" args={['#0e2c44']}/>
                <hemisphereLight intensity={1} groundColor={'white'}/>
                <SphereSystem position={[0, 4, -10]}/>
                {/* Main scene */}
                <group position={[-0, -2, 0]}>
                    <Block position={[0, 1, 0]} args={[3, 1, 1]} />
                    <Ground/>
                </group>
                {/* Camera movements */}
                <CameraRig/>
                {/* Small helper that freezes the shadows for better performance */}
                <BakeShadows/>
                {/*<OrbitControls minPolarAngle={1} maxPolarAngle={Math.PI/2} maxDistance={15} />*/}
            </Canvas>
        </div>
    );
}
