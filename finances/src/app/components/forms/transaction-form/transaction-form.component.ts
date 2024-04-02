import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TransactionService } from '../../../../services/transaction.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    MatIconModule,
    MatCommonModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  constructor(
    private transactionService: TransactionService,
    private toastr: ToastrService
  ) {}

  value = new FormControl('');
  type = new FormControl('Entrada');
  description = new FormControl('');

  openToast() {
    this.toastr.warning(
      'É preciso preencher os dados para realizar uma transação!',
      'Atenção'
    );
  }

  submitTrasactionForm(event: Event) {
    event.preventDefault();

    if (this.value.value !== '' && this.description.value !== '') {
      const data = {
        value: Number(this.value.value as string),
        type: this.type.value as 'Entrada' | 'Saída',
        description: this.description.value as string,
      };

      this.transactionService.addTransactionToList(data);
      this.value.setValue('');
      this.type.setValue('Entrada');
      this.description.setValue('');
    } else {
      this.openToast();
    }
  }
}
