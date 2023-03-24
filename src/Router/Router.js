import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Appointment from "../Pages/Appoinment/Appoinment/Appointment"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Home from "../Pages/Home/Home/Home"
import LogIn from "../Pages/LogIn/LogIn"
import SignUp from "../Pages/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    }
])

export default router