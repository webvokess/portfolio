import { ThreeEvent } from "@react-three/fiber";
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
    Contact: THREE.Mesh;
    Call_Label_Btn: THREE.Mesh;
    Post_Contact: THREE.Mesh;
    Cell_hinge: THREE.Mesh;
    Cell_body: THREE.Mesh;
    Cell_Bts: THREE.Mesh;
    Cell_Btns_2: THREE.Mesh;
    Cell_Window: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cell_pad: THREE.Mesh;
    Cell_anntena: THREE.Mesh;
    Lamp_base: THREE.Mesh;
    Lamp_1: THREE.Mesh;
    Lamp_support: THREE.Mesh;
    Name_support: THREE.Mesh;
    name_label: THREE.Mesh;
    flowerpot: THREE.Mesh;
    flower: THREE.Mesh;
    Cacttus_pot: THREE.Mesh;
    Cacttus_body: THREE.Mesh;
    Cactus_Hat: THREE.Mesh;
    Cactus_eye: THREE.Mesh;
    Cattus_mustache: THREE.Mesh;
    Credential: THREE.Mesh;
    Credential_base: THREE.Mesh;
  };
  materials: {
    postips: THREE.MeshStandardMaterial;
    Credential_data: THREE.MeshPhysicalMaterial;
  };
};

