import MyPokemonController from "./Controllers/MyPokemonController.js";
import PokemonApiController from "./Controllers/PokemonApiController.js";

class App {
  myPokemonController = new MyPokemonController();
  PokemonApiController = new PokemonApiController();
}

window["app"] = new App();
