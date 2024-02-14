import mainLogo from "../../assets/common/logo.svg";
import "./NavBar.css";

function NavBar({user}) {

  return (
    <nav>
      <div className="gnb">
        <a href="index.html">
          <img src={mainLogo} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        {user?.email ? (
            <div className="user-box">
              <img
                className="user-img"
                src={user.profileImageSource}
                alt="프로필 이미지"
              />
              <span className="user-email">{user?.email}</span>
            </div>
          ) : (
            <a className="cta cta-short" href="signin.html">
              <span>로그인</span>
            </a>
          )}
      </div>
    </nav>
  );
}

export default NavBar;
