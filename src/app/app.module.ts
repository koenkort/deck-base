import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { DeckModule } from './components/deck/deck.module';
import { HttpClientModule } from '@angular/common/http';
import { CardsModule } from './pages/cards/cards.module';

// Modules

@NgModule({
  	declarations: [
    	AppComponent,
  	],
	imports: [
        BrowserModule,
        AppRoutingModule,
        NbThemeModule.forRoot({ name: 'cosmic' }),
        NbLayoutModule,
        HomeModule,
        CardsModule,
        SidebarModule,
        DeckModule,
        HttpClientModule,
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
