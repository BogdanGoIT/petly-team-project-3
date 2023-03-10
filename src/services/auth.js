import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://petly.onrender.com/api',
  // baseURL: 'http://localhost:8080/api'
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

export const register = async user => {
  const { data } = await instance.post('/auth/register', user);
  setToken(data.token);
  return data.user;
};

export const login = async user => {
  const { data } = await instance.post('/auth/login', user);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  await instance.get('/auth/logout');
  setToken(null);
  return true;
};

export const refresh = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    setToken(null);
  }
};

export const update = async updateData => {
  const { data } = await instance.patch('/auth/update', updateData);
  return data;
};

export const profile = async _id => {
  const { data } = await instance.get(`/auth/profile/${_id}`);
  return data;
};

export const getUsers = async () => {
  const {data} = await instance.get('/auth/users')
  return data;
}

export const addPet = async pet => {
  const { data } = await instance.post('/pets/add', pet);
  return data.pet;
};

export const removePet = async _id => {
  const { data } = await instance.delete(`/pets/${_id}`);
  return data;
};

export const updatePet = async (_id, updateData) => {
  const {data} = await instance.patch(`/pets/update/${_id}`, updateData);
  return data;
}