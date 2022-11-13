
import { coordinatesProps } from '../components/index';

interface params{
    setCoordinates: React.Dispatch<React.SetStateAction<coordinatesProps>>
}

const getCurrentLocation = (params:params) => {    

    navigator.geolocation.getCurrentPosition(({ coords }) => params.setCoordinates({ lat: coords.latitude, lon: coords.longitude }) )
    console.log("getting location")
    
}

export default getCurrentLocation