import { mainTheme } from './theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppContainer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
