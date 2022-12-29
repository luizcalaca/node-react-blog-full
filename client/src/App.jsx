import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
