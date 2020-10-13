import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule, NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [HomeComponent],
  imports: [
      CommonModule,
      RouterModule,
      NbLayoutModule,
      NbThemeModule.forRoot({ name: 'cosmic' }),
      NbButtonModule,
      NbInputModule,
      NbSelectModule,
  ],
  exports: [HomeComponent],
})

export class HomeModule { }
