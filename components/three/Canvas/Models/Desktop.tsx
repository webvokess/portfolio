import * as THREE from "three";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Mesa: THREE.Mesh;
  };
  materials: {
    Atlas_Texture: THREE.MeshStandardMaterial;
  };
};

export function DesktopModel({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes } = useGLTF(
    "/models/Desktop.glb"
  ) as GLTFResult;

  useEffect(() => {}, []);

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='Mesa'
          castShadow
          receiveShadow
          geometry={nodes.Mesa.geometry}
          material={atlasMaterial}></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Desktop.glb");
