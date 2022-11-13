import { useLayoutEffect, useState } from "react";
import axios from "axios";
import { coordinatesProps } from '../components/index';

interface params{
  setImage: React.Dispatch<React.SetStateAction<string>>
}

export const useFetchData = (params:params) => {

    const [coordinates, updateCoordinates] = useState<coordinatesProps>({ lon: 29.78 , lat: -95.33  })

    console.log("updating: ", coordinates)

    const config = {
        params:{
            lat: coordinates.lon,
            lon: coordinates.lat,
            date: "2018-01-01",
            dim: 0.10,
            api_key: "92y0eE54ryRrFk3uDTL2gIqZfvk2n8cKngjb75vy"
        }
    }

    let API = "https://api.nasa.gov/planetary/earth/assets";

    useLayoutEffect(() => {
        console.log("USEEFFECT")
      axios
        .get(API, config)

        .then(function (response) {
          console.log(response);
          params.setImage(response.data.url)
        })

        .catch(function (error) {
          console.log(error);
        });

    }, [coordinates]);
  
    return {
        coordinates, updateCoordinates
    }
};
