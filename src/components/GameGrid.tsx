import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
      >
        {games.map((game) => (
          <>
            <GameCard game={game} key={game.id} />
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
