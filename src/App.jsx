import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import UserList, { UserLoader } from "./pages/UserList";
import UserInfo, { UserInfoLoader } from "./pages/UserInfo";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/user-list", element: <UserList />, loader: UserLoader },
        {
          path: "/user-info/:id",
          element: <UserInfo />,
          loader: UserInfoLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
