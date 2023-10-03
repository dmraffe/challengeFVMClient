import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormweatherComponent } from './formweather.component';

describe('FormweatherComponent', () => {
  let component: FormweatherComponent;
  let fixture: ComponentFixture<FormweatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormweatherComponent]
    });
    fixture = TestBed.createComponent(FormweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
