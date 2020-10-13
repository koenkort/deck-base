import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';

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
        SidebarModule,
        HttpClientModule,
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
