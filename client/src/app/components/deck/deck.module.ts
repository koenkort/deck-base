import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeckComponent } from './deck.component';
import { NbCardModule} from '@nebular/theme';

@NgModule({
  declarations: [DeckComponent],
  imports: [
      CommonModule,
      RouterModule,
      NbCardModule,
  ],
  exports: [DeckComponent],
})

export class DeckModule { }
