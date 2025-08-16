import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Cone, Stars } from '@react-three/drei';
import { Group } from 'three';
import { Plant } from '@/data/plants';
import ErrorBoundary from '@/components/ErrorBoundary';
import { Plant3DFallback } from '@/components/Plant3DFallback';

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
      
      // Enhanced breathing animation when hovered
      if (hovered) {
        meshRef.current.scale.setScalar(1.05 + Math.sin(state.clock.elapsedTime * 2) * 0.02);
      }
    }
  });

  const getPlantGeometry = () => {
    switch (plant.id) {
      case 'tulsi':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Tulsi - Sacred Basil with detailed structure */}
            {/* Main stem with bark texture */}
            <Cylinder args={[0.12, 0.18, 2]} position={[0, -1, 0]}>
              <meshStandardMaterial 
                color="#3e2723" 
                roughness={0.9}
                metalness={0.05}
              />
            </Cylinder>
            
            {/* Multiple branching levels */}
            {Array.from({ length: 12 }).map((_, i) => (
              <group key={i} rotation={[0, (i / 12) * Math.PI * 2, 0]}>
                {/* Primary branches */}
                <Cylinder args={[0.04, 0.06, 1.2]} position={[0.4, 0.1, 0]} rotation={[0, 0, 0.4]}>
                  <meshStandardMaterial 
                    color="#4a5d3a" 
                    roughness={0.7}
                    metalness={0.1}
                  />
                </Cylinder>
                
                {/* Secondary branches */}
                <Cylinder args={[0.02, 0.03, 0.6]} position={[0.6, 0.6, 0]} rotation={[0, 0, 0.6]}>
                  <meshStandardMaterial color="#5d7c47" />
                </Cylinder>
                
                {/* Detailed leaves with varied sizes */}
                {Array.from({ length: 8 }).map((_, j) => (
                  <group key={`leaf-${j}`} position={[0.4 + j * 0.08, 0.2 + j * 0.1, 0]}>
                    {/* Leaf blade */}
                    <Box args={[0.15, 0.25, 0.02]} rotation={[0, 0.3, 0.1]}>
                      <meshStandardMaterial 
                        color={hovered ? "#8bc34a" : "#7cb342"}
                        roughness={0.6}
                        metalness={0.2}
                        transparent={true}
                        opacity={0.9}
                      />
                    </Box>
                    {/* Leaf stem */}
                    <Cylinder args={[0.01, 0.01, 0.1]} position={[0, -0.12, 0]} rotation={[0, 0, 0.1]}>
                      <meshStandardMaterial color="#4caf50" />
                    </Cylinder>
                  </group>
                ))}
                
                {/* Small flowers/buds */}
                {i % 3 === 0 && (
                  <Sphere args={[0.04]} position={[0.5, 0.8, 0]}>
                    <meshStandardMaterial 
                      color="#e1bee7" 
                      emissive="#9c27b0"
                      emissiveIntensity={0.1}
                    />
                  </Sphere>
                )}
              </group>
            ))}
            
            {/* Root system visible above ground */}
            {Array.from({ length: 4 }).map((_, i) => (
              <Cylinder 
                key={`root-${i}`} 
                args={[0.03, 0.01, 0.3]} 
                position={[Math.cos(i * 1.5) * 0.2, -1.8, Math.sin(i * 1.5) * 0.2]}
                rotation={[0.3, i * 1.5, 0]}
              >
                <meshStandardMaterial color="#5d4037" />
              </Cylinder>
            ))}
          </group>
        );
      
      case 'neem':
        return (
          <group ref={meshRef} scale={hovered ? 1.1 : 1}>
            {/* Neem - Majestic tree with detailed architecture */}
            {/* Complex trunk with buttress roots */}
            <Cylinder args={[0.2, 0.3, 2.5]} position={[0, -1.25, 0]}>
              <meshStandardMaterial 
                color="#3e2723" 
                roughness={0.95}
                metalness={0.02}
              />
            </Cylinder>
            
            {/* Buttress roots */}
            {Array.from({ length: 6 }).map((_, i) => (
              <Box 
                key={`buttress-${i}`}
                args={[0.4, 0.8, 0.15]} 
                position={[Math.cos(i) * 0.3, -1.8, Math.sin(i) * 0.3]}
                rotation={[0, i, 0]}
              >
                <meshStandardMaterial color="#4a3c28" />
              </Box>
            ))}
            
            {/* Multi-layered canopy */}
            {/* Lower canopy */}
            <Sphere args={[1.5]} position={[0, 0.2, 0]} scale={[1.2, 0.7, 1.2]}>
              <meshStandardMaterial 
                color="#2e7d32" 
                roughness={0.8}
                transparent={true}
                opacity={0.85}
              />
            </Sphere>
            
            {/* Upper canopy */}
            <Sphere args={[1.1]} position={[0, 0.8, 0]} scale={[1, 0.6, 1]}>
              <meshStandardMaterial 
                color="#388e3c" 
                roughness={0.7}
                transparent={true}
                opacity={0.9}
              />
            </Sphere>
            
            {/* Major branches with realistic positioning */}
            {Array.from({ length: 8 }).map((_, i) => (
              <group key={`branch-group-${i}`} rotation={[0, (i / 8) * Math.PI * 2, 0]}>
                {/* Primary branch */}
                <Cylinder 
                  args={[0.08, 0.12, 1.2]} 
                  position={[0.9, 0.5, 0]}
                  rotation={[0, 0, Math.PI / 4]}
                >
                  <meshStandardMaterial color="#5d4037" />
                </Cylinder>
                
                {/* Secondary branches */}
                <Cylinder 
                  args={[0.04, 0.06, 0.8]} 
                  position={[1.3, 0.9, 0]}
                  rotation={[0, 0, Math.PI / 3]}
                >
                  <meshStandardMaterial color="#6d4c41" />
                </Cylinder>
                
                {/* Tertiary branches with leaves */}
                {Array.from({ length: 3 }).map((_, j) => (
                  <group key={`tertiary-${j}`} position={[1.1 + j * 0.2, 0.7 + j * 0.15, 0]}>
                    <Cylinder args={[0.02, 0.03, 0.4]} rotation={[0, 0, Math.PI / 6]}>
                      <meshStandardMaterial color="#795548" />
                    </Cylinder>
                    
                    {/* Compound leaves typical of neem */}
                    {Array.from({ length: 12 }).map((_, k) => (
                      <Box 
                        key={`leaflet-${k}`}
                        args={[0.08, 0.15, 0.01]} 
                        position={[k * 0.03 - 0.18, 0.2, Math.sin(k * 0.5) * 0.05]}
                        rotation={[0, k * 0.2, 0]}
                      >
                        <meshStandardMaterial 
                          color={hovered ? "#4caf50" : "#388e3c"}
                          roughness={0.6}
                          transparent={true}
                          opacity={0.9}
                        />
                      </Box>
                    ))}
                  </group>
                ))}
                
                {/* Small white flowers in clusters */}
                {i % 2 === 0 && (
                  <group position={[1.2, 0.8, 0]}>
                    {Array.from({ length: 15 }).map((_, f) => (
                      <Sphere 
                        key={`flower-${f}`}
                        args={[0.02]} 
                        position={[
                          Math.random() * 0.2 - 0.1, 
                          Math.random() * 0.15, 
                          Math.random() * 0.2 - 0.1
                        ]}
                      >
                        <meshStandardMaterial 
                          color="#f5f5f5" 
                          emissive="#fff3e0"
                          emissiveIntensity={0.1}
                        />
                      </Sphere>
                    ))}
                  </group>
                )}
              </group>
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
      
      {/* Plant name floating above - removed custom font to prevent loading issues */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.2}
        color="#2e7d32"
        anchorX="center"
        anchorY="middle"
      >
        {plant.name}
      </Text>
    </group>
  );
};

export const Plant3D = ({ plant }: Plant3DProps) => {
  const [webglSupported, setWebglSupported] = useState(true);

  // Check WebGL support
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  };

  if (!checkWebGLSupport() || !webglSupported) {
    return <Plant3DFallback plant={plant} error="WebGL is not supported in your browser" />;
  }

  return (
    <div className="w-full h-96 bg-gradient-botanical rounded-lg overflow-hidden shadow-lg relative">
      <ErrorBoundary fallback={<Plant3DFallback plant={plant} error="3D rendering failed" />}>
        <Suspense fallback={<Plant3DFallback plant={plant} />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            onCreated={({ gl }) => {
              try {
                gl.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
              } catch (error) {
                console.error('WebGL initialization error:', error);
                setWebglSupported(false);
              }
            }}
            onError={(error) => {
              console.error('Canvas error:', error);
              setWebglSupported(false);
            }}
          >
            {/* Cinematic Lighting Setup */}
            <ambientLight intensity={0.3} color="#f0f4f8" />
            
            {/* Key light - main illumination */}
            <directionalLight 
              position={[8, 12, 6]} 
              intensity={1.5} 
              color="#ffffff"
              castShadow 
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            
            {/* Fill light - softer secondary lighting */}
            <directionalLight 
              position={[-6, 8, -4]} 
              intensity={0.6} 
              color="#e8f5e8"
            />
            
            {/* Rim light - dramatic edge lighting */}
            <directionalLight 
              position={[0, 2, -8]} 
              intensity={0.8} 
              color="#a5d6a7"
            />
            
            {/* Interactive point lights */}
            <pointLight 
              position={[0, 6, 2]} 
              intensity={0.4} 
              color="#7cb342" 
              distance={8}
              decay={2}
            />
            <pointLight 
              position={[3, 2, 3]} 
              intensity={0.2} 
              color="#ffcc02" 
              distance={5}
              decay={2}
            />
            
            {/* Subtle colored accent lights */}
            <spotLight
              position={[4, 6, 4]}
              angle={Math.PI / 6}
              penumbra={0.5}
              intensity={0.3}
              color="#81c784"
              castShadow
            />

            {/* Atmospheric Stars */}
            <Stars radius={50} depth={50} count={100} factor={2} saturation={0} fade />

            {/* 3D Plant Model */}
            <PlantModel plant={plant} />

            {/* Enhanced Controls */}
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.3}
              minDistance={2}
              maxDistance={10}
              enableDamping={true}
              dampingFactor={0.05}
            />

            {/* Beautiful terrain base */}
            {/* Main soil base */}
            <Cylinder args={[4, 4, 0.3]} position={[0, -1.8, 0]}>
              <meshStandardMaterial 
                color="#5d4037" 
                roughness={0.95}
                metalness={0.05}
              />
            </Cylinder>
            
            {/* Grass patches */}
            {Array.from({ length: 20 }).map((_, i) => (
              <Cylinder 
                key={`grass-${i}`}
                args={[0.15, 0.1, 0.1]} 
                position={[
                  (Math.random() - 0.5) * 6, 
                  -1.6, 
                  (Math.random() - 0.5) * 6
                ]}
              >
                <meshStandardMaterial 
                  color="#4caf50" 
                  roughness={0.8}
                  transparent={true}
                  opacity={0.7}
                />
              </Cylinder>
            ))}
            
            {/* Small rocks and pebbles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Sphere 
                key={`rock-${i}`}
                args={[0.05 + Math.random() * 0.1]} 
                position={[
                  (Math.random() - 0.5) * 5, 
                  -1.6, 
                  (Math.random() - 0.5) * 5
                ]}
              >
                <meshStandardMaterial 
                  color="#616161" 
                  roughness={0.9}
                  metalness={0.1}
                />
              </Sphere>
            ))}
            
            {/* Subtle fog effect */}
            <fog attach="fog" args={['#a8d5ba', 8, 15]} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
      
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Interactive 3D • Drag to rotate • Scroll to zoom
        </div>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-herb-primary font-medium">
        🌿 {plant.name}
      </div>
    </div>
  );
};