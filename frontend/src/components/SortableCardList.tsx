import React, { useEffect, useRef } from 'react';
import CardList from './CardList';
import useCardsStore from '../store/cardsStore';

import 'react-loading-skeleton/dist/skeleton.css';

function SortableCardList({ onlyMine = false } : {onlyMine: boolean}) {
  const sortRef = useRef<HTMLSelectElement | null>(null);

  const sort = useCardsStore((state) => state.sort);
  const setSort = useCardsStore((state) => state.setSort);
  const fetchCards = useCardsStore((state) => state.fetchCards);
  const totalCards = useCardsStore((state) => state.totalCards);
  const setOnlyMine = useCardsStore((state) => state.setOnlyMine);
  const loading = useCardsStore((state) => state.loading);

  useEffect(() => {
    setOnlyMine(onlyMine);
    fetchCards();
  }, [sort, fetchCards, onlyMine, setOnlyMine]);

  const handleSortChange = () => {
    const sortParams = sortRef.current?.value!.split('-');
    setSort({ field: sortParams[0], order: sortParams[1] });
  };

  const sortSelectValue = () => {
    if (!sort.field || !sort.order) {
      setSort({ field: 'receivedAt', order: 'desc' });
      return 'receivedAt-desc';
    }
    return `${sort.field}-${sort.order}`;
  };

  return (
    <div className="SortableCardList">
      <div className="SortableCardList-Header">
        <div className="SortableCardList-Total">
          <span className="label">CARDS IN TOTAL </span>
          <span className="value">{totalCards}</span>
        </div>

        <div className="SortableCardList-Sorter">
          <label htmlFor="SortableCardList-Sorter">
            Sort by
            <select
              name="SortableCardList-Sorter"
              value={sortSelectValue()}
              ref={sortRef as React.MutableRefObject<HTMLSelectElement>}
              onChange={handleSortChange}
            >
              <option value="receivedAt-desc">Received (Newest)</option>
              <option value="collection-asc">Collection Name</option>
            </select>
          </label>
        </div>
      </div>

      <CardList />
    </div>
  );
}

export default SortableCardList;
