import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: 'var(--green-deep)', color: 'var(--paper)', padding: '96px 48px 40px', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48, paddingBottom: 64,
          borderBottom: '1px solid rgba(244,239,230,0.15)'
        }}>
          <div>
            <div className="serif" style={{ fontSize: 56, fontStyle: 'italic', lineHeight: 1, fontWeight: 400, marginBottom: 16 }}>Trussogne</div>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(244,239,230,0.7)', maxWidth: 380 }}>
              Gîte de charme dans les Ardennes belges. Un havre de paix pour 6 à 9 voyageurs.
            </p>
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.5)' }}>Liens</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <li><Link to="/" style={{ opacity: 0.85 }}>Accueil</Link></li>
              <li><Link to="/le-gite" style={{ opacity: 0.85 }}>Le gîte</Link></li>
              <li><Link to="/activites" style={{ opacity: 0.85 }}>Activités</Link></li>
              <li><Link to="/galerie" style={{ opacity: 0.85 }}>Galerie</Link></li>
              <li><Link to="/a-propos" style={{ opacity: 0.85 }}>À propos</Link></li>
              <li><Link to="/contact" style={{ opacity: 0.85 }}>Contact</Link></li>
              <li><Link to="/conditions-generales" style={{ opacity: 0.85 }}>Conditions générales</Link></li>
            </ul>
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.5)' }}>Contact</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <li>+32 476 222 707</li>
              <li>trussogne@gmail.com</li>
              <li style={{ color: 'rgba(244,239,230,0.7)', lineHeight: 1.5, marginTop: 8 }}>
                Grande Trussogne, 9C<br />5561 Houyet, Belgique
              </li>
            </ul>
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.5)' }}>Suivez-nous</div>
            <img src="/assets/footer/Design-sans-titre-38.webp" alt="Carte de Belgique" style={{ width: '100%', maxWidth: 160, opacity: 0.7, marginBottom: 20 }} />
            <a href="#" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(244,239,230,0.25)', transition: 'border-color 0.2s, background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(244,239,230,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={{
          padding: '48px 0 36px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap',
          borderBottom: '1px solid rgba(244,239,230,0.15)'
        }}>
          <div className="mono-label" style={{ color: 'rgba(244,239,230,0.4)', flexShrink: 0 }}>Partenaires</div>
          {['1.webp', 'Logo-Gites-et-Chambre-dhotes-de-Wallonie.png', '4-1.webp', '3.webp', '5-1.webp'].map(f => (
            <div key={f} style={{ background: '#ffffff', borderRadius: 6, padding: '8px 12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={`/assets/footer/${f}`} alt="" style={{ width: 80, height: 'auto', objectFit: 'contain' }} />
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 36,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'rgba(244,239,230,0.5)', flexWrap: 'wrap', gap: 16
        }}>
          <div>© 2026 Gîte de Trussogne · Tous droits réservés</div>
          <div className="mono-label">50.2064°N · 5.0889°E · Houyet, BE</div>
        </div>

      </div>
    </footer>
  );
}
