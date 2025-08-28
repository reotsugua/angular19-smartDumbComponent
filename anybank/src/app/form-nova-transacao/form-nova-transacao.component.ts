import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  valorTransacao: string = "";
  tipoTransacao: string = "";
aoSubmeter() {
  console.log(this.tipoTransacao);
  console.log(this.valorTransacao);

  this.valorTransacao = "";
  this.tipoTransacao = "";

  
}

}


