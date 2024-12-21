import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Cards</Link></li>
        <li><Link to="/packs">Packs</Link></li>
        <li><Link to="/your-deck">Your Deck</Link></li>
        <li><Link to="/add-card">Add Card</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
