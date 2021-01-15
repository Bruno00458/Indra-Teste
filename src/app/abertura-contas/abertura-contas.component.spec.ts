import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaContasComponent } from './abertura-contas.component';

describe('AberturaContasComponent', () => {
  let component: AberturaContasComponent;
  let fixture: ComponentFixture<AberturaContasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AberturaContasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AberturaContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
