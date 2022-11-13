import "../styles/Header.css"

const NASA_logo: string = "/images/NASA_Logo.svg"

const Header = () => {
  return (
    <div className="header_container">
        <img className="nasa_logo" src={ NASA_logo } alt="NASA logo" />
        <div>
            <h1 className="title">Aerial Images From Earth</h1>
            <h2 className="subTitle">Enter Latitude and Longitude on each field</h2>
            <h2 className="subTitle">Example: -89.20 13.70</h2>
        </div>
    </div>
  )
}

export default Header