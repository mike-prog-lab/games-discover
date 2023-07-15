import { useEffect, useState } from "react";
import { Game } from "../services/game/game.interface.ts";
import gameService from "../services/game/game.service.ts";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    gameService
      .getAll()
      .then((response) => {
        setGames(response.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      });

    return gameService.cancel;
  }, []);

  return { games, error };
};

export default useGames;
