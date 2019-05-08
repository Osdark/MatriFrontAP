import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IglesiaShowComponent } from './iglesia-show.component';

describe('IglesiaShowComponent', () => {
  let component: IglesiaShowComponent;
  let fixture: ComponentFixture<IglesiaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IglesiaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
