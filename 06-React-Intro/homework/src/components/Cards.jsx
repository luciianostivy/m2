import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if (!props.cities){
    return <h1>no hay ciudades disponibles</h1>
  }
  return (
    <div>
      {
        props.cities && props.cities.map (city => (
          <Card
                key={city.id}
                max={Cairns.main.temp_max}
                min={Cairns.main.temp_min}
                name={Cairns.name}
                img={Cairns.weather[0].icon}
                onClose={() => alert(Cairns.name)}
          />

        ))
      }
    </div>
  )
};