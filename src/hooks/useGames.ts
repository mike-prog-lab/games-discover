import { useEffect, useState } from "react";
import { Game } from "../services/game/game.interface.ts";
import gameService from "../services/game/game.service.ts";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const service = gameService();

    service
      .getAll()
      .then((response) => {
        setGames(response.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          console.log(error);
          return;
        }
        setError(error.message);
      });

    return () => service.cancel();
  }, []);

  return { games, error };
};

export default useGames;
