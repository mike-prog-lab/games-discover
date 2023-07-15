import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <div key={game.id}>
            <h3>{game.name}</h3>
          </div>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
