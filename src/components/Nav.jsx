import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ELLOHA_URL } from './BookingWidget';

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth <= 900);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth <= 900);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
}

function useFontToggle() {
  const [isTenor, setIsTenor] = useState(() => localStorage.getItem('font') === 'tenor');
  useEffect(() => {
    if (isTenor) {
      document.documentElement.setAttribute('data-font', 'tenor');
      localStorage.setItem('font', 'tenor');
    } else {
      document.documentElement.removeAttribute('data-font');
      localStorage.removeItem('font');
    }
  }, [isTenor]);
  return [isTenor, setIsTenor];
}

export default function Nav({ scrolled, dark = false }) {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTenor, setIsTenor] = useFontToggle();

  const bg = dark
    ? scrolled ? 'rgba(26, 31, 23, 0.92)' : 'transparent'
    : scrolled ? 'rgba(250, 247, 240, 0.92)' : 'transparent';

  const borderColor = dark
    ? scrolled ? 'rgba(244,239,230,0.08)' : 'transparent'
    : scrolled ? '1px solid var(--line)' : '1px solid transparent';

  const linkColor = dark ? 'rgba(244,239,230,0.8)' : 'var(--ink)';

  const navLinks = [
    { to: '/',          label: 'Accueil' },
    { to: '/le-gite',   label: 'Le gîte' },
    { to: '/activites', label: 'Activités' },
    { to: '/galerie',   label: 'Galerie' },
    { to: '/a-propos',  label: 'À propos' },
    { to: '/contact',   label: 'Contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: isMobile ? '10px 20px' : scrolled ? '14px 48px' : '24px 48px',
        transition: 'all 0.4s ease',
        background: menuOpen ? 'rgba(250,247,240,0.98)' : bg,
        backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        borderBottom: menuOpen ? '1px solid var(--line)' : borderColor,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }} onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo.webp" alt="Trussogne" style={{ height: isMobile ? 44 : 72 }} />
        </Link>

        {!isMobile && (
          <div className="nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="nav-link" style={{
                color: pathname === to ? 'var(--green)' : linkColor,
                fontWeight: pathname === to ? 500 : undefined
              }}>
                {label}
              </Link>
            ))}
          </div>
        )}

        {isMobile ? (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, padding: 8
          }}>
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--green)' : (dark ? 'var(--paper)' : 'var(--ink)'), transition: 'transform 0.3s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--green)' : (dark ? 'var(--paper)' : 'var(--ink)'), transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--green)' : (dark ? 'var(--paper)' : 'var(--ink)'), transition: 'transform 0.3s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={() => setIsTenor(v => !v)}
              title={isTenor ? 'Basculer vers Playfair Display' : 'Basculer vers Tenor Sans'}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 14px',
                border: '1px solid var(--line)',
                borderRadius: 999,
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: isTenor ? 'var(--paper)' : 'var(--ink-soft)',
                background: isTenor ? 'var(--green)' : 'transparent',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
            >
              <span style={{
                fontSize: 13,
                fontFamily: isTenor ? "'Tenor Sans', sans-serif" : "'Playfair Display', serif",
                fontStyle: isTenor ? 'normal' : 'italic',
              }}>
                {isTenor ? 'TS' : 'PD'}
              </span>
              {isTenor ? 'Tenor Sans' : 'Playfair'}
            </button>
            <a href={ELLOHA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 24px', fontSize: 15 }}>
              Réserver <span style={{ fontSize: 14 }}>→</span>
            </a>
          </div>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, bottom: 0, zIndex: 49,
          background: 'rgba(250,247,240,0.98)', backdropFilter: 'blur(14px)',
          display: 'flex', flexDirection: 'column', padding: '40px 28px',
          gap: 0
        }}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
              fontSize: 28, fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400, color: pathname === to ? 'var(--green)' : 'var(--ink)',
              padding: '16px 0', borderBottom: '1px solid var(--line)',
              fontStyle: 'italic'
            }}>
              {label}
            </Link>
          ))}
          <a href={ELLOHA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: 40, justifyContent: 'center' }}>
            Réserver →
          </a>
        </div>
      )}
    </>
  );
}
