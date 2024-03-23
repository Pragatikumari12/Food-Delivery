import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/user/HomePage';
import Login from './pages/user/Login';
import MenuPage from './pages/user/MenuPage';
import Singup from './pages/user/Singup';
import CartPage from './pages/user/CartPage';
import UserDashboard from './pages/user/UserDashboard';
import AddressPage from './pages/user/AddressPage';
import PaymentPage from './pages/user/PaymentPage';
import FoodDetailPage from './pages/user/FoodDetailPage'
import Main from './Main.jsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "singup",
          element: <Singup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "menupage",
          element: <MenuPage />,
        },
        {
          path: "fooddetailpage",
          element: <FoodDetailPage />,
        },
        {
          path: "cartpage",
          element: <CartPage />,
        },
        {
          path: "userdashboard",
          element: <UserDashboard/>,
        },
        {
          path: "addresspage",
          element: <AddressPage/>,
        },
        {
          path: "payment",
          element: <PaymentPage/>,
        },
      ]
    },
    
  ])
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <RouterProvider router={router} />
      </div>
    </>

  );
}

export default App;
