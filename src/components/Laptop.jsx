import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const Laptop = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5); // Shrink canvas size
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      (window.innerWidth * 0.5) / (window.innerHeight * 0.5), // Adjust aspect ratio
      0.1,
      1000
    );
    camera.position.z = 24;

    // Create scene
    const scene = new THREE.Scene();

    // Add lights
    const light = new THREE.DirectionalLight(0xffffff, 2.4);
    light.position.set(-6, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Load the FBX model
    const loader = new FBXLoader();
    let model = null;
    let screen = null;
    const modelInitialRotation = [0.5, -0.5, 0];
    const screenInitialRotation = [0, Math.PI, 0];
    const modelInitialPosition = [-3, -8, -10];

    loader.load(
      "/laptop/source/Laptop.fbx",
      (object) => {
        model = object;
        model.position.set(...modelInitialPosition);
        model.rotation.set(...modelInitialRotation);

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.name === "Frame") {
              child.material.roughness = 0.5;
            }
            if (child.name === "Screen") {
              child.material.roughness = 0.5;
              child.material.metalness = 0.5;
              screen = child;
              screen.rotation.set(...screenInitialRotation);
            }
          }
        });

        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error(error);
      }
    );

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      if (model) {
        model.position.y =
          modelInitialPosition[1] + Math.cos(clock.getElapsedTime());
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = (window.innerWidth * 0.5) / (window.innerHeight * 0.5);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    };
    window.addEventListener("resize", handleResize);

    // Scroll interactions
    const handleScroll = () => {
      const y = window.scrollY;
      if (screen) {
        screen.rotation.x =
          screenInitialRotation[0] + Math.min(y / 300, Math.PI / 2);
      }
      if (model) {
        model.rotation.y = modelInitialRotation[1] + y * 0.001;
      }
    };
    document.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", handleScroll);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default Laptop;
