import facebook from "../images/akar-icons_facebook-fill.png";
import twitter from "../images/akar-icons_twitter-fill.png";
import youtube from "../images/akar-icons_youtube-fill.png";
import instagram from "../images/ant-design_instagram-filled.png";

function Footer() {
  return (
    <footer className="bg-black flex justify-between">
      <div className="codeit">ⓒcodeit - 2023</div>
      <div className="privacy-faq">
        <a className="privacy" href="">
          Privacy Policy
        </a>
        <a className="faq" href="">
          FAQ
        </a>
      </div>
      <div className="social flex">
        <a href="https://www.facebook.com/">
          <img className="icon" src={facebook} />
        </a>
        <a href="https://twitter.com/?lang=en">
          <img className="icon" src={twitter} />
        </a>
        <a href="https://www.youtube.com/">
          <img className="icon" src={youtube} />
        </a>
        <a href="https://www.instagram.com/">
          <img className="icon" src={instagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
