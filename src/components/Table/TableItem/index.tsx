import React from 'react';
import styled from 'styled-components';
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 15px 40px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;

  cursor: pointer;
  transition: all 300ms;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.borderRadius};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;

interface ITableItem {
  item: Repository;
}
const TableItem = ({ item }: ITableItem) => {
  return (
    <Item>
      <span>{item.author}</span>
      <span>{item.stars}</span>
    </Item>
  );
};

export default TableItem;
