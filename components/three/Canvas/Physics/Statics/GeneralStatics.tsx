import React from "react";
import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function GeneralStatics() {
  return (
    <>
      <CuboidCollider
        id='wall'
        args={[113, 2, 2]}
        scale={[1, 1, 1]}
        position={[41.1518, 1, -3.85866]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='back_side'
        args={[118, 2, 2]}
        scale={[1, 1, 1]}
        position={[38.19, 1, -16.72]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='left_side'
        args={[2, 2, 34]}
        scale={[1, 1, 1]}
        position={[-21.82, 1, 1.45]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='front-side'
        args={[118, 2, 2]}
        scale={[1, 1, 1]}
        position={[38.19, 1, 19.72]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='right-side'
        args={[2, 2, 34]}
        scale={[1, 1, 1]}
        position={[98.29, 1, 1.45]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
    </>
  );
}
