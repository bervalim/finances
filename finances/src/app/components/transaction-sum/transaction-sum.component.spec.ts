import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSumComponent } from './transaction-sum.component';

describe('TransactionSumComponent', () => {
  let component: TransactionSumComponent;
  let fixture: ComponentFixture<TransactionSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionSumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
