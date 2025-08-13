import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Cone } from '@react-three/drei';
import { Group } from 'three';
import { Plant } from '@/data/plants';

interface Plant3DProps {
  plant: Plant;
}

// Different 3D plant representations based on plant type
const PlantModel = ({ plant }: { plant: Plant }) => {
  const meshRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  const getPlantGeometry = () => {
    switch (plant.id) {
      case 'tulsi':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Tulsi - Bushy herb with small leaves */}
            <Cylinder args={[0.1, 0.15, 1.5]} position={[0, -0.75, 0]}>
              <meshStandardMaterial color="#4a5d3a" />
            </Cylinder>
            {/* Multiple branches */}
            {Array.from({ length: 8 }).map((_, i) => (
              <group key={i} rotation={[0, (i / 8) * Math.PI * 2, 0]}>
                <Cylinder args={[0.02, 0.03, 0.8]} position={[0.3, 0.2, 0]} rotation={[0, 0, 0.3]}>
                  <meshStandardMaterial color="#6b8e4a" />
                </Cylinder>
                {/* Small leaves */}
                {Array.from({ length: 6 }).map((_, j) => (
                  <Sphere key={j} args={[0.08]} position={[0.3 + j * 0.1, 0.3 + j * 0.05, 0]} scale={[1.5, 0.8, 0.3]}>
                    <meshStandardMaterial color="#7cb342" />
                  </Sphere>
                ))}
              </group>
            ))}
          </group>
        );
      
      case 'neem':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Neem - Tree structure */}
            <Cylinder args={[0.15, 0.2, 2]} position={[0, -1, 0]}>
              <meshStandardMaterial color="#4a3c28" />
            </Cylinder>
            {/* Crown */}
            <Sphere args={[1.2]} position={[0, 0.5, 0]} scale={[1, 0.8, 1]}>
              <meshStandardMaterial color="#558b2f" />
            </Sphere>
            {/* Branches */}
            {Array.from({ length: 6 }).map((_, i) => (
              <Cylinder 
                key={i} 
                args={[0.05, 0.08, 0.6]} 
                position={[Math.cos(i) * 0.8, 0.3, Math.sin(i) * 0.8]}
                rotation={[0, i, Math.PI / 6]}
              >
                <meshStandardMaterial color="#6d4c41" />
              </Cylinder>
            ))}
          </group>
        );

      case 'turmeric':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Turmeric - Rhizome underground with leaves above */}
            {/* Underground rhizome */}
            <group position={[0, -1.2, 0]}>
              <Cylinder args={[0.2, 0.15, 0.3]} rotation={[0, 0, Math.PI / 2]}>
                <meshStandardMaterial color="#ff8f00" />
              </Cylinder>
              <Sphere args={[0.12]} position={[0.3, 0, 0]}>
                <meshStandardMaterial color="#ff6f00" />
              </Sphere>
              <Sphere args={[0.1]} position={[-0.25, 0.1, 0]}>
                <meshStandardMaterial color="#ff8f00" />
              </Sphere>
            </group>
            {/* Above ground leaves */}
            <Cylinder args={[0.02, 0.04, 1.5]} position={[0, -0.25, 0]}>
              <meshStandardMaterial color="#2e7d32" />
            </Cylinder>
            {Array.from({ length: 5 }).map((_, i) => (
              <Box 
                key={i} 
                args={[0.4, 0.8, 0.02]} 
                position={[Math.sin(i * 0.8) * 0.3, 0.5 + i * 0.2, Math.cos(i * 0.8) * 0.2]}
                rotation={[0, i * 0.3, 0]}
              >
                <meshStandardMaterial color="#4caf50" />
              </Box>
            ))}
          </group>
        );

      case 'ashwagandha':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Ashwagandha - Shrub with berries */}
            <Cylinder args={[0.08, 0.12, 1.2]} position={[0, -0.6, 0]}>
              <meshStandardMaterial color="#5d4037" />
            </Cylinder>
            {/* Multiple stems */}
            {Array.from({ length: 6 }).map((_, i) => (
              <group key={i} rotation={[0, (i / 6) * Math.PI * 2, 0]}>
                <Cylinder args={[0.03, 0.04, 0.8]} position={[0.2, 0.2, 0]} rotation={[0, 0, 0.2]}>
                  <meshStandardMaterial color="#689f38" />
                </Cylinder>
                {/* Leaves */}
                <Box args={[0.15, 0.25, 0.02]} position={[0.35, 0.4, 0]} rotation={[0, 0.3, 0]}>
                  <meshStandardMaterial color="#7cb342" />
                </Box>
                {/* Small berries */}
                <Sphere args={[0.03]} position={[0.25, 0.6, 0]}>
                  <meshStandardMaterial color="#ff5722" />
                </Sphere>
              </group>
            ))}
          </group>
        );

      case 'brahmi':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Brahmi - Creeping aquatic plant */}
            <Cylinder args={[0.02, 0.02, 2]} position={[0, -1, 0]} rotation={[0, 0, Math.PI / 3]}>
              <meshStandardMaterial color="#4caf50" />
            </Cylinder>
            {/* Creeping stems */}
            {Array.from({ length: 8 }).map((_, i) => (
              <group key={i}>
                <Cylinder 
                  args={[0.015, 0.015, 0.4]} 
                  position={[Math.cos(i * 0.8) * 0.3, -0.8 + i * 0.15, Math.sin(i * 0.8) * 0.3]}
                  rotation={[Math.PI / 4, i * 0.8, 0]}
                >
                  <meshStandardMaterial color="#66bb6a" />
                </Cylinder>
                {/* Small round leaves */}
                <Sphere 
                  args={[0.06]} 
                  position={[Math.cos(i * 0.8) * 0.4, -0.6 + i * 0.15, Math.sin(i * 0.8) * 0.4]}
                  scale={[1.5, 0.5, 1]}
                >
                  <meshStandardMaterial color="#81c784" />
                </Sphere>
              </group>
            ))}
          </group>
        );

      default:
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Default plant - Generic herb */}
            <Cylinder args={[0.1, 0.15, 1.5]} position={[0, -0.75, 0]}>
              <meshStandardMaterial color="#4a5d3a" />
            </Cylinder>
            <Sphere args={[0.8]} position={[0, 0.2, 0]} scale={[1, 0.6, 1]}>
              <meshStandardMaterial color="#66bb6a" />
            </Sphere>
          </group>
        );
    }
  };

  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {getPlantGeometry()}
      
      {/* Plant name floating above */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.2}
        color="#2e7d32"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {plant.name}
      </Text>
    </group>
  );
};

export const Plant3D = ({ plant }: Plant3DProps) => {
  return (
    <div className="w-full h-96 bg-gradient-botanical rounded-lg overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />

        {/* 3D Plant Model */}
        <PlantModel plant={plant} />

        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={8}
        />

        {/* Ground */}
        <Cylinder args={[2, 2, 0.1]} position={[0, -1.5, 0]}>
          <meshStandardMaterial color="#8d6e63" />
        </Cylinder>
      </Canvas>
      
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};