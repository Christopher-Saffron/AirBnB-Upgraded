// components/Room.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Box = ({ rotateLeft, rotateRight }) => {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate the box on each frame
    meshRef.current.rotation.y += 0.01;
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        rotateLeft();
      } else if (event.key === 'ArrowRight') {
        rotateRight();
      }
    };

    // Attach event listener for keyboard input
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [rotateLeft, rotateRight]);

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

function Room() {
  const sceneRef = useRef();

  const rotateLeft = () => {
    sceneRef.current.rotation.y -= 0.1;
  };

  const rotateRight = () => {
    sceneRef.current.rotation.y += 0.1;
  };

  return (
    <div>
      <p className="mb-5 text-xl font-semibold px-3 text-gray-700">
        Your room will look like this:
      </p>
      <div className="border border-red-500 w-full md:w-5/6 mx-auto h-96">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box rotateLeft={rotateLeft} rotateRight={rotateRight} />
          <mesh ref={sceneRef}>
            <boxBufferGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default Room;