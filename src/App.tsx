import Explore from "./pages/Explore";
import Following from "./pages/Following";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Root from "./pages/Root";
import User from "./pages/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login />},
      { path: "register", element: <Register />},
      { element: <RequireAuth />, children: [
        { path: "user/:id", element: <User /> },
        { path: "post/:id", element: <Post /> },
        { path: "following", element: <Following /> },
        { path: "explore", element: <Explore /> },
      ]}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
