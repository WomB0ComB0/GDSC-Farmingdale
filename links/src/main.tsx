import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { ErrorHandlerProvider } from './hooks/useErrorHandler';
import App from './App.tsx'
import './index.css'
import NotFound from './components/404.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorHandlerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </ErrorHandlerProvider>
  </React.StrictMode>,
)