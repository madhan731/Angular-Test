import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ParentModule } from './parent/parent.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HomeModule,AppRoutingModule,ParentModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
