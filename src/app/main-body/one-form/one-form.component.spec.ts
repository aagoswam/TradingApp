import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFormComponent } from './one-form.component';

describe('OneFormComponent', () => {
  let component: OneFormComponent;
  let fixture: ComponentFixture<OneFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneFormComponent]
    });
    fixture = TestBed.createComponent(OneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
