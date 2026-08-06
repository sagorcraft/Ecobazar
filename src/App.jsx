import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Otp from "./pages/Otp";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart";
import Shop from "./pages/Shop";
import Details from "./pages/Details";
import Popup from "./components/layouts/Popup";


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/product" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details" element={<Details />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/error" element={<Error />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
