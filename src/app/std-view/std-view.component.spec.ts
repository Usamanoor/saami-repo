import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdViewComponent } from './std-view.component';

describe('StdViewComponent', () => {
  let component: StdViewComponent;
  let fixture: ComponentFixture<StdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
