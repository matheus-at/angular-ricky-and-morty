import { HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { Character } from './../../../models/character'
import { RickAndMortyService } from '../../../services/rick-and-morty.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  page: number = 1
  totalPages: number = 0
  loading: boolean = false
  httpParams: HttpParams = new HttpParams()
  characters: Character[] = []

  constructor(private _title: Title, private _rickAndMortyService: RickAndMortyService) {
    this._title.setTitle('Rick and Morty | Characters')
  }

  ngOnInit(): void {
    this.listAllCharacters()
  }

  listAllCharacters(): void {
    this.loading = true
    this._rickAndMortyService.listAllCharacters(this.httpParams).subscribe((response) => {
      this.totalPages = response.info.pages
      this.characters = response.results
      this.loading = false
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
