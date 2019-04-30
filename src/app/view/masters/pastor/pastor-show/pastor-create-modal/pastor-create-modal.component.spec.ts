import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorCreateModalComponent } from './pastor-create-modal.component';

describe('PastorCreateModalComponent', () => {
  let component: PastorCreateModalComponent;
  let fixture: ComponentFixture<PastorCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
