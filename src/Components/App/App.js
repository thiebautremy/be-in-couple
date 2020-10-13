import React from 'react';
import Header from '../Header/header';
import Display from '../../containers/display';
import Footer from '../Footer/footer';
import Page404 from '../../containers/page404';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import LegalMentions from '../LegalMentions/legalMentions';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Display />
          <Footer />
        </Route>
        <Route path="/legalMentions" exact>
          <Header />
          <LegalMentions />
          <Footer />
        </Route>
        <Route>
          <Header />
          <Page404 />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
