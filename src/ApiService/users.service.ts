import { Iusers } from '@/interfaces/users.interFace';
import axios from 'axios';

const BaseUrl = 'https://6340472ae44b83bc73cd517a.mockapi.io';
axios.defaults.baseURL = BaseUrl;

export const UsersService = {
  async getAllUsers() {
    const { data } = await axios.get<Iusers[]>('/nextJS-users');
    return data;
  },
  async getById(id: number) {
    const { data } = await axios.get<Iusers[]>('/nextJS-users', {
      params: {
        id,
      },
    });
    return data[0];
  },
};
