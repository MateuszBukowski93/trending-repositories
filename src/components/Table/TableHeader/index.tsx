import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../../../store/RepositoriesStore';
import sortIcon from '../../../assets/svg/sortIcon.svg';
import { observer } from 'mobx-react';

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
const TableHeader = observer(() => {
  const [sortLowToHigh, setSortLowToHigh] = useState(true);
  const store = useContext<RepositoriesStore>(StoreContext);
  useEffect(() => {
    store.setSortLowToHigh(sortLowToHigh);
  }, [sortLowToHigh, store]);

  return (
    <StyledTable>
      <span>Author</span>
      <TableHeaderTextWithIcon
        onClick={() => {
          setSortLowToHigh(!sortLowToHigh);
        }}
      >
        Stars
        <Icon sortLowToHigh={sortLowToHigh} src={sortIcon}></Icon>
      </TableHeaderTextWithIcon>
    </StyledTable>
  );
});

export default TableHeader;
