import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Root from './routes/Root'
import Index from './routes'
import Puzzles from './routes/Puzzles'
import Learn from './routes/Learn'
import Register from './routes/Register'
import ChessOpening from './routes/ChessOpening'
import EndGames from './routes/EndGames'


import './index.css'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Index/>},
      {
        path:"/puzzles",
        element:<Puzzles/>
      },
      {
        path:"/learn",
        element:<Learn/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/learn/chessOpenings",
        element:<ChessOpening/>
      },
      {
        path:"/learn/endgames",
        element:<EndGames/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
