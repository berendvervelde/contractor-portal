import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkorderTableComponent } from './active-workorder-table.component';

describe('ActiveWorkorderTableComponent', () => {
  let component: ActiveWorkorderTableComponent;
  let fixture: ComponentFixture<ActiveWorkorderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveWorkorderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWorkorderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
