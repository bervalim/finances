import { Component } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-sum',
  standalone: true,
  imports: [],
  templateUrl: './transaction-sum.component.html',
  styleUrl: './transaction-sum.component.scss',
})
export class TransactionSumComponent {
  constructor(private transactionService: TransactionService) {}

  get total() {
    return this.transactionService.getTotalSum();
  }
}
