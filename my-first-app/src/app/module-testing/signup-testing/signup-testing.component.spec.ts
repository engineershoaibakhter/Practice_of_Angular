import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTestingComponent } from './signup-testing.component';

describe('SignupTestingComponent', () => {
  let component: SignupTestingComponent;
  let fixture: ComponentFixture<SignupTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupTestingComponent]
    });
    fixture = TestBed.createComponent(SignupTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
