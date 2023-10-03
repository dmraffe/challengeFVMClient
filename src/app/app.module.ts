import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorydataComponent } from './components/historydata/historydata.component';
import { FormweatherComponent } from './components/formweather/formweather.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddcityComponent } from './components/addcity/addcity.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HistorydataComponent,
    FormweatherComponent,
    MainpageComponent,
    AddcityComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
