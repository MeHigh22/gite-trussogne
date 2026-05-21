import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BookingWidgetCore, { buildEllohaUrl, ELLOHA_URL } from '../components/BookingWidget';

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

function Stat({ n, label }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 36, lineHeight: 1, color: 'var(--green)' }}>{n}</div>
      <div className="mono-label" style={{ marginTop: 8, color: 'var(--ink-soft)' }}>{label}</div>
    </div>
  );
}

function Hero() {
  const bp = useBreakpoint();
  return (
    <section id="top" style={{
      minHeight: '100vh',
      padding: bp === 'mobile' ? '80px 20px 40px' : bp === 'tablet' ? '90px 32px 60px' : '140px 48px 80px',
      position: 'relative',
      background: 'var(--paper)'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: bp === 'desktop' ? '2fr 3fr' : '1fr', gap: 40, alignItems: 'center', minHeight: 'calc(100vh - 220px)' }}>
        <div>
          <h1 className="serif" style={{
            fontSize: bp === 'mobile' ? 'clamp(36px, 9vw, 52px)' : 'clamp(48px, 5.5vw, 88px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            color: 'var(--ink)',
            marginBottom: 24,
          }}>
            Gîte de <span style={{ color: 'var(--green)' }}>charme</span>,<br/>
            silence <span style={{ opacity: 0.4 }}>&amp;&nbsp;espace.</span>
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-soft)', marginBottom: bp === 'mobile' ? 24 : 44 }}>
            Niché au cœur des Ardennes belges à Houyet, un havre de paix pour 6 à 9 personnes, où le temps semble s'arrêter et où l'on se reconnecte à l'essentiel.
          </p>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: bp === 'mobile' ? 'nowrap' : 'wrap' }}>
            <a href={ELLOHA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={bp === 'mobile' ? { padding: '9px 14px', fontSize: 13 } : {}}>
              {bp === 'mobile' ? 'Réserver en direct' : <span>Réserver en direct →</span>}
            </a>
            <a href="#story" className="btn-ghost" style={bp === 'mobile' ? { padding: '8px 12px', fontSize: 13 } : {}}>Découvrir le lieu</a>
          </div>

          {bp !== 'desktop' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 32 }}>
              <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '16/9' }}>
                <img src="/assets/photo1.webp" alt="Maison ardennaise" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '1/1' }}>
                  <img src="/assets/Marcassins-Trussogne.webp" alt="Marcassins à Trussogne" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '1/1' }}>
                  <img src="/assets/Photo-Lievres-amoureux-Tru.webp" alt="Lièvres amoureux à Trussogne" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: bp === 'mobile' ? 24 : 48, marginTop: 48, paddingTop: 36, borderTop: '1px solid var(--line)', flexWrap: 'wrap' }}>
            <Stat n="6—9" label="Voyageurs" />
            <Stat n="04" label="Chambres" />
            <Stat n="550" label="ha de nature" />
            <Stat n="1976" label="Maison ardennaise" />
          </div>
        </div>

        {bp === 'desktop' && (
          <div style={{ height: 'min(720px, 80vh)', position: 'relative' }}>
            <div className="hero-grid">
              <div className="h-main" style={{ borderRadius: 4, overflow: 'hidden' }}><img src="/assets/photo1.webp" alt="Maison ardennaise" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ borderRadius: 4, overflow: 'hidden' }}><img src="/assets/Marcassins-Trussogne.webp" alt="Marcassins à Trussogne" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div style={{ borderRadius: 4, overflow: 'hidden' }}><img src="/assets/Photo-Lievres-amoureux-Tru.webp" alt="Lièvres amoureux à Trussogne" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            </div>
            <div style={{
              position: 'absolute', bottom: -24, left: -24,
              background: 'var(--paper)', padding: '20px 24px',
              border: '1px solid var(--line)', maxWidth: 280
            }}>
              <div className="mono-label" style={{ color: 'var(--green)', marginBottom: 8 }}>nº 01 — La maison</div>
              <div className="serif" style={{ fontSize: 22, lineHeight: 1.2, fontStyle: 'italic' }}>
                "Une vue parmi les plus belles de Belgique."
              </div>
              <div className="mono-label" style={{ marginTop: 10, fontSize: 9, color: 'var(--ink-soft)' }}>— Monika S., voyageuse</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function HomeBanner() {
  const bp = useBreakpoint();
  return (
    <section style={{ background: 'var(--paper)', padding: bp === 'mobile' ? '24px 16px 32px' : bp === 'tablet' ? '32px 32px 40px' : '32px 48px 40px' }}>
      <BookingWidgetCore />
    </section>
  );
}

