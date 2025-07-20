import React from "react";
import {
  CuboidCollider,
  CylinderCollider,
} from "../Utils/PhyshicsColliders";

export default function YouTubeStatic() {
  return (
    <>
      <CuboidCollider
        id='t65_body'
        args={[7.42, 2.3, 2.3]}
        scale={[1, 1, 1]}
        position={[67.84, 1.17, 10.195]}
        mass={0}
        type='Static'
        rotation={[0, -0.52, 0]}
      />
      <CuboidCollider
        id='t65_wings'
        args={[1.82, 2.3, 9.28]}
        scale={[1, 1, 1]}
        position={[66.167, 1.17, 9.36]}
        mass={0}
        type='Static'
        rotation={[0, -0.52, 0]}
      />
      <CylinderCollider
        id='teapot'
        args={[2.25, 2.25, 3.2]}
        position={[73.94, 1.58, 5.52]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Static'>
        {null}
      </CylinderCollider>

      <CylinderCollider
        id='rocket'
        args={[1.48, 1.48, 2.11]}
        position={[77.22, 1.056, 10]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Static'>
        {null}
      </CylinderCollider>

      <CuboidCollider
        id='button'
        args={[2.80715, 0.814533, 3.1983]}
        scale={[1, 1, 1]}
        position={[73.0453, 0.5, 10.449]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
    </>
  );
}
