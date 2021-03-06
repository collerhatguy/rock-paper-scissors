import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
