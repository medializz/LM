import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallbackTitle="Application Error" fallbackMessage="We encountered an unexpected error loading the site. Please refresh the page or return to the homepage.">
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

