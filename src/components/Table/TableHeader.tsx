import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import sortIcon from '../../assets/svg/sortIcon.svg';
import { ColumnNames } from '../../constants';
import rootStore from '../../stores/RootStore';

const StyledTable = styled.table`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 20px 40px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
`;

const Icon = styled.img<{ sortLowToHigh: boolean; src: string }>`
  transform: ${({ sortLowToHigh }) =>
    sortLowToHigh ? 'rotate(0)' : 'rotate(0.5turn)'};
  transition: transform 300ms;
  width: 20px;
  margin-left: 10px;
`;

const TableHeaderTextWithIcon = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TableHeader = observer(() => (
  <StyledTable>
    <span>{ColumnNames.AUTHOR}</span>
    <TableHeaderTextWithIcon
      onClick={() => {
        rootStore.reposStore.setSortLowToHigh(
          !rootStore.reposStore.sortLowToHigh
        );
      }}
    >
      {ColumnNames.STARS}
      <Icon
        sortLowToHigh={rootStore.reposStore.sortLowToHigh}
        src={sortIcon}
      ></Icon>
    </TableHeaderTextWithIcon>
  </StyledTable>
));

export default TableHeader;
