import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss',
})
export class TransactionFormComponent {
  value = new FormControl('');
  type = new FormControl('entrada');
  description = new FormControl('');

  submitTrasactionForm(event: Event) {
    event.preventDefault();
    const data = {
      value: this.value.value,
      type: this.type.value,
      description: this.description.value,
    };
    console.log(data);

    this.value.setValue('');
    this.type.setValue('entrada');
    this.description.setValue('');
  }
}
