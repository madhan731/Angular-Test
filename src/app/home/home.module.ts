import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home.component';
import { ParentModule } from '../parent/parent.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [HomeRoutingModule,ParentModule],
  declarations: [HomeComponent,Page1Component,Page2Component,HeaderComponent],
})
export class HomeModule {}
