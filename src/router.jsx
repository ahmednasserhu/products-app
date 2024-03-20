import { Outlet, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/Nav-bar/navbar";
import ErrorPage from './Pages/NotFound/notFound'
import Register from "./Pages/Register/register";
import Products from "./Pages/Products/products";
import ProductDetails from './Pages/Product-details/ProductDetails'
// eslint-disable-next-line react-refresh/only-export-components
function WithNavBar() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element:<WithNavBar/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Products/>
      },
      {
        path:'productDetail/:id',
        element:<ProductDetails/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  }
])

export default router;
