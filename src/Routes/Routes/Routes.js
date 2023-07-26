import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import ErrorRoute from "../../Pages/ErrorRoute/ErrorRoute";
import Home from "../../Pages/Home/Home"
import Login from "../../Register/Login/Login";
import SignUp from "../../Register/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("https://sellcell-server.vercel.app/products")
            },
            {
               path:'/signUp',
               element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
               path:'/blog',
               element:<Blog></Blog>
            },
            {
                path:'/categories/:id',
                element:<PrivateRoute><Categories></Categories></PrivateRoute>,
                loader: ({params})=> fetch(`https://sellcell-server.vercel.app/products/${params.id}`)
            },
            {
                path:'*',
                element: <ErrorRoute></ErrorRoute>
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout> </PrivateRoute>,
        children:[
            {
                path:'/dashboard'   ,
                element:<MyOrders></MyOrders>,
                
            },
            {
                path:'/dashboard/allusers'   ,
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
                
            },

        ]
    }
])
export default router;