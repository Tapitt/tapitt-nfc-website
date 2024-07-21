import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/nfc_card.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle.geometry}
          material={nodes.Rectangle.material}
          position={[-142.537, 307.567, 28.179]}
          rotation={[-0.248, 0, -Math.PI / 2]}
          scale={1.295}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[-0.792, -0.51, -0.223]}
            rotation={[-Math.PI, -0.003, -Math.PI]}
            scale={0.772}
          />
        </mesh>
        <group position={[-40.643, 3.931, -7]} rotation={[-0.262, 0, 0]}>
          <group position={[-11.401, 260.619, 20.006]}>
            <group position={[11.579, -12.261, 1.281]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2.geometry}
                material={nodes.Ellipse_2.material}
                position={[27.831, 0.003, -0.346]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse.geometry}
                material={nodes.Ellipse.material}
                position={[27.831, 0.003, -0.814]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_1.geometry}
                material={nodes.Rectangle_1.material}
                position={[0, 0, -1.067]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_5.geometry}
              material={nodes.Rectangle_5.material}
              position={[11.5, 8.794, -0.007]}
            />
          </group>
          <group position={[0.099, 7.825, 4.123]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4.geometry}
              material={nodes.Rectangle_4.material}
              position={[76.086, 137.8, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_3.geometry}
              material={nodes.Rectangle_3.material}
              position={[-62.448, -137.8, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2_1.geometry}
              material={nodes.Rectangle_2_1.material}
              position={[0, -215.434, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2.geometry}
              material={nodes.Rectangle_2.material}
              position={[0, 210.743, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group position={[7.914, -261.25, 4.123]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_6.geometry}
              material={nodes.Ellipse_6.material}
              position={[-35.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_5.geometry}
              material={nodes.Ellipse_5.material}
              position={[59.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_6_1.geometry}
              material={nodes.Ellipse_6_1.material}
              position={[-51.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_4.geometry}
              material={nodes.Ellipse_4.material}
              position={[51.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_3.geometry}
              material={nodes.Ellipse_3.material}
              position={[43.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_6_2.geometry}
              material={nodes.Ellipse_6_2.material}
              position={[-59.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_2_1.geometry}
              material={nodes.Ellipse_2_1.material}
              position={[35.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_1.geometry}
              material={nodes.Ellipse_1.material}
              position={[20.184, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2_2.geometry}
              material={nodes.Rectangle_2_2.material}
              position={[-7.816, -0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_3.geometry}
              material={nodes.Rectangle_3.material}
              position={[-7.816, 0.075, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <group
            position={[26.427, 67.142, -10.681]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.066, 0.066, 0.001]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Untitled.geometry}
              material={nodes.Untitled.material}
              position={[181, -238, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Untitled_1.geometry}
              material={nodes.Untitled_1.material}
              position={[423, -1, 0.01]}
            />
          </group>
          <group position={[53.076, 198.926, -18.902]} scale={1.159}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2.geometry}
              material={nodes.Cube_2.material}
              position={[0.243, -2.526, -1.133]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.863}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              position={[0.243, -2.526, -1.814]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0.863}
            />
            <group
              position={[-25.872, 36.929, -1.908]}
              scale={[0.939, 0.939, 0.846]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2.geometry}
                material={nodes.Ellipse_2.material}
                position={[0.129, 0.391, -2.253]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 1.11]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2_2.geometry}
                material={nodes.Ellipse_2_2.material}
                position={[0, 0, 0.661]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.913, 0.913, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3.geometry}
                material={nodes.Ellipse_3.material}
                position={[0.002, 0, 0.336]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.913, 0.913, 1]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_3_1.geometry}
              material={nodes.Ellipse_3_1.material}
              position={[-25.872, -41.025, -1.383]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[0.857, 0.857, 0.846]}
            />
            <group position={[25.454, -30.011, -0.782]} scale={0.864}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_7.geometry}
                material={nodes.Ellipse_7.material}
                position={[0, 0, 0.929]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_6_3.geometry}
                material={nodes.Ellipse_6_3.material}
                position={[0, 0, 0.496]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_10.geometry}
                material={nodes.Ellipse_10.material}
                position={[-0.167, -0.123, -2.074]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_5_1.geometry}
                material={nodes.Ellipse_5_1.material}
                position={[-0.167, -0.123, 1.099]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_4_1.geometry}
                material={nodes.Ellipse_4_1.material}
                position={[-0.5, -0.185, 1.597]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_9.geometry}
                material={nodes.Ellipse_9.material}
                position={[-3.496, 1.998, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={0.5}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_8.geometry}
                material={nodes.Ellipse_8.material}
                position={[1.502, -2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_2.geometry}
                material={nodes.Ellipse_3_2.material}
                position={[-0.5, 0, 2.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
            <group position={[-25.302, -2.156, -0.782]} scale={0.864}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_7_1.geometry}
                material={nodes.Ellipse_7_1.material}
                position={[0, 0, 0.929]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_6_4.geometry}
                material={nodes.Ellipse_6_4.material}
                position={[0, 0, 0.496]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_10_1.geometry}
                material={nodes.Ellipse_10_1.material}
                position={[-0.167, -0.123, -2.074]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_5_2.geometry}
                material={nodes.Ellipse_5_2.material}
                position={[-0.167, -0.123, 1.099]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_4_2.geometry}
                material={nodes.Ellipse_4_2.material}
                position={[-0.5, -0.185, 1.597]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_9_1.geometry}
                material={nodes.Ellipse_9_1.material}
                position={[-3.496, 1.998, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={0.5}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_8_1.geometry}
                material={nodes.Ellipse_8_1.material}
                position={[1.502, -2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_3.geometry}
                material={nodes.Ellipse_3_3.material}
                position={[-0.5, 0, 2.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
            <group position={[26.183, 23.962, -0.782]} scale={0.864}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_7_2.geometry}
                material={nodes.Ellipse_7_2.material}
                position={[0, 0, 0.929]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_6_5.geometry}
                material={nodes.Ellipse_6_5.material}
                position={[0, 0, 0.496]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_10_2.geometry}
                material={nodes.Ellipse_10_2.material}
                position={[-0.167, -0.123, -2.074]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_5_3.geometry}
                material={nodes.Ellipse_5_3.material}
                position={[-0.167, -0.123, 1.099]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_4_3.geometry}
                material={nodes.Ellipse_4_3.material}
                position={[-0.5, -0.185, 1.597]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_9_2.geometry}
                material={nodes.Ellipse_9_2.material}
                position={[-3.496, 1.998, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={0.5}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_8_2.geometry}
                material={nodes.Ellipse_8_2.material}
                position={[1.502, -2, -2.32]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_4.geometry}
                material={nodes.Ellipse_3_4.material}
                position={[-0.5, 0, 2.5]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
          </group>
          <group
            position={[10.733, 26.772, 4.949]}
            scale={[1.018, 1.018, 1.037]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen.geometry}
              material={nodes.Screen.material}
              position={[-10.451, -18.606, 14.551]}
              scale={[0.983, 0.982, 0.964]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Screen_Border.geometry}
              material={nodes.Screen_Border.material}
              position={[-10.451, -18.606, 14.386]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[1.079, 1.08, 1.065]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Back_Side.geometry}
              material={nodes.Back_Side.material}
              position={[-10.041, -18.066, -9.559]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[1.079, 1.08, 1.065]}
            />
            <group
              position={[-139.661, 74.636, 0.258]}
              scale={[0.983, 0.982, 0.964]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_4.geometry}
                material={nodes.Ellipse_4.material}
                position={[-0.02, -262.946, -0.093]}
                rotation={[0, -Math.PI / 2, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_9.geometry}
                material={nodes.Rectangle_9.material}
                position={[0.773, 61.218, -0.259]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8.geometry}
                material={nodes.Rectangle_8.material}
                position={[-1.512, 61.239, 2.074]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_7.geometry}
                material={nodes.Rectangle_7.material}
                position={[-1.512, 11.96, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_11.geometry}
                material={nodes.Rectangle_11.material}
                position={[0.235, -241.123, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_10.geometry}
                material={nodes.Rectangle_10.material}
                position={[0.538, -241.123, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_5_1.geometry}
                material={nodes.Rectangle_5_1.material}
                position={[-1.512, -38.907, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
            </group>
            <group
              position={[118.565, -3.06, 0.258]}
              scale={[0.983, 0.982, 0.964]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Button.geometry}
                material={nodes.Button.material}
                position={[-0.254, -60.23, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Button_1.geometry}
                material={nodes.Button_1.material}
                position={[-1.526, 51.463, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.037, 1.018, 1.018]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Metal_Border.geometry}
              material={nodes.Metal_Border.material}
              position={[-10.451, -18.606, 13.043]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[1.079, 1.08, 1.065]}
            />
          </group>
        </group>
        <directionalLight
          intensity={0.7}
          decay={2}
          rotation={[-0.265, 0.299, 0.744]}
        />
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={5}
          fov={45}
          position={[-401.266, 327.076, 1144.857]}
          rotation={[-0.225, -0.304, -0.068]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/nfc_card.gltf");