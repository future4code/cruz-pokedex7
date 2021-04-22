import React from "react";
import Cardinfo from "../components/CardInfo";
import { useHistory, useParams } from "react-router-dom";
import { goToHome, goToLastPage } from "../routes/coordinator";
import { MotherContainer } from "../styles/PokedexStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const PokedexPage = () => {
  const history = useHistory();

  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> Minha Pokedex </h2>
        <Button onClick={() => goToHome(history)}> Lista de Pokemons </Button>
      </Header>
      <h4> Pokemons escolhidos </h4>
    </MotherContainer>
  );
};
export default PokedexPage;
