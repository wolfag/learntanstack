import { tnxApi } from '@/api';
import { QueryKeys } from '@/constants';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type Options = Omit<UseQueryOptions<Transaction>, 'queryKey' | 'queryFn'>;

export const useTnxDetails = (tnxId: string, options?: Options) => {
  const enabled = !!tnxId;

  return useQuery({
    ...options,
    queryKey: [QueryKeys.TRANSACTION_DETAILS, tnxId],
    queryFn: () => tnxApi.getDetails(tnxId),
    enabled,
    refetchInterval: (query) => {
      const status = query.state.status;
      if (['completed', 'failed', 'cancelled'].includes(status)) {
        return false;
      }
      return 3000;
    },
  });
};
