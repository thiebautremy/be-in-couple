import React from 'react';
import Header from '../Header/header';
import Display from '../Display/display';
// import { Container } from 'react-bootstrap';
import { Container } from 'semantic-ui-react';
import './App.scss';

function App() {
  return (
    <Container fluid>
      <div className="App">
      <Header />
      <Display />
      </div>
    </Container>
  );
}

export default App;
