import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deck } from '../interfaces/deck';

@Injectable({
  providedIn: 'root'
})

export class DeckService {

  constructor(private httpService: HttpClient) {}

  getDecks(): Observable<Deck[]> {
    return this.httpService.get<Deck[]>('assets/data/deck.json');
  }
}
