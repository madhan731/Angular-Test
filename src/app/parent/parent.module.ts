import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Test1Component,Test2Component],
  exports:[Test1Component,Test2Component]
})
export class ParentModule { }