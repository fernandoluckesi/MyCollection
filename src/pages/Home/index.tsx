import React, { useEffect, useRef, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { MainTemplate } from "../../templates/MainTemplate";
import {
  HighlightsContainer,
  HighlightsCarousel,
  MainContainer,
  SearchInput,
  SearchInputContainer,
  LeftScrollButton,
  RightScrollButton,
  SectionTitleContainer,
  BestSellersContainer,
} from "./styles";
import { AiOutlineSearch } from "react-icons/ai/";
import { IoIosArrowBack } from "react-icons/io/";
import { theme } from "../../global/styles/theme";
import { Loading } from "../../components/Loading";
import { GameCard } from "../../components/GameCard";
import { GameType, useGames } from "../../hooks/useGames";

export const Home: React.FC = () => {
  const { notRenderHome } = useAuthentication(false);
  const HighlightsCarouselRef = useRef<HTMLDivElement | null>(null);
  const [widthScreen, setWidthScreen] = useState<number | undefined>();

  const { isLoading, games } = useGames(null);

  const updateWidthScreen = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    setWidthScreen(window.innerWidth);
    window.addEventListener("resize", updateWidthScreen);

    return () => {
      window.removeEventListener("resize", updateWidthScreen);
    };
  });

  const scrollLeft = () => {
    if (HighlightsCarouselRef.current && typeof widthScreen !== "undefined") {
      HighlightsCarouselRef.current.scrollBy({
        left: widthScreen > 470 ? -400 : (widthScreen - 111) * -1,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (HighlightsCarouselRef.current && typeof widthScreen !== "undefined") {
      HighlightsCarouselRef.current.scrollBy({
        left: widthScreen > 470 ? 400 : widthScreen - 111,
        behavior: "smooth",
      });
    }
  };

  if (notRenderHome) {
    return null;
  }

  return (
    <MainTemplate>
      {isLoading ? (
        <Loading />
      ) : (
        <MainContainer>
          <SearchInputContainer>
            <AiOutlineSearch color={theme.colors.secondary} size={24} />
            <SearchInput placeholder="BUSCAR" />
          </SearchInputContainer>
          <SectionTitleContainer>
            <h1 className="title">DESTAQUES</h1>
            <hr className="line" />
          </SectionTitleContainer>
          <HighlightsContainer>
            <HighlightsCarousel ref={HighlightsCarouselRef}>
              {games &&
                games.map((game: GameType) => {
                  if (game.marketType === "highlights")
                    return (
                      <GameCard
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        price={game.price}
                        imageurl={game.imageurl}
                        inCarousel={true}
                      />
                    );
                })}
            </HighlightsCarousel>
            <LeftScrollButton onClick={scrollLeft}>
              <IoIosArrowBack />{" "}
            </LeftScrollButton>
            <RightScrollButton onClick={scrollRight}>
              <IoIosArrowBack />{" "}
            </RightScrollButton>
          </HighlightsContainer>
          <SectionTitleContainer>
            <h1 className="title">Mais vendidos</h1>
            <hr className="line" />
          </SectionTitleContainer>
          <BestSellersContainer>
            {games &&
              games.map((game: GameType) => {
                if (game.marketType === "bestSellers")
                  return (
                    <GameCard
                      key={game.id}
                      id={game.id}
                      name={game.name}
                      price={game.price}
                      imageurl={game.imageurl}
                      inCarousel={false}
                    />
                  );
              })}
          </BestSellersContainer>
        </MainContainer>
      )}
    </MainTemplate>
  );
};
