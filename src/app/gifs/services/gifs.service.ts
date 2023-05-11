import { Gif, SearchResponse } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const GIPHY_API_KEY = 'O9vIwiWPPs7ZXwvMNkdZt87AR2i4VkFu'

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient ) { }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory( tag: string ) {
    tag = tag.toLowerCase()

    if (this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag )
    this._tagsHistory = this._tagsHistory.splice(0, 10)

  }

  searchTag( tag: string ): void {
    if ( tag.length === 0 ) return
    this.organizeHistory( tag )

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search?`, { params })
      .subscribe( resp => {

        this.gifList = resp.data
        console.log({ gifs: this.gifList });

      })

  }

}
