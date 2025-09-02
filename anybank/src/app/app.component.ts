import { Component, computed, Signal, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc: number, transacao: Transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:

          return acc + transacao.valor

        case TipoTransacao.SAQUE:
          return acc - transacao.valor

        default:
          throw new Error("Tipo de transação inválida");
      }
    }, 0)
  })



  processarTransacao(transacao: Transacao) {
    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()) {
      return alert('Saldo insuficiente!');
    }
    this.transacoes.update(listaAtual => [transacao, ...listaAtual])

    console.log(this.transacoes());


  }
}
