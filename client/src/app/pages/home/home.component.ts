import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from '../../interfaces/deck';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  decks: Deck[] = [];
  constructor(public deckService: DeckService) { }

  ngOnInit(): void {
    this.deckService.getDecks().subscribe(data => {
      this.decks = data;
      console.log(this.decks);
    });
  }

}
