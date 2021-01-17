import React from 'react';
import styled from 'styled-components';
import RadioButtons from './RadioButtons';
import Select from './Select';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 20px;

  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Filters = () => {
  return (
    <Container>
      <RadioButtons />
      <Select />
    </Container>
  );
};

export default Filters;
