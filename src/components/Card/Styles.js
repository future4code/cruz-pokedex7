
import styled from 'styled-components'

export const ContainerType = styled.div`
border:1px solid black;
width:320px;
margin: 0;
background: rgb(242,242,255);
background: linear-gradient(61deg, rgba(242,242,255,1) 3%, rgba(246,245,255,1) 37%, rgba(255,0,0,1) 86%); 
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:320px;
`

export const ContainerPoke = styled.div`
width:300px;
background-color: white;
/* margin:10px ; */
border: 1px solid black;
`

export const PokemonName = styled.h2`
text-align:center;
padding:10px 10px;
margin-top:0;
margin:10px;
text-decoration:underline;
`

export const MainTypeContainer = styled.div`
color:white;
position:relative;
top: -10px;
width:80px;
border:1px solid black;
padding-left:8px;
box-sizing:border-box;
`

export const Number = styled.div`
display:flex;
width:30px;
height:30px;
background-color:black;
border-bottom-right-radius:100%;
color:white;
`

export const ImageContainer = styled.div`
background-image:url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props => props.children.props.children}.png');
height:150px;
background-repeat:no-repeat;
background-size:contain;
background-position:center;
margin: auto;
border-bottom:1px solid black;
`

export const BodyContainer = styled.div`
`

export const ButtonContainner = styled.div`
display:flex;
`

export const Button = styled.button`
flex-basis:100%;
height:50px;
`