import React from 'react';
import { Card as CardType } from '../api/types';

interface Props {
    card: CardType;
    onUpdate: (id: number, payload: Partial<CardType>) => void;
    onDelete: (id: number) => void;
}

const Card: React.FC<Props> = ({ card, onUpdate, onDelete }) => {
    return (
        <div className="card">
            <img src={card.imageUrl} alt={card.name} />
            <h3>{card.name}</h3>
            <p>Collection: {card.collection}</p>
            <button onClick={() => onUpdate(card.id, { forSale: !card.forSale })}>
                {card.forSale ? 'Remove from Sale' : 'Mark for Sale'}
            </button>
            <button onClick={() => onDelete(card.id)}>Delete</button>
        </div>
    );
};

export default Card;
