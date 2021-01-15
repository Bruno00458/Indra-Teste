import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abertura-contas',
  templateUrl: './abertura-contas.component.html',
  styleUrls: ['./abertura-contas.component.css']
})
export class AberturaContasComponent implements OnInit {

  abrirConta = {nome: '', cpf: '', celular: '', email: '', dataNasc: '', senha: '', confirmSenha: '', termos: '', receberSms: ''};

  constructor() { }

  ngOnInit() {
  }

}
