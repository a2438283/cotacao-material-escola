import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenorPrecoComponent } from './menor-preco/menor-preco.component';
import { MensagemModalComponent } from './mensagem-modal/mensagem-modal.component';
import { ProdutoComponent } from './produto/produto.component';
import { RodapeComponent } from './rodape/rodape.component';

import { RelatorioLojasComponent } from './relatorio-lojas/relatorio-lojas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ProdutoComponent,
    MensagemModalComponent,
    MenorPrecoComponent,
    RelatorioLojasComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
