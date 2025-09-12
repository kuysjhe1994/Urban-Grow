import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { installGlobalErrorLogging } from './lib/utils'
import ErrorBoundary from './lib/ErrorBoundary'

installGlobalErrorLogging()

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
