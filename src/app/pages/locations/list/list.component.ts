import { HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Title } from '@angular/platform-browser'
import { map } from 'lodash'

import { Character } from './../../../models/character'
import { Location } from './../../../models/location'
import { RickAndMortyService } from './../../../services/rick-and-morty.service'
import { DialogCharactersComponent } from './../dialog-characters/dialog-characters.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  httpParams: HttpParams = new HttpParams()
  loading: boolean = false
  page: number = 1
  totalPages: number = 0
  columns: string[] = ['name', 'type', 'dimension', 'actions']
  locations: Location[] = []

  constructor(private _title: Title, private _rickAndMortyService: RickAndMortyService, public _dialog: MatDialog) {
    this._title.setTitle('Rick and Morty | Locations')
  }

  ngOnInit(): void {
    this.listAllLocations()
  }

  listAllLocations(): void {
    this.loading = true
    this._rickAndMortyService.listAllLocations(this.httpParams).subscribe((response) => {
      this.totalPages = response.info.pages
      this.locations = response.results
      this.loading = false
    })
  }

  nextPage(): void {
    this.httpParams = this.httpParams.set('page', this.page + 1)
    this.page++
    this.listAllLocations()
    this.scrollToTop()
  }

  previousPage(): void {
    this.httpParams = this.httpParams.set('page', this.page - 1)
    this.page--
    this.listAllLocations()
    this.scrollToTop()
  }

  scrollToTop(): void {
    window.scrollTo(0, 0)
  }

  listAllResidents(location: Location): void {
    const { residents: urls } = location
    // Make an array of character ids from residents urls in location
    const residentsIds = map(urls, (url: string) => Number(url.split('/').pop()))
    this._rickAndMortyService.getMultipleCharacters(residentsIds).subscribe((characters) => {
      this.openDialogCharacters(characters, location)
    })
  }

  openDialogCharacters(characters: Character[], location: Location) {
    this._dialog.open(DialogCharactersComponent, { data: { characters, location } })
  }
}
