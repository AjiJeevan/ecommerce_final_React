import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsListing from './pages/ProductsListing'
import ProductDetails from './pages/ProductDetails';
import SearchProducts from './pages/searchProducts.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx"
import ProductNotFound from './pages/ProductNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductsListing />,
      },
      {
        path: "/productdetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/productname/:searchName",
        element: <SearchProducts />,
      },
     {
        path: "/productname",
        element: <ProductNotFound />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
    // <ProductsListing />
    // <ProductDetails />
    <>
    <RouterProvider router={router} />
    </>
)
