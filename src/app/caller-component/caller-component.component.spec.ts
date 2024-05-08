import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallerComponentComponent } from './caller-component.component';

describe('CallerComponentComponent', () => {
  let component: CallerComponentComponent;
  let fixture: ComponentFixture<CallerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallerComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
