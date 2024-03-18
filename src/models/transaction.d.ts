type TransactionStatue = 'processing' | 'completed' | 'failed' | 'cancelled' | 'pending';

type Transaction = {
  id: string;
  date: string;
  amount: string;
  description: string;
  sender: string;
  receiver: string;
  status: TransactionStatue;
  createdAt: number;
  updatedAt: number;
};
