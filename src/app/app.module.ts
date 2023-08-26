import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoBarComponent } from './components/logo-bar/logo-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MainComponent } from './components/main/main.component';
import { MainCol1Component } from './components/main-col1/main-col1.component';
import { MainCol2CardComponent } from './components/main-col2-card/main-col2-card.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogoBarComponent, MenuBarComponent, BigCardComponent, MainComponent, MainCol1Component, MainCol2CardComponent, MoreInfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
