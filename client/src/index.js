import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducer';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
);
