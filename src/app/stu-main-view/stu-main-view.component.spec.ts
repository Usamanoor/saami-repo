import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuMainViewComponent } from './stu-main-view.component';

describe('StuMainViewComponent', () => {
  let component: StuMainViewComponent;
  let fixture: ComponentFixture<StuMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
