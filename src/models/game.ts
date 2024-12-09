import Platform from "./platform";

interface Game {
  id: number;
  name: string
  image: string;
  platform: Platform;
  otherPlatforms: Platform[];
  releaseYear: number;
  activePlayers: number;
}

export default Game;
