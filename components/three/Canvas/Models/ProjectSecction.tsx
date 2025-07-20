import * as THREE from "three";
import React from "react";
import {
  useGLTF,
  Html as HtmlDrei,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    atari_box: THREE.Mesh;
    dkong_platform: THREE.Mesh;
    dkong_stairs: THREE.Mesh;
    nin_items: THREE.Mesh;
    nin_items001: THREE.Mesh;
    nin_items002: THREE.Mesh;
    game_cartigres_box: THREE.Mesh;
    game_cartigres_covers: THREE.Mesh;
    project_1_label: THREE.Mesh;
    project_2_label: THREE.Mesh;
    project_3_label: THREE.Mesh;
    little_barrels: THREE.Mesh;
  };
  materials: {
    Atlas_Texture: THREE.MeshStandardMaterial;
    Cartigres: THREE.MeshStandardMaterial;
  };
};

export function ProjectSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/ProjectsSecction.glb"
  ) as GLTFResult;

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='atari_box'
          castShadow
          receiveShadow
          geometry={nodes.atari_box.geometry}
          material={atlasMaterial}
          position={[27.31, 1.19, 7.1]}
          scale={0.21}
        />
        <mesh
          name='dkong_platform'
          castShadow
          receiveShadow
          geometry={nodes.dkong_platform.geometry}
          material={atlasMaterial}
          position={[17.41, 1.72, -6.04]}
          scale={[11.35, 1, 2.92]}
        />
        <mesh
          name='dkong_stairs'
          castShadow
          receiveShadow
          geometry={nodes.dkong_stairs.geometry}
          material={atlasMaterial}
          position={[17.99, 1.81, -3.08]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.05, 0.4, 0.18]}
        />
        <mesh
          name='nin_items'
          castShadow
          receiveShadow
          geometry={nodes.nin_items.geometry}
          material={atlasMaterial}
          position={[38.47, 2.02, -4.01]}
          scale={0.33}
        />
        <mesh
          name='nin_items001'
          castShadow
          receiveShadow
          geometry={nodes.nin_items001.geometry}
          material={atlasMaterial}
          position={[38.47, 2.02, -4.01]}
          scale={0.33}
        />
        <mesh
          name='nin_items002'
          castShadow
          receiveShadow
          geometry={nodes.nin_items002.geometry}
          material={atlasMaterial}
          position={[38.47, 2.02, -4.01]}
          scale={0.33}
        />
        <mesh
          name='game_cartigres_box'
          castShadow
          receiveShadow
          geometry={nodes.game_cartigres_box.geometry}
          material={atlasMaterial}
          position={[27.67, 5.01, -6.06]}
          rotation={[Math.PI / 2, 0, 1.92]}
        />
        <mesh
          name='game_cartigres_covers'
          castShadow
          receiveShadow
          geometry={nodes.game_cartigres_covers.geometry}
          material={materials.Cartigres}
          position={[27.67, 5.01, -6.06]}
          rotation={[Math.PI / 2, 0, 1.92]}
        />
        <mesh
          name='project_1_label'
          castShadow
          receiveShadow
          position={[21.53, 3.53104, -4.23]}
          rotation={[0, 0.61, 0]}>
          <HtmlDrei transform={true}>
            <div
              className='border_rounded_btn'
              onClick={() =>
                window.open(
                  "https://github.com/SirJohn72-script/DronesCustimizationSystem",
                  "_blank"
                )
              }></div>
          </HtmlDrei>
        </mesh>
        <mesh
          name='project_2_label'
          castShadow
          receiveShadow
          position={[27.13, 3.53104, -4.65]}
          rotation={[0, 0, 0]}>
          <HtmlDrei transform={true}>
            <div
              className='border_rounded_btn'
              onClick={() =>
                window.open(
                  "https://github.com/SirJohn72-script/DronesCustimizationSystem",
                  "_blank"
                )
              }></div>
          </HtmlDrei>
        </mesh>
        <mesh
          name='project_3_label'
          castShadow
          receiveShadow
          position={[32.77, 3.53104, -4.54]}
          rotation={[0, -0.61, 0]}>
          <HtmlDrei transform={true}>
            <div
              className='border_rounded_btn'
              onClick={() =>
                window.open(
                  "https://github.com/SirJohn72-script/noche_estrellas_web",
                  "_blank"
                )
              }></div>
          </HtmlDrei>
        </mesh>
        <mesh
          name='little_barrels'
          castShadow
          receiveShadow
          geometry={nodes.little_barrels.geometry}
          material={atlasMaterial}
          position={[13.32, 0.69, -4.05]}
          scale={0.61}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ProjectsSecction.glb");
