import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoComponent } from './cotacao.component';

describe('CotacaoComponent', () => {
  let component: CotacaoComponent;
  let fixture: ComponentFixture<CotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotacaoComponent]
    });
    fixture = TestBed.createComponent(CotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
