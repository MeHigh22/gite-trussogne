import { useState, useEffect } from 'react';

function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (window.innerWidth <= 600) return 'mobile';
    if (window.innerWidth <= 900) return 'tablet';
    return 'desktop';
  });
  useEffect(() => {
    const fn = () => {
      if (window.innerWidth <= 600) setBp('mobile');
      else if (window.innerWidth <= 900) setBp('tablet');
      else setBp('desktop');
    };
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return bp;
}

// Grande image plein cadre (50–60 vh) avec le nom de la page en overlay haut-gauche,
// façon slider d'accueil. Les textes/CTA se placent en dessous par la page appelante.
export default function PageHero({ image, alt, title, subtitle, imagePosition = 'center' }) {
  const bp = useBreakpoint();
  return (
    <div className="page-hero" style={{
      position: 'relative',
      minHeight: bp === 'mobile' ? 480 : 560,
      overflow: 'hidden',
    }}>
      <img src={image} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition }} />
      {/* Overlay cinématique : voile vert très léger + dégradé sombre discret en bas pour la lisibilité du titre */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,31,23,0.15)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,14,9,0.55) 0%, rgba(10,14,9,0.28) 20%, rgba(10,14,9,0.04) 42%, rgba(10,14,9,0) 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: bp === 'mobile' ? '88px 20px 32px' : bp === 'tablet' ? '100px 32px 40px' : '120px 48px 56px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <h1 className="serif" style={{
            fontSize: bp === 'mobile' ? 'clamp(34px, 8vw, 44px)' : 'clamp(44px, 6vw, 78px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            color: '#fff',
            textShadow: '0 2px 24px rgba(10,14,9,0.45)',
            marginBottom: subtitle ? 12 : 0,
          }}>
            {title}
          </h1>
          {subtitle && (
            <p className="serif" style={{ fontSize: bp === 'mobile' ? 18 : 26, fontStyle: 'italic', color: '#fff', fontWeight: 400, textShadow: '0 1px 16px rgba(10,14,9,0.4)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
