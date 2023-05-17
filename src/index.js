import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppComponent/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter} from "react-router-dom";
// import {RecoilRoot} from "recoil";
import {Provider} from 'react-redux';
import {store} from "./components/session11(cart)/store";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>

);

