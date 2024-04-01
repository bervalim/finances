export interface ITransaction {
  id: string;
  value: number;
  type: 'Entrada' | 'Saída';
  description: string;
}

export type TCreateTransaction = Omit<ITransaction, 'id'>;
