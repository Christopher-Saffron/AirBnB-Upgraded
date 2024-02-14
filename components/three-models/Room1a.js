import { useGLTF } from "@react-three/drei";
import { DoubleSide, MeshMatcapMaterial } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/Room1a.glb");

  const wallsMaterial = new MeshMatcapMaterial({
    color: "#FD5B61",
    side: DoubleSide,
  }); // Create red material
  const floorMaterial = new MeshMatcapMaterial({
    color: "#cf3a3f",
    side: DoubleSide,
  }); // Create red material
  const furnitureMaterial = new MeshMatcapMaterial({
    color: "#a8191d",
    side: DoubleSide,
  }); // Create red material
  return (
    <group {...props} dispose={null} rotation={[0, props.rotation[1], 0]}>
      <group position={[-1.4, 0.5, -1]}>
        <mesh
          geometry={nodes.Mesh255.geometry}
          material={furnitureMaterial}
        ></mesh>
        <mesh geometry={nodes.Mesh255_1.geometry} material={wallsMaterial} />
        <mesh geometry={nodes.Mesh255_2.geometry} material={floorMaterial} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Room1a.glb");
