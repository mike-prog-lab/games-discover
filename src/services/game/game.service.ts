import { GamesAllResponse } from "./game.interface.ts";
import apiClient from "../api-client.ts";

class GameService {
  constructor(private readonly controller: AbortController) {}

  public async getAll(): Promise<GamesAllResponse> {
    const response = (
      await apiClient.get<GamesAllResponse>("/games", {
        signal: this.controller.signal,
      })
    ).data;

    console.log(response);

    return response;
  }

  public cancel(): void {
    this.controller.abort();
  }
}

export default () => new GameService(new AbortController());
