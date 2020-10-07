import React from 'react';
import Header from '../Header/header';
import Display from '../../containers/display';
import Footer from '../Footer/footer';
import './App.scss';

function App() {
  return (
      <div className="App">
      <Header />
      <Display />
      <Footer />
      </div>
  );
}

export default App;
