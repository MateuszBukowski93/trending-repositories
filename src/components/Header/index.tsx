import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 0;
  padding: 15px 10px;
`;
const Header = () => {
  return (
    <StyledHeader>
      <Title>Trending Repositories</Title>
    </StyledHeader>
  );
};

export default Header;
