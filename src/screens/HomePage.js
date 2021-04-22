import React, {useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPokedex, goToLastPage } from "../routes/coordinator";
import axios from "axios";
import Card from "../components/Card";
import { BaseUrl } from "../constants/BaseUrl";
import useRequestData from "../hooks/useRequestData";
import Cardinfo from "../components/CardInfo";
import { MotherContainer } from "../styles/HomeStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const HomePage = () => {
  const history = useHistory();

  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> Lista de Pokemóns </h2>
        <Button onClick={() => goToPokedex(history)}> Minha Pokedex </Button>
      </Header>
      <Cardinfo />
    </MotherContainer>
  );
};
export default HomePage;
