import React from "react";
import useFetchGames from "@/hooks/useFetchGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
  const { 
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useFetchGames();
  const allGamePages = data?.pages;
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGameCount = data?.pages.reduce((count, page) => count + page.results.length, 0) || 0;

  return (
    <>
      { error && <Text>{error.message}</Text> }
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={10} paddingLeft={0}>
          {
            isLoading && skeletons.map(s => {
              return (
                <GameCardContainer key={s}>
                  <GameCardSkeleton />
                </GameCardContainer>
              )
            })
          }
          {
            allGamePages && allGamePages.map((page, index) => {
              return (
                <React.Fragment key={index}>
                  {
                    page.results.map((game) => {
                      return (
                        <GameCardContainer key={game.id}>
                          <GameCard game={game} />
                        </GameCardContainer>
                      )
                    })
                  }
                </React.Fragment>
              )
            })
          }
        </SimpleGrid>
      </InfiniteScroll>
    </>
  )
}

export default GameGrid;