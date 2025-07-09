import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCurso } from './tabla-curso';

describe('TablaCurso', () => {
  let component: TablaCurso;
  let fixture: ComponentFixture<TablaCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaCurso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCurso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
