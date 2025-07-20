import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import {
  CylinderCollider,
  IcosphereCollider,
} from "../Utils/PhyshicsColliders";
import { AtlasMaterial } from "../../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    ghost_1: THREE.Mesh;
    ghost_2: THREE.Mesh;
    ghost_3: THREE.Mesh;
    ghost_4: THREE.Mesh;
    pacman: THREE.Mesh;
    knife001: THREE.Mesh;
    knife: THREE.Mesh;
  };
  materials: {
    Atlas_Texture: THREE.MeshStandardMaterial;
  };
};

export function TechsDynamics({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/TechsSecctionDynamic.glb"
  ) as GLTFResult;

  const ghost1Ref = useRef<any>();
  const ghost2Ref = useRef<any>();
  const ghost3Ref = useRef<any>();
  const ghost4Ref = useRef<any>();

  useFrame(({ clock }) => {
    ghost1Ref.current.position.y =
      Math.sin(clock.getElapsedTime() + 1) / 8;
    ghost1Ref.current.rotation.y =
      Math.sin(clock.getElapsedTime() + 1) / 8;

    ghost2Ref.current.position.y =
      Math.sin(clock.getElapsedTime() + 2) / 8;
    ghost2Ref.current.rotation.y =
      Math.sin(clock.getElapsedTime() + 2) / 8;

    ghost3Ref.current.position.y =
      Math.sin(clock.getElapsedTime() + 3) / 8;
    ghost3Ref.current.rotation.y =
      Math.sin(clock.getElapsedTime() + 3) / 8;

    ghost4Ref.current.position.y =
      Math.sin(clock.getElapsedTime() + 4) / 8;
    ghost4Ref.current.rotation.y =
      Math.sin(clock.getElapsedTime() + 4) / 8;
  });

  return (
    <group dispose={null}>
      <CylinderCollider
        id='ghost_1'
        args={[1, 1, 2.95, 30, 30]}
        scale={[0, 0, 0]}
        position={[41.21, 1.46, 5.95]}
        rotation={[0, 0, 0]}
        mass={1}
        type='Dynamic'>
        <group
          name='ghost_1'
          // position={[41.21, 1.46, 5.95]}
          // rotation={[0, 0.59, 0]}
        >
          <mesh
            ref={ghost1Ref}
            name='ghost_1'
            castShadow
            receiveShadow
            geometry={nodes.ghost_1.geometry}
            material={atlasMaterial}
          />
        </group>
      </CylinderCollider>

      <CylinderCollider
        id='ghost_2'
        args={[1, 1, 2.95, 30, 30]}
        scale={[0, 0, 0]}
        position={[43.1, 1.46, 4.4]}
        rotation={[0, 0.25, 0]}
        mass={1}
        type='Dynamic'>
        <group name='ghost_2'>
          <mesh
            ref={ghost2Ref}
            name='ghost_2'
            castShadow
            receiveShadow
            geometry={nodes.ghost_2.geometry}
            material={atlasMaterial}
          />
        </group>
      </CylinderCollider>

      <CylinderCollider
        id='ghost_3'
        args={[1, 1, 2.95, 30, 30]}
        scale={[0, 0, 0]}
        position={[45.66, 1.46, 4.33]}
        rotation={[0, -0.38, 0]}
        mass={1}
        type='Dynamic'>
        <group name='ghost_3'>
          <mesh
            ref={ghost3Ref}
            name='ghost_3'
            castShadow
            receiveShadow
            geometry={nodes.ghost_3.geometry}
            material={atlasMaterial}
          />
        </group>
      </CylinderCollider>

      <CylinderCollider
        id='ghost_4'
        args={[1, 1, 2.95, 30, 30]}
        scale={[0, 0, 0]}
        position={[47.5, 1.46, 6.02]}
        rotation={[0, -0.51, 0]}
        mass={1}
        type='Dynamic'>
        <group name='ghost_4' ref={ghost4Ref}>
          <mesh
            name='ghost_4'
            castShadow
            receiveShadow
            geometry={nodes.ghost_4.geometry}
            material={atlasMaterial}
          />
          <group
            name='knife'
            position={[0.6447, -0.768858, 0.96357]}
            rotation={[Math.PI / 2, 0, -1.13]}
            scale={0.22}>
            <mesh
              name='knife'
              castShadow
              receiveShadow
              geometry={nodes.knife.geometry}
              material={atlasMaterial}
            />
          </group>
        </group>
      </CylinderCollider>

      <IcosphereCollider
        id='pacman'
        args={1.5}
        detail={2}
        scale={[1, 1, 1]}
        position={[44.18, 1.38, 8.2]}
        rotation={[-Math.PI, 0.47, 0]}
        mass={1}
        type='Dynamic'>
        <>
          <group name='pacman' scale={1.4}>
            <mesh
              name='pacman'
              castShadow
              receiveShadow
              geometry={nodes.pacman.geometry}
              material={atlasMaterial}
              // position={[44.18, 1.38, 8.2]}
              // rotation={[-Math.PI, 0.47, 0]}
            />
          </group>
          <group
            name='knife001'
            position={[-0.4, -0.4, -0.00467]}
            rotation={[-3.09, 0.31, 1.87]}
            scale={1}>
            <mesh
              name='knife001'
              castShadow
              receiveShadow
              geometry={nodes.knife001.geometry}
              material={atlasMaterial}
              // position={[44.19, 1.38, 8.21]}
              // rotation={[-3.09, 0.31, -1.87]}
            />
          </group>
        </>
      </IcosphereCollider>
    </group>
  );
}

useGLTF.preload("/models/TechsSecctionDynamic.glb");
