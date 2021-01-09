import React from 'react'


const Entry = (props) => {
  const {pokedex} = props; 
  
  return(
    <ul>
    {pokedex.map((pokemon, idx) => {
      return <li key={idx}>{pokemon.name}</li>
    })}
    </ul>
  )
}

export default Entry;