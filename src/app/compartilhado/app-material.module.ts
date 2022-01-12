import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    IncPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule,
    FilterPipe,
    IncPipe
  ],
})

export class AppMaterialModule { }
