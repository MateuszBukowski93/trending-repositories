import { mainTheme } from './theme/mainTheme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
