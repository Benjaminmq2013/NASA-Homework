import { coordinatesProps } from './index';

interface params{
    label: string,
    name: "lon" | "lat"
    setCoordinates: React.Dispatch<React.SetStateAction<coordinatesProps>>
    coordinates: coordinatesProps
}

const input = (params:params) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        params.setCoordinates({
            ...params.coordinates,
            [ e.target.name ]: e.target.value
        });        
    }

    return (
        <div className="input-container">
          <span>{ params.label }</span>
          <input
            className="coordinate_input"
            type="text"
            placeholder="Latitude"
            value={ params.coordinates[params.name] }
            onChange={ handleChange }
            name={ params.name }
          />
        </div>
      );
    
}

export default input