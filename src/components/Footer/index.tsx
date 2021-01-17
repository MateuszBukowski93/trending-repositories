import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
