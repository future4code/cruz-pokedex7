import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  ContainerPoke,
  ImageContainer,
  BodyContainer,
  PokemonName,
  Button,
  ButtonContainner,
  ContainerType,
} from "./Styles";

const Card = (props) => {
  const [pokeImage, setPokeImage] = useState([]);
  const history = useHistory();

  const goToPokeDetail = (pokename) => {
    history.push(`/details/${pokename}`);
  };

  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        setPokeImage(res.data.sprites.other.dream_world.front_default);
      })
      .catch((err) => {
        console.log(err.mensage);
      });
  }, [props.url]);

  const renderButtons = () => {
    if (props.pokedex) {
      return (
        <ButtonContainner>
          <Button
            onClick={() => props.onClickRemover(props.pokemon, props.index)}
          >
            Remover
          </Button>
          <Button onClick={() => goToPokeDetail(props.name)}>Detalhes</Button>
        </ButtonContainner>
      );
    } else {
      return (
        <ButtonContainner>
          <Button
            onClick={() => props.onClickAdicionar(props.pokemon, props.index)}
          >
            Adicionar
          </Button>
          <Button onClick={() => goToPokeDetail(props.name)}>Detalhes</Button>
        </ButtonContainner>
      );
    }
  };

  return (
    <ContainerType>
      <ContainerPoke>
        <ImageContainer>
          <img src={pokeImage} alt={props.name} />
        </ImageContainer>
        <BodyContainer>
          <PokemonName>
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
          </PokemonName>
        </BodyContainer>
        {renderButtons()}
      </ContainerPoke>
    </ContainerType>
  );
};
export default Card;
