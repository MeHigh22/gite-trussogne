import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { ELLOHA_URL } from '../components/BookingWidget';

const PHOTOS = [
  // Extérieur & Gîte
  { src: '/assets/photo1.webp',                              cat: 'exterieur', caption: 'Le gîte de Trussogne' },
  { src: '/assets/le-gite/le-gite.webp',                    cat: 'exterieur', caption: 'Façade du gîte' },
  { src: '/assets/le-gite/le-gite-2.webp',                  cat: 'exterieur', caption: 'Le gîte — vue d\'ensemble' },
  { src: '/assets/le-gite/le-gite-3.webp',                  cat: 'exterieur', caption: 'Le gîte — détail extérieur' },
  { src: '/assets/Chambre-Chapelle-scaled.webp',             cat: 'exterieur', caption: 'Vue sur la chapelle' },
  // Nature & Saisons
  { src: '/assets/quatreSaisons/brume.webp',                 cat: 'nature', caption: 'Brume matinale sur la vallée' },
  { src: '/assets/quatreSaisons/ete.webp',                   cat: 'nature', caption: 'Été à Trussogne' },
  { src: '/assets/quatreSaisons/hiver1.webp',                cat: 'nature', caption: 'Hiver en Ardennes' },
  { src: '/assets/quatreSaisons/printemps.webp',             cat: 'nature', caption: 'Printemps en fleurs' },
  { src: '/assets/Marcassins-Trussogne.webp',                cat: 'nature', caption: 'Marcassins à Trussogne' },
  { src: '/assets/Photo-Lievres-amoureux-Tru.webp',          cat: 'nature', caption: 'Lièvres amoureux' },
  { src: '/assets/ane-trussogne.webp',                       cat: 'nature', caption: "L'âne de Trussogne" },
  // Chambres
  { src: '/assets/quatreChambres/Chambre-Chapelle-scaled.webp', cat: 'interieur', caption: 'Chambre Chapelle' },
  { src: '/assets/quatreChambres/chapelle1.webp',            cat: 'interieur', caption: 'Chambre Chapelle — détail' },
  { src: '/assets/quatreChambres/chapelle3.webp',            cat: 'interieur', caption: 'Chambre Chapelle — ambiance' },
  { src: '/assets/quatreChambres/ChambreAne.webp',           cat: 'interieur', caption: 'Chambre de l\'Âne' },
  { src: '/assets/quatreChambres/ane1.webp',                 cat: 'interieur', caption: 'Chambre de l\'Âne — vue' },
  { src: '/assets/quatreChambres/ane2.webp',                 cat: 'interieur', caption: 'Chambre de l\'Âne — détail' },
  { src: '/assets/quatreChambres/ChambreDiane.webp',         cat: 'interieur', caption: 'Chambre Diane' },
  { src: '/assets/quatreChambres/diane2.webp',               cat: 'interieur', caption: 'Chambre Diane — ambiance' },
  { src: '/assets/quatreChambres/diane3.webp',               cat: 'interieur', caption: 'Chambre Diane — détail' },
  { src: '/assets/quatreChambres/ChambreVerte.webp',         cat: 'interieur', caption: 'Chambre Verte' },
  { src: '/assets/quatreChambres/verte1.webp',               cat: 'interieur', caption: 'Chambre Verte — vue' },
  { src: '/assets/quatreChambres/verte2.webp',               cat: 'interieur', caption: 'Chambre Verte — détail' },
];

const FILTERS = [
  { id: 'all',       label: 'Toutes les photos' },
  { id: 'exterieur', label: 'Extérieur' },
  { id: 'interieur', label: 'Intérieur' },
  { id: 'nature',    label: 'Nature' },
  { id: 'details',   label: 'Détails & Ambiance' },
];

function Lightbox({ photos, index, onClose, onNav }) {
  const photo = photos[index];
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onNav]);

  if (!photo) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>
      <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); onNav(-1); }}>←</button>
      <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); onNav(1); }}>→</button>
      <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
        <img src={photo.src} alt={photo.caption} />
        <div style={{ marginTop: 20 }}>
          <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', marginBottom: 6 }}>{photo.caption}</div>
          <div className="mono-label" style={{ color: 'rgba(244,239,230,0.4)' }}>{index + 1} / {photos.length}</div>
        </div>
      </div>
    </div>
  );
}

export default function Galerie() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('all');
  const [lbIndex, setLbIndex] = useState(null);

  const filtered = filter === 'all' ? PHOTOS : PHOTOS.filter(p => p.cat === filter);

  const navLb = useCallback((dir) => {
    setLbIndex(prev => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return filtered.length - 1;
      if (next >= filtered.length) return 0;
      return next;
    });
  }, [filtered.length]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="galerie-page">
      <Nav scrolled={scrolled} lightHero />

      {/* Hero */}
      <section className="gal-hero" style={{ padding: '120px 48px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>

          <h1 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 86px)', lineHeight: 0.95, fontWeight: 400, marginBottom: 24 }}>
            <span style={{ color: 'var(--green)' }}>Galerie</span> photos
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 480, margin: '0 auto' }}>
            Découvrez Trussogne en images — les espaces, la nature, les détails qui font le charme de ce lieu d'exception.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="gal-filters" style={{ display: 'flex', gap: 10, justifyContent: 'center', padding: '0 48px 56px', flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button key={f.id} className={'gal-filter' + (filter === f.id ? ' active' : '')} onClick={() => { setFilter(f.id); setLbIndex(null); }}>
            {f.label}
          </button>
        ))}
        <span className="mono-label" style={{ alignSelf: 'center', marginLeft: 16, color: 'var(--ink-soft)', opacity: 0.5 }}>
          {filtered.length} photo{filtered.length > 1 ? 's' : ''}
        </span>
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid" style={{ paddingBottom: 120 }}>
        {filtered.map((photo, i) => (
          <div key={photo.src + filter} className="gallery-item" onClick={() => setLbIndex(i)} style={{ animation: `fadeUp 0.6s ease ${i * 0.04}s both` }}>
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <div className="overlay">
              <div className="serif" style={{ fontSize: 20, fontStyle: 'italic', marginBottom: 4 }}>{photo.caption}</div>
              <div className="mono-label" style={{ fontSize: 9, color: 'rgba(244,239,230,0.6)' }}>
                {photo.cat === 'exterieur' ? 'Extérieur' : photo.cat === 'interieur' ? 'Intérieur' : photo.cat === 'nature' ? 'Nature' : 'Détails'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="gal-cta" style={{ padding: '60px 48px', textAlign: 'center', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 32 }}>
            Réservez votre parenthèse
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={ELLOHA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: '16px 28px' }}>Réserver en direct</a>
            <Link to="/" className="btn-ghost" style={{ fontSize: 15, padding: '16px 24px' }}>Retour à l'accueil</Link>
          </div>
        </div>
      </section>

      <Footer />

      {lbIndex !== null && <Lightbox photos={filtered} index={lbIndex} onClose={() => setLbIndex(null)} onNav={navLb} />}

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
