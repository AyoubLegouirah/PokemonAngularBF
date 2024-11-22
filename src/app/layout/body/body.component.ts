import { Component } from '@angular/core';
import {PokeDetails, Pokemon, PokeResult} from '../../shared/models/poke.model';
import {PokeService} from './services/yugi.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})

export class BodyComponent {


  pokeResult!: PokeResult;
  pokeDetails!: PokeDetails;

  constructor(
    private _pokeService: PokeService
  ) {
    this.PokeCards('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  }

  PokeCards(url: string): void {
    this._pokeService.PokeCards(url).subscribe({
      next: (result: PokeResult) => {
        this.pokeResult = result;
        this.pokeResult.results.forEach((pokemon:Pokemon) => {
          this.PokeIcon(pokemon.url, pokemon)
          }
        )
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  PokeIcon(url: string, pokemon: Pokemon): void {
    this._pokeService.PokeIcon(url).subscribe({
      next: (result: PokeDetails) => {
        this.pokeDetails = result;
        pokemon.icon = this.pokeDetails.sprites.front_default
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  PokeDetailsAffiche(url: string): void {
    this._pokeService.PokeDetailsAffiche(url).subscribe({
      next: (result: PokeDetails) => {
        this.pokeDetails = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
