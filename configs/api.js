import axios from 'axios';

const host = axios.create({
  baseURL: process.env.baseUrl,
});

const api = {
  methodGet: (page) => host.get(`users?page=${page}`),
  methodPost: (data) => host.post('users', { ...data }),
};

export default api;
