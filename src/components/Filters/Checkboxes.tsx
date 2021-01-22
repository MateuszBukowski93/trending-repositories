import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { DateRanges } from '../../constants';
import rootStore from '../../stores/RootStore';

const Label = styled.label`
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

const Checkboxes = observer(() => {
  const { DAILY, WEEKLY, MONTHLY } = DateRanges;
  const DateRangesArray = [DAILY, WEEKLY, MONTHLY];

  return (
    <CheckboxesContainer>
      {DateRangesArray.map((DateRange) => (
        <InputWithLabel>
          <input
            type='checkbox'
            name={DateRange}
            id={DateRange}
            value={DateRange}
            checked={DateRange === rootStore.filtersStore.since}
            onChange={(e) => {
              rootStore.filtersStore.setSince(e.target.value);
            }}
          />
          <Label htmlFor={DateRange}>{DateRange.toUpperCase()}</Label>
        </InputWithLabel>
      ))}
    </CheckboxesContainer>
  );
});

export default Checkboxes;
