import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainDrawsComponent } from './app-main-draws.component';

describe('AppMainDrawsComponent', () => {
  let component: AppMainDrawsComponent;
  let fixture: ComponentFixture<AppMainDrawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainDrawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainDrawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
