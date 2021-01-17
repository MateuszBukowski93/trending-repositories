import React, { useState } from 'react';
import styled from 'styled-components';
import sortIcon from '../../../assets/svg/sortIcon.svg';

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
    sortLowToHigh ? 'rotate(0.5turn)' : 'rotate(0)'};
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
const TableHeader = () => {
  const [sortLowToHigh, setSortLowToHigh] = useState(true);
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
};

export default TableHeader;
