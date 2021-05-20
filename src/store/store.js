import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import beInLove from '../reducer/beInLove';

const store = createStore(beInLove, composeWithDevTools());

export default store;