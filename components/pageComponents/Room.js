import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const Room1 = dynamic(() => import("../three-models/Room1.js"));
const Room2 = dynamic(() => import("../three-models/Room2.js"));
const Room3 = dynamic(() => import("../three-models/Room3.js"));
const Room4 = dynamic(() => import("../three-models/Room4.js"));

import { OrthographicCamera } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Image from "next/image.js";
extend({ TextGeometry });

function Room({ room }) {
  const [rotation, setRotation] = useState(0);
  const [fromTop, toggleFromTop] = useState(false);
  const handleLeftButtonClick = () => {
    setRotation((prevState) => prevState - Math.PI / 2);
  };
  const handleRightButtonClick = () => {
    setRotation((prevState) => prevState + Math.PI / 2);
  };
  const handleTopButtonClick = () => {
    toggleFromTop(!fromTop);
  };

  return (
    <div>
      <p className="mb-5 px-8 text-xl font-semibold text-gray-700">
        Your room will look like this:
      </p>

      <div className=" w-full max-w-[600px] h-[450px] mx-auto relative mb-14">
        <Canvas
          className=""
          shadows={true}
          frameloop={"demand"}
          dpr={[1, 15]}
          linear={false}
          flat={false}
        >
          {room === "Room1" ? (
            <Room1 rotation={[0, rotation, 0]} />
          ) : room === "Room2" ? (
            <Room2 rotation={[0, rotation, 0]} />
          ) : room === "Room3" ? (
            <Room3 rotation={[0, rotation, 0]} />
          ) : room === "Room4" ? (
            <Room4 rotation={[0, rotation, 0]} />
          ) : (
            ""
          )}

          {/* /// GOOD SETTINGS */}
          <OrthographicCamera
            makeDefault
            zoom={45}
            position={fromTop ? [0, 4, -0.5] : [0, 2, 0]}
            near={-100}
            rotation={
              fromTop
                ? [-Math.PI / 2, 0, 0]
                : [-Math.PI / 4, Math.PI / 9, Math.PI / 9]
            }
          />
        </Canvas>
        <div className="flex gap-3 absolute top-0 left-0 md:left-[-14%] w-full md:w-[130%] h-full justify-center md:justify-between select-none">
          <button
            className="px-6 py-1 cursor-pointer self-end md:self-auto duration-200 hover:scale-150 rounded-lg"
            onClick={handleLeftButtonClick}
          >
            <Image src="/arrRight.svg" alt="" width={30} height={30} />
          </button>
          <button
            className=" bg-gray-50 select-none self-end relative px-6 py-1 border-2 border-gray-200 font-semibold text-xl w-fit md:w-full rounded-lg cursor-pointer duration-200 hover:scale-105"
            onClick={handleTopButtonClick}
          >
            Show from Top
          </button>
          <button
            className="px-6 py-1 cursor-pointer  self-end md:self-auto duration-200 hover:scale-150 rounded-lg"
            onClick={handleRightButtonClick}
          >
            <Image src="/arrLeft.svg" alt="" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Room;
