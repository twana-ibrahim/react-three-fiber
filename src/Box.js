import { useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function Box({ position, args, color, speed, factor }) {
  const meshRef = useRef(null);

  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
      position={position}
      ref={meshRef}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={factor}
      />
    </a.mesh>
  );
}
