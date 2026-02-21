import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const DnaHelixCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const dnaHeight = 200;
    const radiusEdges = 3;
    const variationAngle = 0.1;
    const unionGap = 7;
    const edgeSize = 0.3;
    const verticalSeparation = edgeSize;
    const DNA = new THREE.Group();

    const createDNAFragment = (hasBlade, index) => {
      const dnaFragment = new THREE.Group();

      const firstEdge = new THREE.Mesh(
        new THREE.BoxGeometry(edgeSize, edgeSize, edgeSize),
        new THREE.MeshBasicMaterial({ color: "rgb(234, 60, 36)" })
      );
      const secondEdge = new THREE.Mesh(
        new THREE.BoxGeometry(edgeSize, edgeSize, edgeSize),
        new THREE.MeshBasicMaterial({ color: "rgb(6, 102, 152)" })
      );

      firstEdge.position.x = radiusEdges * Math.sin(index * variationAngle);
      firstEdge.position.z = radiusEdges * Math.cos(index * variationAngle);
      firstEdge.position.y = verticalSeparation * index;

      secondEdge.position.x = -radiusEdges * Math.sin(index * variationAngle);
      secondEdge.position.z = -radiusEdges * Math.cos(index * variationAngle);
      secondEdge.position.y = verticalSeparation * index;

      dnaFragment.add(firstEdge);
      dnaFragment.add(secondEdge);

      if (hasBlade) {
        const blade = new THREE.Group();
        const firstBlade = new THREE.Mesh(
          new THREE.BoxGeometry(edgeSize, edgeSize, radiusEdges),
          new THREE.MeshBasicMaterial({ color: "rgb(234, 60, 36)" })
        );
        const secondBlade = new THREE.Mesh(
          new THREE.BoxGeometry(edgeSize, edgeSize, radiusEdges),
          new THREE.MeshBasicMaterial({ color: "rgb(6, 102, 152)" })
        );

        firstBlade.position.y = verticalSeparation * index;
        firstBlade.position.z = radiusEdges / 2;

        secondBlade.position.y = verticalSeparation * index;
        secondBlade.position.z = -radiusEdges / 2;

        blade.add(firstBlade);
        blade.add(secondBlade);
        blade.rotateY(index * variationAngle);

        dnaFragment.add(blade);
      }

      DNA.add(dnaFragment);
    };

    for (let i = 0; i < dnaHeight; i += 1) {
      createDNAFragment(i % unionGap === 0, i);
    }

    scene.add(DNA);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 20;
    camera.lookAt(new THREE.Vector3(0, 24, 0));
    camera.rotateZ(Math.PI / 4);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas,
      antialias: true,
    });

    const resize = () => {
      const { innerWidth, innerHeight, devicePixelRatio } = window;
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId;
    let lastTime = Date.now();

    const draw = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      DNA.rotateY(deltaTime * 0.001);
      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 h-full w-full blur-lg opacity-45"
    />
  );
};

export default DnaHelixCanvas;
