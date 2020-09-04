import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainInputComponent } from './input.component';

describe('AppMainInputComponent', () => {
  let component: AppMainInputComponent;
  let fixture: ComponentFixture<AppMainInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
