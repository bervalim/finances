import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionFormComponent } from '../../components/forms/transaction-form/transaction-form.component';
import { TransactionSumComponent } from '../../components/transaction-sum/transaction-sum.component';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-trasactionpage',
  standalone: true,
  imports: [CommonModule, TransactionFormComponent, TransactionSumComponent],
  providers: [TransactionService],
  templateUrl: './trasactionpage.component.html',
  styleUrl: './trasactionpage.component.scss',
})
export class TrasactionpageComponent {
  constructor(private transactionService: TransactionService) {}

  get transactionList() {
    return this.transactionService.getTransactionList();
  }
}
