import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import { DataProvider } from 'src/contexts/DataProviders';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
