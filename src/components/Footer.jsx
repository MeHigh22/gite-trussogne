import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: 'var(--green-deep)', color: 'var(--paper)', padding: '96px 48px 40px' }}>
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
              <li><Link to="/" className="ulink">Accueil</Link></li>
              <li><Link to="/le-gite" className="ulink">Le gîte</Link></li>
              <li><Link to="/activites" className="ulink">Activités</Link></li>
              <li><Link to="/galerie" className="ulink">Galerie</Link></li>
              <li><Link to="/a-propos" className="ulink">À propos</Link></li>
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
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <li><a href="#" className="ulink">Instagram</a></li>
              <li><a href="#" className="ulink">Facebook</a></li>
              <li><Link to="/contact" className="ulink">Nous contacter</Link></li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: 36,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'rgba(244,239,230,0.5)', flexWrap: 'wrap', gap: 16
        }}>
          <div>© 2026 Gîte de Trussogne · Tous droits réservés</div>
          <div className="mono-label">50.183°N · 5.000°E · Houyet, BE</div>
        </div>

        <div className="serif" style={{
          fontSize: 'clamp(120px, 18vw, 280px)',
          lineHeight: 0.9,
          fontStyle: 'italic',
          fontWeight: 400,
          letterSpacing: '-0.04em',
          color: 'rgba(244,239,230,0.07)',
          marginTop: 64,
          textAlign: 'center',
          userSelect: 'none'
        }}>
          Trussogne
        </div>
      </div>
    </footer>
  );
}
