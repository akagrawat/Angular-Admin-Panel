import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';



@NgModule({
  declarations: [TopmenuComponent,
                 SidemenuComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
