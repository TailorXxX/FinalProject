import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark">
          <main>
            <App />
          </main>
        </NextThemesProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
