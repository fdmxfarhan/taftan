import api from '../api';

export const getUserProfile = async () => {
  const response = await api.taftanApi.get('/user/profile');
  return response.data;
};

export const updateUserProfile = async (data) => {
  const response = await api.taftanApi.put('/user/profile', data);
  return response.data;
};
