import { HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

import { Character } from './../../../models/character'
import { RickyAndMortyService } from './../../../services/ricky-and-morty.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  page: number = 1
  totalPages: number = 0
  httpParams: HttpParams = new HttpParams()
  characters: Character[] = []

  constructor(private _rickyAndMortyService: RickyAndMortyService) {}

  ngOnInit(): void {
    this.httpParams = this.httpParams.set('page', this.page)
    this.listAllCharacters()
  }

  listAllCharacters(): void {
    this._rickyAndMortyService.listAllCharacters(this.httpParams).subscribe((response) => {
      this.totalPages = response.info.pages
      this.characters = response.results
    })
  }

  nextPage(): void {
    this.httpParams = this.httpParams.set('page', this.page + 1)
    this.page++
    this.listAllCharacters()
    this.scrollToTop()
  }

  previousPage(): void {
    this.httpParams = this.httpParams.set('page', this.page - 1)
    this.page--
    this.listAllCharacters()
    this.scrollToTop()
  }

  scrollToTop(): void {
    window.scrollTo(0, 0)
  }
}
