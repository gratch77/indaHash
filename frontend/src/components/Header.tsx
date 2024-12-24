import logo from '../assets/images/logo.png';

function Header() {
  return (
    <div className="Header">
      <img className="Header-Logo" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
