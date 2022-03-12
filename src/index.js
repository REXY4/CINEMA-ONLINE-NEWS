import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {stores, persistStores} from './reduxs/stores';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles/index.css';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={stores}>
          <PersistGate loading={null} persistor={persistStores}>
            <App />
          </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
