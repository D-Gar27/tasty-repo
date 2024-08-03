import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Root from "../Root";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Menu from "../pages/main/menu";
import Histories from "../pages/main/Histories";
import MenuDetails from "../pages/main/menu/MenuDetails";
import Cart from "../pages/main/Cart";
import Checkout from "../pages/main/Checkout";
import Summary from "../pages/main/Summary";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import HistoriesDetails from "../pages/main/HistoriesDetials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
path:'/forgot-password',
element:<ForgotPassword />,
errorElement: <Error />,

  },
  {
path:'/reset-password',
element : <ResetPassword/>,
errorElement : <Error/>
  }, 
  
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <Error />,
  },
  {
    path: "/checkout/summary",
    element: <Summary />,
    errorElement: <Error />,
  },
  {
path:'/reset-password',
element: <ResetPassword/>,
errorElement: <Error />,

  },
  {
    path: "/main",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Menu />,
      },
      {
        path: "menu-details",
        element: <MenuDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "histories",
        element: <Histories />,
      
      },
      {
        path: "histories/:id",
        element :  <HistoriesDetails />,

      
      },
      
      
     
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
