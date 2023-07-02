import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { MenorPrecoComponent } from './menor-preco/menor-preco.component';
import { ProdutoComponent } from './produto/produto.component';
import { RelatorioLojasComponent } from './relatorio-lojas/relatorio-lojas.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'produto', component: ProdutoComponent },
  { path: 'cotacao', component: CotacaoComponent },
  { path: 'menor-preco', component: MenorPrecoComponent },
  { path: 'relatorio-lojas/:id', component: RelatorioLojasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
