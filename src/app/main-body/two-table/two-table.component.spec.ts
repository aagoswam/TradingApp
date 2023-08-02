import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTableComponent } from './two-table.component';

describe('TwoTableComponent', () => {
  let component: TwoTableComponent;
  let fixture: ComponentFixture<TwoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoTableComponent]
    });
    fixture = TestBed.createComponent(TwoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
