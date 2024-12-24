import Popup from 'reactjs-popup';
import Skeleton from 'react-loading-skeleton';
import CardContextMenu from './CardContextMenu';
import useCardsStore from '../store/cardsStore';
import holoStar from '../assets/images/holo-star.png';
import iconFire from '../assets/icons/pink_fire.png';
import iconShield from '../assets/icons/shield.png';
import buttonCardMenu from '../assets/buttons/card-menu-button.svg';
import 'react-loading-skeleton/dist/skeleton.css';

function Card({ cardId }:{ cardId:number }) {
  const card = useCardsStore((state) => state.cards.find((c) => c.id === cardId));
  const loading = useCardsStore((state) => state.loading);

  if (loading) {
    return (<Skeleton count={1} width={280} height={496} />);
  }

  return (
    <div className="Card">
      <div className="Card-Content">
        <div className="Card-Header">
          <img className="Card-HoloStar" src={holoStar} alt="HoloStar" />
          <div className="Card-PriceVolume">
            {card.price}
            {' '}
            <span className="Card-PriceVolumeSeparator">/</span>
            {' '}
            {card.volume}
          </div>
        </div>
        <img className="Card-Image" src={card.imageUrl} alt={card.name} />
        <div className="Card-Description">
          <div className="Card-Title">{card.name}</div>
          <div className="Card-Collection">{card.collection}</div>
          <div className="Card-SocialResults">
            <div className="Card-Likes">
              <img src={iconFire} alt="Likes" />
              <div>{card.likes}</div>
            </div>
            <div className="Card-Rating">
              <img src={iconShield} alt="Rating" />
              {' '}
              {card.ranking}
            </div>
          </div>
          <div className="Card-Influencer">
            <span> Powered by</span>
            {' '}
            {card.influencerName}
          </div>
        </div>
      </div>
      <div className="Card-Back">
        <Popup
          trigger={<img src={buttonCardMenu} alt="Card menu" className="Card-MenuTrigger" />}
          on="click"
          position="bottom left"
          offsetX={10}
          closeOnDocumentClick
          mouseEnterDelay={0}
          mouseLeaveDelay={300}
          contentStyle={{ padding: '0px', border: 'none' }}
          arrow={false}
        >
          <CardContextMenu cardId={card.id} />
        </Popup>
      </div>
    </div>
  );
}

export default Card;
