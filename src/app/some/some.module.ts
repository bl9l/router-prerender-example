import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeRoutingModule } from './some-routing.module';
import { SomeComponent } from './some.component';


@NgModule({
  declarations: [SomeComponent],
  imports: [
    CommonModule,
    SomeRoutingModule
  ]
})
export class SomeModule { }
