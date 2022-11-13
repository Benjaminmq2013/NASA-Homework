
import { coordinatesProps } from '../components/index';

interface params{
    setCoordinates: React.Dispatch<React.SetStateAction<coordinatesProps>>
}

const getCurrentLocation = (params:params) => {    

    const handleSucess = (coords: GeolocationCoordinates) =>  params.setCoordinates({ lat: coords.latitude, lon: coords.longitude })
    const handleError = (err: GeolocationPositionError) => console.log(err)
    
    const options = {
        enableHighAccuracy: true,
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => handleSucess(pos.coords), 
        (err) => handleError(err),
        options
    )    
    
}

export default getCurrentLocation