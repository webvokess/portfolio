import { GenerateVideo } from "../Helpers/GenerateVideoTexture";
import { AtlasMaterial } from "../Types/Three_Types";

import * as THREE from "three";
import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Html as HtmlDrei,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import clsx from "clsx";

const bulbMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,
  opacity: 0.3,
  transparent: true,
  roughness: 0,
  metalness: 0,
});

type GLTFResult = GLTF & {
  nodes: {
    PC_Window: THREE.Mesh;
    dixie_layer_1: THREE.Mesh;
    dixie_layer_1001: THREE.Mesh;
    dixie_layer_1002: THREE.Mesh;
    dixie_layer_1003: THREE.Mesh;
    dixie_layer_1004: THREE.Mesh;
    postip_home: THREE.Mesh;
    PC_Base_3: THREE.Mesh;
    PC_Base_2: THREE.Mesh;
    PC_Base: THREE.Mesh;
    CPU_1: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane005_1: THREE.Mesh;
    keys: THREE.Mesh;
    keyboard_label: THREE.Mesh;
    keyboard_button: THREE.Mesh;
    CPU_2: THREE.Mesh;
    CPU_3: THREE.Mesh;
    mouse_box: THREE.Mesh;
    mouse_buttons: THREE.Mesh;
    mouse_middle: THREE.Mesh;
    mouse_connectr: THREE.Mesh;
    devices_connectors: THREE.Mesh;
    mouse_cable: THREE.Mesh;
    keyboard_cable: THREE.Mesh;
    keyboard_connector: THREE.Mesh;
    mug_spings: THREE.Mesh;
    pencil_4: THREE.Mesh;
    mug: THREE.Mesh;
    Heman_sword_1: THREE.Mesh;
    heman_sword_2: THREE.Mesh;
    heman_sword_3: THREE.Mesh;
    duck: THREE.Mesh;
    Dixie_Box: THREE.Mesh;
    Dixie_base1: THREE.Mesh;
    Dixie_Sub_1: THREE.Mesh;
    Dixie_bulb: THREE.Mesh;
    dixie_base2: THREE.Mesh;
    Dixie_Sub_2: THREE.Mesh;
    dixie_bulb2: THREE.Mesh;
    dixie_base3: THREE.Mesh;
    Dixie_Sub_3: THREE.Mesh;
    dixie_bulb3: THREE.Mesh;
    dixie_base4: THREE.Mesh;
    Dixie_Sub_4: THREE.Mesh;
    dixie_bulb4: THREE.Mesh;
    dixie_base5: THREE.Mesh;
    Dixie_Sub_5: THREE.Mesh;
    dixie_bulb5: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Dixie_Turn_Btn: THREE.Mesh;
    // Dixie_Turn_Label: THREE.Mesh;
    Bird_feet: THREE.Mesh;
    Bird_head: THREE.Mesh;
  };
  materials: {
    postips: THREE.MeshStandardMaterial;
  };
};

