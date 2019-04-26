import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorShowComponent } from './pastor-show.component';

describe('PastorShowComponent', () => {
  let component: PastorShowComponent;
  let fixture: ComponentFixture<PastorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
