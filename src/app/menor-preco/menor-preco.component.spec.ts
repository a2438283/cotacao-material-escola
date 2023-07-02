import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenorPrecoComponent } from './menor-preco.component';

describe('MenorPrecoComponent', () => {
  let component: MenorPrecoComponent;
  let fixture: ComponentFixture<MenorPrecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenorPrecoComponent]
    });
    fixture = TestBed.createComponent(MenorPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
