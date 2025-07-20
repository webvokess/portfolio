import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import { useAnimations, useGLTF, OrbitControls, useHelper } from "@react-three/drei";
import { useInput } from "./useInput";
import { useFrame, useThree } from "@react-three/fiber";
import { SpotLightHelper } from "three";
import { MoveModel, RotateTheModel, UpdateCameraTarget } from "./GetDirecctionOfffset";
import { useSphere } from "@react-three/cannon";

// Sound
import { usePlayerSound } from "../../Store/ThreeState";

export default function Character() {
  // Model data
  const model = useGLTF("./models/RobotExpressive.glb");
  model.scene.scale.set(0.5, 0.5, 0.5);
  const { actions } = useAnimations(model.animations, model.scene);

  // global state
  const { isIdle, setIsIdle } = usePlayerSound((state) => state);

  // Model movement
  const { foward, backward, left, right, shift, jump } = useInput();
  const controlsRef = useRef<typeof OrbitControls | undefined>() as any;
  const camera = useThree((state) => state.camera);

  // Lights
  const spotLightRef = useRef<any>();

  // Animations
  const currentAnimation = useRef("");

  // Physcis
  const [spherePlayer, spherePlayerAPI] = useSphere<any>(() => ({
    args: [1],
    mass: 1,
    position: [0, 1, 0],
    onCollide(e) {
      // if (
      //   playerSound.currentTime === playerSound.duration
      // ) {
      //   playerSound.play();
      // }
    },
  }));

  useEffect(() => {
    let action = "";
    if (foward || backward || left || right) {
      if (shift) {
        action = "Running";
      } else {
        action = "Walking";
      }
    } else {
      action = "Idle";
    }

    if (currentAnimation.current != action) {
      const toPlay = actions[action];
      const current = actions[currentAnimation.current];
      current?.fadeOut(0.2);

      toPlay?.reset().fadeIn(0.2).play();
      currentAnimation.current = action;
    }

    // Movement for physics
    function handleKeyUp() {
      spherePlayerAPI.velocity.set(0, 0, 0);
      spherePlayerAPI.angularDamping.set(0);
      spherePlayerAPI.angularVelocity.set(0, 0, 0);
      spherePlayerAPI.angularFactor.set(0, 0, 0);
      spherePlayerAPI.linearDamping.set(0);
      spherePlayerAPI.linearFactor.set(0, 0, 0);
    }

    document.addEventListener("keyup", handleKeyUp);

    // For tracker the movement of the player
    spherePlayerAPI.position.subscribe((v) => {
      model.scene.position.x = v[0];
      model.scene.position.z = v[2];

      controlsRef.current.target.x = v[0];
      controlsRef.current.target.y = 2;
      controlsRef.current.target.z = v[2];

      // THIS IS THE PART TO CHANGE
      // camera.position.x = v[0];
      // camera.position.z = v[2] + 20;

      camera.position.x = v[0] + 12;
      camera.position.z = v[2] + 20;

      spotLightRef.current.position.x = v[0];
      spotLightRef.current.position.y = 8;
      spotLightRef.current.position.z = v[2];
    });

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [foward, backward, left, right, shift, jump]);

  useFrame((state, delta) => {
    if (currentAnimation.current === "Running" || currentAnimation.current === "Walking") {
      setIsIdle(false);

      // Move the sphere
      spherePlayerAPI.linearFactor.set(1, 0, 1);
      spherePlayerAPI.velocity.set(0, 0, 0);

      const FORCE = currentAnimation.current === "Running" ? 120 : 50;

      if (foward) {
        spherePlayerAPI.applyForce([0, 0, -FORCE * 2], [0, 0, 0]);
        if (left) {
          // w + a
          // spherePlayerAPI.applyForce([ -FORCE, 0, FORCE * 0.5 ], [ 0, 0, 0 ]);
          spherePlayerAPI.applyForce([-1.5 * FORCE, 0, FORCE * 0.25], [0, 0, 0]);
        }
        // w + d
        if (right) {
          spherePlayerAPI.applyForce([1.5 * FORCE, 0, FORCE * 0.25], [0, 0, 0]);

          // spherePlayerAPI.applyForce([FORCE, 0, FORCE * -0.5], [0, 0, 0]);
        }
      } else if (backward) {
        // s
        spherePlayerAPI.applyForce([0, 0, FORCE * 2], [0, 0, 0]);

        if (backward && left) {
          // s + a
          // spherePlayerAPI.applyForce([ -FORCE, 0, FORCE * 0.5 ], [ 0, 0, 0 ]);
          spherePlayerAPI.applyForce([-1.5 * FORCE, 0, FORCE * -0.5], [0, 0, 0]);
        }
        if (backward && right) {
          // s + d
          spherePlayerAPI.applyForce([1.5 * FORCE, 0, FORCE * -0.25], [0, 0, 0]);
          // spherePlayerAPI.applyForce([FORCE, 0, FORCE * -0.5], [0, 0, 0]);
        }
      } else if (left) {
        // d
        spherePlayerAPI.applyForce([-FORCE * 2, 0, 0], [0, 0, 0]);
      } else if (right) {
        // a
        spherePlayerAPI.applyForce([FORCE * 2, 0, 0], [0, 0, 0]);
      }

      RotateTheModel(camera, model.scene, foward, backward, left, right);
    } else {
      setIsIdle(true);
    }
  });

  // useHelper(spotLightRef, SpotLightHelper, 0.5);

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableRotate={false}
        enablePan={false}
        maxZoom={5}
        minDistance={15}
        maxDistance={40}
      />
      <spotLight
        castShadow
        ref={spotLightRef}
        color={"#E3C65E"}
        position={[0, 20, 0]}
        angle={(50 * Math.PI) / 180}
        target={model.scene}
        penumbra={0.2}
        shadow-bias={-0.009}
        power={1}
        intensity={8}
        distance={12}
        decay={1}
      />

      <mesh position={[0, 2, 0]} ref={spherePlayer} castShadow={false} receiveShadow={false} visible={false}>
        <sphereGeometry args={[1, 16, 15]} />
        <meshBasicMaterial color={0xff00ff} transparent opacity={0} />
      </mesh>

      <primitive object={model.scene} dispose={null} />
    </>
  );
}

useGLTF.preload("./models/RobotExpressive.glb");
