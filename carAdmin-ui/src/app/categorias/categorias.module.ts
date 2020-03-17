import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    MatTableModule,

    
  ]
})
export class CategoriasModule { }
