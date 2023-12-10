import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Pages/Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'

const routes = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
