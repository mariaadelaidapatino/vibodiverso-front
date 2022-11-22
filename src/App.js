import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Menu from './components/navbar/navbar';
import AppRouter from "./components/router/router";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Menu />
      <Container>       
        <AppRouter />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
