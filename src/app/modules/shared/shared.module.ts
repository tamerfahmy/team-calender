import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AClockComponent } from './a-clock/a-clock.component';



@NgModule({
  declarations: [
    AClockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AClockComponent]
})
export class SharedModule { }
