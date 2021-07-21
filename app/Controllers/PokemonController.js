import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

function _draw() {
  let pokemon = ProxyState.pokemon;
  let template = ''
  pokemon.forEach(p => template += p.Template)
  document.getElementById("").innerHTML = template
}

export default class ValuesController {
  constructor() {
    ProxyState.on("pokemon", _draw);
    _draw()
  }
}
