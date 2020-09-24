import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [CardsComponent],
  imports: [
      CommonModule,
      RouterModule,
      NbLayoutModule,
      NbThemeModule.forRoot({ name: 'cosmic' }),
  ],
  exports: [CardsComponent],
})

export class CardsModule { }
