import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-trasacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './trasacao.component.html',
  styleUrl: './trasacao.component.css'
})
export class TrasacaoComponent {
  valor = signal(0);
  transacao = signal({data:  new Date})
}
