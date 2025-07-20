import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Text002: THREE.Mesh;
    Game_Boy_Window: THREE.Mesh;
    Text007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Text: THREE.Mesh;
    Text001: THREE.Mesh;
    Cube007: THREE.Mesh;
    Plane138: THREE.Mesh;
    Cube006: THREE.Mesh;
    Plane139: THREE.Mesh;
    Plane140: THREE.Mesh;
    Circle028: THREE.Mesh;
    Circle030: THREE.Mesh;
    Vert: THREE.Mesh;
    Vert001: THREE.Mesh;
    Text006: THREE.Mesh;
    Vert002: THREE.Mesh;
    Vert003: THREE.Mesh;
    Plane136: THREE.Mesh;
    Circle031: THREE.Mesh;
    Vert005: THREE.Mesh;
    Plane116: THREE.Mesh;
    Plane107: THREE.Mesh;
    Plane107_1: THREE.Mesh;
    Circle038: THREE.Mesh;
    Circle039: THREE.Mesh;
    Circle040: THREE.Mesh;
    Circle047: THREE.Mesh;
    Plane117: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Sphere003: THREE.Mesh;
    Sphere009: THREE.Mesh;
    Sphere010: THREE.Mesh;
    Sphere011: THREE.Mesh;
    Sphere012: THREE.Mesh;
    Sphere013: THREE.Mesh;
    Sphere014: THREE.Mesh;
  };
};

