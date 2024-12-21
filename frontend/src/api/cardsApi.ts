import axios, { CreateAxiosDefaults } from 'axios';
import { Card } from './types';

const config = {
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiClient = axios.create(config as CreateAxiosDefaults);

export const fetchCards = async (
  params: { skip?: number; limit?: number; sortField?: string; sortOrder?: string },
) => {
  const response = await apiClient.get('/cards', { params });
  return response.data; // { data: Card[], totalCount: number }
};

export const updateCard = async (id: number, payload: Partial<Card>) => {
  const response = await apiClient.put(`/cards/${id}`, payload);
  return response.data;
};

export const deleteCard = async (id: number) => {
  await apiClient.delete(`/cards/${id}`);
};

export const addCard = async (payload: Card) => {
  const response = await apiClient.post('/cards', payload);
  return response.data;
};
