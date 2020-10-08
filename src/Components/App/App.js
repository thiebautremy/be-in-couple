import React from 'react';
import Header from '../Header/header';
import Display from '../../containers/display';
import Footer from '../Footer/footer';
import { Route } from 'react-router-dom';
import './App.scss';
import LegalMentions from '../LegalMentions/legalMentions';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Header />
        <Display />
        <Footer />
      </Route>
      <Route path="/legalMentions" exact>
        <Header />
        <LegalMentions />
      </Route>
    </div>
  );
}

export default App;
