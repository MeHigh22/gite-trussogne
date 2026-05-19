import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home     from './pages/Home';
import Gite     from './pages/Gite';
import Activites from './pages/Activites';
import APropos  from './pages/APropos';
import Galerie  from './pages/Galerie';
import Contact  from './pages/Contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
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
