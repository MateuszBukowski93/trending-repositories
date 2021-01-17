import React, { useEffect, useContext } from 'react';
import { getRepos } from '../../api/getRepos';
import TableItem from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import { StoreContext } from '../../store/RepositoriesStore';
import { observer } from 'mobx-react';

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 300px;
  width: 100%;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Table = observer(() => {
  const store = useContext<RepositoriesStore>(StoreContext);
  useEffect(() => {
    getRepos(store.language, store.since).then((repos: Repository[]) => {
      store.updateRepos(repos);
    });
  }, [store.language, store.since, store]);

  return (
    <StyledTable>
      <TableHeader />
      <List>
        {store.repos.map((item) => (
          <TableItem item={item} key={item.name} />
        ))}
      </List>
    </StyledTable>
  );
});

export default Table;
