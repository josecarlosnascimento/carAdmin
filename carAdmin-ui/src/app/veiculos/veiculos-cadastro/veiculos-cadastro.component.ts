import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarcaService } from 'src/app/marca/marca.service';
import { TipoService } from 'src/app/tipo/tipo.service';
import { VeiculoService } from '../veiculo.service';
import { ToastrService } from 'ngx-toastr';
import { CorService } from 'src/app/cor/cor.service';

@Component({
  selector: 'app-veiculos-cadastro',
  templateUrl: './veiculos-cadastro.component.html',
  styleUrls: ['./veiculos-cadastro.component.css']
})
export class VeiculosCadastroComponent implements OnInit {

  categorias = [];
  marcas = [];
  tipos = [];
  cores = [];
  formulario: FormGroup;


  constructor(private categoriaService: CategoriaService,
              private marcaService: MarcaService,
              private tipoService: TipoService,
              private formBuilder: FormBuilder,
              private veiculoService: VeiculoService,
              private toastr: ToastrService,
              private corService: CorService) { }

  ngOnInit() {
    this.configurarFormulario();
    this.listarMarcas();
    this.listarCategorias();
    this.listarTipos();
    this.listarCores();
  }
  listarCores() {
    this.corService.listarCores().then(resultado => {
      this.cores = resultado;
    })
  }

  listarCategorias(){
    this.categoriaService.listarCategoria().then(resultado => {
    this.categorias = resultado;
    })
  }

  listarMarcas(){
    this.marcaService.listarMarcas().then(resultado => {
    this.marcas = resultado;
    })
  }

  listarTipos(){
    this.tipoService.listarTipos().then(resultado => {
      this.tipos  = resultado;
    })
  }

  salvar(){
  
    return this.veiculoService.salvar(this.formulario.value).then(() => {
      this.toastr.success('Veículo cadastrado com sucesso.')
    }).catch(e => {
      this.toastr.error('Erro ao cadastrar este veículo.')
    })
    
  }

  
  
  configurarFormulario() {

    this.formulario = this.formBuilder.group({
      id: [],
      marca: [null, Validators.required],
      modelo: [null, Validators.required],
      placa: [null, Validators.required],
      ano: [null, Validators.required],
      cor: [null, Validators.required],
      categoria: [null, Validators.required],
      chassi: [null, Validators.required],
      tipo: [null, Validators.required],
    });

  }

}
