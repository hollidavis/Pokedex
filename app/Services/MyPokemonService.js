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
}

export const myPokemonService = new MyPokemonService();

