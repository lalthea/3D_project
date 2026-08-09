import {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import Loader from '../Loader'
{/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        </div>*/}

        const Home = () => {
  return (
    <section className="w-full h-screen relatives">
        <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.2, far:1000 }}
        >
            <Suspense fallback={<Loader />}>

                <directionalLight/>
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />
            
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home