import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, useMode } from "./layouts/components/PageContainer";
import Layouts from './layouts';
import Pages from './routes';

function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Layouts>
            <Pages />
          </Layouts>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
