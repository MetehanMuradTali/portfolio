import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { useRef } from 'react'

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();
    useFrame((state, delta) => {

        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [state.pointer.y / 9, -state.pointer.x / 10, 0], 0.25, delta)

        }
        else {
            easing.dampE(groupRef.current.rotation, [state.pointer.y / 4, -state.pointer.x / 5, 0], 0.25, delta)

        }

    })

    return (
        <group ref={groupRef}>{children}</group>
    )
}

export default HeroCamera