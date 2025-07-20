import React from "react";
import { PerspectiveCamera, useHelper } from "@react-three/drei";

export default function Camera() {
  const camera = React.useRef<any>();

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault={true}
      position={[12, 8, 20]}
      fov={35}
      zoom={0.85}
      // far={50}
      // near={1}
    />
  );
}
