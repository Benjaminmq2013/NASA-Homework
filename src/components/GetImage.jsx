import React, { useState } from "react";
import axios from "axios";
import def from "../assets/landsat 8.png"

let lon = "";
let lat = "";

const GetData = () => {
  const [image, setImage] = useState(def);

  const getData = () => {
    let API = "https://api.nasa.gov/planetary/earth/imagery";
    axios
      .get(API, {
        responseType: "arraybuffer",
        params: {
          lon: Number(lon) || "-120.32",
          lat: Number(lat) || "47.44",
          dim: "0.15",
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
      .catch((response) => {
        console.log(response)
        alert("Make sure you are entering the coordinates manually with the keyboard, also delete any spaces after the coordinates")
      });
  };

  return (
    <>
      <button className="aerial_images_btn" onClick={getData}>
        Click To Search
      </button>
      <img className="photo" src={image} alt="Aerial Photograph" />
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
