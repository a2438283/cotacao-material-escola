import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menor-preco',
  templateUrl: './menor-preco.component.html',
  styleUrls: ['./menor-preco.component.css'],
})
export class MenorPrecoComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  onClickItem(id: number) {
    this.router.navigate(['/relatorio-lojas/', id]);
  }
}
