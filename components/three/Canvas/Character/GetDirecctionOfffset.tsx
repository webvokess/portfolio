import * as THREE from "three";
import { PublicApi } from "@react-three/cannon";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

/**
 *
 * @param foward boolean
 * @param backward boolean
 * @param left boolean
 * @param right boolean
 * @returns the required angle to align the cameras'view with the model's view
 */
export const GetDirecctionOffset = (foward: boolean, backward: boolean, left: boolean, right: boolean): number => {
  let directionOffset = 0;

  if (foward) {
    directionOffset = Math.PI;
    if (left) {
      // w + a
      directionOffset = (-3 * Math.PI) / 4;
    } else if (right) {
      // w + d
      directionOffset = (3 * Math.PI) / 4;
    }
  } else if (backward) {
    directionOffset = 0;
    if (left) {
      // s + a
      directionOffset = -Math.PI / 4;
    }
    if (right) {
      // s + d
      directionOffset = Math.PI / 4;
    }
  } else if (left) {
    directionOffset = -Math.PI / 2; // d
  } else if (right) {
    directionOffset = Math.PI / 2; // a
  }

  // ** previous
  // return directionOffset
  return directionOffset - Math.PI / 6;
};

/**
 * Updates the camera, set the orbit controls target, and
 * update the position of the spotlight
 * @param moveX number
 * @param moveZ number
 */
export const UpdateCameraTarget = (
  moveX: number,
  moveZ: number,
  camera: THREE.Camera,
  scene: THREE.Group,
  controlsRef: any,
  lightRef: any
) => {
  // move camera
  camera.position.x -= moveX;
  camera.position.z -= moveZ;

  let CAMERA_TARGET = new THREE.Vector3();

  // update the camera target
  CAMERA_TARGET.x = scene.position.x;
  CAMERA_TARGET.y = scene.position.y + 2;
  CAMERA_TARGET.z = scene.position.z;

  if (controlsRef.current) {
    controlsRef.current.target = CAMERA_TARGET;
  }
  if (lightRef.current) {
    lightRef.current.position.set(CAMERA_TARGET.x, 12, CAMERA_TARGET.z);
    lightRef.current.rotation.y = Math.PI * -0.5;
  }
};

export const MoveModel = (
  camera: THREE.Camera,
  model: THREE.Group,
  foward: boolean,
  backward: boolean,
  left: boolean,
  right: boolean,
  delta: number,
  currentAnimation: any
): THREE.Vector2 => {
  // Constants for movement
  let WALK_DIRECCTION = new THREE.Vector3();
  let ROTATE_ANGLE = new THREE.Vector3(0, 1, 0);
  let ROTATE_QUATERNION = new THREE.Quaternion();

  /* 
            Calculate the angle between the camera view and
            the model view, the objetive of this code, is get the 
            angle to align the model's view and the camera's view
        */
  let angleYCameraDirection = Math.atan2(camera.position.x - model.position.x, camera.position.z - model.position.z);

  // offset model
  let offsetAngle = GetDirecctionOffset(foward, backward, left, right);

  //rotate model
  ROTATE_QUATERNION.setFromAxisAngle(ROTATE_ANGLE, angleYCameraDirection + offsetAngle);
  model.quaternion.rotateTowards(ROTATE_QUATERNION, 0.2);

  // calculate direcction
  camera.getWorldDirection(WALK_DIRECCTION);
  WALK_DIRECCTION.y = 0;
  WALK_DIRECCTION.normalize();
  WALK_DIRECCTION.applyAxisAngle(ROTATE_ANGLE, offsetAngle);

  // run/walk velocity
  const VELOCITY = currentAnimation.current === "Running" ? 12 : 5;

  // apply the force to the model

  // move model & camera
  const moveX = (WALK_DIRECCTION.x * VELOCITY * delta) / 2;
  const moveZ = (WALK_DIRECCTION.z * VELOCITY * delta) / 2;
  // model.position.x -= moveX;
  // model.position.z -= moveZ;

  return new THREE.Vector2(moveX, moveZ);
};

export const RotateTheModel = (
  camera: THREE.Camera,
  model: THREE.Group,
  foward: boolean,
  backward: boolean,
  left: boolean,
  right: boolean
): void => {
  let ROTATE_ANGLE = new THREE.Vector3(0, 1, 0);
  let ROTATE_QUATERNION = new THREE.Quaternion();

  let angleYCameraDirection = Math.atan2(camera.position.x - model.position.x, camera.position.z - model.position.z);

  // offset model
  let offsetAngle = GetDirecctionOffset(foward, backward, left, right);

  //rotate model
  ROTATE_QUATERNION.setFromAxisAngle(ROTATE_ANGLE, angleYCameraDirection + offsetAngle);
  model.quaternion.rotateTowards(ROTATE_QUATERNION, 0.2);
};

// export const MoveModelWithPhysics = (
//   camera: THREE.Camera,
//   model: THREE.Group,
//   foward: boolean,
//   backward: boolean,
//   left: boolean,
//   right: boolean,
//   delta: number,
//   currentAnimation: any,
//   playerCollaider: any,
//   playerCollaiderAPI: PublicApi
// ): THREE.Vector2 => {
//   const Force = 30;
//   playerCollaiderAPI.rotation.set(0, 0, 0);
//   playerCollaiderAPI.velocity.set(0, 0, 0);
//   playerCollaiderAPI.angularVelocity.set(0, 0, 0);
//   //Rotate the model
//   if (foward) {
//     playerCollaiderAPI.applyForce(
//       [0, 0, -Force],
//       [0, 0, 0]
//     );
//   } else if (left) {
//     playerCollaiderAPI.applyForce(
//       [-Force, 0, 0],
//       [0, 0, 0]
//     );
//   } else if (right) {
//     playerCollaiderAPI.applyForce([Force, 0, 0], [0, 0, 0]);
//   } else if (backward) {
//     playerCollaiderAPI.applyForce([0, 0, Force], [0, 0, 0]);
//   }

//   return new THREE.Vector2(
//     playerCollaider.current.position.x,
//     playerCollaider.current.position.z
//   );
// };

// OLD CODE
// /*
//       Calculate the angle between the camera view and
//       the model view, the objetive of this code, is get the
//       angle to align the model's view and the camera's view
//   */
// let angleYCameraDirection = Math.atan2(
//   camera.position.x - model.scene.position.x,
//   camera.position.z - model.scene.position.z
// );

// // offset model
// let offsetAngle = GetDirecctionOffset(
//   foward,
//   backward,
//   left,
//   right
// );

// //rotate model
// ROTATE_QUATERNION.setFromAxisAngle(
//   ROTATE_ANGLE,
//   angleYCameraDirection + offsetAngle
// );
// model.scene.quaternion.rotateTowards(
//   ROTATE_QUATERNION,
//   0.2
// );

// // calculate direcction
// camera.getWorldDirection(WALK_DIRECCTION);
// WALK_DIRECCTION.y = 0;
// WALK_DIRECCTION.normalize();
// WALK_DIRECCTION.applyAxisAngle(
//   ROTATE_ANGLE,
//   offsetAngle
// );

// // run/walk velocity
// const VELOCITY =
//   currentAnimation.current === "Running" ? 12 : 5;

// // apply the force to the model

// // move model & camera
// const moveX =
//   (WALK_DIRECCTION.x * VELOCITY * delta) / 2;
// const moveZ =
//   (WALK_DIRECCTION.z * VELOCITY * delta) / 2;
// model.scene.position.x -= moveX;
// model.scene.position.z -= moveZ;
