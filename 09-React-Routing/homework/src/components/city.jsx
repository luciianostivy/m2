import React from 'react'; 

function City({city}){

    if (!city){
        alert ('la ciudad no existe salame');
        return (<div>la ciudad no existe logi</div>)
    }
    return (
        <div>(
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
            </div>
        )
    </div>
    )
    let params = useParams();
    return(
        <div> ola :D {params.cityId}</div>
    ) 
     
}

export default City;