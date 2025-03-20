import { useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, Link, useLocation } from 'react-router-dom'



// UseLocation Component
function UseLocationCompo() {
  const location = useLocation()
  return (
    <div>
      <h1>UseLocation Component</h1>
      <p>Current path: {location.pathname}</p>
      <p>Query string: {location.search}</p>
    </div>
  )
}

// Layout Component
function Layout() {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li><Link to="/">Counter</Link></li>
          <li><Link to="/use">Use Location</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "use",
        element: <UseLocationCompo />
      }
    ]
  }
])

// Main App Component
function App() {
  return <RouterProvider router={router} />
}

export default App
