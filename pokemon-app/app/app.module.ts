import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';

import { ShadowCardDirective } from './pokemons/shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,PageNotFoundComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }