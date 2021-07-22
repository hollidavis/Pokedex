import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";

function _drawAll() {
  const pokemon = ProxyState.myPokemon
  const activePokemon = ProxyState.activePokemon || {}
  let template = ""
  pokemon.forEach(p => template += `<li class="action ${activePokemon.id === s.id ? 'text-primary' : ''}" onclick="app.myPokemonController.setPokemon('${p.id}')">${p.name}</li>`)
  if (!template) {
    template += '<p>No Caught Pokemon Yet!</p>'
  }
  document.getElementById("my-pokemon").innerHTML = template
}



export default class MyPokemonController {
  constructor() {
    ProxyState.on('myPokemon', _drawAll)
    this.getMyPokemon()
  }
  async getMyPokemon() {
    try {
      await myPokemonService.getMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  async catchPokemon() {
    try {
      await myPokemonService.catchPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  setPokemon(id) {
    try {
      myPokemonService.setPokemon(id)
    } catch (error) {
      console.error(error)
    }
  }

  async removePokemon() {
    try {
      await myPokemonService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }
}
