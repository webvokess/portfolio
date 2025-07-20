import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CuboidColliderDynamic } from "../Utils/PhyshicsColliders";
import { AtlasMaterial } from "../../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Sponge: THREE.Mesh;
  };
};

export function YouTubeDynamics({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes } = useGLTF(
    "/models/YouTubeDynamics.glb"
  ) as GLTFResult;
  return (
    <CuboidColliderDynamic
      id='youtube'
      args={[2, 2, 2]}
      scale={[1, 1, 1]}
      position={[80.9658, 0.99, 11.5982]}
      rotation={[0, 0.38, 0]}
      mass={1}
      type='Dynamic'>
      <group dispose={null}>
        <mesh
          name='Sponge'
          castShadow
          receiveShadow
          geometry={nodes.Sponge.geometry}
          material={atlasMaterial}
        />
      </group>
    </CuboidColliderDynamic>
  );
}

useGLTF.preload("/models/YouTubeDynamics.glb");
