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
import { GameType } from "../../hooks/useGames";
import { Link } from "react-router-dom";

const game: GameType = {
  id: 2,
  name: "Grand Theft Auto V",
  description:
    "Grand Theft Auto V é um jogo de ação e aventura desenvolvido pela Rockstar North. Lançado em 2013, o jogo se passa na fictícia cidade de Los Santos.",
  type: "Ação",
  routeType: "acao",
  price: 29.99,
  imageurl:
    "https://maisplay.com/wp-content/uploads/2023/03/a-historia-completa-de-gta-v-resumida-1320x742.jpg",
};

export const GameDetails: React.FC = () => {
  return (
    <MainTemplate>
      <MainContainer>
        <GameImage imageurl={game.imageurl}>
          <p className="name">{game.name} </p>
        </GameImage>
        <div className="game-infos">
          <BreadcrumbContainer>
            <div className="links">
              <BreadcrumbLink to="/home">Home</BreadcrumbLink> /{" "}
              <BreadcrumbLink to={`/home/${game.routeType}`}>
                {" "}
                {game.type}
              </BreadcrumbLink>{" "}
              /{" "}
              <BreadcrumbLink active to={`game-details/${game.id}`}>
                {game.name}
              </BreadcrumbLink>
            </div>
            <hr className="line" />
          </BreadcrumbContainer>
          <Details>
            <GameDescription>
              <h2 className="title">DESCRIÇÃO:</h2>
              <p className="text">{game.description}</p>
            </GameDescription>
            <DetailsRightContent>
              <div className="item">
                <h3 className="title">TIPO:</h3>
                <p className="content">{game.type}</p>
              </div>
              <div className="item">
                <h3 className="title">VALOR:</h3>
                <p className="content">{game.price}</p>
              </div>
              <div className="buttons">
                <button className="button-item">ADICIONAR AO CARRINHO</button>
                <button className="button-item">COMPRAR</button>
              </div>
            </DetailsRightContent>
          </Details>
        </div>
      </MainContainer>
    </MainTemplate>
  );
};
