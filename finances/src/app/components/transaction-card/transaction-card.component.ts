import { Component, Input } from '@angular/core';
import { ITransaction } from '../../../interfaces/transaction.interface';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss',
})
export class TransactionCardComponent {
  constructor(private transactioService: TransactionService) {}

  @Input() transaction!: ITransaction;

  handleRemoveTransaction() {
    this.transactioService.removeTransactionFromList(this.transaction.id);
  }
}
