import React from "react";
import { useHistory } from "react-router-dom";
import { MotherContainer } from "../styles/ErrorStyle";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <MotherContainer>
        <h2> Erro 404 - Ash já capturou todos os pokemons </h2>
        <button onClick={history.goBack}> VOLTAR </button>
        <img src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99918895-9RaayaMBZLjivzbo2qLCxHhcs4R45PXj-cropped-3x4-browser.png" />
    </MotherContainer>
  );
};

export default ErrorPage;
