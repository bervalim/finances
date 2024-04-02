import { Injectable, computed, signal } from '@angular/core';
import {
  ITransaction,
  TCreateTransaction,
} from '../interfaces/transaction.interface';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  readonly transactionList = signal<ITransaction[]>([]);

  readonly total = computed(() =>
    this.transactionList().reduce((prevValue, transaction) => {
      if (transaction.type === 'Entrada') {
        return prevValue + Number(transaction.value);
      } else {
        return prevValue - Number(transaction.value);
      }
    }, 0)
  );

  getTotalSum() {
    return this.total();
  }

  getTransactionList() {
    return this.transactionList();
  }

  addTransactionToList(formData: TCreateTransaction) {
    const data = { ...formData, id: crypto.randomUUID() };
    this.transactionList.update((transactionList) => [
      ...transactionList,
      data,
    ]);
  }

  removeTransactionFromList(id: string) {
    this.transactionList.update((transactionList) =>
      transactionList.filter((transaction) => transaction.id !== id)
    );
  }
}
