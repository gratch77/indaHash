import { GenericAbortSignal } from 'axios';
import { CardType } from './types';
import apiClient from './apiClient';

export const apiFetchCards = async (
  params: {
    page?: number;
    limit?: number;
    sortField?: string;
    sortOrder?: string;
    onlyMine?: boolean
  },
  signal: GenericAbortSignal,
) => {
  const response = await apiClient.get('/cards', { params, signal });
  return response.data; // { data: Card[], totalCount: number }
};

export const apiUpdateCard = async (id: number, payload: Partial<CardType>) => {
  const response = await apiClient.put(`/cards/${id}`, payload);
  return response.data;
};

export const apiDeleteCard = async (id: number) => {
  await apiClient.delete(`/cards/${id}`);
};

export const apiAddCard = async (payload: CardType) => {
  const response = await apiClient.post('/cards', payload);
  return response.data;
};
