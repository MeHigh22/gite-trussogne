import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function AboutHero() {
  return (
    <section style={{ minHeight: '85vh', padding: '180px 48px 120px', display: 'flex', alignItems: 'center', background: 'var(--paper)', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.2">
                  <path d="M12 22 C 6 18, 4 12, 6 6 C 10 8, 14 8, 18 6 C 20 12, 18 18, 12 22 Z"/><path d="M12 22 L 12 8" />
                </svg>
              </span>
              <div>
                <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Découvrez notre histoire</div>
                <div className="mono-label" style={{ color: 'var(--green)', marginTop: 2 }}>Houyet, Ardennes belges</div>
              </div>
            </div>
            <h1 className="serif" style={{ fontSize: 'clamp(56px, 7vw, 110px)', lineHeight: 0.95, fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 28 }}>
              À propos de<br /><em style={{ color: 'var(--green)' }}>Trussogne.</em>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 480, marginBottom: 44 }}>
              Trussogne est né d'une passion pour l'authenticité et d'un profond respect pour la nature des Ardennes.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#philosophie" className="btn-primary">Notre philosophie <span>↓</span></a>
              <Link to="/le-gite" className="btn-ghost">Découvrir le gîte</Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="ph" data-label="PORTRAIT · Sandra, votre hôtesse" style={{ aspectRatio: '4/5', borderRadius: 4 }}></div>
            <div style={{ position: 'absolute', bottom: -32, left: -40, background: 'var(--paper)', padding: '24px 28px', border: '1px solid var(--line)', maxWidth: 300 }}>
              <div className="serif" style={{ fontSize: 48, lineHeight: 0.9, fontStyle: 'italic', color: 'var(--green)', marginBottom: 8 }}>Sandra</div>
              <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 10 }}>Votre hôtesse</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink-soft)' }}>Passionnée et attentionnée, elle veille à chaque détail pour que votre séjour soit inoubliable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section style={{ padding: '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 96, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 140, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="ph" data-label="MAISON · construction" style={{ aspectRatio: '4/3', borderRadius: 4 }}></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="ph" data-label="DÉTAIL · pierre" style={{ aspectRatio: '1/1', borderRadius: 4 }}></div>
              <div className="ph" data-label="JARDIN · vue" style={{ aspectRatio: '1/1', borderRadius: 4 }}></div>
            </div>
          </div>
          <div>
            <div className="sec-num" style={{ marginBottom: 20 }}>· 01 — NOTRE HISTOIRE ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 40 }}>
              Le fruit d'un rêve, devenu <em style={{ color: 'var(--green)' }}>havre de paix.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)' }}>Située dans un écrin de verdure à Houyet, ce gîte est le fruit d'un rêve : un havre de paix où le temps s'arrête. En famille ou entre amis, reconnectez-vous à l'essentiel dans le calme d'un jardin avec vue sur la beauté naturelle.</p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)' }}>Notre bâtisse incarne le caractère d'antan tout en offrant le confort moderne que nos hôtes méritent. Chaque matériau a été choisi avec soin, chaque espace pensé pour maximiser la lumière et le lien avec la nature.</p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)' }}>À Trussogne, chacun peut se reconnecter à l'essentiel — le crépitement d'un feu, le bois fendu, les longues marches, et le silence des sapins.</p>
            </div>
            <div style={{ marginTop: 56, padding: '40px 44px', background: 'var(--paper)', borderLeft: '3px solid var(--green)' }}>
              <p className="serif" style={{ fontSize: 28, lineHeight: 1.3, fontStyle: 'italic', color: 'var(--ink)', marginBottom: 16 }}>
                "Le luxe véritable réside dans la simplicité et l'authenticité."
              </p>
              <div className="mono-label" style={{ color: 'var(--green)' }}>— Notre philosophie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    { num: '01', title: 'La reconnexion avec la nature', desc: "Des espaces ouverts sur le paysage grâce à de grandes baies vitrées, une terrasse couverte offrant une vue imprenable sur les collines des Ardennes.", img: 'NATURE · baies vitrées', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.2"><path d="M12 22 C 6 18, 4 12, 6 6 C 10 8, 14 8, 18 6 C 20 12, 18 18, 12 22 Z"/><path d="M12 22 L 12 8" /></svg> },
    { num: '02', title: 'Les moments de partage', desc: "Une architecture fluide et conviviale permettant à tous de se retrouver, que ce soit en famille ou entre amis. Partagez un repas dans notre cuisine équipée d'une cuisinière La Cornue.", img: 'PARTAGE · cuisine feu', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { num: '03', title: 'Le bien-être et la quiétude', desc: "Des chambres spacieuses avec salles de bain privatives, des espaces de détente soigneusement aménagés, et le calme omniprésent de notre environnement naturel.", img: 'QUIÉTUDE · chambre', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
  ];

  return (
    <section id="philosophie" style={{ padding: '160px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 96 }}>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — NOTRE PHILOSOPHIE ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 800, margin: '0 auto' }}>
            Trois piliers, <em style={{ color: 'var(--green)' }}>une vision.</em>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.3fr 1fr' : '1fr 1.3fr', gap: 80, alignItems: 'center', padding: '80px 0', borderBottom: i < pillars.length - 1 ? '1px solid var(--line)' : 'none' }}>
              {i % 2 === 0 && <div className="ph" data-label={p.img} style={{ aspectRatio: '16/10', borderRadius: 4 }}></div>}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.icon}</div>
                  <div className="sec-num">· {p.num} ·</div>
                </div>
                <h3 className="serif" style={{ fontSize: 40, lineHeight: 1.1, fontWeight: 400, marginBottom: 20 }}>{p.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 480 }}>{p.desc}</p>
              </div>
              {i % 2 !== 0 && <div className="ph" data-label={p.img} style={{ aspectRatio: '16/10', borderRadius: 4 }}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section style={{ padding: '120px 48px', background: 'var(--green)', color: 'var(--paper)', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="serif" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.15, fontStyle: 'italic', fontWeight: 400 }}>
          Trussogne — là où la nature et le confort se rencontrent pour créer des moments d'exception.
        </div>
      </div>
    </section>
  );
}

export default function APropos() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <AboutHero />
      <Story />
      <Pillars />
      <Manifesto />
      <section style={{ padding: '160px 48px', background: 'var(--paper)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 28 }}>
            Vivez l'expérience <em style={{ color: 'var(--green)' }}>Trussogne.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 480, margin: '0 auto 44px' }}>
            Réservez en direct pour un séjour authentique dans les Ardennes belges. Sandra vous attend.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#book" className="btn-primary" style={{ fontSize: 16, padding: '22px 36px' }}>Réserver en direct →</Link>
            <Link to="/contact" className="btn-ghost">Nous contacter</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
