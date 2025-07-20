import React from "react";
import { CuboidCollider, CylinderCollider } from "../Utils/PhyshicsColliders";
import { useControls } from "leva";

export default function HomeStatics() {
  React.useEffect(() => {}, []);

  return (
    <>
      <CuboidCollider
        id='gabinete'
        args={[15, 2.91, 11.7]}
        scale={[1, 1, 1]}
        position={[0.064, 1.496, -7.89]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='dixie_clock'
        args={[7.93, 2.87, 4.46]}
        scale={[0, 0, 0]}
        position={[-13.02, 1.45, -3.11]}
        mass={0}
        type='Static'
        rotation={[0, 0.631, 0]}
      />
      <CuboidCollider
        id='bird_pendulum'
        args={[1.49, 1.49, 1.59]}
        scale={[1, 1, 1]}
        position={[0.48, 0.77, 8.37]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='halflife_level'
        args={[17.3, 1, 1.2]}
        scale={[1, 1, 1]}
        position={[-8.2, 0.5, 15.23]}
        mass={0}
        type='Static'
        rotation={[0, -0.21, 0]}
      />
      <CuboidCollider
        id='teclado'
        args={[11.1, 1.4563, 5.4844]}
        scale={[1, 1, 1]}
        position={[-1.5, 0.5, 4.88279]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CuboidCollider
        id='mouse'
        args={[2, 1, 3.2]}
        scale={[1, 1, 1]}
        position={[6.6, 0.5, 5.37]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
      <CylinderCollider
        id='tarro'
        args={[3.75983 / 2, 3.75983 / 2, 1.21148]}
        rotation={[0, 0, 0]}
        mass={1}
        scale={[1, 1, 1]}
        type='Static'
        position={[10.6791, 0.98023, -4.51703]}>
        <mesh position={[0, 0, 0]} visible={false}>
          <cylinderGeometry args={[3.75983 / 2, 3.75983 / 2, 1.21148]} />
          <meshBasicMaterial opacity={0} transparent />
        </mesh>
      </CylinderCollider>
    </>
  );
}
