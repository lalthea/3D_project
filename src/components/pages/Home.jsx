import {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        </div>*/}

        const Home = () => {
  return (
    <section className="w-full h-screen relatives">
        <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.2, far:1000 }}
        >
            <Suspense>

            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home