import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeitemComponent } from './employeeitem.component';

describe('EmployeeitemComponent', () => {
  let component: EmployeeitemComponent;
  let fixture: ComponentFixture<EmployeeitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
