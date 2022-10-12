import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "../pages/about/About";
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import Offer from '../pages/offer/Offer'
import ProductView from "../pages/productview/ProductView";



const CreateRoutes = () => (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="about" element={<About/>} />
      <Route  path="contact" element={<Contact/>} />
      <Route  path="offer" element={<Offer/>} />
      <Route path='productview' element={<ProductView/>}/>
    </Routes>
);

export default CreateRoutes;