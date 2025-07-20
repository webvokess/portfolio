import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Texture } from "three";
import { sRGBEncoding } from "three";

export const LoadTexture = (
  imagePath: string
): Promise<Texture> => {
  return new Promise((resolve, reject) => {
    const loader = new TextureLoader();
    loader.load(
      imagePath,
      (texture) => {
        texture.flipY = false;
        texture.encoding = sRGBEncoding;
        resolve(texture);
      },
      undefined,
      (err) => [reject(err)]
    );
  });
};
