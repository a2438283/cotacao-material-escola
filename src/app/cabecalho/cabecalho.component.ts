import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
  ngOnDestroy() {}
}
