import { Component, OnInit, Input } from '@angular/core';
import { DespesasService } from '../despesas.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Veiculo } from 'src/app/core/model';

@Component({
  selector: 'app-despesa-lancamento',
  templateUrl: './despesa-lancamento.component.html',
  styleUrls: ['./despesa-lancamento.component.css']
})
export class DespesaLancamentoComponent implements OnInit {


  @Input() veiculo: Veiculo;

  tipoDespesa: [];
  formulario: FormGroup;

  constructor(private despesaService: DespesasService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) { }


  ngOnInit() {
    this.configurarFormulario();
    this.listarTipoDespesa();
  }

  listarTipoDespesa(){
    this.despesaService.listarTiposDespesa().then(result => {
      console.log(result)
      this.tipoDespesa = result;
    });
  }

  salvar(){
    this.despesaService.salvarDespesa(this.formulario.value).then(() =>{
      this.formulario.reset();
      this.toastr.success('Despesa cadastrada com sucesso.')
    })
  }

  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      id: [],
      valor: [null, Validators.required],
      descricao: [null, Validators.required],
      tipoDespesa: [null, Validators.required],
     
    })

  }

}
