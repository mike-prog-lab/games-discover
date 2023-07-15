import { GamesAllResponse } from "./game.interface.ts";
import apiClient from "../api-client.ts";

class GameService {
  constructor(private readonly controller: AbortController) {}

  public async getAll(): Promise<GamesAllResponse> {
    return (
      await apiClient.get<GamesAllResponse>("/games", {
        signal: this.controller.signal,
      })
    ).data;
  }

  public cancel(): void {
    this.controller.abort();
  }
}

export default new GameService();
