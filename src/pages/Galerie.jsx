import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80', cat: 'exterieur', caption: 'Maison ardennaise au crépuscule' },
  { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80', cat: 'exterieur', caption: 'Vallée brumeuse au matin' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', cat: 'nature', caption: 'Panorama sur les collines' },
  { src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80', cat: 'exterieur', caption: 'Façade en pierre et volets bois' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', cat: 'interieur', caption: 'Salon lumineux, feu ouvert' },
  { src: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80', cat: 'interieur', caption: 'Cuisine équipée, plan de travail bois' },
  { src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80', cat: 'interieur', caption: 'Chambre Diane — atmosphère feutrée' },
  { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', cat: 'interieur', caption: 'Salle de bain, pierre naturelle' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', cat: 'nature', caption: 'Forêt de sapins, lumière filtrée' },
  { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&q=80', cat: 'nature', caption: 'Cerfs dans la brume matinale' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', cat: 'nature', caption: 'Vallée de la Lesse au lever du soleil' },
  { src: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&q=80', cat: 'nature', caption: 'Sentier forestier en automne' },
  { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', cat: 'details', caption: 'Table dressée, lumière douce' },
  { src: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&q=80', cat: 'nature', caption: 'Collines verdoyantes, ciel d\'été' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', cat: 'exterieur', caption: 'Terrasse et vue sur la vallée' },
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', cat: 'exterieur', caption: 'Jardin et façade arrière' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80', cat: 'interieur', caption: 'Chambre Verte — accès jardin' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', cat: 'nature', caption: 'Prairie au petit matin' },
  { src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80', cat: 'interieur', caption: 'Poutres apparentes, lit douillet' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', cat: 'nature', caption: 'Sommet au-dessus des nuages' },
  { src: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80', cat: 'details', caption: 'Coin lecture, plaid et thé' },
  { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', cat: 'exterieur', caption: 'Allée d\'arbres en automne' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', cat: 'details', caption: 'Petit-déjeuner en terrasse' },
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
      <Nav scrolled={scrolled} dark />

      {/* Hero */}
      <section className="gal-hero" style={{ padding: '180px 48px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="mono-label" style={{ color: 'rgba(244,239,230,0.45)', marginBottom: 24 }}>· Gîte de Trussogne · Houyet, Ardennes belges ·</div>
          <h1 className="serif" style={{ fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.95, fontWeight: 400, marginBottom: 24 }}>
            <span style={{ color: 'var(--green-soft)' }}>Galerie</span> photos.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(244,239,230,0.6)', maxWidth: 480, margin: '0 auto' }}>
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
        <span className="mono-label" style={{ alignSelf: 'center', marginLeft: 16, color: 'rgba(244,239,230,0.35)' }}>
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
      <section className="gal-cta" style={{ padding: '120px 48px', textAlign: 'center', borderTop: '1px solid rgba(244,239,230,0.08)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 32 }}>
            Réservez votre parenthèse.
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#book" className="btn-primary" style={{ fontSize: 16, padding: '22px 36px' }}>Réserver en direct →</Link>
            <Link to="/" className="btn-ghost" style={{ borderColor: 'rgba(244,239,230,0.25)', color: 'rgba(244,239,230,0.8)' }}>Retour à l'accueil</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gal-footer" style={{ padding: '64px 48px 40px', borderTop: '1px solid rgba(244,239,230,0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <span className="serif" style={{ fontSize: 32, fontStyle: 'italic' }}>Trussogne <span style={{ fontSize: 13, color: 'rgba(244,239,230,0.35)', fontStyle: 'normal', fontFamily: 'DM Sans, sans-serif' }}>· Galerie</span></span>
          <div style={{ display: 'flex', gap: 32, fontSize: 13, color: 'rgba(244,239,230,0.6)' }}>
            <Link to="/" className="ulink">Accueil</Link>
            <Link to="/le-gite" className="ulink">Le gîte</Link>
            <Link to="/activites" className="ulink">Activités</Link>
            <Link to="/#book" className="ulink">Réserver</Link>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: '28px auto 0', paddingTop: 28, borderTop: '1px solid rgba(244,239,230,0.08)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(244,239,230,0.25)', flexWrap: 'wrap', gap: 16 }}>
          <span>© 2026 Gîte de Trussogne · Tous droits réservés</span>
          <span className="mono-label">Grande Trussogne, 9C · 5561 Houyet, BE</span>
        </div>
      </footer>

      {lbIndex !== null && <Lightbox photos={filtered} index={lbIndex} onClose={() => setLbIndex(null)} onNav={navLb} />}

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
