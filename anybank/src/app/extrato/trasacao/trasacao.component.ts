import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { TipoTransacao, Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-trasacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './trasacao.component.html',
  styleUrl: './trasacao.component.css'
})
export class TrasacaoComponent {
  transacao = input.required<Transacao>();

  valor = computed(()=>{
    if (this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }

    return this.transacao().valor
  })
}
