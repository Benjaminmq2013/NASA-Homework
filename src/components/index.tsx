import { useState } from "react"
import { fetchData } from "../api/fetchData"
import getCurrentLocation from '../helpers/getCurrentLocation';
import Input from "./input"
import "../styles/index.css"

export interface coordinatesProps{
    lon: number,
    lat: number,
}

const index = () => {

    const [coordinates, setCoordinates] = useState<coordinatesProps>({ lat: 0, lon: 0 })  
     
    const [image, setImage] = useState<string>("images/landsat 8.png")
  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        fetchData({ lat: coordinates.lat, lon: coordinates.lon, setImage})
    }
    
    const handleLocation = () => getCurrentLocation({ setCoordinates })

  return (
   
    <div className="input_coordinates">

        <form className="form" onSubmit={ handleSubmit } >
            <Input label="Longitude" name="lon" setCoordinates={ setCoordinates } coordinates={coordinates} />
            <Input label="Latitude" name="lat" setCoordinates={ setCoordinates } coordinates={coordinates} />

            <input className="aerial_images_btn" type="submit" value={" Click To Search "} formAction="submit" />
        </form>

        <span className="span" >Or</span>
        <button className="gps-button" onClick={ handleLocation } > <img src="/images/gps.svg" alt="" /> Get my location</button>


        <div className="image_container">            
            <img className="photo" src={ image } alt="Aerial Photograph" />
        </div>
    </div>
  )
}

export default index