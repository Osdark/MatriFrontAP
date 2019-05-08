import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonioCreateComponent } from './matrimonio-create.component';

describe('MatrimonioCreateComponent', () => {
  let component: MatrimonioCreateComponent;
  let fixture: ComponentFixture<MatrimonioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
