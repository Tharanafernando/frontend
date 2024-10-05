/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App.jsx";
import Cart from './pages/Cart.jsx';
import RootLayout from './layout/root.layout.jsx';
import Shop from './pages/Shop.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Checkout from './pages/checkout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import Signin from './pages/auth/Sign-in.jsx';
import Signup from './pages/auth/Sign-up.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element : <RootLayout/>,
    children : [
      {
        path:'/',
        element:<App/>
      },
      
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:`/product/:productId`,
        element:<ProductPage/>,
       
      },
      {
        path:'/checkout',
        element:<Checkout/>
      }

    ]
  },
  {
    path:'/Sign-In',
    element:<Signin/>
  },
  {
    path:'Sign-Up',
    element:<Signup/>
  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
       <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>
)


