import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWidgetComponent } from './header-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    HeaderWidgetComponent
  ],
  declarations: [HeaderWidgetComponent]
})
export class WidgetModule { }
