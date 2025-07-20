import * as THREE from "three";
import React from "react";
import {
  useGLTF,
  Html as HtmlDrei,
} from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { CuboidColliderDynamic } from "../Utils/PhyshicsColliders";
import { AtlasMaterial } from "../../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    LinkedIn: THREE.Mesh;
    GitHub: THREE.Mesh;
  };
};

export function ContactDynamics({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes } = useGLTF(
    "/models/ContactSecctionDynamics.glb"
  ) as GLTFResult;

  const handlePointerOver = (
    event: ThreeEvent<PointerEvent>
  ) => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (
    event: ThreeEvent<PointerEvent>
  ) => {
    document.body.style.cursor = "default";
  };

  return (
    <group dispose={null}>
      <CuboidColliderDynamic
        id='linkedin'
        args={[1, 1, 1]}
        scale={[1, 1, 1]}
        position={[85.23, 0.43, 4.79445]}
        rotation={[0, 0, 0]}
        mass={1}
        type='Dynamic'>
        <group
          name='LinkedIn'
          scale={0.47}
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={(e) => handlePointerOut(e)}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/juanglezf/",
              "_blank"
            )
          }>
          <mesh
            name='LinkedIn'
            castShadow
            receiveShadow
            geometry={nodes.LinkedIn.geometry}
            material={atlasMaterial}
          />
          <mesh>
            <HtmlDrei
              position={[0, 2, 0]}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/juanglezf/",
                  "_blank"
                )
              }>
              <div className='border_rounded_btn'></div>
            </HtmlDrei>
          </mesh>
        </group>
      </CuboidColliderDynamic>

      <CuboidColliderDynamic
        id='linkedin'
        args={[1, 1, 1]}
        scale={[1, 1, 1]}
        position={[86.35, 0.39, 4.79445]}
        rotation={[0, 0, 0]}
        mass={1}
        type='Dynamic'>
        <group
          name='GitHub'
          scale={0.47}
          onPointerOver={(e) => handlePointerOver(e)}
          onPointerOut={(e) => handlePointerOut(e)}
          onClick={() =>
            window.open(
              "https://github.com/SirJohn72-script",
              "_blank"
            )
          }>
          <mesh
            name='GitHub'
            castShadow
            receiveShadow
            geometry={nodes.GitHub.geometry}
            material={atlasMaterial}
          />
          <mesh>
            <HtmlDrei
              position={[0, 2, 0]}
              onClick={() =>
                window.open(
                  "https://github.com/SirJohn72-script",
                  "_blank"
                )
              }>
              <div className='border_rounded_btn'></div>
            </HtmlDrei>
          </mesh>
        </group>
      </CuboidColliderDynamic>
    </group>
  );
}

useGLTF.preload("/models/ContactSecctionDynamics.glb");
