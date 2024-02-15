import styles from "./Nav.module.css";
import NavLoginButton from "./NavLoginButoon";
import { useFetch } from "../../hooks/useFetch";

const userDataUrl = "https://bootcamp-api.codeit.kr/api/sample/user";

function Nav() {
  const { userData } = useFetch(userDataUrl);
  console.log(userData);
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav_inside_wrapper}>
        <a href="/">
          <img
            className={styles.header_logo}
            src={`${process.env.PUBLIC_URL}/assets/images/nav_logo.svg`}
          />
        </a>
        <div className={styles.profile_wrapper}>
          {userData?.email == undefined ? (
            <NavLoginButton />
          ) : (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/profile_image.svg`}
              />
              <p className={styles.profile_email}>{userData.email}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
