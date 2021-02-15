import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegFromComponent } from './student-reg-from.component';

describe('StudentRegFromComponent', () => {
  let component: StudentRegFromComponent;
  let fixture: ComponentFixture<StudentRegFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
