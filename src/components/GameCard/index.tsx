import React, { useState } from "react";
import {
  GameInfosContainer,
  MainContainer,
  OverlayButtons,
  Overlay,
} from "./styles";
import { Link } from "react-router-dom";

interface GameCardProps {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  inCarousel?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  price,
  imageurl,
  inCarousel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <MainContainer
      imageurl={imageurl}
      inCarousel={inCarousel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <Overlay className="overlay" inCarousel={inCarousel}>
          <GameInfosContainer inCarousel={inCarousel}>
            <p className="name">{name}</p>
            <p className="price">
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </GameInfosContainer>
          <OverlayButtons inCarousel={inCarousel}>
            <button className="add-cart">ADD CART</button>
            <Link to={`/game-details/${id}`} className="link-navigate">
              DETALHES
            </Link>
          </OverlayButtons>
        </Overlay>
      )}
    </MainContainer>
  );
};
