import { useEffect, useState } from 'react'
import axios from "axios"

let lon = "";
let lat = "";

const useGetImage = (API, lon, lat) => {
    const [ image, setImage ] = useState([]);  
    console.log(lon, lat)
    useEffect(()=>{
        console.log(lon, lat)
        axios.get(API, {
            responseType: "arraybuffer",
            params:{
                lon: "-120.32",
                lat: "47.44",
                dim: "0.2",
                date: "2014-02-01",
                api_key: "ewYIlvNgeZrjjlZYCFXOZfTdomgvA2LHPCcpSiAJ"
            }
        })
        .then((response) => {
            let blob = new Blob(
                [response.data],
                { type: response.headers["content-type"]}
            )
            let img = URL.createObjectURL(blob)
            setImage(img)
        })
        .catch(response => console.log(response))
    }, [])
  return image
}

const updateLongitude = ( longitude ) =>{
    lon = longitude;
}
const updateLatitude = (latitude) =>{
    lat = latitude;
    console.log(latitude)
}

export { useGetImage, updateLongitude, updateLatitude }