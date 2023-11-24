import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServiceComponent } from './student-service.component';

describe('StudentServiceComponent', () => {
  let component: StudentServiceComponent;
  let fixture: ComponentFixture<StudentServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentServiceComponent]
    });
    fixture = TestBed.createComponent(StudentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
