import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrayenteCreateComponent } from './contrayente-create.component';

describe('ContrayenteCreateComponent', () => {
  let component: ContrayenteCreateComponent;
  let fixture: ComponentFixture<ContrayenteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrayenteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrayenteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
