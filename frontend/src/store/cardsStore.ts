import { create } from 'zustand';
import { CardType } from '../api/types';
import { apiFetchCards, apiUpdateCard } from '../api/cardsApi';

interface SortParams {
  field: string;
  order: string;
}

interface CardsState {
  cards: CardType[];
  totalCards: number;
  limit: number;
  page: number;
  setPage: (page: number) => void;
  sort: SortParams,
  setSort: (sort: SortParams) => void;
  onlyMine: boolean;
  setOnlyMine: (onlyMine: boolean) => void;
  loading: boolean;
  error: string | null;
  fetchCards: () => Promise<void>;
  addCard: (newCard: CardType) => void;
  updateCard: (id: number, payload: Partial<CardType>) => void;
  deleteCard: (id: number) => void;
  updateForSale: (id: number, forSale: boolean) => void;
  updateForTrade: (id: number, forTrade: boolean) => void;
}

const useCardsStore = create<CardsState>((set, get) => ({
  cards: [],
  totalCards: 0,
  limit: 4,
  page: 1,
  sort: { field: 'receivedAt', order: 'desc' },
  onlyMine: false,
  loading: false,
  error: null,

  fetchCards: async () => {
    set({ loading: true, error: null });
    try {
      const {
        page, limit, sort, onlyMine,
      } = get();
      const response = await apiFetchCards(
        {
          page, limit, sortField: sort.field, sortOrder: sort.order, onlyMine,
        },
      );
      set({ cards: response.data, totalCards: response.total, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: 'Failed to fetch cards', loading: false });
    }
  },

  setSort: (sort) => {
    set({ sort });
  },

  setPage: (page) => {
    set({ page });
    const { fetchCards } = get();
    fetchCards();
  },

  setOnlyMine: (onlyMine) => {
    set({ onlyMine });
  },

  addCard: (newCard) => {
    set((state) => ({ cards: [newCard, ...state.cards] }));
  },

  updateCard: (id, payload) => {
    set((state) => ({
      cards: state.cards.map((card) => (card.id === id ? { ...card, ...payload } : card)),
    }));
  },

  deleteCard: (id) => {
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    }));
  },

  updateForSale: async (id, forSale) => {
    try {
      await apiUpdateCard(id, { forSale });
      set((state) => ({
        cards: state.cards.map((card) => (card.id === id ? { ...card, forSale } : card)),
      }));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: 'Failed to update card', loading: false });
    }
  },

  updateForTrade: async (id, forTrade) => {
    try {
      await apiUpdateCard(id, { forTrade });
      set((state) => ({
        cards: state.cards.map((card) => (card.id === id ? { ...card, forTrade } : card)),
      }));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: 'Failed to update card', loading: false });
    }
  },
}));

export default useCardsStore;
