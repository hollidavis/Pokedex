import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";

function _drawAll() {
  const pokemon = ProxyState.allApiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li class="action" onclick="app.pokemonApiController.getPokemon('${p.id}')">${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}

export default class PokemonApiController {
  constructor() {
    ProxyState.on('allApiPokemon', _drawAll)

    this.getAllPokemon()
  }

  async getAllPokemon() {
    try {
      await pokemonApiService.getAllPokemon();
    } catch (error) {
      console.error(error)
    }
  }

  async getSpell(id) {
    try {
      await pokemonApiService.getPokemon(id)
    } catch (error) {
      console.error(error)
    }
  }
}