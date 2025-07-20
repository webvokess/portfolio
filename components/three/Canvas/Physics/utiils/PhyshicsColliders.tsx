import React from "react";
import {
  useBox,
  useCylinder,
  useConvexPolyhedron,
  ConvexPolyhedronArgs,
} from "@react-three/cannon";
import { IcosahedronGeometry } from "three";
import CannonUtils from "../Utils/CannonUtils";

interface ColliderProps {
  id: string;
  args: Array<number>;
  scale: [number, number, number];
  position: [number, number, number];
  mass: number;
  rotation: [number, number, number];
  type: "Dynamic" | "Static";
}

export function CuboidCollider({
  id,
  args,
  scale,
  position,
  rotation,
  mass,
  type,
}: ColliderProps) {
  const [cuboid, cuboidAPI] = useBox<any>(() => ({
    type: type,
    args: [args[0], args[1], args[2]],
    position: [...position],
    rotation: [...rotation],
    mass: mass,
    scale: [...scale],
  }));

  React.useEffect(() => {
    cuboidAPI.position.set(
      position[0],
      position[1],
      position[2]
    );
  }, [position]);

  return (
    <mesh
      ref={cuboid}
      position={position}
      castShadow={false}
      receiveShadow={false}
      visible={false}>
      <boxGeometry args={[args[0], args[1], args[2]]} />
      <meshBasicMaterial
        color={0xffffff}
        transparent
        opacity={0}
      />
    </mesh>
  );
}

// cilinder
interface ColliderPropsDynamic {
  id: string;
  args: Array<number>;
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  mass: number;
  type: "Dynamic" | "Static";
  children: any;
}

export function CylinderCollider({
  id,
  args,
  scale,
  position,
  rotation,
  mass,
  type,
  children,
}: ColliderPropsDynamic) {
  const [cylinder, cylinderAPI] = useCylinder<any>(() => ({
    type: type,
    args: [args[0], args[1], args[2]],
    position: [...position],
    rotation: [...rotation],
    mass: mass,
    scale: [...scale],
  }));

  return (
    <group
      name={"ciln"}
      ref={cylinder}
      position={position}
      castShadow={false}
      receiveShadow={false}>
      <cylinderGeometry
        args={[args[0], args[1], args[2], args[3]]}
      />
      <meshBasicMaterial
        color={0xffffff}
        transparent
        opacity={0}
      />
      {children}
    </group>
  );
}

export function CuboidColliderDynamic({
  id,
  args,
  scale,
  position,
  rotation,
  mass,
  type,
  children,
}: ColliderPropsDynamic) {
  const [cuboid, cuboidAPI] = useBox<any>(() => ({
    type: type,
    args: [args[0], args[1], args[2]],
    position: [...position],
    rotation: [...rotation],
    mass: mass,
    scale: [...scale],
  }));

  React.useEffect(() => {
    cuboidAPI.position.set(
      position[0],
      position[1],
      position[2]
    );
  }, [position]);

  return (
    <group ref={cuboid} position={position}>
      {children}
    </group>
  );
}

// Ico sphere
interface IcosphereColliderProps {
  id: string;
  args: number;
  detail: number;
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  mass: number;
  type: "Dynamic" | "Static";
  children: any;
}
export function IcosphereCollider({
  id,
  args,
  detail,
  scale,
  position,
  rotation,
  mass,
  type,
  children,
}: IcosphereColliderProps) {
  const geometry = React.useMemo(
    () => new IcosahedronGeometry(args, detail),
    []
  );
  const argss = React.useMemo(
    () => CannonUtils.toConvexPolyhedronProps(geometry),
    [geometry]
  );

  const [icosphere, icosphereAPI] =
    useConvexPolyhedron<any>(() => ({
      type: type,
      position: [...position],
      args: argss as ConvexPolyhedronArgs,
      rotation: [...rotation],
      mass: mass,
      scale: [...scale],
    }));

  return (
    <group ref={icosphere} position={position}>
      {children}
    </group>
  );
}
