// Global Imports
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
// Local Imports
import { theme } from "./themes/theme";
import { Home } from "./pages/Home";
import { Header }  from "./components/Header";
import { About } from "./components/about";
import { GlobalStyle } from './themes/GlobalTheme';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
