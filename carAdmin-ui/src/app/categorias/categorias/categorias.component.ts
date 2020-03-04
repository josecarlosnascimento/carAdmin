import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/core/model';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  displayedColumns: string[] = ['descricao', 'valorDiaria', 'valorMulta'];
  dataSource = [];
  categoria = new Categoria();

  constructor(private toastr: ToastrService,
              private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    this.categoriaService.listarCategoria().then(categorias => {
      this.dataSource = categorias;
    });
  }

  salvar(form: FormControl){
    this.categoriaService.salvar(this.categoria)
      .then(() => {
        this.listar(),
        form.reset;
        this.categoria = new Categoria();
        this.toastr.success('Descrição cadastrada com sucesso.')
      }
        )
      .catch(e => this.toastr.warning(e.error))
  }
}
