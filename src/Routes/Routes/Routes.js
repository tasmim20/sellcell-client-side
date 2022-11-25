import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home"
import Product from "../../Pages/Home/Product/Product";
import Login from "../../Pages/Login/Login/Login";


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
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/categories/:id',
                element:<Categories></Categories>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])
export default router;