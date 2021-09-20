import axios from 'axios';

const host = axios.create({
  baseURL: process.env.baseUrl,
});

const api = {
  methodGet: (page) => host.get(`users?page=${page}`),
  methodPost: (data) => host.post('users', { ...data }),
  methodSingleGet: (id) => host.get(`users/${id}`),
};

export default api;
