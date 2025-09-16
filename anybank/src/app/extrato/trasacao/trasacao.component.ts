import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-trasacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './trasacao.component.html',
  styleUrl: './trasacao.component.css'
})
export class TrasacaoComponent {
  transacao = input.required<Transacao>();
}