export function TechsSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes } = useGLTF(
    "/models/TechsSecction.glb"
  ) as GLTFResult;

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='Text002'
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={atlasMaterial}
          position={[44.91, 1.91, -7.67]}
          rotation={[-Math.PI / 2, 0, 1.12]}
          scale={-3.29}
        />
        <mesh
          name='Game_Boy_Window'
          castShadow
          receiveShadow
          geometry={nodes.Game_Boy_Window.geometry}
          material={atlasMaterial}
          position={[55.58, 0.7, 6.8]}
          rotation={[0, 0.42, 0]}
        />
        <mesh
          name='Text007'
          castShadow
          receiveShadow
          geometry={nodes.Text007.geometry}
          material={atlasMaterial}
          position={[47.55, 6.14, -7.6]}
          rotation={[Math.PI / 2, 0, 2.06]}
          scale={1.36}
        />
        <mesh
          name='Cube008'
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={atlasMaterial}
          position={[58.96, 2, -6.3]}
          rotation={[0, -0.68, 0]}
        />
        <mesh
          name='Cube010'
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={atlasMaterial}
          position={[49.26, 5.99, -6.73]}
          rotation={[0, -0.49, 0]}
        />
        <mesh
          name='Cube011'
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={atlasMaterial}
          position={[55.45, 6.03, -7.12]}
          rotation={[0, -0.68, 0]}
        />
        <mesh
          name='Text'
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={atlasMaterial}
          position={[45.66, 1.99, -5.08]}
          rotation={[Math.PI / 2, 0, 0.45]}
          scale={3.12}
        />
        <mesh
          name='Text001'
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={atlasMaterial}
          position={[48.37, 1.91, -5.95]}
          rotation={[Math.PI / 2, 0, -1.12]}
          scale={3.29}
        />
        <mesh
          name='Cube007'
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={atlasMaterial}
          position={[46.63, 2, -6.82]}
          rotation={[0, -0.45, 0]}
        />
        <mesh
          name='Plane138'
          castShadow
          receiveShadow
          geometry={nodes.Plane138.geometry}
          material={atlasMaterial}
          position={[46.63, 4.08, -6.86]}
          rotation={[-0.03, 1.35, 0.03]}
        />
        <mesh
          name='Cube006'
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={atlasMaterial}
          position={[52.75, 2, -6.84]}
          rotation={[0, 0.4, 0]}
        />
        <mesh
          name='Plane139'
          castShadow
          receiveShadow
          geometry={nodes.Plane139.geometry}
          material={atlasMaterial}
          position={[53.62, 1.81, -5.1]}
          rotation={[Math.PI / 2, 0, -0.4]}
          scale={0.1}
        />
        <mesh
          name='Plane140'
          castShadow
          receiveShadow
          geometry={nodes.Plane140.geometry}
          material={atlasMaterial}
          position={[51.1, 2.15, -5.79]}
          rotation={[0, 0.4, 0]}
        />
        <mesh
          name='Circle028'
          castShadow
          receiveShadow
          geometry={nodes.Circle028.geometry}
          material={atlasMaterial}
          position={[52.74, 3.94, -6.83]}
          rotation={[0, 0.4, 0]}
        />
        <mesh
          name='Circle030'
          castShadow
          receiveShadow
          geometry={nodes.Circle030.geometry}
          material={atlasMaterial}
          position={[49.25, 7.93, -6.74]}
          rotation={[0, -0.09, 0]}
        />
        <mesh
          name='Vert'
          castShadow
          receiveShadow
          geometry={nodes.Vert.geometry}
          material={atlasMaterial}
          position={[57.68, 2.14, -4.9]}
          rotation={[0, -0.68, 0]}
        />
        <mesh
          name='Vert001'
          castShadow
          receiveShadow
          geometry={nodes.Vert001.geometry}
          material={atlasMaterial}
          position={[60.44, 1.98, -5.11]}
          rotation={[0, -0.68, 0]}
        />
        <mesh
          name='Text006'
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={atlasMaterial}
          position={[48.22, 5.58, -5.11]}
          rotation={[Math.PI / 2, 0, 0.49]}
          scale={1.68}
        />
        <mesh
          name='Vert002'
          castShadow
          receiveShadow
          geometry={nodes.Vert002.geometry}
          material={atlasMaterial}
          position={[58.96, 3.9, -6.3]}
          rotation={[0, -0.68, 0]}
        />
        <mesh
          name='Vert003'
          castShadow
          receiveShadow
          geometry={nodes.Vert003.geometry}
          material={atlasMaterial}
          position={[51.05, 5.99, -5.78]}
          rotation={[0, -0.49, 0]}
        />
        <mesh
          name='Plane136'
          castShadow
          receiveShadow
          geometry={nodes.Plane136.geometry}
          material={atlasMaterial}
          position={[55.38, 8.01, -7.1]}
          rotation={[-Math.PI / 2, 0, -0.68]}
        />
        <mesh
          name='Circle031'
          castShadow
          receiveShadow
          geometry={nodes.Circle031.geometry}
          material={atlasMaterial}
          position={[57.07, 5.95, -6.03]}
          rotation={[0, -0.68, -Math.PI / 2]}
          scale={0.87}
        />
        <mesh
          name='Vert005'
          castShadow
          receiveShadow
          geometry={nodes.Vert005.geometry}
          material={atlasMaterial}
          position={[53.92, 7.06, -5.94]}
          rotation={[Math.PI / 2, 0, 0.68]}
        />
        <mesh
          name='Plane116'
          castShadow
          receiveShadow
          geometry={nodes.Plane116.geometry}
          material={atlasMaterial}
          position={[55.32, 0.94, 9.19]}
          rotation={[0, 0.42, 0]}
          scale={[0.53, 1, 0.17]}
        />
        <group
          name='Plane115'
          position={[55.58, 0.7, 6.8]}
          rotation={[0, 0.42, 0]}>
          <mesh
            name='Plane107'
            castShadow
            receiveShadow
            geometry={nodes.Plane107.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Plane107_1'
            castShadow
            receiveShadow
            geometry={nodes.Plane107_1.geometry}
            material={atlasMaterial}
          />
        </group>
        <mesh
          name='Circle038'
          castShadow
          receiveShadow
          geometry={nodes.Circle038.geometry}
          material={atlasMaterial}
          position={[66.13, 0.14, -5.21]}
          scale={2.77}
        />
        <mesh
          name='Circle039'
          castShadow
          receiveShadow
          geometry={nodes.Circle039.geometry}
          material={atlasMaterial}
          position={[70.31, 1.59, -7.49]}
          rotation={[0, 0, -0.07]}
          scale={2.77}
        />
        <mesh
          name='Circle040'
          castShadow
          receiveShadow
          geometry={nodes.Circle040.geometry}
          material={atlasMaterial}
          position={[64.63, 1.57, -9.74]}
          rotation={[-0.04, 0, 0]}
          scale={2.77}
        />
        <mesh
          name='Circle047'
          castShadow
          receiveShadow
          geometry={nodes.Circle047.geometry}
          material={atlasMaterial}
          position={[57.44, 0.95, 8.19]}
          rotation={[0, 0.42, 0]}
          scale={0.24}
        />
        <mesh
          name='Plane117'
          castShadow
          receiveShadow
          geometry={nodes.Plane117.geometry}
          material={atlasMaterial}
          position={[56.78, 0.92, 9.54]}
          rotation={[0, 0.84, 0]}
          scale={[0.24, 0.24, 0.1]}
        />
        <mesh
          name='Cylinder010'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={atlasMaterial}
          position={[52.21, 5.54, -6.1]}
          scale={[0.91, 0.91, 0.73]}
        />
        <mesh
          name='Sphere003'
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={atlasMaterial}
          position={[52.21, 5.54, -6.21]}
          scale={0.32}
        />
        <mesh
          name='Sphere009'
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={atlasMaterial}
          position={[52.2, 5.26, -5.46]}
          rotation={[0, 0.21, 0]}
          scale={[0.22, 0.12, 0.22]}
        />
        <mesh
          name='Sphere010'
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={atlasMaterial}
          position={[52.2, 5.09, -5.51]}
          rotation={[0, 0.21, 0]}
          scale={[0.22, 0.12, 0.22]}
        />
        <mesh
          name='Sphere011'
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={atlasMaterial}
          position={[52.21, 5.54, -6.1]}
          scale={[0.13, 0.07, 0.13]}
        />
        <mesh
          name='Sphere012'
          castShadow
          receiveShadow
          geometry={nodes.Sphere012.geometry}
          material={atlasMaterial}
          position={[52.21, 5.54, -6.1]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.2}
        />
        <mesh
          name='Sphere013'
          castShadow
          receiveShadow
          geometry={nodes.Sphere013.geometry}
          material={atlasMaterial}
          position={[52.21, 5.54, -6.1]}
          scale={[0.43, 0.28, 0.43]}
        />
        <mesh
          name='Sphere014'
          castShadow
          receiveShadow
          geometry={nodes.Sphere014.geometry}
          material={atlasMaterial}
          position={[52.21, 5.54, -6.1]}
          scale={[0.43, 0.28, 0.43]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/TechsSecction.glb");
