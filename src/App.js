import React, { useState, useEffect } from "react";
import "./App.css";
import Entry from "./components/Entry/Entry";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return <div className="App">
    <Entry pokedex={pokedex} /> 
  </div>;
}

export default App;
