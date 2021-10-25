import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSubjectComponent } from './row-subject.component';

describe('RowSubjectComponent', () => {
  let component: RowSubjectComponent;
  let fixture: ComponentFixture<RowSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
