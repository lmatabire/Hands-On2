import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/* Redux now uses store to control rendering*/
import {createStore} from 'redux';
/* Provider subscribe a container component to our store and set props for the store */
import {Provider} from 'react-redux';

import reducer from './reducers/reducer';

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
