import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPokedex } from "../routes/coordinator";
import Card from "../components/Card/Card";
import { MotherContainer, CardPokemon } from "../styles/HomeStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const HomePage = () => {
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);

  const onClickAdicionar = (pokemon, index) => {
    let newPokedex = [...states.pokedex, pokemon];
    states.pokemons.splice(index, 1);
    setters.setPokedex(newPokedex);
    alert(`O pokemon ${pokemon.name} foi adicionado à sua pokedex.`);
  };

  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> LISTA DE POKEMONS </h2>
        <Button onClick={() => goToPokedex(history)}> ACESSAR POKEDEX </Button>
      </Header>
      <CardPokemon>
        {states.pokemons.map((pokemon, index) => {
          return (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              url={pokemon.url}
              index={index}
              pokemon={pokemon}
              onClickAdicionar={onClickAdicionar}
              pokedex={false}
            />
          );
        })}
      </CardPokemon>
    </MotherContainer>
  );
};
export default HomePage;
