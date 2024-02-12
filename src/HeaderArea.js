import './css/HeaderArea.css';
import profileImg from './assets/myprofile.svg';
import logoImg from './assets/logo.svg';

const LogoArea = () => {
  return (
    <div className="logo_area">
      <img className="logo_img" src={logoImg} alt="logo" />
    </div>
  );
};

const Profile = ({ email }) => {
  return (
    <div className="profile_area">
      <div className="profile_background">
        <img className="profile_img" src={profileImg} alt="profile" />
      </div>
      <p className="profile_id">{email}</p>
    </div>
  );
};

const LoginButton = () => {
  return <button className="login_btn">로그인</button>;
};

export const HeaderArea = ({ email }) => {
  return (
    <div className="header_area">
      <LogoArea></LogoArea>
      {email ? <Profile email={email}></Profile> : <LoginButton></LoginButton>}
    </div>
  );
};
