import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from '../model/produto';
import { ProdutoStorageService } from './produto-storage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoStorageService],
})
export class ProdutoComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('form') form!: NgForm;
  produto!: Produto;
  produtos?: Produto[];

  isSubmitted!: boolean;
  isSuccess!: boolean;

  modal = {
    icon: 'check',
    show: false,
    title: '',
    text: '',
  };

  constructor(private produtoService: ProdutoStorageService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
    this.produto = new Produto('', 0, this.produtos.length);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    this.isSubmitted = true;
    if (!this.produtoService.isExist(this.produto.descricao)) {
      this.produtoService.save(this.produto);
    } else {
      this.produtoService.update(this.produto);
    }
    this.isSuccess = true;

    this.modal.show = true;
    this.modal.icon = 'check';
    this.modal.title = 'Sucesso!';
    this.modal.text = `Cadastro Realisado com Sucesso`;

    this.form.reset();
    this.produtos = this.produtoService.getProdutos();
    this.produto = new Produto('', 0, this.produtos.length);
  }

  onResetClick() {
    this.form.reset();
    this.produto = new Produto('', 0, this.produtos!.length);
  }

  onEdit(produto: Produto) {
    //this.user = user;
    let clone = Produto.clone(produto);
    this.produto = clone;
  }

  onDelete(produto: Produto) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + produto.descricao
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.produtoService.delete(produto.id);
    this.isSuccess = response;
    if (response) {
      this.modal.show = true;
      this.modal.icon = 'check';
      this.modal.title = 'Sucesso!';
      this.modal.text = `Item removido com Sucesso`;
    } else {
      this.modal.show = true;
      this.modal.icon = 'error';
      this.modal.title = 'Erro!';
      this.modal.text = `Erro ao excluir registro`;
    }
    this.produtos = this.produtoService.getProdutos();
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
