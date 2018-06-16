import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './game';
@Injectable()
export class GamesService {

  private _reposURL = "http://starlord.hackerearth.com/gamesext"

  constructor(private http:Http) { }

  getGames(): Observable<Game[]> {
    return this.http.get(this._reposURL)
      .map((response: Response) => {
        return response.json().items;

      })
      .catch((error: any) => {
        return Observable.throw(error.json ? error.json().error : error || 'Server error')
      });
  }
}
