import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cotacao } from '../model/cotacao';
import { Produto } from '../model/produto';
import { CotacaoService } from '../services/cotacao.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css'],
})
export class CotacaoComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: NgForm;
  cotacao!: Cotacao;
  cotacoes?: Cotacao[];
  produtos?: Produto[];

  modal = {
    icon: 'check',
    show: false,
    title: '',
    text: '',
  };

  constructor(
    private cotacaoService: CotacaoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.getCotacoes();
    this.getProdutos();
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    this.cotacaoService.getAll().subscribe((dados) => {
      let exist = false;
      dados.forEach((p) => {
        if (p.descricao === this.cotacao.descricao) {
          exist = true;
        }
      });
      this.cotacao.produtos = this.produtos!.filter((p) => p.preco > 0);
      if (exist) {
        this.update(this.cotacao);
      } else {
        this.save(this.cotacao);
      }
    });
  }

  onResetClick() {
    this.form.reset();
    this.cotacao = new Cotacao('');
  }

  onDelete(cotacao: Cotacao) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + cotacao.descricao
    );
    if (!confirmation) {
      return;
    }
    this.cotacaoService.delete(cotacao).subscribe({
      next: () => this.showSucesso(`Item removido com Sucesso`),
      error: (e) => console.error(`Erro ao excluir registro` + e),
      complete: () => console.info('complete'),
    });
  }

  update(p: Cotacao) {
    this.cotacaoService.update(this.cotacao).subscribe({
      next: () => this.showSucesso('Cadastro Atualizado com Sucesso'),
      error: (e) => console.error(`Erro ao atualizar registro` + e),
      complete: () => console.info('complete'),
    });
  }

  save(p: Cotacao): void {
    this.cotacaoService.save(this.cotacao).subscribe({
      next: () => this.showSucesso('Cadastro Realisado com Sucesso'),
      error: (e) => console.error(`Erro ao salvar registro` + e),
      complete: () => console.info('complete'),
    });
  }

  getCotacoes() {
    this.cotacaoService.getAll().subscribe({
      next: (data) => (this.cotacoes = data),
      error: (e) => this.showErro(e),
      complete: () => console.log('complete'),
    });
    this.cotacao = new Cotacao('');
  }

  getProdutos() {
    this.produtoService.getAll().subscribe({
      next: (data) => (this.produtos = data),
      error: (e) => this.showErro(e),
      complete: () => console.log('complete'),
    });
  }

  confirmarEdicao(item: any) {
    if (item.preco > 0) {
      item.editado = false;
      // Lógica para salvar o preço atualizado
      console.log('Preço atualizado:', item.preco);
    }
  }

  cancelarEdicao(item: any) {
    item.editado = false;
    // Restaurar o valor original do preço
    console.log('Edição cancelada:', item.preco);
  }

  showSucesso(msg: string) {
    this.modal.show = true;
    this.modal.icon = 'check';
    this.modal.title = 'Sucesso!';
    this.modal.text = msg;

    this.getCotacoes();
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
