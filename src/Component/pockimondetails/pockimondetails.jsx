import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pockimondetails.css"
import usePokemonDetails from "../hooks/usePockimonDetails.js"

function pockimondetails({pokemonName }) {
  const { id } = useParams(); // Correctly destructuring the 'id' from params
  const [pokemon] = usePokemonDetails(id, pokemonName);

  return (
    <div className="wrapper-pocki-details">
    
      <img src={pokemon.image} alt="image is not loading due to your network" />
      <div className="name">{pokemon.name}</div>
      <div className="Height"><span>Height:-</span>{pokemon.height}</div>
      <div className="type">{pokemon.type ? pokemon.type.map((p)=><div>{p}</div>) :"no type is present"}</div>
      
    {/* </div> */}
    {
      pokemon.types && pokemon.similarPokemons && 
      <div>
          more {pokemon.types[0]} type pokemons

          <ul>
              {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}

          </ul>
      </div>
    }
</div>
);
}

export default pockimondetails;



