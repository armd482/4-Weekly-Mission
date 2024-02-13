import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer(){
  return(
    <div className="footerBox">
      <div className="copyright">©codeit - 2023</div>
      <div className="footerLink">
        <Link to="/Privacy" className="privacy">Privacy Policy</Link>
        <Link to="Faq" className="faq">FAQ</Link>
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/?locale=ko_KR"><img src='/img/icons_facebook-fill.svg' alt="페이스북"/></a>
        <a href="https://twitter.com/?lang=ko"><img src='/img/icons_twitter-fill.svg' alt="트위터"/></a>
        <a href="https://www.youtube.com/"><img src='/img/icons_youtube-fill.svg' alt="유튜브"/></a>
        <a href="https://www.instagram.com/"><img src='/img/icons_instagram-filled.svg' alt="인스타그램"/></a>
      </div>
    </div>
  );
}

export default Footer;