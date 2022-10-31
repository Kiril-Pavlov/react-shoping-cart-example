import './App.css';
import { ThemeProvider } from 'styled-components';

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
        <Header />
        <Container>
          <h1>Working ...</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
