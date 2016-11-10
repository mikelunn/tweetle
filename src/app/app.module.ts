import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import {TweetService} from "./tweet/tweet.service";
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
