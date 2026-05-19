import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Stat({ n, label }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 36, lineHeight: 1, color: 'var(--green)' }}>{n}</div>
      <div className="mono-label" style={{ marginTop: 8, color: 'var(--ink-soft)' }}>{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh',
      padding: '140px 48px 80px',
      position: 'relative',
      background: 'var(--paper)'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 64, alignItems: 'center', minHeight: 'calc(100vh - 220px)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <span className="leaf-mark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.2">
                <path d="M12 22 C 6 18, 4 12, 6 6 C 10 8, 14 8, 18 6 C 20 12, 18 18, 12 22 Z"/>
                <path d="M12 22 L 12 8" />
              </svg>
            </span>
            <span className="mono-label" style={{ color: 'var(--ink-soft)' }}>Houyet, Belgique · 50.183°N</span>
          </div>

          <h1 className="serif" style={{
            fontSize: 'clamp(64px, 8vw, 124px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            fontWeight: 400,
            color: 'var(--ink)',
            marginBottom: 24,
          }}>
            Gîte de<br/>
            <span style={{ fontStyle: 'italic', color: 'var(--green)' }}>charme</span>,<br/>
            silence<br/>
            <span style={{ fontStyle: 'italic' }}>&amp; espace.</span>
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-soft)', maxWidth: 460, marginBottom: 44 }}>
            Niché au cœur des Ardennes belges à Houyet, un havre de paix pour 6 à 9 personnes, où le temps semble s'arrêter et où l'on se reconnecte à l'essentiel.
          </p>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#book" className="btn-primary">
              Réserver en direct <span>→</span>
            </a>
            <a href="#story" className="btn-ghost">Découvrir le lieu</a>
          </div>

          <div style={{ display: 'flex', gap: 48, marginTop: 72, paddingTop: 36, borderTop: '1px solid var(--line)' }}>
            <Stat n="6—9" label="Voyageurs" />
            <Stat n="04" label="Chambres" />
            <Stat n="550" label="ha de nature" />
            <Stat n="1976" label="Maison ardennaise" />
          </div>
        </div>

        <div style={{ height: 'min(720px, 80vh)', position: 'relative' }}>
          <div className="hero-grid">
            <div className="ph h-main" data-label="EXTÉRIEUR · maison · vue large" style={{ borderRadius: 4 }}></div>
            <div className="ph" data-label="VUE · vallée" style={{ borderRadius: 4 }}></div>
            <div className="ph" data-label="INTÉRIEUR · feu" style={{ borderRadius: 4 }}></div>
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
      </div>
    </section>
  );
}

