import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IglesiaCreateModalComponent } from './iglesia-create-modal.component';

describe('IglesiaCreateModalComponent', () => {
  let component: IglesiaCreateModalComponent;
  let fixture: ComponentFixture<IglesiaCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiaCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IglesiaCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
