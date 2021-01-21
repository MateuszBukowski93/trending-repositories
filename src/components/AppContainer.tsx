import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Table from './Table';
import Filters from './Filters';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  padding: 15px 10px;
  flex: 1;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.extraSmall}) {
    padding: 15px 30px;
  }
`;

const AppContainer = () => (
  <MainContainer>
    <Header />
    <ContentContainer>
      <Filters />
      <Table />
    </ContentContainer>
    <Footer />
  </MainContainer>
);

export default AppContainer;
