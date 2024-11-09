import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home, Login, Settings, Files, Profile} from "./pages/index.js"
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <div>Dolboeb</div>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: '/files',
    element: <Files/>
  },
  {
    path: '/profile/:id',
    element: <Profile/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
