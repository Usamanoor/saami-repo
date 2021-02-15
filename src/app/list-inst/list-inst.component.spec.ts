import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstComponent } from './list-inst.component';

describe('ListInstComponent', () => {
  let component: ListInstComponent;
  let fixture: ComponentFixture<ListInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
