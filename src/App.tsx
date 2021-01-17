import { mainTheme } from './theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import NewStore from './store/RepositoriesStore';

function App() {
  return (
    <NewStore>
      <ThemeProvider theme={mainTheme}>
        <AppContainer />
      </ThemeProvider>
    </NewStore>
  );
}

export default App;
