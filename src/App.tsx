import "./firebase/init";
import Explore from "./pages/Explore";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Register from "./pages/Register";
import RequireAuth from "./components/RequireAuth";
import Root from "./pages/Root";
import User from "./pages/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmailRegister from "./pages/EmailRegister";
import EmailLogin from "./pages/EmailLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login",
        children: [
          { index: true, element: <Login /> },
          { path: "email", element: <EmailLogin /> },
        ],
      },
      {
        path: "register",
        children: [
          { index: true, element: <Register /> },
          { path: "email", element: <EmailRegister /> },
        ],
      },
      {
        element: <RequireAuth />,
        children: [
          { path: "user/:id", element: <User /> },
          { path: "post/:id", element: <Post /> },
          { path: "following", element: <Following /> },
          { path: "explore", element: <Explore /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
