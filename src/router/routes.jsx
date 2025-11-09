import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login.Jsx";
import PrivateRoute from "../Provider/PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";
const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:Home,
                loader: () => fetch('http://localhost:3000/reviews')
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/addReview',
                element:<PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            }
        ]
    }
])

export default router;