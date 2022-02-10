import React, { useState, useRef } from 'react'
import "../styles/setCoordinates.css"

const setLongitude = () => {
    const longitudeInput = useRef(null)
    const [ longitude, setLongitude ] = useState("")
    const HandleLongitude = () =>{
        setLongitude(longitudeInput.current.value)
        
    }

  return (
    <>
        <input
        className="coordinate_input"
          type="text"
          placeholder="Longitude"
          ref = {longitudeInput}
          onChange={ HandleLongitude }
        />
    </>
  )
}

export default setLongitude