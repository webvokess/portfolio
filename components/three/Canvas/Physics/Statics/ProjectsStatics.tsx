import { CuboidCollider } from "../Utils/PhyshicsColliders";

export default function ProjectsStatics() {
  return (
    <>
      <CuboidCollider
        id='atari'
        args={[3.05, 1, 3.05]}
        scale={[1, 1, 1]}
        position={[28.475, 0.7, 6]}
        mass={0}
        type='Static'
        rotation={[0, 0, 0]}
      />
    </>
  );
}
