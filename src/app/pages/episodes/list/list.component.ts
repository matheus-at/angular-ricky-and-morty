import { HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete'
import { Title } from '@angular/platform-browser'
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service'
import { getIdsFromURLs } from 'src/app/utils/utils'

import { Character } from './../../../models/character'
import { Episode } from './../../../models/episode'

/**
 * @title List all characters from the selected episode
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
  episodeFilterControl = new FormControl()
  episodes: Episode[] = []
  filteredEpisodes: Episode[] = []
  characters: Character[] = []

  constructor(private _title: Title, private _rickAndMortyService: RickAndMortyService) {
    this._title.setTitle('Rick and Morty | Episodes')
  }

  ngOnInit(): void {
    this._listAllEpisodes()

    this.episodeFilterControl.valueChanges.subscribe((value) => this._filter(value))
  }

  private _listAllEpisodes(): void {
    this._rickAndMortyService.listAllEpisodes().subscribe((response) => {
      this.episodes = response.results
      this.filteredEpisodes = this.episodes
    })
  }

  private _filter(value: any): void {
    if (!value || value.id) {
      this.filteredEpisodes = [...this.episodes]
      this.characters = []
    } else {
      const filterValue = value.toLowerCase()
      this.filteredEpisodes = this.episodes.filter((option) => {
        const value = `${option.name} - ${option.episode}`
        return value.toLowerCase().includes(filterValue)
      })
    }
  }

  getOptionText(episode: Episode): string {
    return episode ? `${episode.episode} - ${episode.name}` : ''
  }

  handleEpisodeFilterChange(event: MatAutocompleteSelectedEvent): void {
    const episode = event.option.value as Episode
    const characterIds = getIdsFromURLs(episode.characters)
    this._rickAndMortyService.getMultipleCharacters(characterIds).subscribe((characters) => {
      this.characters = characters
    })
  }
}
