import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import ErrorRoute from "../../Pages/ErrorRoute/ErrorRoute";
import Home from "../../Pages/Home/Home"
import Login from "../../Register/Login/Login";
import SignUp from "../../Register/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("http://localhost:5000/products")
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
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'*',
                element: <ErrorRoute></ErrorRoute>
            }
        ]
    }
])
export default router;