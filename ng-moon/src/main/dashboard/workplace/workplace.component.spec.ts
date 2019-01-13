import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceComponent } from './workplace.component';

describe('WorkplaceComponent', () => {
  let component: WorkplaceComponent;
  let fixture: ComponentFixture<WorkplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
