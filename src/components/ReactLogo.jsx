import { useGLTF, Float } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
export function ReactModel(props) {
    const { nodes, materials } = useGLTF('models/react.glb')
    const refReactModel = useRef()



    return (
        <Float floatIntensity={1}>
            <group {...props} dispose={null} scale={0.01}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    scale={[19, 19, 52.734]} />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactModel