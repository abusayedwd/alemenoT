import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Detailscourse from './course/Detailscourse.jsx'


const router = createBrowserRouter ([
     {
      path:'/',
      element:<App></App>,
      children:[
        
        {
          path:'/',
          element:<Home></Home>,
          
        },

        {
        path:'/detail/:id',
        element: <Detailscourse></Detailscourse>,
        loader:({params}) => fetch("course.json")
        } 
      ]
     }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
