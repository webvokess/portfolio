import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function ContactStatic() {
  return (
    <>
      <CuboidCollider
        id='cellphone'
        args={[2.18, 2.18, 5.88]}
        scale={[1, 1, 1]}
        position={[83.17, 1.11, -0.18]}
        mass={0}
        type='Static'
        rotation={[0, -0.1729, 0]}
      />
      <CuboidCollider
        id='labelname'
        args={[9.37, 2, 7.14]}
        scale={[1, 1, 1]}
        position={[88.78, 1, -2.33]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='credential'
        args={[5.81, 1, 5.48]}
        scale={[1, 1, 1]}
        position={[93.32, 0.5, 3.7]}
        mass={0}
        type='Static'
        rotation={[0, -0.52, 0]}
      />
    </>
  );
}
