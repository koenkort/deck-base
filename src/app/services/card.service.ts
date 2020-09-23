import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/pokemon/card';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor(private httpService: HttpClient) {}

  getDarknessAblaze() {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=swsh3');
  }

  getRebelClash()  {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=swsh2');
  }

  getSwordShield() {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=swsh1');
  }

  getCosmicEclipse() {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=sm12');
  }

  getUnifiedMinds() {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=sm11');
  }

  getUnbrokenBonds() {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=sm10');
  }

  getTeamUp() {
    return this.httpService.get('https://api.pokemontcg.io/v1/cards?setCode=sm9');
  }
}
