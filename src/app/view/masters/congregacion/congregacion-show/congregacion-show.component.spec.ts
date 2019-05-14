import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongregacionShowComponent } from './congregacion-show.component';

describe('CongregacionShowComponent', () => {
  let component: CongregacionShowComponent;
  let fixture: ComponentFixture<CongregacionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongregacionShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongregacionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
