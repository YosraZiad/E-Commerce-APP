import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OutStore from "./pages/OutStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Signup from "./pages/Signup";
import RestPassword from "./pages/RestPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refundploicy from "./pages/Refundploicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContion from "./pages/TermAndContion";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="product"  element={<OutStore/>} />
          <Route path="product/:id"  element={<SingleProduct/>} />
          <Route path="blogs"  element={<Blog/>} />
          <Route path="blog/:id"  element={<SingleBlog/>} />
        
          <Route path="compare-product"  element={<CompareProduct/>} />
          <Route path="wishlist"  element={<Wishlist/>} />
          <Route path="login"  element={<Login/>} />
          <Route path="forgot-password"  element={<ForgetPassword/>} />
          <Route path="signup"  element={<Signup/>} />
          <Route path="rest-password"  element={<RestPassword/>} />
          <Route path="privacy-policy"  element={<PrivacyPolicy/>} />
          <Route path="refund-policy"  element={<Refundploicy/>} />
          <Route path="shipping-policy"  element={<ShippingPolicy/>} />
          <Route path="term-condition"  element={<TermAndContion/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
