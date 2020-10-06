import React from 'react';
import Header from '../Header/header';
import Display from '../Display/display';
import Footer from '../Footer/footer';
// import { Container } from 'react-bootstrap';
import { Container } from 'semantic-ui-react';
import './App.scss';

function App() {
  return (
    <Container fluid>
      <div className="App">
      <Header />
      <Display />
      <Footer />
      </div>
    </Container>
  );
}

export default App;
