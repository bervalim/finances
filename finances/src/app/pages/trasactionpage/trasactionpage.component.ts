import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionFormComponent } from '../../components/forms/transaction-form/transaction-form.component';
import { TransactionSumComponent } from '../../components/transaction-sum/transaction-sum.component';

@Component({
  selector: 'app-trasactionpage',
  standalone: true,
  imports: [CommonModule, TransactionFormComponent, TransactionSumComponent],
  templateUrl: './trasactionpage.component.html',
  styleUrl: './trasactionpage.component.scss',
})
export class TrasactionpageComponent {}
