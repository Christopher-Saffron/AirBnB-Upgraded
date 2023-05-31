import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshMatcapMaterial, DoubleSide, } from 'three';


export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/room3.glb')
  const wallsMaterial = new MeshMatcapMaterial({ color: '#FD5B61', side: DoubleSide }); 
  const floorMaterial = new MeshMatcapMaterial({ color: '#cf3a3f', side: DoubleSide }); 
  const furnitureMaterial = new MeshMatcapMaterial({ color: '#a8191d', side: DoubleSide }); 

  return (
    <group {...props} dispose={null} rotation={[0,props.rotation[1],0]}>
      <group position={[1, 1, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[0.17, 0.21, 0.17]}>
        <mesh geometry={nodes.Mesh901.geometry} material={furnitureMaterial} />
        <mesh geometry={nodes.Mesh901_1.geometry} material={wallsMaterial} />
        <mesh geometry={nodes.Mesh901_2.geometry} material={floorMaterial} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/room3.glb')
