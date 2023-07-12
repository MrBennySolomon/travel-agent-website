import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./MVC/View/Home";
// import Promo from "./MVC/View/Promo";
import Root from "./MVC/View/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <Promo /> },
      { path: "/", element: <Home /> }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;