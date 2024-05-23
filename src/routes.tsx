import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/public/home"



export const routes = createBrowserRouter([
    {
        path: "",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "signup",
        element: <SignUp />
    }
])