function Sensory() {
  const senses = [
    { num: '01', label: 'Odorat',  caption: "Sentez l'odeur de la pluie après une après-midi chaude.", img: 'PLUIE · forêt humide' },
    { num: '02', label: 'Vue',     caption: "Une expérience sensorielle au cœur de la pleine nature.", img: 'VUE · brume au matin' },
    { num: '03', label: 'Ouïe',    caption: "Écoutez le chant des oiseaux dans les sapins.",           img: 'AUBE · oiseaux' },
    { num: '04', label: 'Calme',   caption: "Laissez-vous envelopper par le calme de la saison.",      img: 'SAISON · feu de bois' },
  ];
  return (
    <section style={{ background: 'var(--green-deep)', color: 'var(--paper)', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 48, flexWrap: 'wrap' }}>
          <div>
            <div className="sec-num" style={{ marginBottom: 20, color: 'rgba(244, 239, 230, 0.65)' }}>· UNE EXPÉRIENCE SENSORIELLE ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5.5vw, 80px)', lineHeight: 1.0, fontWeight: 400, maxWidth: 880 }}>
              Quatre sens, <em style={{ color: 'rgba(244,239,230,0.7)' }}>une saison.</em>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'rgba(244,239,230,0.7)', maxWidth: 320, lineHeight: 1.6 }}>
            Trussogne se vit autant qu'elle se regarde. Les fenêtres ouvertes, le bois qui crépite, le silence des Ardennes.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {senses.map((s, i) => (
            <article key={i} className="sense-card" style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', borderRadius: 4, background: '#000' }}>
              <div className="ph sense-img" data-label={s.img} style={{ position: 'absolute', inset: 0, transition: 'transform 1.4s cubic-bezier(.2,.7,.2,1)' }}></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,58,24,0.15) 0%, transparent 30%, transparent 50%, rgba(31,58,24,0.85) 100%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', color: 'var(--paper)' }}>
                <span className="mono-label" style={{ fontSize: 10, color: 'rgba(244,239,230,0.85)' }}>· {s.num} ·</span>
                <span className="mono-label" style={{ fontSize: 10, color: 'rgba(244,239,230,0.85)' }}>{s.label}</span>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px', color: 'var(--paper)' }}>
                <p className="serif" style={{ fontSize: 24, lineHeight: 1.15, fontWeight: 400, fontStyle: i % 2 ? 'italic' : 'normal' }}>{s.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" style={{ padding: '160px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'center' }}>
        <div className="ph" data-label="PORTRAIT · les hôtes" style={{ aspectRatio: '4/5', borderRadius: 4 }}></div>
        <div>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — NOTRE HISTOIRE ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, marginBottom: 32, fontWeight: 400 }}>
            Le fruit d'un rêve, devenu <em style={{ color: 'var(--green)' }}>havre de paix</em>.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 24, maxWidth: 560 }}>
            Nichée au cœur d'un environnement naturel préservé à Houyet dans nos Ardennes, notre propriété est née d'une envie simple : créer un lieu où le temps ralentit, où l'on respire profondément, et où la beauté discrète de la région se révèle au fil des heures.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 560 }}>
            À Trussogne, chacun peut se reconnecter à l'essentiel — le crépitement d'un feu, le bois fendu, les longues marches, et le silence des sapins.
          </p>
          <div style={{ marginTop: 56, display: 'flex', gap: 64 }}>
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
  const features = [
    { num: '01', title: 'Cuisine premium', desc: 'La Cornue, Quooker, cafetière Nespresso, lave-vaisselle, fours.' },
    { num: '02', title: 'Linge fourni',    desc: 'Draps de lit, draps de bain, linge de maison inclus.' },
    { num: '03', title: 'Équipement bébé', desc: 'Lit, table à langer, chaise haute disponibles sur demande.' },
    { num: '04', title: 'Charges comprises', desc: 'Électricité, eau, chauffage, bois, nettoyage final.' },
    { num: '05', title: 'Confort cosy',     desc: 'Feu ouvert, TV écran plat, kicker, barbecue extérieur.' },
    { num: '06', title: 'Stationnement',    desc: 'Parking privé pour quatre véhicules sur la propriété.' },
  ];
  return (
    <section id="gite" style={{ padding: '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 48, flexWrap: 'wrap' }}>
          <div>
            <div className="sec-num" style={{ marginBottom: 20 }}>· 03 — LE GÎTE ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
              Tout est prévu. <em style={{ color: 'var(--green)' }}>Vous n'avez qu'à arriver.</em>
            </h2>
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 360 }}>
            Une location pensée pour 6 à 9 personnes, en famille ou entre amis.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--line)', background: 'var(--paper)' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '40px 36px',
              borderRight: (i+1) % 3 !== 0 ? '1px solid var(--line)' : 'none',
              borderBottom: i < 3 ? '1px solid var(--line)' : 'none'
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
  const rooms = [
    { name: 'Diane',   sub: 'La cynégétique',   beds: 'Lit double · vue jardin',   img: 'CHAMBRE · DIANE' },
    { name: 'Verte',   sub: 'La forestière',    beds: 'Lit double · velours sapin', img: 'CHAMBRE · VERTE' },
    { name: "L'Âne",   sub: 'La rustique',      beds: '2 lits simples · poutres',  img: 'CHAMBRE · ÂNE' },
    { name: 'Chapelle',sub: 'La méditative',    beds: 'Lit double · pierre',       img: 'CHAMBRE · CHAPELLE' },
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="chambres" style={{ padding: '160px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 04 — CHAMBRES ·</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 48, flexWrap: 'wrap' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
            Quatre chambres, <em style={{ color: 'var(--green)' }}>quatre atmosphères.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 320, lineHeight: 1.6 }}>
            Décorées avec soin, chacune respire son propre caractère.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {rooms.map((r, i) => (
            <div key={i} className="room-card" onMouseEnter={() => setActive(i)} style={{ cursor: 'pointer' }}>
              <div className="ph" data-label={r.img} style={{
                aspectRatio: '3/4', borderRadius: 4, marginBottom: 16,
                outline: active === i ? '1px solid var(--green)' : 'none',
                outlineOffset: 6, transition: 'outline 0.3s'
              }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 className="serif" style={{ fontSize: 28, fontWeight: 500 }}>{r.name}</h3>
                <span className="mono-label" style={{ color: 'var(--ink-soft)' }}>0{i+1}</span>
              </div>
              <div className="serif" style={{ fontSize: 16, fontStyle: 'italic', color: 'var(--green)', marginBottom: 8 }}>{r.sub}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{r.beds}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesPreview() {
  const items = [
    { name: 'Domaine de Chevetogne',       meta: '12 km · parc 550 ha',    desc: 'Parc naturel belge offrant jardins, étangs, sentiers et aires de jeux.', tag: 'Nature & jeux' },
    { name: "Royal Golf Château d'Ardenne", meta: '5 min · 18 trous',       desc: "Parcours historique alliant prestige et nature ardennaise.", tag: 'Sport' },
    { name: 'Château de Vêves',             meta: '15 km · XIIIᵉ siècle',  desc: 'Forteresse médiévale féerique, joyau architectural posé au-dessus de la vallée.', tag: 'Patrimoine' },
    { name: 'Promenades à Houyet',          meta: 'Au pied du gîte',        desc: 'Sentiers le long de la Lesse, panoramas saisissants.', tag: 'Marche & VTT' },
  ];
  const [tab, setTab] = useState(0);
  return (
    <section id="alentours" style={{ padding: '160px 48px', background: 'var(--green)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.7)' }}>· 05 — ALENTOURS ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 64, maxWidth: 900 }}>
          Un environnement <em>à couper le souffle</em>, à quelques minutes de la porte.
        </h2>
        <div className="tab-strip" style={{ borderColor: 'rgba(244,239,230,0.18)', marginBottom: 56 }}>
          {items.map((it, i) => (
            <button key={i} className={'tab-btn' + (tab === i ? ' active' : '')} onClick={() => setTab(i)}
              style={{ color: tab === i ? 'var(--paper)' : 'rgba(244,239,230,0.55)', borderBottomColor: tab === i ? 'var(--paper)' : 'transparent' }}>
              <span style={{ marginRight: 10, opacity: 0.6 }}>0{i+1}</span> {it.name.split(' ').slice(0,2).join(' ')}
            </button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
          <div className="ph" data-label={items[tab].name.toUpperCase()} style={{ aspectRatio: '4/3', borderRadius: 4 }}></div>
          <div>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(244,239,230,0.3)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24 }}>
              {items[tab].tag}
            </div>
            <h3 className="serif" style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 400, marginBottom: 16 }}>{items[tab].name}</h3>
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
  return (
    <section style={{ padding: '160px 48px', background: 'var(--cream-warm)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 06 — NOS PETITS PLUS ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 96, fontStyle: 'italic' }}>
          Pour aller plus loin.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, textAlign: 'left' }}>
          <div>
            <div className="ph" data-label="REIKI · soin" style={{ aspectRatio: '5/3', borderRadius: 4, marginBottom: 32 }}></div>
            <h3 className="serif" style={{ fontSize: 40, lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>
              Séances de <em style={{ color: 'var(--green)' }}>Reiki</em>
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Méthode de soins énergétiques d'origine japonaise. Par l'imposition des mains, le Reiki aide à équilibrer les énergies du corps.
            </p>
          </div>
          <div>
            <div className="ph" data-label="TRAITEUR · table" style={{ aspectRatio: '5/3', borderRadius: 4, marginBottom: 32 }}></div>
            <h3 className="serif" style={{ fontSize: 40, lineHeight: 1.1, fontWeight: 400, marginBottom: 16 }}>
              Service <em style={{ color: 'var(--green)' }}>traiteur</em>
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

  return (
    <section id="avis" style={{ padding: '160px 0 160px', background: 'var(--paper)' }}>
      <div style={{ padding: '0 48px', maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 07 — AVIS ·</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 48, flexWrap: 'wrap' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 720 }}>
            Ce que disent <em style={{ color: 'var(--green)' }}>nos voyageurs.</em>
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
      <div ref={trackRef} className="review-track" style={{ display: 'flex', gap: 24, overflowX: 'auto', padding: '24px 48px' }}>
        {reviews.map((r, i) => (
          <article key={i} className="review-card" style={{
            flex: '0 0 460px',
            background: i % 3 === 0 ? 'var(--green)' : 'var(--paper)',
            color: i % 3 === 0 ? 'var(--paper)' : 'var(--ink)',
            border: i % 3 === 0 ? 'none' : '1px solid var(--line)',
            padding: '40px 36px', display: 'flex', flexDirection: 'column',
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
    </section>
  );
}

function Booking() {
  const [arrive, setArrive] = useState('2026-06-12');
  const [depart, setDepart] = useState('2026-06-15');
  const [guests, setGuests] = useState(8);
  const [submitted, setSubmitted] = useState(false);

  const nights = Math.max(1, Math.round((new Date(depart) - new Date(arrive)) / 86400000));
  const baseRate = 320;
  const total = nights * baseRate;

  return (
    <section id="book" style={{ padding: '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96 }}>
        <div>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 08 — RÉSERVATION ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 32 }}>
            Réservez en <em style={{ color: 'var(--green)' }}>direct.</em>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 460, marginBottom: 48 }}>
            Pas d'intermédiaire, pas de surprise. Tarifs établis pour 6 à 9 personnes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, maxWidth: 460 }}>
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

        <div style={{ background: 'var(--paper)', padding: 40, border: '1px solid var(--line)' }}>
          {!submitted ? (
            <>
              <h3 className="serif" style={{ fontSize: 32, marginBottom: 32, fontWeight: 500 }}>Demande de réservation</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                <div className="field">
                  <label>Arrivée</label>
                  <input type="date" value={arrive} onChange={(e) => setArrive(e.target.value)} />
                </div>
                <div className="field">
                  <label>Départ</label>
                  <input type="date" value={depart} onChange={(e) => setDepart(e.target.value)} />
                </div>
              </div>
              <div className="field" style={{ marginBottom: 24 }}>
                <label>Voyageurs</label>
                <select value={guests} onChange={(e) => setGuests(+e.target.value)}>
                  {[2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n} {n>1?'voyageurs':'voyageur'}</option>)}
                </select>
              </div>
              <div className="field" style={{ marginBottom: 24 }}>
                <label>Votre nom</label>
                <input type="text" placeholder="Prénom et nom" />
              </div>
              <div className="field" style={{ marginBottom: 24 }}>
                <label>Email</label>
                <input type="email" placeholder="vous@email.com" />
              </div>
              <div className="field" style={{ marginBottom: 32 }}>
                <label>Un mot pour nous</label>
                <textarea rows="3" placeholder="Reiki, traiteur, animaux, fête de famille…"></textarea>
              </div>
              <div style={{ background: 'var(--cream)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                <div>
                  <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 4 }}>{nights} nuits · {guests} pers.</div>
                  <div className="serif" style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--ink-soft)' }}>estimation indicative</div>
                </div>
                <div className="serif" style={{ fontSize: 36, color: 'var(--green)' }}>{total} €</div>
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSubmitted(true)}>
                Envoyer ma demande →
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green)', color: 'var(--paper)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 24 }}>✓</div>
              <h3 className="serif" style={{ fontSize: 36, marginBottom: 16, fontWeight: 400 }}>Demande envoyée</h3>
              <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>
                Sandra revient vers vous dans les 24 heures.
              </p>
              <button className="btn-ghost" style={{ marginTop: 32 }} onClick={() => setSubmitted(false)}>Nouvelle demande</button>
            </div>
          )}
        </div>
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
      <Story />
      <GiteSection />
      <Chambres />
      <ActivitiesPreview />
      <Extras />
      <Reviews />
      <Booking />
      <Footer />

      {scrolled && (
        <div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 40, animation: 'fadein 0.4s ease' }}>
          <div className="book-pill">
            <div className="seg">
              <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 2 }}>Arrivée</div>
              <div style={{ fontSize: 14 }}>12 juin</div>
            </div>
            <div className="seg">
              <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 2 }}>Départ</div>
              <div style={{ fontSize: 14 }}>15 juin</div>
            </div>
            <div className="seg">
              <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 2 }}>Voyageurs</div>
              <div style={{ fontSize: 14 }}>8 pers.</div>
            </div>
            <a href="#book" className="btn-primary" style={{ padding: '14px 22px', fontSize: 13 }}>Vérifier →</a>
          </div>
        </div>
      )}
    </>
  );
}
