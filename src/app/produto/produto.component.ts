import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('form') form!: NgForm;
  descricao = '';

  modal = {
    icon: 'check',
    show: false,
    title: '',
    text: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.descricao = '';
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    if (!this.descricao) {
      this.modal.show = true;
      this.modal.icon = 'error';
      this.modal.title = 'Erro !';
      this.modal.text = `Descrição em branco`;
      console.log('erro');
    } else {
      this.modal.show = true;
      this.modal.icon = 'check';
      this.modal.title = 'Sucesso!';
      this.modal.text = `cadastro realisado com sucesso`;
      console.log('ok');
    }
  }

  onResetClick() {
    this.descricao = '';
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
