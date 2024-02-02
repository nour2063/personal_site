import {EmissiveSphere, Sphere} from "./Sphere";

interface SphereSystemProps {
    position: [number, number, number]
}

function randomPosition() {
    let num = Math.floor(Math.random()*4) + 1
    num *= Math.round(Math.random()) ? 1 : -1
    return num
}

function randomSize() {
    return Math.random() * 0.5
}

export function SphereSystem(props: SphereSystemProps) {
    return (
        <group position={props.position}>
            <EmissiveSphere position={[0, 0, 0]} color={'orange'} intensity={20} size={[0.75, 16, 32]}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(255,168,254)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(100,218,255)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(129,255,158)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(255,127,127)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(156,98,255)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(213,255,88)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(145,167,255)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(118,255,199)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(255,82,179)'} size={[randomSize(), 16, 32]} intensity={0}/>
            <Sphere position={[randomPosition(), randomPosition(), randomPosition()]} color={'rgb(255,199,111)'} size={[randomSize(), 16, 32]} intensity={0}/>
        </group>
    )
}