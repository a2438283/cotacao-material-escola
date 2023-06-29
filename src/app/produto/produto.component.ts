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
    this.produtoService.getAll().then((dados) => {
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
    this.produtoService
      .delete(produto)
      .then(() => {
        this.modal.show = true;
        this.modal.icon = 'check';
        this.modal.title = 'Sucesso!';
        this.modal.text = `Item removido com Sucesso`;
      })
      .catch(() => {
        this.modal.show = true;
        this.modal.icon = 'error';
        this.modal.title = 'Erro!';
        this.modal.text = `Erro ao excluir registro`;
      });

    this.getProdutos();
  }

  update(p: Produto) {
    this.produtoService
      .update(this.produto)
      .then(() => {
        this.modal.show = true;
        this.modal.icon = 'check';
        this.modal.title = 'Sucesso!';
        this.modal.text = `Cadastro Realisado com Sucesso`;

        this.getProdutos();
      })
      .catch((e) => {
        this.modal.show = true;
        this.modal.icon = 'error';
        this.modal.title = 'Erro!';
        this.modal.text = `Erro ao atualizar registro`;
      });
  }

  save(p: Produto) {
    this.produtoService
      .save(this.produto)
      .then(() => {
        this.modal.show = true;
        this.modal.icon = 'check';
        this.modal.title = 'Sucesso!';
        this.modal.text = `Cadastro Realisado com Sucesso`;

        this.getProdutos();
      })
      .catch(() => {
        this.modal.show = true;
        this.modal.icon = 'error';
        this.modal.title = 'Erro!';
        this.modal.text = `Erro ao salvar registro`;
      });
  }

  getProdutos() {
    this.produtoService
      .getAll()
      .then((data) => {
        this.produtos = data;
      })
      .catch((e) => {
        this.modal.show = true;
        this.modal.icon = 'error';
        this.modal.title = 'Erro!';
        this.modal.text = e.data;
      });
    this.produto = new Produto('');
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
