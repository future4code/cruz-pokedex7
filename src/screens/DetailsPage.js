import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { MotherContainer, ContainerDetails, NameTitle, ImgPoke,
  ImgPokeBack,
  ImgPokeFront,
  EstatisticTitle,
  Estatistic,
  EstatisticData,
  Data, DataType, AttackTitle,
  Attack} from "../styles/DetailsStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const DetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();

  const goBack = () => {
    history.goBack();
  };

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokename}`)
      .then((res) => {
        setPokemonData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  console.log("Path: ", pathParams);

  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> Detalhes do Pokemon </h2>
        <Button onClick={goBack}> Voltar </Button>
      </Header>
      <NameTitle>
        <h1>{pathParams.pokename.charAt(0).toUpperCase() + pathParams.pokename.slice(1)}</h1>
      </NameTitle>
      <ContainerDetails>
        <ImgPoke>
          <ImgPokeFront>
            <img
              src={
                pokemonData.sprites !== undefined ? (
                  pokemonData.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                ) : (
                  <p>Carregando imagem animada...</p>
                )
              }
            />
          </ImgPokeFront>
          <ImgPokeBack>
            <img
              src={
                pokemonData.sprites !== undefined ? (
                  pokemonData.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                ) : (
                  <p>Carregando imagem animada...</p>
                )
              }
            />
          </ImgPokeBack>
        </ImgPoke>
        <EstatisticData>
          <EstatisticTitle>
            <h2>Estatísticas</h2>
          </EstatisticTitle>
          <Estatistic>
            {pokemonData.stats !== undefined ? (
              pokemonData.stats.map((dados) => {
                return (
                  <div key={dados.id}>
                    <p>
                      <strong>{dados.stat.name}</strong>: {dados.base_stat}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>Carregando os dados...</p>
            )}
          </Estatistic>
        </EstatisticData>
        <Data>
          <DataType>
            {pokemonData.types !== undefined ? (
              pokemonData.types.map((dados) => {
                return (
                  <div key={dados.id}>
                    <p>
                      <strong>{dados.type.name}</strong>
                    </p>
                  </div>
                );
              })
            ) : (
              <p>Carregando os dados...</p>
            )}
          </DataType>
          <Attack>
            <AttackTitle>
              <h2>Principais ataques</h2>
            </AttackTitle>
            <div>
              {pokemonData.moves !== undefined ? (
                pokemonData.moves.map((dados, index) => {
                  if (index < 5) {
                    return (
                      <div key={dados.id}>
                        <p>
                          <strong>{dados.move.name}</strong>
                        </p>
                      </div>
                    );
                  }
                })
              ) : (
                <p>Carregando os dados...</p>
              )}
            </div>
          </Attack>
        </Data>
      </ContainerDetails>
    </MotherContainer>
  );
};
export default DetailsPage;
