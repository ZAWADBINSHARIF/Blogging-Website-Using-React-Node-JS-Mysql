// external import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// internal import
import App from './App.jsx';
import axios from 'axios';
import './main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/authContext.jsx';

const baseUrl = '/api';
axios.defaults.baseURL = baseUrl;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <AuthContextProvider>
      <App />
    </AuthContextProvider>

  </React.StrictMode>,
);
