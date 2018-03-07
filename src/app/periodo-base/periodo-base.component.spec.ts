import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoBaseComponent } from './periodo-base.component';

describe('PeriodoBaseComponent', () => {
  let component: PeriodoBaseComponent;
  let fixture: ComponentFixture<PeriodoBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
