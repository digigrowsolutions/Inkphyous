import { Routes, Route } from "react-router-dom";
import Opener from "./components/3DModel";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductDisplay from "./pages/PDP";
import Checkout from "./pages/Checkout";
import PDPC from "./pages/PDPC";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* Always show Header */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDisplay />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pdpc/:id" element={<PDPC />} />
        <Route path="/privacypolicy&termsconditions" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
<Footer/>
      <Analytics />
    </>
  );
}

export default App;
