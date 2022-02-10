import React from 'react'
import { useGetImage } from "../hooks/useGetImage"
import SetLatitude from "./SetLatitude"
import SetLongitude from "./SetLongitude"
import "../styles/AerialImages.css"

const AerialImages = () => {  
  
  let URL = "https://api.nasa.gov/planetary/earth/imagery";
  const image = useGetImage(URL);
  return (
    <>
      <div className="input_coordinates">
        
      <SetLatitude />
      <SetLongitude />
        
        <button className="aerial_images_btn" onClick={ () => useGetImage(URL) }>Show Image</button>
      </div>
      <img src={image} alt="Aerial Photograph" />
    </>
  );
};

export default AerialImages