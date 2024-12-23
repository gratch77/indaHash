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

  if (loading) {
    return (<p>Loading...</p>);
  }

  if (error) {
    return (<p>{error}</p>);
  }

  if (!cards.length) {
    return (<p>No cards found</p>);
  }

  const totalPages = Math.ceil(totalCards / pageSize);

  const handleNextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return (
    <div className="CardList">
      <div className="CardList-List">
        {cards.map((card) => (
          <Card key={card.id} cardId={card.id} />
        ))}
      </div>
      <div className="CardList-Pagination">
        <button
          className="CardList-PaginationPrev"
          type="button"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page
          {' '}
          {page}
          {' '}
          of
          {totalPages}
        </span>
        <button
          className="CardList-PaginationNext"
          type="button"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CardList;
