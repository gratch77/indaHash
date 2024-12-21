import { useEffect } from 'react';
import useCardsController from '../controllers/useCardsController';
import CardList from '../components/CardList';

function YourDeckPage() {
  const {
    cards, loading, error, fetchAllCards, updateCardState, deleteCardState,
  } = useCardsController();

  useEffect(() => {
    fetchAllCards({ sortField: 'collection' });
  }, [fetchAllCards]);

  if (loading) return <p>Loading your deck...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="deck-page">
      <h1>Your Deck</h1>
      {cards.length > 0 ? (
        <CardList cards={cards} onUpdate={updateCardState} onDelete={deleteCardState} />
      ) : (
        <p>You don&apos;t have any cards in your deck yet.</p>
      )}
    </div>
  );
}

export default YourDeckPage;
