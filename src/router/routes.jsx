import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../Auth/Register";
import Login from "../Auth/Login.Jsx";
import PrivateRoute from "../Provider/PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";
import AllReview from "../pages/allReview/AllReview";
import MyReview from "../pages/MyReview/MyReview";
import EditReview from "../pages/EditReview/EditReview";
import ViewDetail from "../pages/ViewDetails/ViewDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoaderSpinner from "../components/LoaderSpinner/LoaderSpinner";
const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/reviews'),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/addReview',
                element: <PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            },
            {
                path: '/allReview',
                element: <AllReview></AllReview>,
                loader: () => fetch("http://localhost:3000/all-reviews"),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/myReview',
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/editReview/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/reviews/${params.id}`),
                element: <PrivateRoute>
                    <EditReview></EditReview>
                </PrivateRoute>,
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/viewDetail/:id',
                element: <PrivateRoute>
                    <ViewDetail></ViewDetail>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/reviews/${params.id}`),
                hydrateFallbackElement: <LoaderSpinner></LoaderSpinner>
            }
        ]
    }
])

export default router;