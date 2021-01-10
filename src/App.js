import React, { useState, useEffect } from "react";
import "./App.css";
import Entry from "./components/Entry/Entry";

function App() {
  const [pokedex, setPokedex] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
      .then((res) => {
        return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      })
      .then((res) => {
        const { results } = res;
        setPokedex(results);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="pokedex-top">
        <div className="top">
          <div id="blue-circle"><div></div></div>
          <div className="circle" id="red-circle"></div>
          <div className="circle" id="yellow-circle"></div>
          <div className="circle" id="green-circle"></div>
        </div>
        <div className="bottom">
          <div className="left"></div> 
          <div className="triangle"></div>
        </div>
      </div>
      <Entry pokedex={pokedex} />
    </div>
  );
}

export default App;
