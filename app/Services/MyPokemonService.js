import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandbox } from "./AxiosService.js";


class MyPokemonService {
  async getMyPokemon() {
    const res = await sandbox.get()
    console.log(res.data);
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
  }

  async catchPokemon() {
    const res = await sandbox.post('', ProxyState.activePokemon)
    console.log(res.data);
    const newPokemon = new Pokemon(res.data)
    ProxyState.myPokemon = [...ProxyState.myPokemon, newPokemon]
    ProxyState.activePokemon = newPokemon
  }

  setPokemon(id) {
    const pokemon = ProxyState.myPokemon.find(p => p.id === id)
    if (!pokemon) {
      throw new Error("invalid pokemon id")
    }
    ProxyState.activePokemon = pokemon
    ProxyState.myPokemon = ProxyState.myPokemon
  }

  async removePokemon() {
    const res = await sandbox.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }
}

export const myPokemonService = new MyPokemonService();

