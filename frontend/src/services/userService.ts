import api from './api';

export const signIn = (email: string, password: string) => {
  return api.post(
    '/user/signin',
    JSON.stringify({ email: email, password: password })
  );
};

export const signUp = (body: {}) => {
  return api.post('/user/signup', body);
};

export const getAllUsers = () => {
  return api.get('/user/all');
};

export const getUserProfile = (id: string) => {
  return api.get('/user/profile/' + id);
};

export const getUser = async (email: string) => {
  return api.get('/user/' + email);
};

export const updateProfilePicture = async (body: any) => {
  return api.post('/user/updatePicture', body);
};

export const updateAboutInfo = async (body: any) => {
  return api.post('/user/updateAboutInfo', body);
};

export const updateEssays = async (body: any) => {
  return api.post('/user/updateEssays', body);
};
