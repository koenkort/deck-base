import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card, Cards } from 'src/app/interfaces/pokemon/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];


  constructor(public cardService: CardService) { }

  ngOnInit(): void {
    this.getDarknessAblaze();
  }

  getDarknessAblaze() {
    this.cardService.getDarknessAblaze().subscribe((data: Cards) => {
      this.cards = data.cards;
    });
  }

}
