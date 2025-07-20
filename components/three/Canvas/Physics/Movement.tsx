import React from "react";
import { useBox, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

export default function Movement() {
  const [playerMovement, playerMovementAPI] =
    useSphere<any>(() => ({
      args: [1],
      mass: 1,
      position: [0, 1, 0],
    }));

  const [input, setInput] = React.useState({
    foward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
  });

  const keys: { [key: string]: string } = {
    KeyW: "foward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ShiftLeft: "shift",
    Space: "jump",
  };
  const FORCE = 50;
  const findKey = (key: string): string => keys[key];

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      setInput((m) => ({
        ...m,
        [findKey(e.code)]: true,
      }));
    }

    function handleKeyUp(e: KeyboardEvent) {
      setInput((m) => ({
        ...m,
        [findKey(e.code)]: false,
      }));
      playerMovementAPI.velocity.set(0, 0, 0);
      playerMovementAPI.angularDamping.set(0);
      playerMovementAPI.angularVelocity.set(0, 0, 0);
      playerMovementAPI.angularFactor.set(0, 0, 0);
      playerMovementAPI.linearDamping.set(0);
      playerMovementAPI.linearFactor.set(0, 0, 0);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    playerMovementAPI.linearFactor.set(1, 0, 1);
    playerMovementAPI.velocity.set(0, 0, 0);

    if (input.foward) {
      playerMovementAPI.applyForce(
        [0, 0, -FORCE],
        [0, 0, 0]
      );
      if (input.left) {
        playerMovementAPI.applyForce(
          [-FORCE, 0, -FORCE],
          [0, 0, 0]
        );
      }
      if (input.right) {
        playerMovementAPI.applyForce(
          [FORCE, 0, -FORCE],
          [0, 0, 0]
        );
      }
    } else if (input.backward) {
      playerMovementAPI.applyForce(
        [0, 0, FORCE],
        [0, 0, 0]
      );

      if (input.backward && input.left) {
        playerMovementAPI.applyForce(
          [-FORCE, 0, FORCE],
          [0, 0, 0]
        );
      }
      if (input.backward && input.right) {
        playerMovementAPI.applyForce(
          [FORCE, 0, FORCE],
          [0, 0, 0]
        );
      }
    } else if (input.left) {
      playerMovementAPI.applyForce(
        [-FORCE, 0, 0],
        [0, 0, 0]
      );
    } else if (input.right) {
      playerMovementAPI.applyForce(
        [FORCE, 0, 0],
        [0, 0, 0]
      );
    }
  });

  return (
    <mesh position={[0, 2, 0]} ref={playerMovement}>
      <sphereGeometry args={[1, 16, 15]} />
      <meshBasicMaterial
        color={"0xff00ff"}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}
