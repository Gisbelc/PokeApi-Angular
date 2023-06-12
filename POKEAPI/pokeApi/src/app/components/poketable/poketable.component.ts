import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/pokeapi.service';

@Component({
  selector: 'app-poketable',
  templateUrl: './poketable.component.html',
  styleUrls: ['./poketable.component.css'],
})
export class PoketableComponent implements OnInit {
  title = 'consumirApi';
  pokeList: any[] = [];


  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.getPokemon();

  }

  getPokemon() {
    for (let i = 1; i < 151; i++) {
      this.pokeApi.getPokemons(i).subscribe((res) => this.pokeList.push(res));
    }
  }
}

//name 
//sprites.back_default
//species.name
//types.type[0].name
//weight
//forms[0].name