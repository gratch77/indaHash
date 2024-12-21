import { useState } from 'react';
import {
  addCard, deleteCard, fetchCards, updateCard,
} from '../api/cardsApi';
import { Card } from '../api/types';

const useCardsController = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllCards = async (
    params: { skip?: number; limit?: number; sortField?: string; sortOrder?: string } = {},
  ) => {
    setLoading(true);
    try {
      const data = await fetchCards(params);
      setCards(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to fetch cards');
    } finally {
      setLoading(false);
    }
  };

  const updateCardState = async (id: number, payload: Partial<Card>) => {
    try {
      const updatedCard = await updateCard(id, payload);
      setCards((prevCards) => prevCards.map(
        (card) => (card.id === id ? { ...card, ...updatedCard } : card),
      ));
    } catch {
      setError('Failed to update card');
    }
  };

  const deleteCardState = async (id: number) => {
    try {
      await deleteCard(id);
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    } catch {
      setError('Failed to delete card');
    }
  };

  const addCardState = async (newCard: Card) => {
    try {
      const addedCard = await addCard(newCard);
      setCards((prevCards) => [addedCard, ...prevCards]);
    } catch {
      setError('Failed to add card');
    }
  };

  return {
    cards,
    loading,
    error,
    fetchAllCards,
    updateCardState,
    deleteCardState,
    addCardState,
  };
};

export default useCardsController;
