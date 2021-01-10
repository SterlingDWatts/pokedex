import React from "react";
import pokeball from "./pokeball.png"
import "./Entry.css";

const Entry = (props) => {
  const { pokedex } = props;

  return (
    <div className="Entry">
      <div className="container">
        <ul>
          {pokedex.map((pokemon, idx) => {
            let stringIndex = idx.toString()
            if (stringIndex.length < 2) {
              stringIndex = "0" + stringIndex
            } 
            if (stringIndex.length < 3) {
              stringIndex = "0" + stringIndex
            }
            return <li key={idx}><div>N.° {stringIndex}</div><div>{pokemon.name}</div><div><img src={pokeball} alt="pokeball" height="16px" /></div></li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Entry;
