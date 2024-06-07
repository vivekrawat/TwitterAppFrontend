import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/public/home"

export const routes = createBrowserRouter([
    {
        path: "",
        element: <Home/>
    },
])