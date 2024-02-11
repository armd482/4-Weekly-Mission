import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  padding-top: 3.2rem;
  background-color: var(--black);

  .footer-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 192rem;
    height: fit-content;
    padding: 0 10.4rem;
  }

  .copyright {
    color: #676767;
    font-family: Arial;
    font-size: 1.6rem;
  }

  .footer-links {
    display: flex;
    column-gap: 3rem;
    padding-right: 1.8rem;
  }

  .footer-link {
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
    text-decoration: none;
  }

  .sns {
    display: flex;
    column-gap: 1.2rem;
    height: 2rem;
  }
`;
