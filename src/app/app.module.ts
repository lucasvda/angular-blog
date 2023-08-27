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
import { MoreInfoCol2CardComponent } from './components/more-info-col2-card/more-info-col2-card.component';
import { MoreInfoCol3CardComponent } from './components/more-info-col3-card/more-info-col3-card.component';
import { InterviewComponent } from './components/interview/interview.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogoBarComponent, MenuBarComponent, BigCardComponent, MainComponent, MainCol1Component, MainCol2CardComponent, MoreInfoComponent, MoreInfoCol2CardComponent, MoreInfoCol3CardComponent, InterviewComponent, ContactComponent, ContentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
