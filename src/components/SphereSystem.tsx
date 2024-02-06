import {EmissiveSphere, Sphere} from "./Sphere";

interface SphereSystemProps {
    position: [number, number, number]
}

function getPosition(): [number, number, number] {
    let x, y, z;
    x = Math.floor(Math.random()*25) + 1
    y = Math.floor(Math.random()*4) + 1
    z = Math.floor(Math.random()*25) + 1
    x *= Math.round(Math.random()) ? 1 : -1
    y *= Math.round(Math.random()) ? 1 : -1
    z *= Math.round(Math.random()) ? 1 : -1
    return [x, y, z]
}

function getSize() {
    return (Math.random() * 0.2) + 0.2
}

function getColor(){
    return "hsl(" + 360 * Math.random() + ',' + 100 + '%,' + (80 + 10 * Math.random()) + '%)'
}

function makeOrbit(count: number) {
    const elements = []
    for (let i = 0; i < count; i++) {
        elements.push(<Sphere
            position={getPosition()}
            color={getColor()}
            size={[getSize(), 16, 32]}
            intensity={0}/>
        )
    }
    return elements
}

export function SphereSystem(props: SphereSystemProps) {
    return (
        <group position={props.position}>
            <EmissiveSphere position={[0, 0, 0]} color={'orange'} intensity={5} size={[1, 16, 32]}/>
            {makeOrbit(35)}
        </group>
    )
}