import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegFormComponent } from './course-reg-form.component';

describe('CourseRegFormComponent', () => {
  let component: CourseRegFormComponent;
  let fixture: ComponentFixture<CourseRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
