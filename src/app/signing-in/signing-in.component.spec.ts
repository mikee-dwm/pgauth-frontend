import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningInComponent } from './signing-in.component';

describe('SigningInComponent', () => {
  let component: SigningInComponent;
  let fixture: ComponentFixture<SigningInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigningInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigningInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
