import { mainTheme } from './theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import GlobalStyle from './theme/GlobalStyle';
import RootStore from './stores/RootStore';
import MobXContext from './stores/MobXContext';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <MobXContext.Provider value={RootStore}>
        <AppContainer />
        <GlobalStyle />
      </MobXContext.Provider>
    </ThemeProvider>
  );
}

export default App;
