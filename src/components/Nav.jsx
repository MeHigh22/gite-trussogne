import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ELLOHA_URL } from './BookingWidget';

export default function Nav({ scrolled, lightHero = false }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);

  // Au-dessus du hero (non scrollé) la nav est transparente sur image sombre :
  // logo + hamburger doivent être blancs. Une fois scrollé, fond clair → couleurs normales.
  // En mode `lightHero` (page sans image de hero), le fond est clair dès le départ → logo vert.
  const onDarkBg = lightHero ? false : !scrolled;

  const navLinks = [
    { to: '/',          label: 'Accueil' },
    { to: '/le-gite',   label: 'Le gîte' },
    { to: '/activites', label: 'Activités' },
    { to: '/galerie',   label: 'Galerie' },
    { to: '/a-propos',  label: 'À propos' },
    { to: '/contact',   label: 'Contact' },
  ];

  // Verrouille le scroll du body + focus + Escape quand le drawer est ouvert
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? '14px 48px' : '20px 48px',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(250,247,240,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/assets/logo.webp" alt="Trussogne" style={{
              height: isMobile ? (scrolled ? 44 : 52) : (scrolled ? 60 : 76),
              transition: 'height 0.4s ease, filter 0.4s ease',
              filter: onDarkBg ? 'brightness(0) invert(1)' : 'none',
            }} />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '10px 18px',
              border: '1px solid var(--green)',
              borderRadius: 999,
              background: 'var(--green)',
              color: 'var(--paper)',
              cursor: 'pointer', transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--green-deep)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}>
            <span className="mono-label" style={{ color: 'var(--paper)' }}>Menu</span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ display: 'block', width: 20, height: 1.5, background: 'var(--paper)' }} />
              <span style={{ display: 'block', width: 20, height: 1.5, background: 'var(--paper)' }} />
            </span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 60,
          background: 'rgba(10,14,9,0.5)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Drawer latéral droite */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: '' } : {})}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 61,
          width: 'min(420px, 86vw)',
          background: 'var(--green-deep)', color: 'var(--paper)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(.2,.7,.2,1), box-shadow 0.45s ease',
          boxShadow: menuOpen ? '-30px 0 60px -20px rgba(10,14,9,0.5)' : 'none',
          display: 'flex', flexDirection: 'column',
          padding: 'clamp(20px, 3vh, 28px) 32px clamp(24px, 4vh, 40px)',
          overflowY: 'auto',
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(20px, 5vh, 48px)' }}>
          <span className="mono-label" style={{ color: 'rgba(244,239,230,0.5)' }}>Navigation</span>
          <button
            ref={closeBtnRef}
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
            style={{
              width: 44, height: 44, borderRadius: '50%',
              border: '1px solid rgba(244,239,230,0.25)', background: 'transparent',
              color: 'var(--paper)', fontSize: 20, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(244,239,230,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', minHeight: 0 }}>
          {navLinks.map(({ to, label }, i) => (
            <Link key={to} to={to} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic', fontWeight: 400,
              fontSize: 'clamp(22px, 3.6vh, 38px)', lineHeight: 1.1,
              color: pathname === to ? 'var(--green-soft)' : 'var(--paper)',
              padding: 'clamp(8px, 1.4vh, 14px) 0',
              borderBottom: '1px solid rgba(244,239,230,0.12)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.4s ease ${0.1 + i * 0.05}s, transform 0.4s ease ${0.1 + i * 0.05}s`,
            }}>
              {label}
            </Link>
          ))}
        </div>

        <a href={ELLOHA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
          className="btn-primary" style={{ marginTop: 'clamp(20px, 3vh, 32px)', flexShrink: 0, justifyContent: 'center', background: 'var(--paper)', color: 'var(--green-deep)', padding: 'clamp(11px, 1.6vh, 14px) 24px', fontSize: 'clamp(12px, 1.5vh, 14px)' }}>
          Réserver en direct →
        </a>
        <div style={{ marginTop: 'clamp(16px, 2.4vh, 24px)', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="mono-label" style={{ color: 'rgba(244,239,230,0.5)' }}>Contact</div>
          <div style={{ fontSize: 14 }}>+32 476 222 707</div>
          <div style={{ fontSize: 14 }}>trussogne@gmail.com</div>
        </div>
      </aside>
    </>
  );
}
