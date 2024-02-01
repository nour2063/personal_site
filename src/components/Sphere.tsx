interface SphereProps {
    position: [number, number, number]
}

export function Sphere(props: SphereProps) {
    return (
        <mesh
            {...props}
        >
            <sphereGeometry args={[0.5, 16, 32]}/>
            <meshBasicMaterial color={'orange'} />
        </mesh>
    )
}