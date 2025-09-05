import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Ring'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    /*const controls = useControls({
        positionX: {
            value: 4,
            min: -10,
            max: 10,
            step: 0.5,
        },
        positionY: {
            value: 4,
            min: -10,
            max: 10,
            step: 0.5,
        },
        positionZ: {
            value: 4,
            min: -10,
            max: 10,
            step: 0.5,
        },

    })*/


    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I'm Metehan <span className='waving-hand'>👋🏻</span></p>
                <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                {/*<Leva />*/}

                <Canvas className='w-full h-full '>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 25]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={isMobile ? 3 : 3.5}
                                position={isMobile ? [3.8, -3.5, -1] : [4, -5, 4.9]}
                                rotation={[2.5, -1.6, 2.1]}
                            />
                        </HeroCamera>
                        <group>
                          
                            <ReactLogo position={isMobile ? [4.5, 3.3, -2] : [11, 3.4, -2]} rotation={[0.4, -0.6, 0]} />
                            <Cube position={isMobile ? [-4.3, -9.5, -2] : [-12, -10, -2]} />
                            <Rings position={isMobile ? [8.8, -18, -2] : [22, -18, -2]} />

                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={4} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#contact' className='w-fit'>
                    <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero

//  <Target position={isMobile ? [-5.2, 4, -2.5] : [-12, 2.5, -2]} rotation={[1.2, 0.7, -0.4]} />