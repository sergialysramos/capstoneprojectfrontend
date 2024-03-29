import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage/HomePage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ReservationsPage from "../pages/ReservationsPage/ReservationsPage";
import LocationPage from "../pages/LocationPage/LocationPage";
import LoginPage from "../pages/LoginPage/LoginPage";


const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children:[
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/services',
                    element: <ServicesPage />
                },
                {
                    path: '/reservations',
                    element: <ReservationsPage />
                },
                {
                    path: '/location',
                    element: <LocationPage />
                },
                {
                    path: '/login',
                    element: <LoginPage />
                }
            ]
        }
    ])
    return <RouterProvider router={router}></RouterProvider>
};

export default AppRoutes;