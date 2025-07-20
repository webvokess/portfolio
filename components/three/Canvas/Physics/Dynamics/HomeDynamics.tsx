import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CylinderCollider } from "../Utils/PhyshicsColliders";
import { AtlasMaterial } from "../../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Coffee_1: THREE.Mesh;
    coffee_2: THREE.Mesh;
    coffee_3: THREE.Mesh;
    CokeCup: THREE.Mesh;
  };
};

export function HomeDynamics({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes } = useGLTF(
    "/models/HomeSecctionDynamics.glb"
  ) as GLTFResult;
  return (
    <group dispose={null}>
      <CylinderCollider
        id='coffee_1'
        args={[1.15, 0.845, 3.15]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'
        position={[11.46, 1.57, 4.71]}>
        <mesh
          name='Coffee_1'
          castShadow
          receiveShadow
          geometry={nodes.Coffee_1.geometry}
          material={atlasMaterial}
        />
      </CylinderCollider>

      <CylinderCollider
        id='coffee_2'
        args={[1.15, 0.845, 3.15]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'
        position={[13.8, 1.57, 6.48]}>
        <mesh
          name='coffee_2'
          castShadow
          receiveShadow
          geometry={nodes.coffee_2.geometry}
          material={atlasMaterial}
        />
      </CylinderCollider>

      <CylinderCollider
        id='coffee_3'
        args={[1.15, 0.845, 3.15]}
        position={[14.35, 0.99, 3.49]}
        rotation={[1.48, 0.12, -0.96]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'>
        <mesh
          name='coffee_3'
          castShadow
          receiveShadow
          geometry={nodes.coffee_3.geometry}
          material={atlasMaterial}
        />
      </CylinderCollider>

      <CylinderCollider
        id='cokecup'
        args={[1.3, 1.09, 4.85]}
        position={[-11.97, 2.47166, 7.14615]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Dynamic'>
        <mesh
          name='CokeCup'
          castShadow
          receiveShadow
          geometry={nodes.CokeCup.geometry}
          material={atlasMaterial}
        />
      </CylinderCollider>
    </group>
  );
}

useGLTF.preload("/models/HomeSecctionDynamics.glb");
