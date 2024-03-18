import axiosClient from './axios-client';

export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
};
