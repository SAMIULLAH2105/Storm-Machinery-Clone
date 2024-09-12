import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Home route
        element: <Home />,
      },
      {
        path: "product", // Product route
        element: <Product />,
      },
      {
        path: "contact", // Contact route
        element: <Contact />,
      },
      {
        path: "about", // About route
        element: <About />,
      },
      {
        path: "services", // Services route
        element: <Services />,
      },
      {
        path: "faq", // FAQ route
        element: <FAQ />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
