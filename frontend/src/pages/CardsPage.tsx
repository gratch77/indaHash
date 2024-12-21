import React, { useEffect, useState } from 'react';
import { useCardsController } from '../controllers/useCardsController';
import CardList from '../components/CardList';

type SortFieldAndOrder = 'receivedAt-desc' | 'collection-asc';

function CardsPage() {
  const {
    cards, loading, error, fetchAllCards, updateCardState, deleteCardState,
  } = useCardsController();
  const [sortFieldAndOrder, setSortFieldAndOrder] = useState<SortFieldAndOrder>('receivedAt-desc');

  useEffect(() => {
    const sortParams = sortFieldAndOrder.split('-');
    fetchAllCards({ sortField: sortParams[0], sortOrder: sortParams[1] });
  }, [sortFieldAndOrder]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortFieldAndOrder(e.target.value as SortFieldAndOrder);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cards-page">
      <h1>Your Cards</h1>

      <div className="cards-page__controls">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortFieldAndOrder} onChange={handleSortChange}>
          <option value="receivedAt-desc">Received (Newest)</option>
          <option value="collection-asc">Collection Name</option>
        </select>
      </div>

      {cards.length > 0 ? (
        <CardList cards={cards} onUpdate={updateCardState} onDelete={deleteCardState} />
      ) : (
        <p>You don&apos;t have any cards yet.</p>
      )}
    </div>
  );
}

export default CardsPage;
