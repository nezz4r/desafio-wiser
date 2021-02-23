import styled from 'styled-components';

export const CoverImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60vw;
  max-width: 60vw;
  overflow: hidden;
  background-image: url(/images/cover.png);
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    background-image: url(/images/cover-tablet.png);
    background-size: contain;
    width: 100vw;
    max-height: 100vh;
  }
  @media screen and (max-width: 768px) {
    background-image: url(/images/cover-mobile.png);
    background-size: contain;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
  }
`;
