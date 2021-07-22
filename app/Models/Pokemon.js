
import { ProxyState } from "../AppState.js";
export default class Pokemon {
    constructor({ name, height, weight, types, img, id }) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.types = types || types.type.name
        this.id = id
        this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }

    get Template() {
        return /*html*/`
        <div class="card">
            <img class="card-img-top" src="${this.img}" alt="${this.name}">
            <div class="card-body text-center">
                <p><b>${this.name}</b></p>
                <p>Type: ${this.types}</p>
                <p>Height: ${this.height} - Weight: ${this.weight}</p>
                <div class="text-right">
                    <button type="button" class="btn btn-primary" onclick = "app.myPokemonController.catchPokemon()">Catch Pokemon</button>
                </div>
            </div>
        </div>`
    }
}
