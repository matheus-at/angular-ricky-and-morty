import { RickAndMortyService } from './../../../services/rick-and-morty.service'
import { HttpParams } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

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
  columns: string[] = ['name', 'type', 'dimension']
  locations: Location[] = []

  constructor(private _title: Title, private _rickAndMortyService: RickAndMortyService) {
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
      // So we can see the cool loading animation =)
      setTimeout(() => (this.loading = false), 500)
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
}
