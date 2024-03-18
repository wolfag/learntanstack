import { userApi } from '@/api';
import { QueryKeys } from '@/constants';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type Options = Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>;

export const useProfile = (options?: Options) => {
  return useQuery({ ...options, queryKey: [QueryKeys.USER_PROFILE], queryFn: () => userApi.getProfile() });
};
