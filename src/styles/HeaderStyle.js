import styled from "styled-components";

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  color:white;
  font-size:1.3rem;
`;

export const ImgLogo = styled.img`
  height:70px;
  padding-top:0px;
  padding-left:40px;
`;

export const Button = styled.button`
  padding: 10px 40px;
  color: #F83F2F;
  margin: 20px 50px;
  border: 0px solid black;
  background-color:white;
  border-radius: 10px;
  font-size:0.875rem;
  font-weight:bold;
  

  :hover {
    background-color:#F83F2F;
    color:white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    
  }
`;
