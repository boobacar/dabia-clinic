import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RendezVous from "./pages/RendezVous";
import Personnel from "./pages/Personnel";
import CompetenceDetail from "./pages/CompetenceDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Competences from "./pages/Competences";
import ScrollToTop from "./components/ScrollToTop";
import Assurances from "./pages/Assurances";
import PostVisite from "./pages/PostVisite";
import ZoneEnfants from "./pages/ZoneEnfants";
import Rejoindre from "./pages/Rejoindre";
import Technologie from "./pages/Technologie";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/competences/:slug" element={<CompetenceDetail />} />
        <Route path="/all-competences" element={<Competences />} />
        <Route path="/infos/assurances" element={<Assurances />} />
        <Route path="/infos/post-visite" element={<PostVisite />} />
        <Route path="/infos/enfants" element={<ZoneEnfants />} />
        <Route path="/rejoindre" element={<Rejoindre />} />
        <Route path="/infos/technologie" element={<Technologie />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
