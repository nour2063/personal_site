import { Color } from "@react-three/fiber"

interface Props {
    position: [number, number, number]
    size: [number, number, number]
    color: Color
    intensity: number
}

export function Sphere(props: Props) {
    return (
        <mesh
            position={props.position}
        >
            <sphereGeometry args={props.size}/>
            <meshStandardMaterial color={props.color} />
        </mesh>
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
            <pointLight distance={20} intensity={props.intensity} position={props.position} color={'white'}/>
        </>
    )
}