"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_pokemons_1 = require("./mock-pokemons");
var AppComponent = (function () {
    function AppComponent() {
        this.pokemons = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pokemons = mock_pokemons_1.POKEMONS;
    };
    AppComponent.prototype.selectPokemon = function (pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pokemon-app',
        template: "<h1 class='center'>Pok\u00E9mons</h1>\n  <div class='container'>\n  <div class=\"row\">\n  <div *ngFor='let pokemon of pokemons' class=\"col s6 m4\">\n\t<div class=\"card horizontal\" (click)=\"selectPokemon(pokemon)\">\n\t  <div class=\"card-image\">\n\t\t<img [src]=\"pokemon.picture\">\n\t  </div>\n\t  <div class=\"card-stacked\">\n\t\t<div class=\"card-content\">\n\t\t  <p>{{ pokemon.name }}</p>\n\t\t  <p><small>{{ pokemon.created }}</small></p>\n\t\t</div>\n\t  </div>\n\t</div>\n  </div>\n  </div>\n  </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map