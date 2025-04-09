import { React, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useThree } from '@react-three/fiber'
import { TextureLoader, Color, ACESFilmicToneMapping, PCFSoftShadowMap, sRGBEncoding } from "three"
import { useSnapshot } from "valtio";

export default function House(props) {
  const { nodes, materials } = useGLTF("/House/house.gltf");
  console.log(nodes, materials);

  // const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);
  
  const colorMap1 = useLoader(TextureLoader, '/House/YZY_Wall_baseColor.jpg')
  const colorMap2 = useLoader(TextureLoader, '/House/Wall_2.jpg')
  const colorMap3 = useLoader(TextureLoader, '/House/Wall_3.jpg')
  const colorMap4 = useLoader(TextureLoader, '/House/Wall_4.jpg')
  // materials.YZY_Wall.toneMapped = false;
  
  // console.log(materials.YZY_Wall)
  switch(props.textureIndex) {
    case 0:
      materials.YZY_Wall.map = colorMap1;
      materials.YZY_Wall.needsUpdate = true;
      break;
    case 1:
      materials.YZY_Wall.map = colorMap2;
      materials.YZY_Wall.needsUpdate = true;
      break;
    case 2:
      materials.YZY_Wall.map = colorMap3;
      materials.YZY_Wall.needsUpdate = true;
      break;
    case 3:
      materials.YZY_Wall.map = colorMap4;
      materials.YZY_Wall.needsUpdate = true;
      break;
  }

  switch(props.colorIndex) {
    case 0:
      materials['Color_-_White'].color = new Color(5/255, 5/255, 5/255);
      break;
    case 1:
        materials['Color_-_White'].color = new Color(35/255, 0, 35/255);
        break;
    case 2:
        materials['Color_-_White'].color = new Color(0, 35/255, 35/255);
        break;
    case 3:
        materials['Color_-_White'].color = new Color(35/255, 35/255, 0);
        break;
    case 4:
        materials['Color_-_White'].color = new Color(35/255, 0, 0);
        break;
    case 5:
        materials['Color_-_White'].color = new Color(0, 0, 35/255);
        break;
  }

  const { gl } = useThree();

  useEffect(() => {
    // const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    // if (hovered) {
    //   document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
    //     cursor
    //   )}'), auto`;
    // }
    // return () => (document.body.style.cursor = "auto");
    gl.toneMapping = ACESFilmicToneMapping;
    gl.toneMappingExposure = 1;
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = PCFSoftShadowMap;
    // gl.outputEncoding = sRGBEncoding
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        if (e.intersections.length === 0) {
          setHovered(null);
        }
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.updateCurrent(e.object.material.name);
      }}
      onPointerMissed={() => {
        props.updateCurrent(null);
      }}
    >
     
      {/* <mesh
        castShadow
        material-color={snap.laces}
        geometry={nodes.Object_2.geometry}
        material={materials.laces}
      /> */}
      <mesh  geometry={nodes.Object_2.geometry} material={materials.Brushed_Aluminum}/>
      <mesh  geometry={nodes.Object_3.geometry} material={materials['Carpet-04_Ghost']}/>
      <mesh  geometry={nodes.Object_4.geometry} material={materials.Glass__Grey}/>
      <mesh  geometry={nodes.Object_5.geometry} material={materials.Glass__Tempered}/>
      <mesh  geometry={nodes.Object_6.geometry} material={materials.Graphite}/>
      <mesh  geometry={nodes.Object_7.geometry} material={materials.Metal__Steel}/>
      <mesh  geometry={nodes.Object_8.geometry} material={materials.Metal__Steel_Po}/>
      <mesh  geometry={nodes.Object_9.geometry} material={materials.YZY_Architrave}/>
      <mesh  geometry={nodes.Object_10.geometry} material={materials.YZY_Exterior_T}/>
      <mesh  geometry={nodes.Object_11.geometry} material={materials.YZY_Ceiling}/>
      <mesh  geometry={nodes.Object_12.geometry} material={materials.YZY_Ceiling_2}/>
      <mesh  geometry={nodes.Object_13.geometry} material={materials.YZY_Wall}/>
      <mesh  geometry={nodes.Object_14.geometry} material={materials.Aluminum_Brushed}/>
      <mesh  geometry={nodes.Object_15.geometry} material={materials.Aluminum_Brushed}/>
      <mesh  geometry={nodes.Object_16.geometry} material={materials.Aluminum_Brushed}/>
      <mesh  geometry={nodes.Object_17.geometry} material={materials.Aluminum_Brushed}/>
      <mesh  geometry={nodes.Object_18.geometry} material={materials.Aluminum_Brushed}/>
      <mesh  geometry={nodes.Object_19.geometry} material={materials.Aluminum_Brushed}/>
      <mesh  geometry={nodes.Object_20.geometry} material={materials.Beige_Corrugated}/>
      <mesh  geometry={nodes.Object_21.geometry} material={materials.Birch_honey}/>
      <mesh  geometry={nodes.Object_22.geometry} material={materials['CA-B_Pressure_Tr']}/>
      <mesh  geometry={nodes.Object_23.geometry} material={materials['Camouflage-Grani']}/>
      <mesh  geometry={nodes.Object_24.geometry} material={materials.Charcoal}/>
      <mesh  geometry={nodes.Object_25.geometry} material={materials.Chrome_Polished}/>
      <mesh  geometry={nodes.Object_26.geometry} material={materials.Chrome_Polished}/>
      <mesh  geometry={nodes.Object_27.geometry} material={materials.Chrome_Polished}/>
      <mesh  geometry={nodes.Object_28.geometry} material={materials['Color_-_Bone']}/>
      <mesh  geometry={nodes.Object_29.geometry} material={materials['Color_-_Brite']}/>
      <mesh  geometry={nodes.Object_30.geometry} material={materials['Color_-_Charcoal']}/>
      <mesh  geometry={nodes.Object_31.geometry} material={materials['Color_-_Coal']}/>
      <mesh  geometry={nodes.Object_32.geometry} material={materials['Color_-_Dust']}/>
      <mesh  geometry={nodes.Object_33.geometry} material={materials['Color_-_Snow_Whi']}/>
      <mesh  geometry={nodes.Object_34.geometry} material={materials['Color_-_White']}/>
      <mesh  geometry={nodes.Object_35.geometry} material={materials.Fir_Framing}/>
      <mesh  geometry={nodes.Object_36.geometry} material={materials.Fir_Framing_1}/>
      <mesh  geometry={nodes.Object_37.geometry} material={materials.Floor_Joist_140x}/>
      <mesh  geometry={nodes.Object_38.geometry} material={materials.Glass__Standard}/>
      <mesh  geometry={nodes.Object_39.geometry} material={materials.Hickory_warm}/>
      <mesh  geometry={nodes.Object_40.geometry} material={materials.Horizontal_Sarki}/>
      <mesh  geometry={nodes.Object_41.geometry} material={materials.Housewrap}/>
      <mesh  geometry={nodes.Object_42.geometry} material={materials['Oak_-_Dark']}/>
      <mesh  geometry={nodes.Object_43.geometry} material={materials.Plank_01_Decking}/>
      <mesh  geometry={nodes.Object_44.geometry} material={materials.Porcelain}/>
      <mesh  geometry={nodes.Object_45.geometry} material={materials.Porcelain}/>
      <mesh  geometry={nodes.Object_46.geometry} material={materials.Porcelain}/>
      <mesh  geometry={nodes.Object_47.geometry} material={materials.Porcelain}/>
      <mesh  geometry={nodes.Object_48.geometry} material={materials.Porcelain}/>
      <mesh  geometry={nodes.Object_49.geometry} material={materials.Stainless_Steel}/>
      <mesh  geometry={nodes.Object_50.geometry} material={materials.Stainless_Steel1}/>
      <mesh  geometry={nodes.Object_51.geometry} material={materials.Zinc_Rough}/>
      
    </group>
  );
}

useGLTF.preload("/House/house.gltf");
