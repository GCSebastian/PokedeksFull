import { Component } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any
  pokemonId: number=0;
  valor: any;
  pokemonName: string="";
  pokemonType: string="";
  constructor(private api: APIServiceService) {}


  getPokemonData() {
    try {
      if (isNaN(this.valor)) {
        // Si valor no es un número, se considera nombre
        this.api.getPokemonName(this.valor).subscribe((response => {
          this.pokemon = response;
          console.log(this.pokemon)
          console.log(this.pokemon.sprites.front_default)
          for (let i = 0; i < this.pokemon.types.length; i++) {
            console.log(this.pokemon.types[i].type.name);
          }
        }));
      } else {
        // Si valor es un número, se busca por ID
        this.api.getPokemonID(this.valor).subscribe((response => {
          this.pokemon = response;
          console.log("Tipos de Pokémon:");
          for (let i = 0; i < this.pokemon.types.length; i++) {
            console.log(this.pokemon.types[i].type.name);
          }
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  
}
