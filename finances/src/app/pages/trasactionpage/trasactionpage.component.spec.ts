import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasactionpageComponent } from './trasactionpage.component';

describe('TrasactionpageComponent', () => {
  let component: TrasactionpageComponent;
  let fixture: ComponentFixture<TrasactionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrasactionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrasactionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
