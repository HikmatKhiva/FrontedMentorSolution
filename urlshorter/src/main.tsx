import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loading from './loading/Loading';
const App = React.lazy(() => import('./App'));
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading/>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);