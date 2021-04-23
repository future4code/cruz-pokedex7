import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { BaseUrl } from "../constants/BaseUrl";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
      .get(BaseUrl)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const states = { pokemons, pokedex };
  const setters = { setPokemons, setPokedex };
  const data = { states, setters };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
