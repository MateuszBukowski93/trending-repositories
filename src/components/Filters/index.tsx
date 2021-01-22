import React from 'react';
import styled from 'styled-components';
import Checkboxes from './Checkboxes';
import Select from './Select';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 10px;
`;

const Filters = () => {
  return (
    <Container>
      <Checkboxes />
      <Select />
    </Container>
  );
};

export default Filters;
