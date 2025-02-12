import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";


export const adminRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />
    }
]