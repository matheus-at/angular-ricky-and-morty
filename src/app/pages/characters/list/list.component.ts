import { Character } from './../../../models/character'
import { RickyAndMortyService } from './../../../services/ricky-and-morty.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters: Character[] = []

  constructor(private _rickyAndMortyService: RickyAndMortyService) {}

  ngOnInit(): void {
    this.listAllCharacters()
  }

  listAllCharacters(): void {
    this._rickyAndMortyService.listAllCharacters().subscribe((response) => {
      this.characters = response.results
    })
  }
}
