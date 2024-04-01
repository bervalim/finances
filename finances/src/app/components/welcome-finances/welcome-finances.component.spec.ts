import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFinancesComponent } from './welcome-finances.component';

describe('WelcomeFinancesComponent', () => {
  let component: WelcomeFinancesComponent;
  let fixture: ComponentFixture<WelcomeFinancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeFinancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
