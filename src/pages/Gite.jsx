import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import BookingWidgetCore from '../components/BookingWidget';

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

function LeafIcon({ size = 22, color = 'var(--green)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M12 22 C 6 18, 4 12, 6 6 C 10 8, 14 8, 18 6 C 20 12, 18 18, 12 22 Z"/>
      <path d="M12 22 L 12 8" />
    </svg>
  );
}

function GiteHero() {
  const bp = useBreakpoint();
  const stats = [
    { n: '9 personnes', label: 'Capacité' },
    { n: '4',           label: 'Chambres' },
    { n: 'Vue imprenable', label: 'Panorama' },
    { n: 'Quiétude absolue', label: 'Sérénité' },
  ];
  return (
    <section id="top" style={{ background: 'var(--paper)' }}>
      <PageHero
        image="/assets/le-gite/le-gite-2.webp"
        alt="Le gîte de Trussogne"
        title="Votre parenthèse enchantée"
        subtitle="Gîte de caractère pouvant accueillir jusqu'à 9 personnes dans un cadre naturel d'exception"
      />
      <div style={{ padding: bp === 'mobile' ? '32px 20px 8px' : bp === 'tablet' ? '40px 32px 8px' : '56px 48px 8px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: bp === 'mobile' ? 15 : 19, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 720 }}>
            Niché au cœur d'un environnement préservé, Trussogne offre un espace authentique pour des moments inoubliables. <span className="serif" style={{ fontStyle: 'italic', color: 'var(--green)' }}>Votre évasion vous attend&nbsp;!</span>
          </p>

          <div style={{
            display: 'flex',
            flexDirection: bp === 'mobile' ? 'column' : 'row',
            alignItems: bp === 'mobile' ? 'flex-start' : 'center',
            gap: bp === 'mobile' ? 32 : 56,
            marginTop: bp === 'mobile' ? 24 : 32,
            flexWrap: 'wrap',
          }}>
            <a href="#verte" className="btn-primary" style={bp === 'mobile' ? { padding: '12px 18px', fontSize: 13 } : {}}>Découvrir les chambres</a>
            <div style={{ display: 'flex', gap: bp === 'mobile' ? 32 : 56, flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 20, lineHeight: 1.2, color: 'var(--green)', fontWeight: 500 }}>{s.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingWidget() {
  const bp = useBreakpoint();
  return (
    <section style={{ background: 'var(--paper)', padding: bp === 'mobile' ? '24px 20px 32px' : bp === 'tablet' ? '32px 32px 40px' : '32px 48px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <BookingWidgetCore wrapperStyle={{ alignItems: 'flex-start' }} />
      </div>
    </section>
  );
}

const ROOMS = [
  { id: 'verte',    num: '01', name: 'Verte',    color: '#325827', img: '/assets/quatreChambres/ChambreVerte.webp',             desc: "Teintée des nuances apaisantes de la nature, elle enveloppe ses hôtes dans une atmosphère douce et ressourçante. Son atout exclusif ? Une porte donnant directement accès au jardin et à la campagne environnante, pour un réveil en pleine nature. Dotée d'un lit double spring box et d'une salle de douche privative, cette chambre allie lumière naturelle et horizons verdoyants.", features: ['Lit Queen size', 'Salle de douche privative', 'Accès direct jardin'], images: ['/assets/quatreChambres/verte1.webp', '/assets/quatreChambres/verte2.webp'], align: 'left' },
  { id: 'ane',      num: '02', name: "L'Âne",    color: '#5A4A3A', img: '/assets/quatreChambres/ChambreAne.webp',              desc: "Avec ses tons profonds et chaleureux, cette chambre est un véritable refuge de tranquillité, elle invite à la détente et au repos. Son lit double équipé de deux matelas ainsi que sa salle de bain privative avec baignoire assurent un confort optimal.", features: ['Lit Queen size', 'Salle de bain privative avec baignoire', 'Vue imprenable'], images: ['/assets/quatreChambres/ane1.webp', '/assets/quatreChambres/ane2.webp'], align: 'right' },
  { id: 'chapelle', num: '03', name: 'Chapelle', color: '#3A4A5A', img: '/assets/quatreChambres/Chambre-Chapelle-scaled.webp', desc: "Spacieuse et pensée pour le bien-être, cette chambre située au rez-de-chaussée offre un lit double équipé d'un sur-matelas pour des nuits tout en douceur. Ses teintes ocres, inspirées des paysages naturels, créent une atmosphère chaleureuse et enveloppante. Dotée d'une salle de douche privative et de nombreux rangements, elle est idéale pour un séjour alliant confort et sérénité.", features: ['Lit Queen size', 'Salle de douche privative', 'Rez-de-chaussée'], images: ['/assets/quatreChambres/chapelle1.webp', '/assets/quatreChambres/chapelle3.webp'], align: 'left' },
  { id: 'diane',    num: '04', name: 'Diane',    color: '#6B4226', img: '/assets/quatreChambres/ChambreDiane.webp',             desc: "Sa grande fenêtre panoramique vous plonge dans un décor naturel où chaque matin, le lever du soleil illumine délicatement la pièce. Aménagée d'un lit double au matelas à mémoire de forme, cette chambre est idéale pour un séjour ressourçant. Sa salle de douche privative allie confort et intimité.", features: ['Lit Queen size', 'Salle de douche privative', 'Vue imprenable'], images: ['/assets/quatreChambres/diane2.webp', '/assets/quatreChambres/diane3.webp'], align: 'right' },
];

// Nombre total d'emplacements photo par chambre. Les slots au-delà des photos
// réelles s'affichent en placeholder « carbon field » à remplir par l'hôte.
const ROOM_SLOTS = 5;

function RoomImages({ room }) {
  // Photos réelles (principale + secondaires), complétées par des placeholders.
  const real = [room.img, ...room.images].filter(s => s && s.startsWith('/'));
  const slides = [
    ...real,
    ...Array.from({ length: Math.max(0, ROOM_SLOTS - real.length) }, () => null),
  ];
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const wrapRef = useRef(null);

  // Démarre le défilement auto uniquement quand la chambre est visible à l'écran.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Avance toutes les 5 s (standard galerie), en pause au survol ou hors écran.
  useEffect(() => {
    if (count <= 1 || paused || !inView) return;
    const id = setInterval(() => setIndex(i => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [count, paused, inView]);

  return (
    <div ref={wrapRef} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden' }}>
        {slides.map((src, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            opacity: index === i ? 1 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: index === i ? 'auto' : 'none',
          }}>
            {src ? (
              <img src={src} alt={`${room.name} — photo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div className="ph" data-label={`${room.id} — photo ${i + 1}`} style={{ width: '100%', height: '100%' }}></div>
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Aller à la photo ${i + 1}`} style={{
              width: index === i ? 22 : 8, height: 8, borderRadius: 100,
              background: index === i ? room.color : 'var(--line)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
            }} />
          ))}
        </div>
      )}
    </div>
  );
}


function RoomSection({ room, index }) {
  const bp = useBreakpoint();
  const isLeft = room.align === 'left';
  const isMobile = bp !== 'desktop';
  const cols = isMobile ? '1fr' : (isLeft ? '1.3fr 1fr' : '1fr 1.3fr');
  const pad = isMobile ? '60px 20px' : bp === 'tablet' ? '60px 32px' : '80px 48px';
  return (
    <section id={room.id} className="gite-section" style={{ padding: pad, background: index % 2 === 0 ? 'var(--paper)' : 'var(--cream)' }}>
      <div className="gite-room-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 32 : 80, alignItems: 'center' }}>
        {!isMobile && isLeft && <RoomImages room={room} />}
        <div>
          <div className="sec-num" style={{ marginBottom: 20 }}>· {room.num} ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 0.95, fontWeight: 400, marginBottom: 28, letterSpacing: '-0.02em', color: room.color }}>{room.name}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 480, marginBottom: 36 }}>{room.desc}</p>
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--line)' }}>
            {room.features.map((f, i) => (
              <div key={i} style={{ padding: '16px 20px', borderBottom: i < room.features.length - 1 ? '1px solid var(--line)' : 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: room.color, flexShrink: 0 }}></span>
                {f}
              </div>
            ))}
          </div>
        </div>
        {isMobile && <RoomImages room={room} />}
        {!isMobile && !isLeft && <RoomImages room={room} />}
      </div>
    </section>
  );
}

function RoomsIntro() {
  const bp = useBreakpoint();
  return (
    <section style={{ padding: bp === 'mobile' ? '40px 20px 0' : bp === 'tablet' ? '60px 32px 0' : '80px 48px 0', background: 'var(--paper)', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — NOS CHAMBRES ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 48 }}>
          Quatre chambres, quatre atmosphères
        </h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {ROOMS.map((r) => (
            <a key={r.id} href={'#' + r.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 22px', border: '1px solid var(--line)', borderRadius: 100, fontSize: 14, fontWeight: 500, transition: 'all 0.3s ease' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.color }}></span>
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GiteValues() {
  const bp = useBreakpoint();
  const values = [
    { title: 'Calme & Sérénité',          desc: "Trussogne est l'endroit idéal pour une parenthèse apaisante." },
    { title: 'Charme & Quiétude',         desc: "Chaque espace a été conçu pour maximiser la vue époustouflante." },
    { title: 'Un cadre unique',            desc: "Les intérieurs vous séduiront par leur atmosphère chaleureuse et accueillante." },
    { title: 'Des extérieurs magnifiques', desc: "Un cadre naturel d'exception pour des moments uniques." },
  ];
  return (
    <section style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '100px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: bp === 'mobile' ? '1fr' : bp === 'tablet' ? '1fr 1fr' : 'repeat(4, 1fr)', gap: bp === 'mobile' ? 32 : 40 }}>
        {values.map((v, i) => (
          <div key={i} style={{ paddingTop: 24, borderTop: '1px solid var(--line)' }}>
            <div className="mono-label" style={{ color: 'var(--green)', marginBottom: 16 }}>0{i + 1}</div>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.2, marginBottom: 12 }}>{v.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GiteActivities() {
  const bp = useBreakpoint();
  const items = [
    { name: 'Domaine de Chevetogne',       meta: '12 km · parc 550 ha',   desc: 'Parc naturel belge offrant jardins, étangs, sentiers et aires de jeux.', tag: 'Nature & jeux', img: '/assets/alentours/chevetogne.webp' },
    { name: "Royal Golf Château d'Ardenne", meta: '5 min · 18 trous',      desc: "Parcours historique alliant prestige et nature ardennaise.", tag: 'Sport', img: '/assets/alentours/gold.webp' },
    { name: 'Château de Vêves',             meta: '15 km · XIIIᵉ siècle', desc: 'Forteresse médiévale féerique, joyau architectural posé au-dessus de la vallée.', tag: 'Patrimoine', img: '/assets/alentours/veveve.webp' },
    { name: 'Promenades à Houyet',          meta: 'Au pied du gîte',       desc: 'Sentiers le long de la Lesse, panoramas saisissants.', tag: 'Marche & VTT', img: '/assets/alentours/houyet-1.webp' },
  ];
  const [tab, setTab] = useState(0);
  return (
    <section style={{ padding: bp === 'mobile' ? '40px 20px 60px' : bp === 'tablet' ? '60px 32px 80px' : '80px 48px', background: 'var(--green)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.7)' }}>· ALENTOURS ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, fontWeight: 400, marginBottom: 24, maxWidth: 900 }}>
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
            <img src={items[tab].img} alt={items[tab].name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.4s' }} />
          </div>
          <div>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(244,239,230,0.3)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24 }}>{items[tab].tag}</div>
            <h3 className="serif" style={{ fontSize: 36, lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>{items[tab].name}</h3>
            <div className="mono-label" style={{ color: 'rgba(244,239,230,0.6)', marginBottom: 24 }}>{items[tab].meta}</div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(244,239,230,0.85)' }}>{items[tab].desc}</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <Link to="/activites" className="btn-ghost" style={{ borderColor: 'rgba(244,239,230,0.35)', color: 'var(--paper)' }}>Voir toutes les activités</Link>
        </div>
      </div>
    </section>
  );
}

function GiteReviews() {
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
  const scroll = (dir) => { if (trackRef.current) trackRef.current.scrollBy({ left: dir * 480, behavior: 'smooth' }); };
  return (
    <section style={{ padding: bp === 'mobile' ? '40px 20px' : bp === 'tablet' ? '60px 32px' : '60px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· AVIS ·</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 48, flexWrap: 'wrap' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
            Ce que disent <span style={{ color: 'var(--green)' }}>nos voyageurs</span>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="serif" style={{ fontSize: 48, lineHeight: 1, color: 'var(--green)' }}>5.00</div>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>moyenne · 17 avis</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => scroll(-1)} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>←</button>
              <button onClick={() => scroll(1)} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--line)', background: 'var(--green)', color: 'var(--paper)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
        <div ref={trackRef} className="review-track" style={{ display: 'flex', gap: 24, overflowX: 'auto', padding: 0 }}>
          {reviews.map((r, i) => (
            <article key={i} className="review-card" style={{
              flex: bp === 'mobile' ? '0 0 300px' : bp === 'tablet' ? '0 0 360px' : '0 0 460px',
              background: i % 3 === 0 ? 'var(--green)' : 'var(--paper)',
              color: i % 3 === 0 ? 'var(--paper)' : 'var(--ink)',
              border: i % 3 === 0 ? 'none' : '1px solid var(--line)',
              padding: bp === 'mobile' ? '28px 24px' : '40px 36px',
              display: 'flex', flexDirection: 'column', minHeight: 340, borderRadius: 4
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

const MOSAIC = [
  { src: '/assets/photo1.webp',                                    caption: 'La maison ardennaise' },
  { src: '/assets/quatreChambres/ChambreDiane.webp',               caption: 'Chambre Diane' },
  { src: '/assets/quatreSaisons/printemps.webp',                   caption: 'Printemps à Trussogne' },
  { src: '/assets/quatreChambres/ChambreVerte.webp',               caption: 'Chambre Verte' },
  { src: '/assets/Marcassins-Trussogne.webp',                      caption: 'Marcassins dans la prairie' },
  { src: '/assets/quatreChambres/ChambreAne.webp',                 caption: "Chambre de l'Âne" },
  { src: '/assets/quatreSaisons/ete.webp',                         caption: 'Été ardennais' },
  { src: '/assets/quatreChambres/Chambre-Chapelle-scaled.webp',    caption: 'Chambre Chapelle' },
  { src: '/assets/Photo-Lievres-amoureux-Tru.webp',               caption: 'Lièvres à Trussogne' },
  { src: '/assets/quatreSaisons/brume.webp',                       caption: 'Brume automnale' },
  { src: '/assets/alentours/chevetogne.webp',                      caption: 'Domaine de Chevetogne' },
  { src: '/assets/quatreSaisons/hiver1.webp',                      caption: 'Hiver sous la neige' },
];

function GiteMosaic() {
  const [lbIndex, setLbIndex] = useState(null);

  const nav = (dir) => setLbIndex(prev => {
    const next = prev + dir;
    if (next < 0) return MOSAIC.length - 1;
    if (next >= MOSAIC.length) return 0;
    return next;
  });

  useEffect(() => {
    if (lbIndex === null) return;
    const fn = (e) => {
      if (e.key === 'Escape') setLbIndex(null);
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'ArrowLeft') nav(-1);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [lbIndex]);

  return (
    <section className="gite-section" style={{ background: 'var(--paper)', padding: '64px 48px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num" style={{ marginBottom: 16 }}>· 01 — LE GÎTE ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 640 }}>
            Un lieu d'exception où <span style={{ color: 'var(--green)' }}>confort et nature</span> se rencontrent
          </h2>
        </div>
        <div className="gallery-grid gallery-grid--contained">
          {MOSAIC.map((p, i) => (
            <div key={i} className="gallery-item" onClick={() => setLbIndex(i)}
              style={{ animation: `fadeUp 0.6s ease ${i * 0.04}s both` }}>
              <img src={p.src} alt={p.caption} loading="lazy" />
              <div className="overlay">
                <div className="serif" style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--paper)' }}>{p.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lbIndex !== null && (
        <div className="lightbox" onClick={() => setLbIndex(null)}>
          <button className="lb-close" onClick={() => setLbIndex(null)}>✕</button>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); nav(-1); }}>←</button>
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); nav(1); }}>→</button>
          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
            <img src={MOSAIC[lbIndex].src} alt={MOSAIC[lbIndex].caption} />
            <div style={{ marginTop: 20 }}>
              <div className="serif" style={{ fontSize: 22, fontStyle: 'italic', marginBottom: 6, color: 'var(--paper)' }}>{MOSAIC[lbIndex].caption}</div>
              <div className="mono-label" style={{ color: 'rgba(244,239,230,0.4)' }}>{lbIndex + 1} / {MOSAIC.length}</div>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}

export default function Gite() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <GiteHero />
      <BookingWidget />
      <GiteMosaic />
      <RoomsIntro />
      {ROOMS.map((r, i) => <RoomSection key={r.id} room={r} index={i} />)}
      <GiteValues />
      <GiteActivities />
      <GiteReviews />
      <Footer />
    </>
  );
}
