import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PokeDetails, Pokemon, PokeResult} from '../../../shared/models/poke.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService{
  constructor(
    private _http: HttpClient,
  )  { }

  PokeCards(url: string): Observable<PokeResult> {
    return this._http.get<PokeResult>(url);
  }

  PokeIcon(url: string): Observable<PokeDetails> {
    return this._http.get<PokeDetails>(url);
  }

  PokeDetailsAffiche(url: string): Observable<PokeDetails> {
    return this._http.get<PokeDetails>(url);
  }




}
