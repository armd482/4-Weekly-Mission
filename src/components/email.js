import { useState, useEffect } from "react";
import "../css/home.css";
// import { User } from "../api/api";

const Email = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!profileData) {
    return <button className="btn login_btn">로그인</button>;
  }

  return (
    <div className="profile_box">
      <img
        className="profile_img"
        src={profileData.profileImageSource}
        alt="profile_img"
      />
      <p className="profile_email">{profileData.email}</p>
    </div>
  );
};

export default Email;
