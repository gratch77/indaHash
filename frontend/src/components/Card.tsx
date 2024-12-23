import Popup from 'reactjs-popup';
import CardContextMenu from './CardContextMenu';
import useCardsStore from '../store/cardsStore';

function Card({ cardId }:{ cardId:number }) {
  const card = useCardsStore((state) => state.cards.find((c) => c.id === cardId));

  return (
    <div className="Card">
      <div className="Card-Content">
        <div className="Card-Header" />
        <img className="Card-Image" src={card.imageUrl} alt={card.name} />
        <h3>{card.name}</h3>
        <div className="Card-Collection">{card.collection}</div>
        <div className="Card-Likes">{card.likes}</div>
        <div className="Card-Ranking">{card.ranking}</div>
        <div className="Card-Influencer">{card.influencerName}</div>
      </div>
      <Popup
        trigger={<button type="button" className="Card-MenuTrigger">MENU</button>}
        on="click"
        position="right center"
        closeOnDocumentClick
        mouseEnterDelay={0}
        mouseLeaveDelay={300}
        contentStyle={{ padding: '0px', border: 'none' }}
        arrow={false}
      >
        <CardContextMenu cardId={card.id} />
      </Popup>
    </div>
  );
}

export default Card;