export function ContactSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/ContactSecction.glb"
  ) as GLTFResult;

  const [hovered, setHover] = React.useState(false);
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
      <group name='Scene'>
        <mesh
          name='Contact'
          castShadow
          receiveShadow
          geometry={nodes.Contact.geometry}
          position={[83.41, 0.39, 2.71]}
          rotation={[0.12, -0.18, 0.02]}
          scale={[0.09, 0.09, 0.11]}
          onPointerOver={(e) => {
            setHover(true);
            handlePointerOver(e);
          }}
          onPointerOut={(e) => {
            setHover(false);
            handlePointerOut(e);
          }}
          onClick={() =>
            window.open(
              "mailto:j.gonzalez_f@outlook.com?subject=Hello%20there"
            )
          }>
          <meshStandardMaterial
            color={hovered ? "green" : "red"}
          />
        </mesh>
        <mesh
          name='Call_Label_Btn'
          castShadow
          receiveShadow
          // geometry={nodes.Call_Label_Btn.geometry}
          // material={atlasMaterial}
          position={[83.41, 0.8, 2.71]}
          rotation={[0.12, -0.18, 0.02]}
          scale={[1, 1, 1]}>
          <HtmlDrei transform>
            <div
              className='border_rounded_btn'
              onClick={() =>
                window.open(
                  "mailto:j.gonzalez_f@outlook.com?subject=Hello%20there"
                )
              }>
              {" "}
            </div>
          </HtmlDrei>
        </mesh>
        <mesh
          name='Post_Contact'
          castShadow
          receiveShadow
          geometry={nodes.Post_Contact.geometry}
          material={materials.postips}
          position={[86.5, 1.72, -6.2]}
          rotation={[0.14, 0.09, 0.02]}
        />
        <mesh
          name='Cell_hinge'
          castShadow
          receiveShadow
          geometry={nodes.Cell_hinge.geometry}
          material={atlasMaterial}
          position={[82.98, 0.25, 1.06]}
          rotation={[0.12, -0.18, 0.02]}
          scale={1.69}
        />
        <mesh
          name='Cell_body'
          castShadow
          receiveShadow
          geometry={nodes.Cell_body.geometry}
          material={atlasMaterial}
          position={[82.98, 0.25, 1.06]}
          rotation={[0.12, -0.18, 0.02]}
          scale={1.69}
        />
        <mesh
          name='Cell_Bts'
          castShadow
          receiveShadow
          geometry={nodes.Cell_Bts.geometry}
          material={atlasMaterial}
          position={[82.49, 0.57, 0.89]}
          rotation={[0.12, -0.18, 0.02]}
          scale={0.12}
        />
        <mesh
          name='Cell_Btns_2'
          castShadow
          receiveShadow
          geometry={nodes.Cell_Btns_2.geometry}
          material={atlasMaterial}
          position={[82.19, 0.42, 2.12]}
          rotation={[0.12, -0.18, 0.02]}
          scale={[0.09, 0.09, 0.11]}
        />
        <mesh
          name='Cell_Window'
          castShadow
          receiveShadow
          geometry={nodes.Cell_Window.geometry}
          material={atlasMaterial}
          position={[83.16, 0.66, 0.21]}
          rotation={[0.12, -0.18, 0.02]}
          scale={1.69}
        />
        <group
          name='Cell_tap'
          position={[83.18, 0.44, 0.15]}
          rotation={[0.4, -0.16, 0.07]}
          scale={1.69}>
          <mesh
            name='Cylinder'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Cylinder_1'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Cylinder_2'
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={atlasMaterial}
          />
        </group>
        <mesh
          name='Cell_pad'
          castShadow
          receiveShadow
          geometry={nodes.Cell_pad.geometry}
          material={atlasMaterial}
          position={[83.41, 1.15, -1.18]}
          rotation={[0.4, -0.16, 0.07]}
          scale={[0.7, 0.22, 0.22]}
        />
        <mesh
          name='Cell_anntena'
          castShadow
          receiveShadow
          geometry={nodes.Cell_anntena.geometry}
          material={atlasMaterial}
          position={[84.37, 0.59, -0.73]}
          rotation={[1.78, 0.04, 0.31]}
          scale={0.09}
        />
        <mesh
          name='Lamp_base'
          castShadow
          receiveShadow
          geometry={nodes.Lamp_base.geometry}
          material={atlasMaterial}
          position={[85.53, 2.7, -8.72]}
          scale={4.74}
        />
        <mesh
          name='Lamp_1'
          castShadow
          receiveShadow
          geometry={nodes.Lamp_1.geometry}
          material={atlasMaterial}
          position={[85.53, 0.66, -6.32]}
        />
        <mesh
          name='Lamp_support'
          castShadow
          receiveShadow
          geometry={nodes.Lamp_support.geometry}
          material={atlasMaterial}
          position={[85.53, 5.7, -6.61]}
        />
        <mesh
          name='Name_support'
          castShadow
          receiveShadow
          geometry={nodes.Name_support.geometry}
          material={atlasMaterial}
          position={[88.08, 0.67, 0.31]}
          scale={[1.09, 1, 1]}
        />
        <mesh
          name='name_label'
          castShadow
          receiveShadow
          geometry={nodes.name_label.geometry}
          material={atlasMaterial}
          position={[88.08, 0.66, 0.81]}
          rotation={[0.87, 0, 0]}
        />
        <mesh
          name='flowerpot'
          castShadow
          receiveShadow
          geometry={nodes.flowerpot.geometry}
          material={atlasMaterial}
          position={[91.61, -0.03, -4.05]}
          scale={1.28}
        />
        <mesh
          name='flower'
          castShadow
          receiveShadow
          geometry={nodes.flower.geometry}
          material={atlasMaterial}
          position={[91.65, 0.18, -4.05]}
          rotation={[Math.PI, -0.81, Math.PI]}
          scale={0.45}
        />
        <mesh
          name='Cacttus_pot'
          castShadow
          receiveShadow
          geometry={nodes.Cacttus_pot.geometry}
          material={atlasMaterial}
          position={[76.62, 1.24, -5.63]}
          rotation={[0, -0.57, 0]}
        />
        <mesh
          name='Cacttus_body'
          castShadow
          receiveShadow
          geometry={nodes.Cacttus_body.geometry}
          material={atlasMaterial}
          position={[76.62, 2.5, -5.63]}
        />
        <mesh
          name='Cactus_Hat'
          castShadow
          receiveShadow
          geometry={nodes.Cactus_Hat.geometry}
          material={atlasMaterial}
          position={[76.62, 2.59, -5.63]}
        />
        <mesh
          name='Cactus_eye'
          castShadow
          receiveShadow
          geometry={nodes.Cactus_eye.geometry}
          material={atlasMaterial}
          position={[76.62, 2.5, -5.63]}
        />
        <mesh
          name='Cattus_mustache'
          castShadow
          receiveShadow
          geometry={nodes.Cattus_mustache.geometry}
          material={atlasMaterial}
          position={[76.62, 2.5, -4.96]}
        />
        <mesh
          name='Credential'
          castShadow
          receiveShadow
          geometry={nodes.Credential.geometry}
          material={atlasMaterial}
          position={[92.78, 0.25, 4.73]}
          rotation={[0.13, -0.49, 0.06]}
        />
        <mesh
          name='Credential_base'
          geometry={nodes.Credential_base.geometry}
          material={materials.Credential_data}
          position={[92.78, 0.25, 4.73]}
          rotation={[0.13, -0.49, 0.06]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ContactSecction.glb");
