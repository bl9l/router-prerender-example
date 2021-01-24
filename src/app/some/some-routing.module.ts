import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeComponent} from './some.component';

const routes: Routes = [{
  path: '',
  component: SomeComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeRoutingModule { }
