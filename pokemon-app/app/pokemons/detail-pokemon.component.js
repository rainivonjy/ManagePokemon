"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mock_pokemon_1 = require("./mock-pokemon");
var pokemons_service_1 = require("./pokemons.service");
var DetailPokemonComponent = (function () {
    function DetailPokemonComponent(route, pokemonsService) {
        this.route = route;
        this.pokemonsService = pokemonsService;
        this.pokemons = null;
        this.pokemon = null;
    }
    DetailPokemonComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemon_1.POKEMONS;
        var id = +this.route.snapshot.params['id'];
        for (var i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    };
    DetailPokemonComponent.prototype.goBack = function () {
        window.history.back();
    };
    return DetailPokemonComponent;
}());
DetailPokemonComponent = __decorate([
    core_1.Component({
        selector: 'detail-pokemon',
        template: "\n  <div *ngIf=\"pokemon\" class=\"row\">\n  <div class=\"col s12 m8 offset-m2\">\n  <h2 class=\"header center\">{{ pokemon.name }}</h2>\n  <div class=\"card horizontal hoverable\">\n    <div class=\"card-image\">\n      <img [src]=\"pokemon.picture\">\n    </div>\n    <div class=\"card-stacked\">\n      <div class=\"card-content\">\n        <table class=\"bordered striped\">\n          <tbody>\n            <tr>\n              <td>Nom</td>\n              <td><strong>{{ pokemon.name }}</strong></td>\n            </tr>\n            <tr>\n              <td>Points de vie</td>\n              <td><strong>{{ pokemon.hp }}</strong></td>\n            </tr>\n            <tr>\n              <td>D\u00E9g\u00E2ts</td>\n              <td><strong>{{ pokemon.cp }}</strong></td>\n            </tr>\n            <tr>\n              <td>Types</td>\n              <td>\n                <span *ngFor=\"let type of pokemon.types\" class=\"{{ type | pokemonTypeColor }}\">{{ type }}</span>\n              </td>\n            </tr>\n            <tr>\n              <td>Date de cr\u00E9ation</td>\n              <td><em>{{ pokemon.created | date:\"dd/MM/yyyy\" }}</em></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-action\">\n        <a (click)=\"goBack()\">Retour</a>\n      </div>\n    </div>\n  </div>\n  </div>\n  </div>\n  <h4 *ngIf='!pokemon' class=\"center\">Aucun pok\u00E9mon \u00E0 afficher !</h4>\n  ",
        providers: [pokemons_service_1.PokemonsService] // on déclare un fournisseur pour le service.
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, pokemons_service_1.PokemonsService])
], DetailPokemonComponent);
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map