import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFieldComponent } from './football-field.component';

describe('FootballFieldComponent', () => {
  let component: FootballFieldComponent;
  let fixture: ComponentFixture<FootballFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
