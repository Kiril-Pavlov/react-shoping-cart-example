import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Routes, Route } from 'react-router';

//pages
import Home from './pages/Home';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';

//components
import Header from './components/Header';

//styled components
import { Container } from "./components/styles/Container.styled"

const theme = {
  colors:{
    header:"blue",
    main:"red",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <h1>Working ...</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
