import { Link, useLocation } from 'react-router-dom';

export default function Nav({ scrolled, dark = false }) {
  const { pathname } = useLocation();

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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '14px 48px' : '24px 48px',
      transition: 'all 0.4s ease',
      background: bg,
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: borderColor,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'var(--green)', color: 'var(--paper)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontStyle: 'italic'
        }}>T</span>
        <div style={{ lineHeight: 1.1 }}>
          <div className="serif" style={{ fontSize: 18, fontWeight: 500, fontStyle: 'italic', color: linkColor }}>Trussogne</div>
          <div className="mono-label" style={{ fontSize: 9, color: dark ? 'rgba(244,239,230,0.5)' : 'var(--ink-soft)' }}>Gîte · Ardennes 1976</div>
        </div>
      </Link>

      <div className="nav-desktop" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="nav-link"
            style={{
              color: pathname === to ? 'var(--green)' : linkColor,
              fontWeight: pathname === to ? 500 : undefined
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      <Link to="/#book" className="btn-primary" style={{ padding: '12px 22px', fontSize: 13 }}>
        Réserver <span style={{ fontSize: 14 }}>→</span>
      </Link>
    </nav>
  );
}
