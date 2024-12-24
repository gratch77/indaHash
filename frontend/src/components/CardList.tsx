import React, { useEffect } from 'react';
import Card from './Card';
import useCardsStore from '../store/cardsStore';

function CardList() {
  const cards = useCardsStore((state) => state.cards);
  const loading = useCardsStore((state) => state.loading);
  const error = useCardsStore((state) => state.error);

  const page = useCardsStore((state) => state.page);
  const setPage = useCardsStore((state) => state.setPage);
  const pageSize = useCardsStore((state) => state.limit);
  const totalCards = useCardsStore((state) => state.totalCards);
  const fetchCards = useCardsStore((state) => state.fetchCards);
  const resetCards = useCardsStore((state) => state.resetCards);

  useEffect(() => () => {
    resetCards();
  }, [resetCards]);

  if (error) {
    return (<p>{error}</p>);
  }

  if (!loading && !cards.length) {
    return (
      <div className="CardList">
        <p className="CardList-Empty">No cards found</p>
      </div>
    );
  }

  const totalPages = Math.ceil(totalCards / pageSize);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      fetchCards();
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      fetchCards();
    }
  };

  return (
    <div className="CardList">
      <div className="CardList-List">
        {cards.length === 0
          ? Array.from({ length: 4 }).map(() => <Card cardId={1} />)
          : cards.map((card) => (
            <Card key={card.id} cardId={card.id} />
          ))}
      </div>
      <div className="CardList-Pagination">
        <button
          className={`CardList-PaginationPrev ${page === 1 ? 'CardList-PaginationPrev_disabled' : ''}`}
          type="button"
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button
          className={`CardList-PaginationNext ${page === totalPages ? 'CardList-PaginationNext_disabled' : ''}`}
          type="button"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardList;
