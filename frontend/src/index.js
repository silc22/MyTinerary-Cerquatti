import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer';
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const centrlizedState = createStore(mainReducer,composeEnhancer(applyMiddleware(thunk)));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={centrlizedState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


