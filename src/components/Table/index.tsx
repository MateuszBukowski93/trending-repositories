import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import styled from 'styled-components';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import { sortHighToLowFunc, sortLowToHighFunc } from '../../utilities/helpers';
import rootStore from '../../stores/RootStore';
import { getRepos } from '../../api/getRepos';

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
  const since = rootStore.filtersStore.since;
  const language = rootStore.filtersStore.language;

  useEffect(() => {
    getRepos(
      rootStore.filtersStore.language,
      rootStore.filtersStore.since
    ).then((repos: Repository[]) => {
      rootStore.reposStore.setRepos(repos);
    });
  }, [language, since]);

  return (
    <StyledTable>
      <TableHeader />
      <List>
        {toJS(rootStore.reposStore.repos)
          .sort(
            rootStore.reposStore.sortLowToHigh
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
