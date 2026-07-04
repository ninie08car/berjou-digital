import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Devis from "./pages/Devis/Devis";
import Modeles from "./pages/Modeles/Modeles";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/modeles" element={<Modeles />} />
          <Route path="/services" element={<Services />} />

          {/* Page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
