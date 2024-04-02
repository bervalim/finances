import { Component, Input } from '@angular/core';
import { ITransaction } from '../../../interfaces/transaction.interface';
import { TransactionService } from '../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss',
})
export class TransactionCardComponent {
  constructor(
    private transactionService: TransactionService,
    private toastr: ToastrService
  ) {}

  @Input() transaction!: ITransaction;

  convertTransactionToBRL() {
    if (!isNaN(this.transaction.value)) {
      return this.transaction.value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    } else {
      return '0,00';
    }
  }

  handleRemoveTransaction() {
    this.transactionService.removeTransactionFromList(this.transaction.id);
    this.toastr.success(
      'Transação financeira excluída com sucesso!',
      'Sucesso'
    );
  }
}
