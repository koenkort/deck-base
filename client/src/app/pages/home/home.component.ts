import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { CardService } from 'src/app/services/card.service';
import { Deck } from '../../interfaces/deck';
import { Card } from 'src/app/interfaces/pokemon/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  decks: Deck[] = [];
  cards: Card[] = [];
  constructor(public deckService: DeckService, public cardService: CardService) { }

  ngOnInit(): void {
    this.deckService.getDecks().subscribe(data => {
      this.decks = data;
      console.log(this.decks);
    });
  }

}
