import styled from "styled-components";

export const ContainerType = styled.div`   
  margin: 0;
  box-shadow: 5px 5px 8px 5px #474A51;
  
  /* background: rgb(242, 242, 255);
  background: linear-gradient(
    61deg,
    rgba(242, 242, 255, 1) 3%,
    rgba(246, 245, 255, 1) 37%,
    rgba(255, 0, 0, 1) 86%
  ); */
  
  justify-content: center;
  align-items: center;
  
`;

export const ContainerPoke = styled.div`
  width: 200px;
  height:250px;
  
  background-color: white;
  /* margin:10px ; */
  /* border: 10px solid black; */
`;

export const ImageContainer = styled.div`
  height: 60%;
  padding-top:10px; 
  display: flex;
  justify-content: center;

  img {
    height: 80%;
    width:80%;
   
  }
`;

export const BodyContainer = styled.div`
   height: 25%;
   font-family: 'Righteous', cursive;
   font-size:0.725rem;

`;

export const PokemonName = styled.h2`
  text-align: center;
  background-color:white;
  margin-top: 0;
`;


export const ButtonContainner = styled.div`
  display: flex;
  height: 25%;
`;

export const Button = styled.button`
  height: 30px;
  flex-basis:100%;
  color: #F83F2F;
  border: 0px solid black;
  background-color:white;
  border-radius: 2px;
  font-size:0.875rem;
  font-weight:bold;
  

  :hover {
    background-color:#F83F2F;
    color:white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    
  }
`;
