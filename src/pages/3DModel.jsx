"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";

function PendantModel({ url, isInteracting }) {
  const group = useRef();
  const { scene } = useGLTF(url);

  // Target position for smooth return
  const targetPosition = useRef(new THREE.Vector3(0, -1, 0));
  const returning = useRef(false);

  // Rotation speed
  const baseSpeed = 0.9;
  const fastSpin = useRef(false);

  // Drag interaction
  const bindDrag = useDrag(({ offset: [x, y], last }) => {
    isInteracting.current = true;
    returning.current = false;

    // Map drag to 3D position
    group.current.position.x = x / 100;
    group.current.position.y = -y / 100;

    // When drag ends, set targetPosition to center for smooth return
    if (last) {
      isInteracting.current = false;
      returning.current = true;
    }
  });

  // Double-click spin
  const handleDoubleClick = () => {
    fastSpin.current = true;
    setTimeout(() => {
      fastSpin.current = false;
    }, 2000); // 2 seconds
  };

  // Continuous rotation + smooth return to center
  useFrame((state, delta) => {
    if (!group.current) return;

    // Continuous rotation
    const speed = fastSpin.current ? baseSpeed * 5 : baseSpeed;
    group.current.rotation.y += delta * speed;

    // Smoothly move to target position (center) if not dragging
    if (returning.current && !isInteracting.current) {
      group.current.position.lerp(targetPosition.current, 0.1);
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      {...bindDrag()}
      scale={15}
      position={[0, -1, 0]}
      onPointerOver={() => console.log("Hovered!")}
      onPointerOut={() => console.log("Hover out!")}
      onClick={() => console.log("Clicked!")}
      onDoubleClick={handleDoubleClick}
      cursor="pointer"
    />
  );
}

export default function PendantViewer() {
  const isInteracting = useRef(false);

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Model */}
        <PendantModel url="/pendant.glb" isInteracting={isInteracting} />

        {/* OrbitControls */}
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          minDistance={2}
          maxDistance={20}
          onStart={() => (isInteracting.current = true)}
          onEnd={() => (isInteracting.current = false)}
        />

        {/* Environment */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
