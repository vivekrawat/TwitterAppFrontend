import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";



export const routes = createBrowserRouter([
    {
        path: "",
        element: <Login />
    },
    {
        path: "signup",
        element: <SignUp />
    }
])