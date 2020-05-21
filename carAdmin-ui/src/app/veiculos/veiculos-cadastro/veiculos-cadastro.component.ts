import { Component, OnInit, ɵConsole } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarcaService } from 'src/app/marca/marca.service';
import { TipoService } from 'src/app/tipo/tipo.service';
import { VeiculoService } from '../veiculo.service';
import { ToastrService } from 'ngx-toastr';
import { CorService } from 'src/app/cor/cor.service';
import { ActivatedRoute } from '@angular/router';
import { DespesasService } from 'src/app/despesas/despesas.service';
import { CombustivelService } from '../combustivel.service';

@Component({
  selector: 'app-veiculos-cadastro',
  templateUrl: './veiculos-cadastro.component.html',
  styleUrls: ['./veiculos-cadastro.component.css']
})
export class VeiculosCadastroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipo', 'data', 'descricao'];

  categorias = [];
  marcas = [];
  tipos = [];
  cores = [];
  despesas = [];
  listaStatus = [];
  combustiveis = [];
  formulario: FormGroup;


  constructor(private categoriaService: CategoriaService,
              private marcaService: MarcaService,
              private tipoService: TipoService,
              private formBuilder: FormBuilder,
              private veiculoService: VeiculoService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private corService: CorService,
              private despesasService: DespesasService,
              private combutivelService: CombustivelService) { }

  ngOnInit() {
    this.configurarFormulario();
    this.listarMarcas();
    this.listarCategorias();
    this.listarTipos();
    this.listarCores();
    this.listarStatus();
    this.listarCombustiveis();
    
    const codigoVeiculo= this.route.snapshot.params['codigo'];

    if(codigoVeiculo){
      this.buscarPorId(codigoVeiculo);
      this.buscarDespesas(codigoVeiculo);
    }
    

    
  }

  buscarDespesas(codigoVeiculo: any) {
    this.despesasService.listarDespesasPorVeiculo(codigoVeiculo).then(resultado => {
      this.despesas = resultado;
    });
  }

  buscarPorId(codigoVeiculo: any) {
    this.veiculoService.buscarPorId(codigoVeiculo).then(veiculo => {
      this.formulario.patchValue(veiculo);
      this.formulario.get('marca').setValue(veiculo.marca.id);
      this.formulario.get('cor').setValue(veiculo.cor.id);
      this.formulario.get('tipo').setValue(veiculo.tipo.id);
      this.formulario.get('categoria').setValue(veiculo.categoria.id);
    });
  }

  listarStatus(){
    this.veiculoService.listarStatus().then(resultado => {
      this.listaStatus = resultado;
    })
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

  listarCombustiveis(){
    this.combutivelService.listarCombustiveis().then(resultado => {
      this.combustiveis = resultado;
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
      marca: this.formBuilder.group({
        id: [ null, Validators.required ],
        descricao: []
      }),
      modelo: [null, Validators.required],
      placa: [null, Validators.required],
      anoModelo: [null, Validators.required],
      anoFabricacao: [null, Validators.required],
      cor: [null, Validators.required],
      categoria: [null, Validators.required],
      chassi: [null, Validators.required],
      tipo: [null, Validators.required],
      combustivel: [null, Validators.required]
    });

  }

}
