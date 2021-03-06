import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class PokemonApiService {
  async getPokemon(name) {
    let res = await pokemonApi.get(name)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
  async getAllPokemon() {
    let res = await pokemonApi.get()
    console.log(res.data.results)
    ProxyState.allApiPokemon = res.data.results
  }
}

export const pokemonApiService = new PokemonApiService()