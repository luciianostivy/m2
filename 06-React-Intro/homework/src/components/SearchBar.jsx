import React from 'react';
import search from '../styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
      <div className={search.container}>
        <input type="text" placeholder={"ciudad...."} />
        <button>onClick = {() => props.onSearch("buscando ciudad")} className={search.btn}> Agregar </button>
      </div>
  )
};