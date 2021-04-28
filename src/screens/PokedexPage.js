import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToHome } from "../routes/coordinator";
import Card from "../components/Card/Card";
import { MotherContainer, CardPokemon } from "../styles/PokedexStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const PokedexPage = () => {
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);

  const onClickRemover = (pokemon, index) => {
    let newPokemon = [...states.pokemons, pokemon];
    states.pokedex.splice(index, 1);
    setters.setPokemons(newPokemon);
    alert(`O pokemon ${pokemon.name} foi removido da pokedex.`);
  };

  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> MINHA POKEDEX </h2>
        <Button onClick={() => goToHome(history)}> Lista de Pokemons </Button>
      </Header>
      <CardPokemon>
      {states.pokedex.length > 0 ? (states.pokedex.map((pokemon, index) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            number={pokemon.number}
            url={pokemon.url}
            index={index}
            pokemon={pokemon}
            onClickRemover={onClickRemover}
            pokedex={true}
          />
        );
      })):(
        <h1>SUA POKEDEX ESTA VAZIA</h1>
      )}
      </CardPokemon>
      
    </MotherContainer>
  );
};
export default PokedexPage;
