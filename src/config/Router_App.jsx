import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { Private_Routes } from "./Private_Routes";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />

      {/* Private Route */}
      <Route path="" element={<Private_Routes />}>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
      </Route>
    </Route>
  )
);

const Router_App = () => {
  return <RouterProvider router={router} />;
};

export { Router_App };
