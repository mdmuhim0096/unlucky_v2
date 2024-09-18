import React, { Suspense, useEffect, useState } from 'react';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Preload } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

function Computers() {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  let customScale = 3.3;

  const resWidth = window.innerWidth;
  
  // if(resWidth > 770){
  //   customScale = 2.4;
  // }
  if(resWidth == 768){
    customScale = 2.2;
  }
  if(resWidth == 425){
    customScale = 1.8;
  }
  if(resWidth == 375){
    customScale = 1.5;
  }
  if(resWidth == 320){
    customScale = 1.4;
  };

  return (
    <mesh>

      <hemisphereLight intensity={0.50} groundColor="black" />
      <pointLight intensity={800} />
      <spotLight position={[-20, 70 ,10]}/>
      <primitive
        object={computer.scene}
        position={[0, -8.5, -1]}
        scale={customScale}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  );
}

function ComputerCanvas() {

  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5], pov: -100 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );

}

export default ComputerCanvas;