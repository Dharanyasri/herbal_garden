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
    <div className="w-full h-96 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-xl overflow-hidden shadow-2xl relative border border-green-200">
      <ErrorBoundary fallback={<Plant3DFallback plant={plant} error="3D rendering failed" />}>
        <Suspense fallback={<Plant3DFallback plant={plant} />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            onCreated={({ gl }) => {
              try {
                gl.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = 2; // PCFSoftShadowMap
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
            {/* Enhanced Cinematic Lighting Setup */}
            <ambientLight intensity={0.4} color="#f8fffe" />
            
            {/* Key light - main illumination with shadows */}
            <directionalLight 
              position={[10, 15, 8]} 
              intensity={2.0} 
              color="#ffffff"
              castShadow 
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            
            {/* Fill light - softer secondary lighting */}
            <directionalLight 
              position={[-8, 10, -6]} 
              intensity={0.8} 
              color="#e8f5e8"
            />
            
            {/* Rim light - dramatic edge lighting */}
            <directionalLight 
              position={[0, 3, -10]} 
              intensity={1.2} 
              color="#a5d6a7"
            />
            
            {/* Interactive point lights for depth */}
            <pointLight 
              position={[0, 8, 3]} 
              intensity={0.6} 
              color="#7cb342" 
              distance={12}
              decay={2}
            />
            <pointLight 
              position={[4, 3, 4]} 
              intensity={0.3} 
              color="#ffcc02" 
              distance={8}
              decay={2}
            />
            
            {/* Colored accent lights for atmosphere */}
            <spotLight
              position={[6, 8, 6]}
              angle={Math.PI / 5}
              penumbra={0.3}
              intensity={0.5}
              color="#81c784"
              castShadow
            />

            {/* Atmospheric particles */}
            <Stars radius={100} depth={50} count={200} factor={3} saturation={0} fade speed={0.5} />

            {/* 3D Plant Model */}
            <PlantModel plant={plant} />

            {/* Enhanced Controls */}
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
              minDistance={3}
              maxDistance={12}
              enableDamping={true}
              dampingFactor={0.03}
              maxPolarAngle={Math.PI / 1.8}
              minPolarAngle={Math.PI / 6}
            />

            {/* Enhanced terrain base with realistic textures */}
            {/* Main soil base with texture variation */}
            <Cylinder args={[5, 5, 0.4]} position={[0, -2, 0]}>
              <meshStandardMaterial 
                color="#4a3c28" 
                roughness={0.95}
                metalness={0.02}
              />
            </Cylinder>
            
            {/* Secondary soil layer */}
            <Cylinder args={[4.8, 4.8, 0.2]} position={[0, -1.9, 0]}>
              <meshStandardMaterial 
                color="#5d4037" 
                roughness={0.9}
                metalness={0.05}
              />
            </Cylinder>
            
            {/* Grass patches with varied heights */}
            {Array.from({ length: 30 }).map((_, i) => (
              <Cylinder 
                key={`grass-${i}`}
                args={[0.12 + Math.random() * 0.08, 0.08 + Math.random() * 0.05, 0.15 + Math.random() * 0.1]} 
                position={[
                  (Math.random() - 0.5) * 8, 
                  -1.7, 
                  (Math.random() - 0.5) * 8
                ]}
                rotation={[0, Math.random() * Math.PI, Math.random() * 0.2]}
              >
                <meshStandardMaterial 
                  color={`hsl(${120 + Math.random() * 20}, ${60 + Math.random() * 20}%, ${40 + Math.random() * 20}%)`}
                  roughness={0.8}
                  transparent={true}
                  opacity={0.8}
                />
              </Cylinder>
            ))}
            
            {/* Realistic rocks and pebbles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <Sphere 
                key={`rock-${i}`}
                args={[0.08 + Math.random() * 0.15]} 
                position={[
                  (Math.random() - 0.5) * 7, 
                  -1.7, 
                  (Math.random() - 0.5) * 7
                ]}
                scale={[1, 0.6 + Math.random() * 0.4, 1]}
              >
                <meshStandardMaterial 
                  color={`hsl(${30 + Math.random() * 40}, ${20 + Math.random() * 30}%, ${30 + Math.random() * 40}%)`}
                  roughness={0.95}
                  metalness={0.1}
                />
              </Sphere>
            ))}
            
            {/* Small wildflowers for ambiance */}
            {Array.from({ length: 8 }).map((_, i) => (
              <group key={`flower-${i}`} position={[
                (Math.random() - 0.5) * 6, 
                -1.6, 
                (Math.random() - 0.5) * 6
              ]}>
                <Cylinder args={[0.01, 0.01, 0.2]}>
                  <meshStandardMaterial color="#4caf50" />
                </Cylinder>
                <Sphere args={[0.03]} position={[0, 0.15, 0]}>
                  <meshStandardMaterial 
                    color={`hsl(${Math.random() * 360}, 70%, 60%)`}
                    emissive={`hsl(${Math.random() * 360}, 30%, 20%)`}
                    emissiveIntensity={0.2}
                  />
                </Sphere>
              </group>
            ))}
            
            {/* Enhanced atmospheric fog */}
            <fog attach="fog" args={['#e8f5e8', 12, 25]} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
      
      {/* Enhanced UI overlay */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-3 rounded-xl text-sm backdrop-blur-md border border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
          <div>
            <div className="font-medium">Interactive 3D Model</div>
            <div className="text-xs text-white/80">Drag • Scroll • Auto-rotate</div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-sm text-emerald-700 font-semibold border border-emerald-200 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌿</span>
          {plant.name}
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green-200/30 to-transparent rounded-tl-full"></div>
    </div>
  );
};