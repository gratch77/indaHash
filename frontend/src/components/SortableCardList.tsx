import React, { useEffect, useRef } from 'react';
import CardList from './CardList';
import useCardsStore from '../store/cardsStore';

function CardsPage() {
  const sortRef = useRef<HTMLSelectElement | null>(null);

  const sort = useCardsStore((state) => state.sort);
  const setSort = useCardsStore((state) => state.setSort);
  const fetchCards = useCardsStore((state) => state.fetchCards);
  const totalCards = useCardsStore((state) => state.totalCards);
  const setPage = useCardsStore((state) => state.setPage);

  useEffect(() => {
    fetchCards();
  }, [fetchCards, sort]);

  const handleSortChange = () => {
    const sortParams = sortRef.current?.value!.split('-');
    setSort({ field: sortParams[0], order: sortParams[1] });
    setPage(1);
  };

  const sortSelectValue = () => {
    if (!sort.field || !sort.order) {
      setSort({ field: 'receivedAt', order: 'desc' });
      return 'receivedAt-desc';
    }
    return `${sort.field}-${sort.order}`;
  };

  return (
    <div className="CardsPage">
      <h1>Your Cards</h1>

      <div className="SortableCardList-Total">
        <span>
          Total Cards:
          {totalCards}
        </span>
      </div>

      <div className="CardsPage-Controls">
        <label htmlFor="CardPage-Sorter">
          Sort by:
          <select
            name="CardPage-Sorter"
            className="CardsPage-Sorter"
            value={sortSelectValue()}
            ref={sortRef as React.MutableRefObject<HTMLSelectElement>}
            onChange={handleSortChange}
          >
            <option value="receivedAt-desc">Received (Newest)</option>
            <option value="collection-asc">Collection Name</option>
          </select>
        </label>
      </div>

      <CardList />
    </div>
  );
}

export default CardsPage;
