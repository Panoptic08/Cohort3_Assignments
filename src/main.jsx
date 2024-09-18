import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home.jsx'
import Webdev from './components/webdev.jsx';
import Week1 from './components/weeks/week1.jsx';
import Week2 from './components/weeks/week2.jsx';
import Web3 from "./components/web3.jsx"


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"web",
    element: <Webdev />
  },
  {
    path:"week1",
    element: <Week1 />
  },
  {
    path:"week2",
    element: <Week2 />
  },
  {
    path:"web3",
    element: <Web3 />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
