
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import DashboardHome from './pages/DashboardHome'
import Transcation from './pages/Transcation'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Email from './pages/Email'
import Verified from './pages/Verified'
import ForgetPassword from './pages/ForgetPassword'
import EmailSent from './pages/EmailSent'
import ResetPassword from './pages/ResetPassword'
import ResetDone from './pages/ResetDone'
const App = () => {
  const router = createBrowserRouter([
    {

      path: "/login", 
      element: <Login/>, 
     
    },
    {

      path: "/forgetPassword", 
      element: <ForgetPassword/>, 
     
    },
    {

      path: "/EmailSent", 
      element: <EmailSent/>, 
     
    },
    {

      path: "/ResetPassword", 
      element: <ResetPassword/>, 
     
    },
    {

      path: "/ResetDone", 
      element: <ResetDone/>, 
     
    },
    {
       path: "/signUp", 
      element: <SignUp/>, 
    },
    {
       path: "/Email", 
      element: <Email/>, 
    },
    {
       path: "/verified", 
      element: <Verified/>, 
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