import { mainTheme } from './theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import NewStore from './store/RepositoriesStore';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <NewStore>
      <ThemeProvider theme={mainTheme}>
        <AppContainer />
        <GlobalStyle />
      </ThemeProvider>
    </NewStore>
  );
}

export default App;
