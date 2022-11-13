import axios from "axios";

interface params{
  setImage: React.Dispatch<React.SetStateAction<string>>
  lat: number,
  lon: number
}

export const fetchData = (params:params) => {  

  // Validating data

  if(isNaN(params.lat) || isNaN(params.lon) ) {
    alert("Only numbers allowed for coordinates")
    return;
  }

  // API config

  const config = {
    params:{
      lat: params.lat,
      lon: params.lon,
      date: "2018-01-01",
      dim: 0.10,
      api_key: "92y0eE54ryRrFk3uDTL2gIqZfvk2n8cKngjb75vy"
    }
  }

  let API = "https://api.nasa.gov/planetary/earth/assets";
      
  // API request

  axios
    .get(API, config)

    .then(function (response) {
      console.log(response);
      params.setImage(response.data.url)
    })

    .catch(function (error) {
      console.log(error);
    });
};
