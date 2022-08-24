import "./App.scss";
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls } from "@react-three/drei";

import Box from "./Box";

softShadows();

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* <pointLight position={[-10, 0, -20]} intensity="0.5" />
        <pointLight position={[0, -10, 0]} intensity="1.5" /> */}

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            {/* <meshStandardMaterial attach="material" color="yellow" /> */}
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>

          <Box
            position={[0, 1, 0]}
            args={[3, 2, 1]}
            color="lightblue"
            speed={1.5}
            factor={1}
          />
          <Box position={[-2, 1, -5]} color="pink" speed={1.7} factor={0.75} />
          <Box position={[5, 1, -2]} color="pink" speed={2.5} factor={1.5} />
        </group>

        {/* controlling by mouse */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
