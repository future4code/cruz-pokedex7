
import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants/backColorsCards'

const color = colors


const Card = (props) => {
const {name} = props
    return (
            <ContainerType>
                <ContainerPoke>
                    <ImageContainer>
                        <Number>
                            3

                        </Number>
                    </ImageContainer>

                    <BodyContainer>
                        <MainTypeContainer>
                            Grass
                        </MainTypeContainer>
                        <PokemonName>
                            {name}
                        </PokemonName>

                        
                    </BodyContainer>
                    <ButtonContainner>
                        <Button onClick={() => null}>Adicionar</Button>
                        <Button onClick={() => null}>Detalhes</Button>
                    </ButtonContainner>
                </ContainerPoke>

            </ContainerType>

    )

}

export default Card



const ContainerType = styled.div`
border:1px solid black;
width:320px;
margin: 0;
background: rgb(242,242,255);
background: linear-gradient(61deg, rgba(242,242,255,1) 3%, rgba(246,245,255,1) 37%, rgba(255,0,0,1) 86%); 
`

const ContainerPoke = styled.div`
width:300px;
background-color: white;
margin:10px ;
border: 1px solid black;
`
const PokemonName = styled.h2`
text-align:center;
padding:10px;
margin-top:0;
margin:10px;
text-decoration:underline;
`

const MainTypeContainer = styled.div`
background-color:${color.grass};
color:white;
position:relative;
top: -10px;
width:80px;
border:1px solid black;
padding-left:3px;
`

const Number = styled.div`
display:flex;
width:20px;
background-color:black;
border-bottom-right-radius:100%;
color:white;
`

const ImageContainer = styled.div`
background-image: url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png');
height:150px;
background-repeat:no-repeat;
background-size:contain;
background-position:center;
margin: auto;
border-bottom:1px solid black;
`
const BodyContainer = styled.div`
`

const ButtonContainner = styled.div`
display:flex;
`

const Button = styled.button`
flex-basis:100%;
height:50px;
`