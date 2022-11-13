import { useState } from "react"
import { useFetchData } from "../hooks/useFetchData"
import "../styles/AerialImages.css"

export interface coordinatesProps{
    lon: number,
    lat: number,
}

const index = () => {
    
    const [coordinates, setCoordinates] = useState<coordinatesProps>({} as coordinatesProps)    
    const [image, setImage] = useState<string>("")

    const { updateCoordinates } = useFetchData({ setImage })
    

    const handleLongitude = (e: React.ChangeEvent<HTMLInputElement>) => setCoordinates({ ...coordinates, lat: Number(e.target.value) })
    const handleLatitude = (e: React.ChangeEvent<HTMLInputElement>) => setCoordinates({ ...coordinates, lon: Number(e.target.value) })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        updateCoordinates(coordinates)
    }

  return (
    <>
        <div className="input_coordinates">

            <form className="form" onSubmit={ handleSubmit } >
                <input className="coordinate_input" type="text" placeholder="Longitude" onChange={ handleLongitude } value={ coordinates.lat } />
                <input className="coordinate_input" type="text" placeholder="Latitude" onChange={ handleLatitude } value={ coordinates.lon } />

                <input className="aerial_images_btn" type="submit" value={" Click To Search "} formAction="submit" />
            </form>

            <div className="image_container">            
                <img className="photo" src={ image } alt="Aerial Photograph" />
            </div>
        </div>
    
        
    </>
  )
}

export default index