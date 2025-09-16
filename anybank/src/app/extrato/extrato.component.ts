import { Component, input } from '@angular/core';
import { TrasacaoComponent } from "./trasacao/trasacao.component";
import { Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  imports: [TrasacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>()
}
