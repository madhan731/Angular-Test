import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Origin1Component } from './origin1/origin1.component';
import { Origin2Component } from './origin2/origin2.component';


const routes: Routes = [
 {path:'origin1',component:Origin1Component},
 {path:'origin2',component:Origin2Component}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }