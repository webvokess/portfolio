import React from "react";
import { useBox } from "@react-three/cannon";

export default function PlaneSecctionPhysics() {
  const [ref] = useBox<any>(() => ({
    type: "Static",
    position: [36.25, -0.56, 1.45813],
    args: [122, 1, 34],
  }));

  return (
    <mesh ref={ref} position={[0, 0, 0]} name='floor'>
      <boxGeometry args={[120, 1, 34]} />
      <meshBasicMaterial
        color={"#ff0000"}
        opacity={0}
        transparent
      />
    </mesh>
  );
}
