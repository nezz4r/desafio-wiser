import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: calc(100% - 327px);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  box-sizing: content-box;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #383e71;
`;

export const SubTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989fdb;
`;
