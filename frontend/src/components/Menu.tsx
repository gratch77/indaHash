import { Link } from 'react-router-dom';
import { useState } from 'react';
import iconCards from '../assets/icons/menu-icon-cards.svg';
import iconPacks from '../assets/icons/menu-icon-packs.svg';
import iconDeck from '../assets/icons/menu-icon-deck.svg';
import iconNew from '../assets/icons/menu-icon-new.svg';

const menuLinks = [
  { title: 'Cards', path: '/', icon: iconCards },
  { title: 'Packs', path: '/packs', icon: iconPacks },
  { title: 'Your Deck', path: '/your-deck', icon: iconDeck },
  { title: 'Add Card', path: '/add-card', icon: iconNew },
];

function Menu() {
  const [activeTab, setActiveTab] = useState('/');

  return (
    <nav className="Menu">
      {menuLinks.map((link) => (
        <div key={link.title} className={`Menu-Tab ${activeTab === link.path ? 'Menu-Tab_active' : ''}`}>
          <img className="Menu-Icon" src={link.icon} alt={`${link.title} icon`} />
          <Link
            className="Menu-Link"
            to={link.path}
            onClick={() => setActiveTab(link.path)}
          >
            {link.title.toUpperCase()}
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Menu;
