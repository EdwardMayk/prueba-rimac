import React from 'react'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import PlansPage from './pages/Plans/index.tsx'

import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'plans',
    element: <PlansPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
