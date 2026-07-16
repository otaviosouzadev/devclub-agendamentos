import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ClientPage } from './pages/ClientPage';
import { AdminPage } from './pages/AdminPage';
import './styles.css';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <ClientPage /> },
    { path: 'admin', element: <AdminPage /> },
  ]},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>,
);
