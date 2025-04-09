import React from "react";

import chip1 from "../img/chip1.jpg";
import chip2 from "../img/chip2.jpg";
import chip3 from "../img/chip3.jpg";
import chip4 from "../img/chip4.jpg";

import color1 from "../img/1.jpg";
import color2 from "../img/2.jpg";
import color3 from "../img/3.jpg";
import color4 from "../img/4.jpg";
import color5 from "../img/5.jpg";
import color6 from "../img/6.jpg";

const TextureColorPicker = ({ updateTextureColor }) => {
  return (
    <>
      <div className="model-selector" >
        <h4>Walls</h4>
        <div onClick={() => updateTextureColor("wall", 0)}>
          <img src={chip1} alt="chip1" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("wall", 1)}>
          <img src={chip2} alt="chip2" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("wall", 2)}>
          <img src={chip3} alt="chip3" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("wall", 3)}>
          <img src={chip4} alt="chip4" className="chip"/> 
        </div>

        <h4>Door</h4>
        <div onClick={() => updateTextureColor("color", 0)}>
          <img src={color1} alt="color1" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("color", 1)}>
          <img src={color2} alt="color2" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("color", 2)}>
          <img src={color3} alt="color3" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("color", 3)}>
          <img src={color4} alt="color4" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("color", 4)}>
          <img src={color5} alt="color5" className="chip"/>
        </div>
        <div onClick={() => updateTextureColor("color", 5)}>
          <img src={color6} alt="color6" className="chip"/>
        </div>
        
      </div>
    </>
  );
};

export default TextureColorPicker;
