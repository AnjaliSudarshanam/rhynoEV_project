import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vehicle from "./components/Vehicle";
import FrontLine from "./components/FrontLine";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import SE03Lite from './components/SE03Lite';
import SE03 from './components/SE03';
import SE03Max from './components/SE03Max';
import ComparePage from "./components/ComparePage";
import ProductsPage from "./components/ProductsPage";
import PreBook from "./components/PreBook";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import WebsitePolicy from "./components/WebsitePolicy";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen" basename="/subpath">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><Navbar/><Hero /><Vehicle /><FrontLine /></>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<><Navbar/><AboutUs /></>} />
            <Route path="/contact" element={<><Navbar/><ContactUs /></>} />
            <Route path="/products/se03" element={<><Navbar/><SE03 /></>} />
            <Route path="/products/se03-lite" element={<><Navbar/><SE03Lite /></>} />
            <Route path="/products/se03-max" element={<><Navbar/><SE03Max /></>} />
            <Route path="/products/compare" element={<><Navbar/><ComparePage /></>} />
            <Route path="/products/products" element={<><Navbar/><ProductsPage /></>} />
            <Route path="/prebook" element={<><Navbar/><PreBook /></>} />
            <Route path="/privacy-policy" element={<><Navbar/><PrivacyPolicy /></>} />
            <Route path="/refund-policy" element={<><Navbar/><RefundPolicy /></>} />
            <Route path="/website-policy" element={<><Navbar/><WebsitePolicy /></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
