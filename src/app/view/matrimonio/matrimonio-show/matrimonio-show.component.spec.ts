import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonioShowComponent } from './matrimonio-show.component';

describe('MatrimonioShowComponent', () => {
  let component: MatrimonioShowComponent;
  let fixture: ComponentFixture<MatrimonioShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonioShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonioShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
