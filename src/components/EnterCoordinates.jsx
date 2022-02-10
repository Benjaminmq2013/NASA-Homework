import React from 'react'
import "../styles/EnterCoordinates.css"

const EnterCoordinates = () => {
  return (
    <div className="input_coordinates">
      <input type="text" placeholder="Latitude" />
      <input type="text" placeholder="Longitude" />
    </div>
  );
};

export default EnterCoordinates