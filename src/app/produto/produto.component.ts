import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { ProdutoStorageService } from './produto-storage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoStorageService],
})
export class ProdutoComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: NgForm;
  produto!: Produto;
  produtos?: Produto[];

  modal = {
    icon: 'check',
    show: false,
    title: '',
    text: '',
  };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    this.produtoService.getAll().subscribe((dados) => {
      let exist = false;
      dados.forEach((p) => {
        if (p.id === this.produto.id) {
          exist = true;
        }
      });
      if (exist) {
        this.update(this.produto);
      } else {
        this.save(this.produto);
      }
    });
  }

  onResetClick() {
    this.form.reset();
    this.produto = new Produto('');
  }

  onEdit(produto: Produto) {
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
    this.produtoService.delete(produto).subscribe({
      next: () => this.showSucesso(`Item removido com Sucesso`),
      error: (e) => console.error(`Erro ao excluir registro` + e),
      complete: () => console.info('complete'),
    });
  }

  update(p: Produto) {
    this.produtoService.update(this.produto).subscribe({
      next: () => this.showSucesso('Cadastro Atualizado com Sucesso'),
      error: (e) => console.error(`Erro ao atualizar registro` + e),
      complete: () => console.info('complete'),
    });
  }

  save(p: Produto): void {
    this.produtoService.save(this.produto).subscribe({
      next: () => this.showSucesso('Cadastro Realisado com Sucesso'),
      error: (e) => console.error(`Erro ao salvar registro` + e),
      complete: () => console.info('complete'),
    });
  }

  getProdutos() {
    this.produtoService.getAll().subscribe({
      next: (data) => (this.produtos = data),
      error: (e) => this.showErro(e),
      complete: () => console.log('complete'),
    });
    this.produto = new Produto('');
  }

  showSucesso(msg: string) {
    this.modal.show = true;
    this.modal.icon = 'check';
    this.modal.title = 'Sucesso!';
    this.modal.text = msg;

    this.getProdutos();
  }

  showErro(msg: string) {
    this.modal.show = true;
    this.modal.icon = 'error';
    this.modal.title = 'Erro!';
    this.modal.text = msg;
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
