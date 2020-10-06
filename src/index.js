import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';

import store from './store/store';
const rootReactElement = (
  
    <Provider store={store}>
      <App />
    </Provider>
);
const target = document.getElementById('root')
render(rootReactElement, target)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