export function HomeSecction({
  atlasMaterial,
}: AtlasMaterial) {
  const { nodes, materials } = useGLTF(
    "/models/HomeSecction.glb"
  ) as GLTFResult;

  const [hour, setHour] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [clock, setClock] = useState<boolean>(false);
  const birdMeshRef = useRef<any>();

  function refreshClock() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours() % 12 || 12; // Obtener la hora en formato de 12 horas
    const currentMinutes = currentDate.getMinutes();

    setHour(currentHour);
    setMinutes(currentMinutes);
  }

  function turnOfDixieLabels(turn: boolean) {
    if (turn) {
      // Show clock
      const threeDixiesLabels =
        document.getElementsByClassName(
          "three-dixie-clock"
        );
      Array.from(threeDixiesLabels).forEach((label) => {
        if (
          label.classList.contains("text-glow-animation")
        ) {
          label.classList.add("text-glow--blinking");
        }
        label.classList.remove("three-label--hidden");
        label.classList.add("three-label--block");
      });
    } else {
      // Hidde clock
      const threeDixiesLabels =
        document.getElementsByClassName(
          "three-dixie-clock"
        );
      Array.from(threeDixiesLabels).forEach((label) => {
        if (
          label.classList.contains("text-glow-animation")
        ) {
          label.classList.remove("text-glow--blinking");
        }
        label.classList.add("three-label--hidden");
        label.classList.remove("three-label--block");
      });
    }
  }

  useFrame(({ clock }) => {
    birdMeshRef.current.rotation.x =
      Math.sin(clock.getElapsedTime()) / 3;
  });

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <group dispose={null}>
      <group name='Scene'>
        {/* Dixie Layer */}
        <mesh
          name='dixie_layer_1'
          castShadow
          receiveShadow
          position={[-15.11, 3.44, -1.6]}>
          <HtmlDrei
            transform
            scale={[2, 2, 2]}
            rotation={[0, 0.63, 0]}>
            <h1 className='three-dixie-clock text-glow three-label--hidden'>
              {Math.floor(hour / 10)}
            </h1>
          </HtmlDrei>
        </mesh>
        <mesh
          name='dixie_layer_1001'
          castShadow
          receiveShadow
          position={[-14.05, 3.44, -2.3]}
          scale={1}>
          <HtmlDrei
            transform
            scale={[2, 2, 2]}
            rotation={[0, 0.63, 0]}>
            <h1 className='three-dixie-clock text-glow three-label--hidden'>
              {hour % 10}
            </h1>
          </HtmlDrei>
        </mesh>
        <mesh
          name='dixie_layer_1002'
          castShadow
          receiveShadow
          position={[-13.02, 3.44, -3.05]}
          scale={1}>
          <HtmlDrei
            transform
            scale={[2, 2, 2]}
            rotation={[0, 0.63, 0]}>
            <h1 className='three-dixie-clock text-glow text-glow-animation three-label--hidden'>
              :
            </h1>
          </HtmlDrei>
        </mesh>
        <mesh
          name='dixie_layer_1003'
          castShadow
          receiveShadow
          position={[-12, 3.44, -3.79]}
          scale={1}>
          <HtmlDrei
            transform
            scale={[2, 2, 2]}
            rotation={[0, 0.63, 0]}>
            <h1 className='three-dixie-clock text-glow three-label--hidden '>
              {Math.floor(minutes / 10)}
            </h1>
          </HtmlDrei>
        </mesh>
        <mesh
          name='dixie_layer_1004'
          castShadow
          receiveShadow
          position={[-10.94, 3.44, -4.57]}
          scale={1}>
          <HtmlDrei
            transform
            scale={[2, 2, 2]}
            rotation={[0, 0.63, 0]}>
            <h1 className='three-dixie-clock text-glow three-label--hidden'>
              {minutes % 10}
            </h1>
          </HtmlDrei>
        </mesh>

        {/* End of Dixie Layer */}

        {/* Dixie Button Clock */}

        <mesh
          name='Dixie_Turn_Btn'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Turn_Btn.geometry}
          material={atlasMaterial}
          position={[-13.01, 1.23, -3.08]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_Turn_Label'
          position={[-14.4348, 3.2, 0.234291]}>
          <HtmlDrei
            transform={true}
            rotation={[0, 0.06, 0]}>
            <div
              onClick={() => {
                turnOfDixieLabels(clock);
                setClock(!clock);
              }}
              className={clsx("border_rounded_btn")}></div>
          </HtmlDrei>
        </mesh>
        {/* End Dixie button clock */}

        {/* Bird  */}

        <mesh
          name='Bird_feet'
          castShadow
          receiveShadow
          geometry={nodes.Bird_feet.geometry}
          material={atlasMaterial}
          position={[0.49, 2.64, 7.95]}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        />
        <mesh
          name='Bird_head'
          ref={birdMeshRef}
          castShadow
          receiveShadow
          geometry={nodes.Bird_head.geometry}
          material={atlasMaterial}
          position={[1.24, 3.05, 8.82]}
          rotation={[-0.27, 0, -Math.PI]}
          scale={-1}
        />

        {/* End of Bird */}

        {/* Video background */}
        <mesh
          name='PC_Window'
          castShadow
          receiveShadow
          geometry={nodes.PC_Window.geometry}
          material={GenerateVideo("./videos/doom.mp4")}
          position={[0, 0, -3.02]}
        />
        {/* End video background */}

        <mesh
          name='postip_home'
          castShadow
          receiveShadow
          geometry={nodes.postip_home.geometry}
          material={materials.postips}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='PC_Base_3'
          castShadow
          receiveShadow
          geometry={nodes.PC_Base_3.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='PC_Base_2'
          castShadow
          receiveShadow
          geometry={nodes.PC_Base_2.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='PC_Base'
          castShadow
          receiveShadow
          geometry={nodes.PC_Base.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='CPU_1'
          castShadow
          receiveShadow
          geometry={nodes.CPU_1.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <group name='keyboard_box' position={[0, 0, -3.02]}>
          <mesh
            name='Plane005'
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={atlasMaterial}
          />
          <mesh
            name='Plane005_1'
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={atlasMaterial}
          />
        </group>
        <mesh
          name='keys'
          castShadow
          receiveShadow
          geometry={nodes.keys.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_label'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_label.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_button'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_button.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='CPU_2'
          castShadow
          receiveShadow
          geometry={nodes.CPU_2.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='CPU_3'
          castShadow
          receiveShadow
          geometry={nodes.CPU_3.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_box'
          castShadow
          receiveShadow
          geometry={nodes.mouse_box.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_buttons'
          castShadow
          receiveShadow
          geometry={nodes.mouse_buttons.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_middle'
          castShadow
          receiveShadow
          geometry={nodes.mouse_middle.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_connectr'
          castShadow
          receiveShadow
          geometry={nodes.mouse_connectr.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='devices_connectors'
          castShadow
          receiveShadow
          geometry={nodes.devices_connectors.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mouse_cable'
          castShadow
          receiveShadow
          geometry={nodes.mouse_cable.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_cable'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_cable.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='keyboard_connector'
          castShadow
          receiveShadow
          geometry={nodes.keyboard_connector.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mug_spings'
          castShadow
          receiveShadow
          geometry={nodes.mug_spings.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='pencil_4'
          castShadow
          receiveShadow
          geometry={nodes.pencil_4.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='mug'
          castShadow
          receiveShadow
          geometry={nodes.mug.geometry}
          material={atlasMaterial}
          position={[0, 0, -3.02]}
        />
        <mesh
          name='Heman_sword_1'
          castShadow
          receiveShadow
          geometry={nodes.Heman_sword_1.geometry}
          material={atlasMaterial}
          position={[6.61, 3.29, -8.86]}
          rotation={[-Math.PI, 0.2, 0]}
          scale={[0.59, 1.97, 1.97]}
        />
        <mesh
          name='heman_sword_2'
          castShadow
          receiveShadow
          geometry={nodes.heman_sword_2.geometry}
          material={atlasMaterial}
          position={[5.75, 3.29, -4.59]}
          rotation={[-Math.PI, 0.2, 0]}
          scale={[0.52, 1.28, 0.96]}
        />
        <mesh
          name='heman_sword_3'
          castShadow
          receiveShadow
          geometry={nodes.heman_sword_3.geometry}
          material={atlasMaterial}
          position={[5.75, 3.29, -4.59]}
          rotation={[Math.PI / 2, 0, 0.2]}
          scale={0.29}
        />
        <mesh
          name='duck'
          castShadow
          receiveShadow
          geometry={nodes.duck.geometry}
          material={atlasMaterial}
          position={[-6.32, 4.84, -3.86]}
          rotation={[Math.PI / 2, 0, -0.21]}
          scale={0.47}
        />
        <mesh
          name='Dixie_Box'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Box.geometry}
          material={atlasMaterial}
          position={[-13.01, 1.23, -3.08]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_base1'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_base1.geometry}
          material={atlasMaterial}
          position={[-15.13, 2.65, -1.56]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_Sub_1'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Sub_1.geometry}
          material={atlasMaterial}
          position={[-15.14, 3.09, -1.56]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_bulb'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_bulb.geometry}
          material={bulbMaterial}
          position={[-15.14, 3.56, -1.56]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_base2'
          castShadow
          receiveShadow
          geometry={nodes.dixie_base2.geometry}
          material={atlasMaterial}
          position={[-14.08, 2.65, -2.34]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_Sub_2'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Sub_2.geometry}
          material={atlasMaterial}
          position={[-14.08, 3.09, -2.34]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_bulb2'
          castShadow
          receiveShadow
          geometry={nodes.dixie_bulb2.geometry}
          material={bulbMaterial}
          position={[-14.08, 3.56, -2.33]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_base3'
          castShadow
          receiveShadow
          geometry={nodes.dixie_base3.geometry}
          material={atlasMaterial}
          position={[-13.05, 2.65, -3.09]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_Sub_3'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Sub_3.geometry}
          material={atlasMaterial}
          position={[-13.05, 3.09, -3.09]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_bulb3'
          castShadow
          receiveShadow
          geometry={nodes.dixie_bulb3.geometry}
          material={bulbMaterial}
          position={[-13.05, 3.56, -3.08]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_base4'
          castShadow
          receiveShadow
          geometry={nodes.dixie_base4.geometry}
          material={atlasMaterial}
          position={[-12.03, 2.65, -3.83]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_Sub_4'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Sub_4.geometry}
          material={atlasMaterial}
          position={[-12.03, 3.09, -3.83]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_bulb4'
          castShadow
          receiveShadow
          geometry={nodes.dixie_bulb4.geometry}
          material={bulbMaterial}
          position={[-12.03, 3.56, -3.82]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_base5'
          castShadow
          receiveShadow
          geometry={nodes.dixie_base5.geometry}
          material={atlasMaterial}
          position={[-10.96, 2.65, -4.61]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Dixie_Sub_5'
          castShadow
          receiveShadow
          geometry={nodes.Dixie_Sub_5.geometry}
          material={atlasMaterial}
          position={[-10.96, 3.09, -4.61]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='dixie_bulb5'
          castShadow
          receiveShadow
          geometry={nodes.dixie_bulb5.geometry}
          material={bulbMaterial}
          position={[-10.96, 3.56, -4.6]}
          rotation={[0, 0.06, 0]}
        />
        <mesh
          name='Cylinder011'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={atlasMaterial}
          position={[-8.34, 0.32, 14.02]}
          rotation={[-Math.PI / 2, 0, -0.18]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/HomeSecction.glb");
