// Global Imports
import { ThemeProvider } from "styled-components";

// Local Imports
import { theme } from "./themes/theme";
import { GlobalStyle } from './themes/GlobalTheme'
import { Header }  from "./components/Header";




function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div className="App">

          <Header />
          
        </div>
    </ThemeProvider>
  )
}

export default App
