import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

import logo from 'assets/logo.svg';
import Button from 'components/common/button/Button';
import UserBtn from 'components/common/gnb/UserBtn';
import sampleAPI from 'api/sampleAPI';

const Styled = {
  Container: styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
  `,
  InnerWrap: styled.div`
    width: 100%;
    height: 9.3rem;
    max-width: 192rem;
    padding: 0 20rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1199px) {
      padding: 0 3.2rem;
    }
  `,
};

function GNB() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await sampleAPI.getSampleUserInfo();
      const userData = res.data;
      setIsLoggedIn(userData ? true : false);
      setUserData(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <Link to="/">
          <img src={logo} alt="linkbrary-logo" />
        </Link>
        {isLoggedIn ? <UserBtn userData={userData} /> : <Button />}
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default GNB;
