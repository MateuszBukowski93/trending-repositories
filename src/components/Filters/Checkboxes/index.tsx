import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../../store/RepositoriesStore';
import styled from 'styled-components';

const Label = styled.label`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;
  padding: 5px;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.extraSmall}) {
    font-size: ${({ theme }) => theme.fontSize.medium};
    padding: 15px 10px;
  }
`;
const InputWithLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 0;
`;
const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.screenSizeWidth.extraSmall}) {
    flex-direction: row;
  }
`;
const Checkboxes = () => {
  const store = useContext<RepositoriesStore>(StoreContext);
  const [since, setSince] = useState<string>(localStorage.since);
  useEffect(() => {
    store.updateSince(since);
  }, [since, store]);
  return (
    <CheckboxesContainer>
      <InputWithLabel>
        <input
          type='checkbox'
          name='since'
          id='daily'
          value='daily'
          checked={since === 'daily'}
          onChange={(e) => setSince(e.target.value)}
        />
        <Label htmlFor='daily'>Daily</Label>
      </InputWithLabel>
      <InputWithLabel>
        <input
          type='checkbox'
          name='since'
          id='weekly'
          value='weekly'
          checked={since === 'weekly'}
          onChange={(e) => setSince(e.target.value)}
        />
        <Label htmlFor='weekly'>Weekly</Label>
      </InputWithLabel>
      <InputWithLabel>
        <input
          type='checkbox'
          name='since'
          id='monthly'
          value='monthly'
          checked={since === 'monthly'}
          onChange={(e) => setSince(e.target.value)}
        />
        <Label htmlFor='monthly'>Monthly</Label>
      </InputWithLabel>
    </CheckboxesContainer>
  );
};

export default Checkboxes;
