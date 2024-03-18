import axiosClient from './axios-client';

export const tnxApi = {
  getDetails: (tnxId: string): Promise<Transaction> => axiosClient.get(`/transactions/${tnxId}`),
};
