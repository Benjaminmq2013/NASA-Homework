import React from 'react'
import {  GetData  } from "./GetImage"
import SetLatitude from "./SetLatitude"
import SetLongitude from "./SetLongitude"
import "../styles/AerialImages.css"

const AerialImages = () => {
  return (
    <>
      <div className="input_coordinates">
        <SetLatitude />
        <SetLongitude />
      </div>
      <div className="image_container">
        <GetData />
      </div>
    </>
  );
};

export default AerialImages