import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../../store/RepositoriesStore';
import styled from 'styled-components';

const Label = styled.label`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;
`;
const InputWithLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 0;
`;
const ButtonsContainer = styled.div`
  display: flex;
`;
const RadioButtons = () => {
  const store = useContext<RepositoriesStore>(StoreContext);
  const [since, setSince] = useState<string>(store.since);
  useEffect(() => {
    store.updateSince(since);
  }, [since, store]);
  return (
    <ButtonsContainer>
      <InputWithLabel>
        <input
          type='radio'
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
          type='radio'
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
          type='radio'
          name='since'
          id='monthly'
          value='monthly'
          checked={since === 'monthly'}
          onChange={(e) => setSince(e.target.value)}
        />
        <Label htmlFor='monthly'>Monthly</Label>
      </InputWithLabel>
    </ButtonsContainer>
  );
};

export default RadioButtons;
