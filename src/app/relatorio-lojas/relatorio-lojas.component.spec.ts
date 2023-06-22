import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioLojasComponent } from './relatorio-lojas.component';

describe('RelatorioLojasComponent', () => {
  let component: RelatorioLojasComponent;
  let fixture: ComponentFixture<RelatorioLojasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioLojasComponent]
    });
    fixture = TestBed.createComponent(RelatorioLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
