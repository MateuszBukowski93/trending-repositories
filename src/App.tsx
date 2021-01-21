import { mainTheme } from './theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
