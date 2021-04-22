import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { MotherContainer, ContainerDetails } from "../styles/DetailsStyle";
import { Header, ImgLogo, Button } from "../styles/HeaderStyle";

const DetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams()
  const goBack = () => {
    history.goBack();
  };
  return (
    <MotherContainer>
      <Header>
        <ImgLogo src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" />
        <h2> Detalhes do Pokemon </h2>
        <Button onClick={goBack}> Voltar </Button>
      </Header>
      <div>
        <h1>Nome do Pokemon</h1>
      </div>
      <ContainerDetails>
        <div>
          <div>Imagem 1</div>
          <div>Imagem 2</div>
        </div>
        <div>
          <div>
            <h2>Stats</h2>
          </div>
          <div>
            <p>
              <strong>hp:</strong>78
            </p>
            <p>
              <strong>attack:</strong>84
            </p>
            <p>
              <strong>defense:</strong>
            </p>
            <p>
              <strong>special-attack:</strong>109
            </p>
            <p>
              <strong>special-defence:</strong>85
            </p>
            <p>
              <strong>speed:</strong>100
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>fire</p>
            <p>flying</p>
          </div>
          <div>
            <div>
              <h2>Principais ataques</h2>
            </div>
            <div>
              <p>mega-punch</p>
              <p>fire-punch</p>
              <p>thunder-punch</p>
              <p>scratch</p>
              <p>swords-dance</p>
            </div>
          </div>
        </div>
      </ContainerDetails>
    </MotherContainer>
  );
};
export default DetailsPage;
