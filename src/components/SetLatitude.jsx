import React, { useState, useRef } from 'react'
import { updateLatitude } from "./GetImage"



const setLatitude = () => {
    const [ latitude, setLatitude ] = useState("")
    const latitudeInput = useRef(null)
    const HandleLatitude = () =>{
        setLatitude(latitudeInput.current.value)
        updateLatitude(latitude)       
    }
  return (
    <>
        <input
            className="coordinate_input"
          type="text"
          placeholder="Latitude"
          ref={latitudeInput}
          onChange={ HandleLatitude }
          
        />
    </>
  )
}

export default setLatitude