import Card from './Card';
import { Card as CardType } from '../api/types';

interface Props {
  cards: CardType[];
  onUpdate: (id: number, payload: Partial<CardType>) => void;
  onDelete: (id: number) => void;
}

function CardList({ cards, onUpdate, onDelete }: Props) {
  if (!cards.length) {
    return (<p>No cards found</p>);
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CardList;
