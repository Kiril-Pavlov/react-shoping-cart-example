import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header';

//styled components
import { Container } from "./components/styles/Container.styled"

function App() {
  return (
    <>
      <Header />
      <Container>
        <h1>Working ...</h1>
      </Container>
    </>
  );
}

export default App;
