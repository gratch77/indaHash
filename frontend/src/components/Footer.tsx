import footerCopy from '../assets/images/footer-copy.png';
import footerLogos from '../assets/images/footer-logos.png';

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Copy">
        <img src={footerCopy} alt="Copyright" />
      </div>
      <div className="Footer-Links">
        <div className="Footer-Navigation">
          <a href="https://www.facebook.com">Newsletter</a>
          <a href="https://www.facebook.com">Terms & conditions</a>
          <a href="https://www.facebook.com">FAQ</a>
          <a href="https://www.facebook.com">Help</a>
        </div>
        <div className="Footer-Social">
          <img src={footerLogos} alt="Social media" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
