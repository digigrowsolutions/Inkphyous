"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function PendantModel({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);

  // Spin only in place (no circular motion)
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.5; // keep spinning
  });

  return <primitive ref={group} object={scene} scale={10} />;
}

export default function PendantViewer() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Your 3D Model */}
        <PendantModel url="/pendant.glb" />

        {/* User can orbit/zoom */}
        <OrbitControls enableDamping />

        {/* Nice background/reflections */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
