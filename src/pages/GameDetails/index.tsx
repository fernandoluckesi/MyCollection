import React from "react";
import {
  BreadcrumbContainer,
  BreadcrumbLink,
  Details,
  DetailsRightContent,
  GameDescription,
  GameImage,
  MainContainer,
} from "./styles";
import { MainTemplate } from "../../templates/MainTemplate";
import { useGames } from "../../hooks/useGames";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";

export const GameDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("ID da rota:", id);
  const { isLoading, singleGame } = useGames(id ? parseInt(id) : null);

  return (
    <MainTemplate>
      {isLoading ? (
        <Loading />
      ) : (
        singleGame && (
          <MainContainer>
            <GameImage imageurl={singleGame.imageurl}>
              <p className="name">{singleGame.name} </p>
            </GameImage>
            <div className="game-infos">
              <BreadcrumbContainer>
                <div className="links">
                  <BreadcrumbLink to="/home">Home</BreadcrumbLink> /{" "}
                  <BreadcrumbLink to={`/home/${singleGame.routeType}`}>
                    {" "}
                    {singleGame.type}
                  </BreadcrumbLink>{" "}
                  /{" "}
                  <BreadcrumbLink active to={`game-details/${singleGame.id}`}>
                    {singleGame.name}
                  </BreadcrumbLink>
                </div>
                <hr className="line" />
              </BreadcrumbContainer>
              <Details>
                <GameDescription>
                  <h2 className="title">DESCRIÇÃO:</h2>
                  <p className="text">{singleGame.description}</p>
                </GameDescription>
                <DetailsRightContent>
                  <div className="item">
                    <h3 className="title">TIPO:</h3>
                    <p className="content">{singleGame.type}</p>
                  </div>
                  <div className="item">
                    <h3 className="title">VALOR:</h3>
                    <p className="content">{singleGame.price}</p>
                  </div>
                  <div className="buttons">
                    <button className="button-item">
                      ADICIONAR AO CARRINHO
                    </button>
                    <button className="button-item">COMPRAR</button>
                  </div>
                </DetailsRightContent>
              </Details>
            </div>
          </MainContainer>
        )
      )}
    </MainTemplate>
  );
};
