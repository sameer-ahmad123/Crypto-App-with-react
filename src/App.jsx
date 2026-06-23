
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import DashboardHome from './pages/DashboardHome'
import Transcation from './pages/Transcation'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  const router = createBrowserRouter([
    {

      path: "/login", 
      element: <Login/>, 
     
    },
    {
       path: "/signUP", 
      element: <SignUp/>, 
    },
    {
    
      path: "/", 
      element: <DashboardLayout/>, 
      children: [
        {
          path: "/", 
         
          element: <DashboardHome/> 
        },
        {
          path: "/Transcation", 
          element: <Transcation/>
        },
        {
          path: "/ContactUs", 
          element: <ContactUs/>
        },
       
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App