import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RendezVous from "./pages/RendezVous";
import Personnel from "./pages/Personnel";
import CompetenceDetail from "./pages/CompetenceDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Competences from "./pages/Competences";
import ScrollToTop from "./components/ScrollToTop"; // ← ici

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/competences/:slug" element={<CompetenceDetail />} />
        <Route path="/all-competences" element={<Competences />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
