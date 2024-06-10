import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/public/home";
import Dashboard from "./pages/private/Dashboard";
// import useLocalStorage from "./lib/useLocalstorage";
import AuthLayout from "@/layouts/AuthLayout";
import Explore from "@/pages/private/Explore";
import Notifications from './pages/private/Notifications';

// const { getAuthToken } = useLocalStorage();

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: (
      <AuthLayout>
        <Dashboard />
      </AuthLayout>
    ),
  },
  {
    path: "explore",
    element: (
      <AuthLayout>
        <Explore />
      </AuthLayout>
    ),
  },
  {
    path: "notifications",
    element: (
      <AuthLayout>
        <Notifications />
      </AuthLayout>
    )
  }
]);
