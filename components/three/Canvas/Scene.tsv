import React, { useEffect, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Camera from "./Camera/Camera";
import Lights from "./Lights/Lights";
import Character from "./Character/Character";

import { DesktopModel } from "./Models/Desktop";
import { HomeSecction } from "./Models/HomeSecction";
import { ProjectSecction } from "./Models/ProjectSecction";
import { TechsSecction } from "./Models/TechsSecction";
import { YouTubeSecction } from "./Models/YouTubeSecction";
import { ContactSecction } from "./Models/ContactSecction";
import { Wall } from "./Models/Wall";

import { Physics, Debug } from "@react-three/cannon";
import PlaneSecctionPhysics from "./Physics/Utils/PlaneSecctionPhysics";
import HomeStatics from "./Physics/Statics/HomeStatics";
import { HomeDynamics } from "./Physics/Dynamics/HomeDynamics";
import { ProjectDynamics } from "./Physics/Dynamics/ProjectDynamics";
import TechsStatics from "./Physics/Statics/TechsStatic";
import GeneralStatics from "./Physics/Statics/GeneralStatics";
import ProjectsStatics from "./Physics/Statics/ProjectsStatics";
import { TechsDynamics } from "./Physics/Dynamics/TechsDynamics";
import ContactStatic from "./Physics/Statics/ContactStatic";
import { ContactDynamics } from "./Physics/Dynamics/ContactDynamics";
import YouTubeStatic from "./Physics/Statics/YouTubeStatic";
import { YouTubeDynamics } from "./Physics/Dynamics/YouTubeDynamics";
import { useLoaderScene } from "../Store/ThreeState";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { LoadTexture } from "./Utils/LoadTextures";
import { EffectComposer, Vignette, DepthOfField } from "@react-three/postprocessing";

export default function Scene() {
  const { setSceneLoaded } = useLoaderScene((state) => state);

  const [globalMaterial, setGlobalMaterial] = useState<THREE.MeshStandardMaterial>(new THREE.MeshStandardMaterial());

  useEffect(() => {
    LoadTexture("./textures/Atlas_Fall.jpg")
      .then((text) => {
        globalMaterial.map = text;
        globalMaterial.needsUpdate = true;
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setSceneLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <Canvas frameloop='demand' shadows gl={{ powerPreference: "high-performance" }} dpr={1}>
        {/* <ContactShadows
          width={100}
          height={100}
          blur={0.15}
        /> */}

        <color attach='background' args={["#1e1e1e"]} />
        <Camera />

        {/* 
        Scene models
      */}
        <HomeSecction atlasMaterial={globalMaterial} />
        <ProjectSecction atlasMaterial={globalMaterial} />
        <TechsSecction atlasMaterial={globalMaterial} />
        <DesktopModel atlasMaterial={globalMaterial} />
        <Wall atlasMaterial={globalMaterial} />
        <ContactSecction atlasMaterial={globalMaterial} />
        <YouTubeSecction atlasMaterial={globalMaterial} />

        {/* 
        Physics Secctions
      */}
        <Physics
          broadphase='SAP'
          gravity={[0, -9.8, 0]}
          frictionGravity={[0, 1, 0]}
          defaultContactMaterial={{ restitution: 0.3 }}>
          {/* <Debug color='black' scale={1.01}> */}
          <Character />

          {/* Statics */}
          <HomeStatics />
          <ProjectsStatics />
          <TechsStatics />
          <GeneralStatics />
          <ContactStatic />
          <YouTubeStatic />

          {/* Dynamics */}
          <HomeDynamics atlasMaterial={globalMaterial} />
          <ProjectDynamics atlasMaterial={globalMaterial} />
          <TechsDynamics atlasMaterial={globalMaterial} />
          <ContactDynamics atlasMaterial={globalMaterial} />
          <YouTubeDynamics atlasMaterial={globalMaterial} />

          {/* Basic */}
          <PlaneSecctionPhysics />
          {/* <OrbitControls
            enableDamping={true}
            enablePan={true}
          /> */}
          {/* </Debug> */}
        </Physics>

        {/* Postprocessing */}
        {/* <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.035} bokehScale={1.7} height={480} />
           <Vignette
            eskil={false}
            offset={0.05}
            darkness={0.8}
          /> 
        </EffectComposer> */}
        <Lights />
      </Canvas>
      {/* <PlayerSound /> */}
    </>
  );
}
