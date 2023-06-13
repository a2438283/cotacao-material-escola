import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: NgForm;
  descricao = '';

  constructor() {}

  ngOnInit(): void {
    this.descricao = '';
  }

  ngAfterViewInit(): void {
    console.log(`descricao eh `);
  }

  onSubmit() {
    if (!this.descricao) console.log('Atributo vazio');
    else console.log('cadastro realizado');
  }

  onResetClick() {
    this.descricao = '';
  }
}