function Sensory() {
  const bp = useBreakpoint();
  const senses = [
    { num: '01', label: 'Printemps', caption: "Sentez l'odeur de la pluie après une après-midi chaude.", photo: '/assets/quatreSaisons/printemps.webp' },
    { num: '02', label: 'Été',      caption: "Une expérience sensorielle au cœur de la pleine nature.", photo: '/assets/quatreSaisons/ete.webp' },
    { num: '03', label: 'Automne',  caption: "Écoutez le chant des oiseaux dans les sapins.",           photo: '/assets/quatreSaisons/brume.webp' },
    { num: '04', label: 'Hiver',    caption: "Laissez-vous envelopper par le calme de la saison.",      photo: '/assets/quatreSaisons/hiver1.webp' },
  ];
  const [active, setActive] = useState(0);
  const current = senses[active];

  return (
    <section style={{ background: 'var(--green-deep)', color: 'var(--paper)', padding: 0, position: 'relative' }}>
      <div style={{ position: 'relative', height: '85vh', minHeight: 560, overflow: 'hidden' }}>
        {senses.map((s, i) => (
          <img key={i} src={s.photo} alt={s.label} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            opacity: active === i ? 1 : 0,
            transform: active === i ? 'scale(1)' : 'scale(1.05)',
            transition: 'opacity 1.2s ease, transform 1.8s ease',
          }} />
        ))}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,58,24,0.7) 0%, rgba(31,58,24,0.3) 40%, rgba(31,58,24,0.3) 50%, rgba(31,58,24,0.85) 100%)', pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: bp === 'desktop' ? '80px 48px 0' : '60px 24px 0' }}>
          <div className="sec-num" style={{ marginBottom: 16, color: '#fff' }}>· UNE EXPÉRIENCE SENSORIELLE ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', lineHeight: 1.0, fontWeight: 400, color: '#fff' }}>
            Quatre saisons, un lieu.
          </h2>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: bp === 'desktop' ? '0 48px 64px' : '0 24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: bp === 'mobile' ? 24 : 48, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 480 }}>
            <p className="serif" style={{ fontSize: bp === 'desktop' ? 28 : 20, lineHeight: 1.25, fontWeight: 400, marginBottom: 12, color: '#fff' }}>{current.caption}</p>
            <p style={{ fontSize: 14, color: bp === 'mobile' ? 'rgba(244,239,230,0.85)' : 'rgba(244,239,230,0.6)', lineHeight: 1.5 }}>
              Trussogne se vit autant qu'elle se regarde. Les fenêtres ouvertes, le bois qui crépite, le silence des Ardennes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, width: bp === 'mobile' ? '100%' : 'auto' }}>
            {senses.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: bp === 'mobile' ? '12px 8px' : '16px 28px',
                background: active === i ? 'rgba(244,239,230,0.15)' : 'transparent',
                border: 'none', cursor: 'pointer',
                borderBottom: active === i ? '2px solid var(--paper)' : '2px solid transparent',
                transition: 'all 0.4s ease',
                textAlign: 'left',
              }}>
                <div className="mono-label" style={{ fontSize: 9, color: active === i ? 'var(--paper)' : 'rgba(244,239,230,0.5)', marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: bp === 'mobile' ? 13 : 14, fontWeight: 500, color: active === i ? '#fff' : 'rgba(244,239,230,0.65)', letterSpacing: '0.02em' }}>{s.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const bp = useBreakpoint();
  return (
    <section id="story" style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '160px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: bp === 'desktop' ? '1fr 1.2fr' : '1fr', gap: bp === 'mobile' ? 32 : bp === 'tablet' ? 48 : 96, alignItems: 'center' }}>
        <img src="/assets/ane-trussogne.webp" alt="L'âne de Trussogne" style={{ aspectRatio: '4/5', borderRadius: 4, width: '100%', objectFit: 'cover' }} />
        <div>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — NOTRE HISTOIRE ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, marginBottom: 32, fontWeight: 400 }}>
            Le fruit d'un rêve, devenu havre de paix.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 24, maxWidth: 560 }}>
            Nichée au cœur d'un environnement naturel préservé à Houyet dans nos Ardennes, notre propriété est née d'une envie simple : créer un lieu où le temps ralentit, où l'on respire profondément, et où la beauté discrète de la région se révèle au fil des heures.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 560 }}>
            À Trussogne, chacun peut se reconnecter à l'essentiel — le crépitement d'un feu, le bois fendu, les longues marches, et le silence des sapins.
          </p>
          <div style={{ marginTop: 56, display: 'flex', gap: 64, flexWrap: 'wrap' }}>
            <div>
              <div className="serif" style={{ fontSize: 56, color: 'var(--green)', lineHeight: 1 }}>Sandra</div>
              <div className="mono-label" style={{ marginTop: 8, color: 'var(--ink-soft)' }}>Votre hôtesse</div>
            </div>
            <div style={{ borderLeft: '1px solid var(--line)', paddingLeft: 32, alignSelf: 'center' }}>
              <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 8 }}>Coordonnées</div>
              <div style={{ fontSize: 15 }}>+32 476 222 707</div>
              <div style={{ fontSize: 15 }}>trussogne@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GiteSection() {
  const bp = useBreakpoint();
  const features = [
    { num: '01', title: 'Cuisine premium', desc: 'La Cornue, Quooker, cafetière Nespresso, lave-vaisselle, fours.' },
    { num: '02', title: 'Linge fourni',    desc: 'Draps de lit, draps de bain, linge de maison inclus.' },
    { num: '03', title: 'Équipement bébé', desc: 'Lit, table à langer, chaise haute disponibles sur demande.' },
    { num: '04', title: 'Charges comprises', desc: 'Électricité, eau, chauffage, bois, nettoyage final.' },
    { num: '05', title: 'Confort cosy',     desc: 'Feu ouvert, TV écran plat, kicker, barbecue extérieur.' },
    { num: '06', title: 'Stationnement',    desc: 'Parking privé pour quatre véhicules sur la propriété.' },
  ];
  const cols = bp === 'desktop' ? 3 : bp === 'tablet' ? 2 : 1;
  return (
    <section id="gite" style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 48, flexWrap: 'wrap' }}>
          <div>
            <div className="sec-num" style={{ marginBottom: 20 }}>· 03 — LE GÎTE ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
              Tout est prévu. <span style={{ color: 'var(--green)' }}>Vous n'avez qu'à arriver.</span>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 360 }}>
            Une location pensée pour 6 à 9 personnes, en famille ou entre amis.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 0, border: '1px solid var(--line)', background: 'var(--paper)' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '40px 36px',
              borderRight: (i + 1) % cols !== 0 ? '1px solid var(--line)' : 'none',
              borderBottom: i < features.length - cols ? '1px solid var(--line)' : 'none'
            }}>
              <div className="serif" style={{ fontSize: 14, color: 'var(--green)', letterSpacing: '0.2em', marginBottom: 24 }}>· {f.num} ·</div>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 12, fontWeight: 500 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/le-gite" className="btn-ghost">Voir le gîte en détail →</Link>
        </div>
      </div>
    </section>
  );
}

