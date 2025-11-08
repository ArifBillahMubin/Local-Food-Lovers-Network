import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login.Jsx";
const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            }
        ]
    }
])

export default router;