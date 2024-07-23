import { createBrowserRouter } from "react-router-dom";

// import { AUTH_PAGE, CODE_PAGE, HOME_PAGE, LOADER_PAGE } from "./paths";
import { AUTH_PAGE, HOME_PAGE, ORDER_PAGE, MAIN_PAGE, ORDERS_PAGE, PROFILE_PAGE, ADMIN_AUTH_PAGE } from "./paths";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import MainPage from "../pages/MainPage/MainPage"
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminAuthPage from "../pages/AdminAuthPage/AdminAuthPage";

export const router = createBrowserRouter([
    {
        path: AUTH_PAGE,
        element: < RegistrationPage />
    },
    {
        path: HOME_PAGE,
        element: <HomePage />,
        // errorElement: <NotFoundPage />,
    },
    {
        path: ORDER_PAGE,
        element: <OrderPage />
    },
    {
        path: MAIN_PAGE,
        element: <MainPage />
    },
    {
        path: ORDERS_PAGE,
        element: <OrdersPage />
    },
    {
        path: PROFILE_PAGE,
        element: <ProfilePage />
    },
    {
        path: ADMIN_AUTH_PAGE,
        element: <AdminAuthPage />
    }
]);