function Chambres() {
  const bp = useBreakpoint();
  const rooms = [
    { name: 'Diane',   beds: 'Lit Queen size · salle de douche privative · vue panoramique',   img: '/assets/quatreChambres/ChambreDiane.webp' },
    { name: 'Verte',   beds: 'Lit Queen size · salle de douche privative · accès direct jardin', img: '/assets/quatreChambres/ChambreVerte.webp' },
    { name: "L'Âne",   beds: 'Lit Queen size · salle de bain privative avec baignoire',          img: '/assets/quatreChambres/ChambreAne.webp' },
    { name: 'Chapelle',beds: 'Lit Queen size · salle de douche privative · rez-de-chaussée',     img: '/assets/quatreChambres/Chambre-Chapelle-scaled.webp' },
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="chambres" style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '160px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 04 — CHAMBRES ·</div>
        <div style={{ marginBottom: 64 }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
            Quatre chambres, quatre atmosphères.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: bp === 'mobile' ? '1fr' : 'repeat(2, 1fr)', gap: 24 }}>
          {rooms.map((r, i) => (
            <div key={i} className="room-card" onMouseEnter={() => setActive(i)} style={{ cursor: 'pointer' }}>
              <div style={{ aspectRatio: '16/9', borderRadius: 4, marginBottom: 16, overflow: 'hidden' }}>
                <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 className="serif" style={{ fontSize: 28, fontWeight: 500, color: 'var(--green)' }}>{r.name}</h3>
                <span className="mono-label" style={{ color: 'var(--ink-soft)' }}>0{i+1}</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{r.beds}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesPreview() {
  const bp = useBreakpoint();
  const items = [
    { name: 'Domaine de Chevetogne',       meta: '12 km · parc 550 ha',    desc: 'Parc naturel belge offrant jardins, étangs, sentiers et aires de jeux.', tag: 'Nature & jeux',  img: '/assets/alentours/chevetogne.webp' },
    { name: "Royal Golf Château d'Ardenne", meta: '5 min · 18 trous',       desc: "Parcours historique alliant prestige et nature ardennaise.", tag: 'Sport',            img: '/assets/alentours/gold.webp' },
    { name: 'Château de Vêves',             meta: '15 km · XIIIᵉ siècle',  desc: 'Forteresse médiévale féerique, joyau architectural posé au-dessus de la vallée.', tag: 'Patrimoine',      img: '/assets/alentours/veveve.webp' },
    { name: 'Promenades à Houyet',          meta: 'Au pied du gîte',        desc: 'Sentiers le long de la Lesse, panoramas saisissants.', tag: 'Marche & VTT',          img: '/assets/alentours/houyet-1.webp' },
  ];
  const [tab, setTab] = useState(0);
  return (
    <section id="alentours" style={{ padding: bp === 'mobile' ? '40px 20px 60px' : bp === 'tablet' ? '60px 32px 80px' : '80px 48px 120px', background: 'var(--green)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.7)' }}>· 05 — ALENTOURS ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1, fontWeight: 400, marginBottom: 24, maxWidth: 640 }}>
          Un environnement <span style={{ opacity: 0.6 }}>à couper le souffle</span>, à quelques minutes de la porte.
        </h2>
        <div className="tab-strip" style={{ borderColor: 'rgba(244,239,230,0.18)', marginBottom: 32, marginLeft: -12, flexWrap: 'wrap' }}>
          {items.map((it, i) => (
            <button key={i} className={'tab-btn' + (tab === i ? ' active' : '')} onClick={() => setTab(i)}
              style={{ color: tab === i ? 'var(--paper)' : 'rgba(244,239,230,0.55)' }}>
              <span style={{ marginRight: 10, opacity: 0.6 }}>0{i+1}</span> {it.name}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: bp === 'desktop' ? '1.3fr 1fr' : '1fr', gap: bp === 'desktop' ? 64 : 40, alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden' }}>
            <img src={items[tab].img} alt={items[tab].name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.4s ease' }} />
          </div>
          <div>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(244,239,230,0.3)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24 }}>
              {items[tab].tag}
            </div>
            <h3 className="serif" style={{ fontSize: 36, lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>{items[tab].name}</h3>
            <div className="mono-label" style={{ color: 'rgba(244,239,230,0.6)', marginBottom: 24 }}>{items[tab].meta}</div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(244,239,230,0.85)' }}>{items[tab].desc}</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link to="/activites" className="btn-ghost" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--paper)' }}>
            Voir toutes les activités →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Extras() {
  const bp = useBreakpoint();
  return (
    <section style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '160px 48px', background: 'var(--cream-warm)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 06 — NOS PETITS PLUS ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 96 }}>
          Pour aller plus loin.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: bp === 'mobile' ? '1fr' : '1fr 1fr', gap: bp === 'mobile' ? 40 : 56, textAlign: 'left' }}>
          <div>
            <div style={{ aspectRatio: '5/3', borderRadius: 4, marginBottom: 32, overflow: 'hidden' }}>
              <img src="/assets/plusLoin/reiki.jpg" alt="Séances de Reiki" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <h3 className="serif" style={{ fontSize: 40, lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>
              Séances de <span style={{ color: 'var(--green)' }}>Reiki</span>
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Méthode de soins énergétiques d'origine japonaise. Par l'imposition des mains, le Reiki aide à équilibrer les énergies du corps.
            </p>
          </div>
          <div>
            <div style={{ aspectRatio: '5/3', borderRadius: 4, marginBottom: 32, overflow: 'hidden' }}>
              <img src="/assets/plusLoin/traiteur.jpg" alt="Service traiteur" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <h3 className="serif" style={{ fontSize: 40, lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>
              Service traiteur
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Repas gourmands sur mesure, créations culinaires préparées avec des produits locaux et de saison.
            </p>
          </div>
        </div>
        <Link to="/contact" className="btn-ghost" style={{ marginTop: 64 }}>
          Demander une proposition sur-mesure →
        </Link>
      </div>
    </section>
  );
}

function Reviews() {
  const bp = useBreakpoint();
  const reviews = [
    { name: 'Sophie du Fontbaré',     locale: 'FR', text: 'Endroit paradisiaque. Maison ultra confortable. Calme, nature, balades. Cocon de rêve pour se ressourcer. Foncez.' },
    { name: 'Monika Steinel',          locale: 'EN', text: 'Wonderful location, the view must be one of the nicest in Belgium. The house is well-appointed and well-equipped. Recommend wholeheartedly.' },
    { name: 'Julie Van Bockxelaere',   locale: 'NL', text: 'Het vakantiehuis in Trussogne is absoluut een aanrader. De ligging is adembenemend en het huis zelf is ruim en comfortabel.' },
    { name: 'Anne-Françoise Cecoster', locale: 'FR', text: "Top endroit ! La vue est époustouflante et le gîte ultra confort. Situé à 5 min du golf d'Ardennes." },
    { name: 'Ernest Baele',            locale: 'FR', text: "Reçus de manière très chaleureuse. La maison est de grande qualité avec une vue magnifique. Nous y retournerons avec plaisir." },
    { name: 'Zoé Palacio',             locale: 'FR', text: "En famille ou entre amis, il fait bon à Trussogne ! Raffinement et bon goût de la décoration." },
    { name: 'Kelley Steeves',          locale: 'EN', text: 'Trussogne is a piece of heaven. Beautiful property, incredible view. We will be back.' },
    { name: 'Geert Coppens',           locale: 'NL', text: 'Fantastic location. Tastefully decorated with all modern amenities. Lovely fireplace and beautiful outdoor facilities.' },
  ];
  const trackRef = useRef(null);
  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 480, behavior: 'smooth' });
  };
  const innerPad = bp === 'mobile' ? '0 20px' : bp === 'tablet' ? '0 32px' : '0 48px';

  return (
    <section id="avis" style={{ padding: bp === 'mobile' ? '80px 0' : '160px 0', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: innerPad }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 07 — AVIS ·</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 48, flexWrap: 'wrap' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
            Ce que disent <span style={{ color: 'var(--green)' }}>nos voyageurs.</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="serif" style={{ fontSize: 48, lineHeight: 1, color: 'var(--green)' }}>4.97</div>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>moyenne · 80+ avis</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => scroll(-1)} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
              <button onClick={() => scroll(1)} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--line)', background: 'var(--green)', color: 'var(--paper)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: innerPad }}>
        <div ref={trackRef} className="review-track" style={{ display: 'flex', gap: 24, overflowX: 'auto', padding: '24px 0' }}>
          {reviews.map((r, i) => (
            <article key={i} className="review-card" style={{
              flex: bp === 'mobile' ? '0 0 300px' : bp === 'tablet' ? '0 0 360px' : '0 0 460px',
              background: i % 3 === 0 ? 'var(--green)' : 'var(--paper)',
              color: i % 3 === 0 ? 'var(--paper)' : 'var(--ink)',
              border: i % 3 === 0 ? 'none' : '1px solid var(--line)',
              padding: bp === 'mobile' ? '28px 24px' : '40px 36px',
              display: 'flex', flexDirection: 'column',
              minHeight: 340, borderRadius: 4
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <span className="serif" style={{ fontSize: 56, lineHeight: 0.6, fontStyle: 'italic', opacity: 0.5 }}>"</span>
                <span className="mono-label" style={{ opacity: 0.65 }}>{r.locale}</span>
              </div>
              <p className="serif" style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 400, flex: 1, fontStyle: 'italic' }}>{r.text}</p>
              <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid ' + (i % 3 === 0 ? 'rgba(244,239,230,0.2)' : 'var(--line)') }}>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{r.name}</div>
                <div className="mono-label" style={{ marginTop: 4, opacity: 0.6 }}>Voyageur·euse vérifié·e</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const bp = useBreakpoint();
  return (
    <section id="book" style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: bp === 'desktop' ? '1fr 1fr' : '1fr', gap: bp === 'desktop' ? 96 : 48, alignItems: 'center' }}>
        <div>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 08 — RÉSERVATION ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 32 }}>
            Réservez en direct.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 460, marginBottom: 48 }}>
            Réservez directement via notre système de réservation. Tarifs établis pour 6 à 9 personnes.
          </p>
          <a href="https://reservation.elloha.com/?idPublication=854566e1-2fb8-485c-abbd-fbf732e92e88&idoi=fcd24dc1-911a-41a4-a5cd-c8588ad41007&TypeOi=3&searchFirstAvailableDates=1&culture=fr-FR" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Voir les disponibilités →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {[
            { label: 'Adresse', value: 'Grande Trussogne, 9C\n5561 Houyet, Belgique' },
            { label: 'Téléphone', value: '+32 476 222 707' },
            { label: 'Email', value: 'trussogne@gmail.com' },
            { label: 'Capacité', value: '6 à 9 voyageurs' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '64px auto 0', display: 'grid', gridTemplateColumns: bp === 'mobile' ? '1fr' : bp === 'tablet' ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 40 }}>
        {[
          { n: '01', title: 'Calme & Sérénité',          desc: "Trussogne est l'endroit idéal pour une parenthèse apaisante." },
          { n: '02', title: 'Charme & Quiétude',          desc: "Chaque espace a été conçu pour maximiser la vue époustouflante." },
          { n: '03', title: 'Un cadre unique',             desc: "Les intérieurs vous séduiront par leur atmosphère chaleureuse et accueillante." },
          { n: '04', title: 'Des extérieurs magnifiques',  desc: "Un cadre naturel d'exception pour des moments uniques." },
        ].map(({ n, title, desc }) => (
          <div key={n} style={{ paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <div className="mono-label" style={{ color: 'var(--green)', marginBottom: 16 }}>{n}</div>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>{title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero />
      <Sensory />
      <HomeBanner />
      <Story />
      <GiteSection />
      <Chambres />
      <ActivitiesPreview />
      <Extras />
      <Reviews />
      <Booking />
      <Footer />
    </>
  );
}
