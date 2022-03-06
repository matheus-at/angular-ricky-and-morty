import { HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { Title } from '@angular/platform-browser'
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service'
import { getIdsFromURLs } from 'src/app/utils/utils'

import { Character } from './../../../models/character'
import { Location } from './../../../models/location'

/**
 * @title List all characters from the selected location
 */
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
  locationFilterControl = new FormControl()
  locations: Location[] = []
  filteredLocations: Location[] = []
  characters: Character[] = []

  constructor(private _title: Title, private _rickAndMortyService: RickAndMortyService) {
    this._title.setTitle('Rick and Morty | Locations')
  }

  ngOnInit(): void {
    this._listAllLocations()

    this.locationFilterControl.valueChanges.subscribe((value) => this._filter(value))
  }

  private _listAllLocations(): void {
    this._rickAndMortyService.listAllLocations().subscribe((response) => {
      this.locations = response.results
      this.filteredLocations = this.locations
    })
  }

  private _filter(value: any): void {
    if (!value || value.id) {
      this.filteredLocations = [...this.locations]
      this.characters = []
    } else {
      const filterValue = value.toLowerCase()
      this.filteredLocations = this.locations.filter((option) => option.name.toLowerCase().includes(filterValue))
    }
  }

  getOptionText(location: Location): string {
    return location ? `${location.name} | ${location.dimension}` : ''
  }

  handleLocationFilterChange(event: MatAutocompleteSelectedEvent): void {
    const location = event.option.value as Location
    const characterIds = getIdsFromURLs(location.residents)
    this._rickAndMortyService.getMultipleCharacters(characterIds).subscribe((response) => {
      if (Array.isArray(response)) {
        this.characters = response
      } else {
        this.characters = [{ ...response }]
      }
    })
  }
}
