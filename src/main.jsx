import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Home     from './pages/Home';
import Gite     from './pages/Gite';
import Activites from './pages/Activites';
import APropos  from './pages/APropos';
import Galerie  from './pages/Galerie';
import Contact  from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/le-gite"   element={<Gite />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/a-propos"  element={<APropos />} />
        <Route path="/galerie"   element={<Galerie />} />
        <Route path="/contact"   element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
