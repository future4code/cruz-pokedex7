import React, {useEffect,useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToPokedex, goToLastPage } from "../routes/coordinator";
import axios from "axios";
import Card from "../components/Card/Card";
import { BaseUrl } from "../constants/BaseUrl";
import useRequestData from "../hooks/useRequestData";
import Cardinfo from "../components/CardInfo";
import { MotherContainer } from "../styles/HomeStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const HomePage = () => {
  const history = useHistory();



  


    useEffect(() => {
        getPokeInfo()
    }, [])   

     const [favoritePokes, setFavoritePokes] = useState([])
    const [pokeData, setPokeData] = useState([])
    const arrayPokes = []  
      const getPokeInfo = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            for (let data of response.data.results) {
                const response = await axios.get(data.url)
                const dataOnePoke = response.data
                arrayPokes.push(dataOnePoke)
            }
        } catch (error) {
            console.log("Erro encontrado: ", error)
        }
        setPokeData(arrayPokes)
    }  

      const addToFavorites = (pokemon) => {
        let favorite = [...favoritePokes, pokemon]
        setFavoritePokes(favorite)
        const favorites = pokeData.filter((id) => pokemon !== id)
        setPokeData(favorites)
    }  

    const removeToFavorites = (pokemon) => {
      
      const newFavorites = favoritePokes.filter(id => pokemon !== id)
        setFavoritePokes(newFavorites)
        let homePokemons = [...pokeData, pokemon]
        homePokemons.sort(function(a,b){
            if(a.id > b.id){
                return 1
            }else {
                return -1
            }
        })
        setPokeData(homePokemons)
    }   

     const renderHomeCards = pokeData.map((pokemon) => {
        return (
            <Card
                key={pokemon.id}
                name={pokemon.name}
                url={pokemon.url}
                number={pokemon.id}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
                functionAddOrRemove={() => addToFavorites(pokemon)}
                remove={() => removeToFavorites(pokemon)}
            />
        )
    })   

     const renderFavorites = favoritePokes.map((pokemon) => {
        return (
            <Card
                key={pokemon.id}
                name={pokemon.name}
                url={pokemon.url}
                number={pokemon.id}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
                add={() => addToFavorites(pokemon)}
                remove={() => removeToFavorites(pokemon)}
            />
        )
    })



  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> Lista de Pokemóns </h2>
        <Button onClick={() => goToPokedex(history)}> Minha Pokedex </Button>
      </Header>
      <Cardinfo />
      {renderHomeCards}
      <h1>Favoritos</h1>
      {renderFavorites}
    </MotherContainer>
  );
};
export default HomePage
