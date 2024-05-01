import { createBrowserRouter } from "react-router-dom";

import { AUTH_PAGE, CODE_PAGE, HOME_PAGE } from "./paths";

import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CodePage from "../pages/CodePage/CodePage";

export const router = createBrowserRouter([
    {
        path: HOME_PAGE,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: AUTH_PAGE,
        element: <AuthPage />,
    },
    {
        path: CODE_PAGE,
        element: <CodePage />,
    },
]);
