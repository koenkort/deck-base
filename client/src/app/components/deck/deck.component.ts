import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../interfaces/deck';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() deck: Deck;

  constructor(public deckService: DeckService) {}

  ngOnInit(): void {
  }


}
