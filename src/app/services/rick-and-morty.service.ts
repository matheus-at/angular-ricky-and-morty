import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private _httpClient: HttpClient) {}

  listAllCharacters(params: HttpParams): Observable<any> {
    return this._httpClient.get(`${environment.apiUrl}/character`, { params })
  }

  listAllLocations(params: HttpParams): Observable<any> {
    return this._httpClient.get(`${environment.apiUrl}/location`, { params })
  }

  getMultipleCharacters(ids: number[]): Observable<any> {
    return this._httpClient.get(`${environment.apiUrl}/character/${ids}`)
  }
}
