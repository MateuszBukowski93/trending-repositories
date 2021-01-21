import React, { useEffect, useContext } from 'react';
import { getRepos } from '../../api/getRepos';
import TableItem from './TableItem';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { sortHighToLowFunc, sortLowToHighFunc } from '../../utilities/helpers';
import { RootStoreContext } from '../../sotres/RootStore';

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Table = observer(() => {
  const rootStore = useContext<RootStore>(RootStoreContext);

  useEffect(() => {
    getRepos(
      rootStore.filtersStore.language,
      rootStore.filtersStore.since
    ).then((repos: Repository[]) => {
      rootStore.reposStore.repos = repos;
    });
  }, [rootStore.filtersStore.language, rootStore.filtersStore.since]);

  return (
    <StyledTable>
      <TableHeader />
      <List>
        {toJS(rootStore.reposStore.repos)
          .sort(
            rootStore.filtersStore.sortLowToHigh
              ? sortLowToHighFunc
              : sortHighToLowFunc
          )
          .map((item) => (
            <TableItem item={item} key={item.name} />
          ))}
      </List>
    </StyledTable>
  );
});

export default Table;
