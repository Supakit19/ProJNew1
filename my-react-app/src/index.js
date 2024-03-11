import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employee from './moota/employee';
import Narbar from './moota/NavBar';
import TabelHome from './moota/Tabel';
import Tabel1 from './Alltabel/Tabel1';
import Employee1 from './Alltabel/employee1';
import Order from './moota/order';
import Order1 from './Alltabel/order1';

const router = createBrowserRouter([
  
  {
    path: "/Employee",
    element: <Employee/>,
  },

  {
    path: "/Testgap",
    element: <Narbar/>,
  },

  {
    path: "/tabel",
    element: <TabelHome/>,
  },

  // โต๊ะ
  {
    path: "/tabel1",
    element: <Tabel1/>,
  },

  // Employee
  {
    path: "/Employee1",
    element: <Employee1/>,
  },

  // Order

  {
    path: "/Order",
    element: <Order/>,
  },

  {
    path: "/Order1",
    element: <Order1/>,
  },

]);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      
      <RouterProvider router={router} />
      
    </React.StrictMode>
  );
