export interface ITransaction {
  id: string;
  value: number;
  type: string;
  description: string;
}

export type TCreateTransaction = Omit<ITransaction, 'id'>;
