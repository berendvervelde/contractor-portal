import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkorderFilterComponent } from './active-workorder-filter.component';

describe('ActiveWorkorderFilterComponent', () => {
  let component: ActiveWorkorderFilterComponent;
  let fixture: ComponentFixture<ActiveWorkorderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveWorkorderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWorkorderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
