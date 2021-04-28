import styled from 'styled-components'

export const MotherContainer = styled.div`
    background-color:#4464AD;
    height:620px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    color:white;

    img {
        width:300px;
        text-align:center;
        padding-left: 500px;
    }
    button {
        padding: 10px 40px;
        color: #F83F2F;
        margin: 20px 500px;
        border: 0px solid black;
        background-color:white;
        border-radius: 10px;
        font-size:0.875rem;
        font-weight:bold;
    }
    button:hover {
        background-color:#F83F2F;
        color:white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        
    }

`;