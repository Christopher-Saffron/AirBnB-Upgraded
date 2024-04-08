"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "./model.js";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const LoadModel = ({ modelName }) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  // const [target] = useState(new THREE.Vector3(15, -10, 0));
  const [target] = useState(new THREE.Vector3(50, 5, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      // 20 * Math.sin(0.2 * Math.PI),
      // 10,
      // 20 * Math.cos(0.2 * Math.PI)
      0,
      20,
      10
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scW);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scW);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.3;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        -5000,
        5000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight("#f00", 0.5);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      //   loadGLTFModel(scene, "/models/NEW-PLANETS.glb", {
      loadGLTFModel(scene, modelName, {
        receiveShadow: true,
        castShadow: true,
        modelName: modelName,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        //   renderer.render(scene, camera);
        req = requestAnimationFrame(animate);

        // frame = frame <= 100 ? frame + 1 : frame;

        // if (frame <= 100) {
        //   const p = initialCameraPosition;
        //   const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 0.5;

        //   // camera.position.y = 20;
        //   // camera.position.x =
        //   //   p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        //   // camera.position.z =
        //   //   p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        //   // camera.lookAt(target);
        // } else {
        //   // controls.update();
        // }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <div
      ref={refContainer}
      className=" border border-red-500 relative mx-auto mt-5 lg:w-[900px] h-[600px] md:h-[900px] lg:h-[600px]  items-center justify-center flex overflow-hidden"
    ></div>
  );
};

export default LoadModel;
