import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
          <icosahedronGeometry args={[1.1,10]} />
          <meshStandardMaterial color='#FFF2FB' polygonOffset polygonOffsetFactor={-5} flatShading />

            <Decal position={[0,0,1.2]} map={decal} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
            <Decal position={[0,0,-1.2]} map={decal} rotation={[0, Math.PI, 0]} flatShading />

            <Decal position={[-1.5,0,0]} map={decal} rotation={[0, -Math.PI / 2, 0]} flatShading />
            <Decal position={[1.5,0,0]} map={decal} rotation={[0, Math.PI / 2, 0]} flatShading />

            <Decal position={[0,1.2,0]} map={decal} rotation={[-Math.PI / 2, 0, 0]} flatShading />
            <Decal position={[0,-1.2,0]} map={decal} rotation={[Math.PI / 2, 0, 0]} flatShading />

      </mesh>
    </Float>
  )
}
const BallCanvas = ({icon}) => (
  <Canvas frameloop='demand' gl={{preserveDrawingBuffer: true}}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} rotateSpeed={0.2}    /> 
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
)

const RoundedCard = ({icon}) => (
  <div style={{
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(255, 255, 255, 0.2)',
    backgroundImage: `url(${icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)',
    letterSpacing: '2px'
  }}>
    <div style={{ transform: 'rotateX(90deg)' }}>⚽</div>
  </div>
);

export {BallCanvas, RoundedCard};