import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, Html as HtmlDrei } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { AtlasMaterial } from "../Types/Three_Types";

type GLTFResult = GLTF & {
  nodes: {
    Button: THREE.Mesh;
    PostTip: THREE.Mesh;
    Teapot: THREE.Mesh;
    Star: THREE.Mesh;
    ButtonBase: THREE.Mesh;
    T65: THREE.Mesh;
    Rocket: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    postips: THREE.MeshStandardMaterial;
    Atlas_Texture: THREE.MeshStandardMaterial;
  };
};

export function YouTubeSecction({ atlasMaterial }: AtlasMaterial) {
  const { nodes, materials } = useGLTF("/models/YouTubeSecction.glb") as GLTFResult;

  const [hovered, setHover] = React.useState(false);
  const t65Ref = useRef<any>();
  const rocketRef = useRef<any>();

  useFrame(({ clock }) => {
    // T65 ship
    t65Ref.current.position.y = 1.13 + Math.sin(clock.getElapsedTime()) / 8;
    t65Ref.current.rotation.x = Math.sin(clock.getElapsedTime()) / 24;
    t65Ref.current.rotation.z = Math.sin(clock.getElapsedTime()) / 24;

    // Rocket Ref
    rocketRef.current.rotation.y = clock.getElapsedTime() / 8;
    rocketRef.current.position.y = 3.5 + Math.sin(clock.getElapsedTime() * 2) / 8;
    rocketRef.current.rotation.z = Math.sin(clock.getElapsedTime()) / 16;
  });

  return (
    <group dispose={null}>
      <group name='Scene'>
        <mesh
          name='Button'
          castShadow
          receiveShadow
          geometry={nodes.Button.geometry}
          onClick={() => {
            window.open("https://www.youtube.com/c/JohnScript72", "_blank");
          }}
          onPointerOver={(event) => {
            setHover(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(event) => {
            setHover(false);
            document.body.style.cursor = "default";
          }}>
          <meshStandardMaterial color={hovered ? "orange" : "red"} />
        </mesh>
        <mesh position={[73.177, 2.04744, 10.7587]}>
          <HtmlDrei transform occlude>
            <div
              className='border_rounded_btn'
              onClick={() => {
                window.open("https://www.youtube.com/c/JohnScript72", "_blank");
              }}></div>
          </HtmlDrei>
        </mesh>

        <mesh name='PostTip' castShadow receiveShadow geometry={nodes.PostTip.geometry} material={materials.postips} />
        <mesh name='Teapot' castShadow receiveShadow geometry={nodes.Teapot.geometry} material={atlasMaterial} />
        <mesh name='Star' castShadow receiveShadow geometry={nodes.Star.geometry} material={atlasMaterial} />
        <mesh
          name='ButtonBase'
          castShadow
          receiveShadow
          geometry={nodes.ButtonBase.geometry}
          material={atlasMaterial}
        />
        <mesh
          name='T65'
          castShadow
          receiveShadow
          ref={t65Ref}
          geometry={nodes.T65.geometry}
          material={atlasMaterial}
          position={[66.73, 2, 9.62]}
          rotation={[0, 1.05, 0]}
        />
        <mesh
          name='Rocket'
          ref={rocketRef}
          castShadow
          receiveShadow
          geometry={nodes.Rocket.geometry}
          material={atlasMaterial}
          position={[77.23, 4.12, 10.04]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/YouTubeSecction.glb");
