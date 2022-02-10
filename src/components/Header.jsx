import React from 'react'
import "../styles/Header.css"
import NASA_logo from "../assets/NASA_Logo.svg"

const Header = () => {
  return (
    <div className="header_container">
        <img className="nasa_logo" src={ NASA_logo } alt="NASA logo" />
        <div>
            <h1 className="title">Aerial Images From Earth</h1>
            <h2 className="subTitle">Enter Longitude and Latitude separated with slash</h2>
            <h2 className="subTitle">Example: 120.32 / 47.44</h2>
        </div>
    </div>
    
    
  )
}

export default Header