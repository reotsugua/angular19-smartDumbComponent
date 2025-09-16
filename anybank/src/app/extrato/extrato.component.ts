import { Component } from '@angular/core';
import { TrasacaoComponent } from "./trasacao/trasacao.component";

@Component({
  selector: 'app-extrato',
  imports: [TrasacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {

}
