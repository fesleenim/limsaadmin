import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/login/login";
import AdminPanel from "../components/adminpanel/admin";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />, // Default sahifa login bo'lishi uchun
    },
    {
        path: "/admin",
        element: <AdminPanel />,
    }
]);
