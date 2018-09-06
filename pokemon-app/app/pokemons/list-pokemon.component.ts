import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
@Component({
	selector: 'list-pokemon',
	template: `
    <h1 class='center'>Pokémons</h1>
      <div class='container'>
        <div class="row">
        <div *ngFor='let pokemon of pokemons' class="col s6 m4">
          <div class="card horizontal" (click)="selectPokemon(pokemon)" pkmn-shadow-card>
            <div class="card-image">
              <img [src]="pokemon.picture">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>{{ pokemon.name }}</p>
                <p><small>{{ pokemon.created | date:"dd/MM/yyyy" }}</small></p>
                <span *ngFor='let type of pokemon.types' class="{{ type | pokemonTypeColor }}">{{ type }}</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  `,
  providers: [PokemonsService] // on déclare un fournisseur pour le service.
})
export class ListPokemonComponent implements OnInit {

	pokemons: Pokemon[] = null;

	constructor(private router: Router,private pokemonsService: PokemonsService) { }

	ngOnInit(): void {
		this.pokemons = this.pokemonsService.getPokemons();;
	}

	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}