import React from 'react'
import styled from 'styled-components';

import Cardinfo from '../components/CardInfo'

import { useHistory, useParams } from "react-router-dom";
import { goToPokedex, goToLastPage } from "../routes/coordinator";

const ContainerHome = styled.div `

`
const Header = styled.div `
    height: 85 px;
    display:flex;
    justify-content:space-between;
    background-color:#FC8701;
`

const ImgLogo = styled.img `
    width: 200px;

`

const Button = styled.button `
    padding: 5px ;
    margin: 20px 20px ;

`

const Home = () => {
    const history = useHistory();

    return (
        <ContainerHome>
            <Header>
                <ImgLogo src ="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png"/>
                <h2> Lista de Pokemóns </h2>
                <Button onClick ={() => goToPokedex(history)}> Minha Pokedex </Button>
            </Header>

            <Cardinfo />
            
        </ContainerHome>
    )
}
export default Home;