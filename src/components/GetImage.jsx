import React, { useState } from "react";
import axios from "axios";

let lon = "";
let lat = "";


const GetData = () => {
  const [image, setImage] = useState([]);
  

  const getData = () => {
    let API = "https://api.nasa.gov/planetary/earth/imagery";
    axios
      .get(API, {
        responseType: "arraybuffer",
        params: {
          lon: Number(lon) || "-120.32",
          lat: Number(lat) || "47.44",
          dim: "0.2",
          date: "2014-02-01",
          api_key: "92y0eE54ryRrFk3uDTL2gIqZfvk2n8cKngjb75vy",
        },
      })
      .then((response) => {
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let img = URL.createObjectURL(blob);
        setImage(img);
        console.log(image);
      })
      .catch((response) => console.log(response));
  };

  return (
    <>
      <button className="aerial_images_btn" onClick={getData}>
        Show Image
      </button>
      <img className="photo" src={ image } alt="Aerial Photograph" />
    </>
  );
};

const updateLongitude = (longitude) => {
  lon = Number(longitude).toFixed(2);
};
const updateLatitude = (latitude) => {
  lat = Number(latitude).toFixed(2);
};

export { updateLongitude, updateLatitude, GetData };
