import { Color } from "@react-three/fiber"
import {Line} from "@react-three/drei";

interface Props {
    position: [number, number, number]
    size: [number, number, number]
    color: Color
    intensity: number
}

export function Sphere(props: Props) {
    return (
        <>
            <mesh
                position={props.position}
            >
                <sphereGeometry args={props.size}/>
                <meshStandardMaterial color={props.color}/>
            </mesh>
            <Line
                points={[
                    props.position,
                    [props.position[0], props.position[1] + 50, props.position[2]]
                ]}
                color={'#888888'}
                lineWidth={0.5}
            />
        </>
    )
}

export function EmissiveSphere(props: Props) {
    return (
        <>
            <mesh
                position={props.position}
            >
                <sphereGeometry args={props.size}/>
                <meshBasicMaterial color={props.color}/>
            </mesh>
            <Line
                points={[
                    props.position,
                    [props.position[0], props.position[1] + 50, props.position[2]]
                ]}
                color={'#888888'}
                lineWidth={1}
            />
            <pointLight distance={20} intensity={props.intensity} position={props.position} color={'white'}/>
        </>
    )
}