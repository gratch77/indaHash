import SortableCardList from '../components/SortableCardList';
import useCardsStore from '../store/cardsStore';

function YourDeckPage() {
  const setOnlyMine = useCardsStore((state) => state.setOnlyMine);

  setOnlyMine(true);

  return (
    <SortableCardList />
  );
}

export default YourDeckPage;
