import { Routes, Route } from "react-router-dom";
import Home from "./pages/3DModel";
import Header from "./components/Header";
import ProductDisplay from "./pages/PDP";
import Checkout from "./pages/Checkout";
import PDPC from "./pages/PDPC"; // <-- import your PDPC component
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDisplay />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pdpc/:id" element={<PDPC />} /> {/* <-- add this */}
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
