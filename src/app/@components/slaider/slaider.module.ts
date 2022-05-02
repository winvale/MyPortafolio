import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaiderComponent } from './slaider.component';
import { TitleModule } from '@widgets/title/title.module';



@NgModule({
  declarations: [SlaiderComponent],
  imports: [
    CommonModule,
    TitleModule,
  ],
  exports: [SlaiderComponent]
})
export class SlaiderModule { }
