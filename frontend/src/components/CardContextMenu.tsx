import Popup from 'reactjs-popup';
import CustomSwitch from './CustomSwitch';
import useCardsStore from '../store/cardsStore';

function CardContextMenu({ cardId }:{ cardId:number }) {
  const card = useCardsStore((state) => state.cards.find((c) => c.id === cardId));
  const updateForTrade = useCardsStore((state) => state.updateForTrade);
  const updateForSale = useCardsStore((state) => state.updateForSale);

  return (
    <div className="CardContextMenu">
      <div className="CardContextMenu-MenuItem">Send</div>
      <div className="CardContextMenu-MenuItem">
        On swap
        <CustomSwitch id={card.id} updateHandler={updateForTrade} initialValue={card.forTrade} />
      </div>
      <div className="CardContextMenu-MenuItem">
        On sale
        <CustomSwitch id={card.id} updateHandler={updateForSale} initialValue={card.forSale} />
      </div>
      <div className="CardContextMenu-MenuItem">
        <Popup
          trigger={<button type="button" className="CardContextMenu-PopupTrigger">Share</button>}
          on="hover"
          position="right center"
          closeOnDocumentClick
          mouseEnterDelay={0}
          mouseLeaveDelay={300}
          contentStyle={{ padding: '0px', border: 'none' }}
          arrow={false}
        >
          <div className="CardContextMenu-Submenu">
            <div className="CardContextMenu-SubmenuMenuItem">Copy link</div>
            <div className="CardContextMenu-SubmenuMenuItem">Share on Facebook</div>
            <div className="CardContextMenu-SubmenuMenuItem">Share on Instagram</div>
            <div className="CardContextMenu-SubmenuMenuItem">Share on TikTok</div>
            <div className="CardContextMenu-SubmenuMenuItem">Share on Twitter</div>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default CardContextMenu;
