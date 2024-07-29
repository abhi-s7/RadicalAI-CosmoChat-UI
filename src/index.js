import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import LandingPage from './components/home/landing';
import Dashboard from './components/Dashboard/Dashboard';
import reportWebVitals from './assets/reportWebVitals';
import { ChatProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatProvider>
      <LandingPage />
      <Dashboard />
    </ChatProvider>
  </React.StrictMode>
);

reportWebVitals();
