import { MeshBasicMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
export function loadGLTFModel(
  scene,
  glbPath,
  modelName,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  // const basicMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
  // const mesh = new THREE.Mesh(
  //   robot.geometry,
  //   new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  // );
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;

        obj.name = modelName;
        obj.position.y = -50;
        obj.position.x = 0;
        obj.position.z = 0;
        obj.scale.x = 15;
        obj.scale.y = 15;
        obj.scale.z = 15;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = receiveShadow;
            child.receiveShadow = castShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        console.log("error:", error);
        reject(error);
      }
    );
  });
}
