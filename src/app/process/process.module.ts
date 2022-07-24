import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessRoutingModule } from './process-routing.module';
import { Origin1Component } from './origin1/origin1.component';
import { Origin2Component } from './origin2/origin2.component';

@NgModule({
  imports: [
    CommonModule,
    ProcessRoutingModule
  ],
  declarations: [Origin1Component,Origin2Component]
})
export class ProcessModule { }