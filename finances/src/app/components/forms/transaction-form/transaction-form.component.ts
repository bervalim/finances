import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TransactionService } from '../../../../services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  constructor(private transactionService: TransactionService) {}

  value = new FormControl('');
  type = new FormControl('Entrada');
  description = new FormControl('');

  submitTrasactionForm(event: Event) {
    event.preventDefault();

    const data = {
      value: Number(this.value.value as string),
      type: this.type.value as 'Entrada' | 'Saída',
      description: this.description.value as string,
    };

    this.transactionService.addTransactionToList(data);

    this.value.setValue('');
    this.type.setValue('Entrada');
    this.description.setValue('');
  }
}
