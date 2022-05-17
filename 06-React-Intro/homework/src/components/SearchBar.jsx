import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
      <div>
        <input type="text" placeholder={"ciudad...."} />
        <button>onClick = {() => props.onSearch("buscando ciudad")}> Agregar </button>
      </div>
  )
};