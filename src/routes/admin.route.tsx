import { RouteObject } from "react-router-dom";
import Dashboard from "../modules/admin/pages/Dashboard/Dashboard";


export const adminRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />
    }
]