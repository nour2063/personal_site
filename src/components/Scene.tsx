import styles from "../styles/Scene.module.css"
import {Canvas, useFrame} from '@react-three/fiber'
import {MeshReflectorMaterial, BakeShadows, DeviceOrientationControls} from '@react-three/drei'
import { easing } from 'maath';
import {SphereSystem} from "./SphereSystem";
import {Bloom, EffectComposer, Outline} from "@react-three/postprocessing";
function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

function Ground() {
    return (
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-0, -2, 0]} >
            <planeGeometry args={[100, 100]} />
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
                camera={{position: [0, 0, 5.5], fov: 60}}
                eventPrefix="client"
            >
                <EffectComposer autoClear={false} disableNormalPass>
                    <Outline blur edgeStrength={2.5} />
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={6} />
                </EffectComposer>

                {/* Lights */}
                <color attach="background" args={['#0e2c44']}/>
                <hemisphereLight intensity={1} groundColor={'white'}/>

                <SphereSystem position={[0, 4, -12]}/>
                <Ground />

                {/* Camera movements */}
                <CameraRig/>
                <DeviceOrientationControls  />
                {/* Small helper that freezes the shadows for better performance */}
                <BakeShadows/>
            </Canvas>
        </div>
    );
}
