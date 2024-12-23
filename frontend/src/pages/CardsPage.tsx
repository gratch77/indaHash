import SortableCardList from '../components/SortableCardList';
import useCardsStore from '../store/cardsStore';

function CardsPage() {
  const setOnlyMine = useCardsStore((state) => state.setOnlyMine);

  setOnlyMine(false);

  return (
    <SortableCardList />
  );
}

export default CardsPage;
