import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function LeafIcon({ size = 22, color = 'var(--green)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M12 22 C 6 18, 4 12, 6 6 C 10 8, 14 8, 18 6 C 20 12, 18 18, 12 22 Z"/>
      <path d="M12 22 L 12 8" />
    </svg>
  );
}

function GiteHero() {
  return (
    <section id="top" style={{ minHeight: '100vh', padding: '160px 48px 120px', display: 'flex', alignItems: 'center', position: 'relative', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <LeafIcon />
              </span>
              <div>
                <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Houyet, Ardennes belges</div>
                <div className="mono-label" style={{ color: 'var(--green)', marginTop: 2 }}>Gîte de caractère</div>
              </div>
            </div>
            <h1 className="serif" style={{ fontSize: 'clamp(56px, 7vw, 110px)', lineHeight: 0.95, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: 28 }}>
              Votre<br />parenthèse<br />enchantée.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 440, marginBottom: 44 }}>
              Gîte de caractère pouvant accueillir jusqu'à 9 personnes dans un cadre naturel d'exception. Niché au cœur d'un environnement préservé, Trussogne offre un espace authentique pour des moments inoubliables.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#diane" className="btn-primary">Découvrir les chambres <span>↓</span></a>
              <Link to="/#book" className="btn-ghost">Réserver en direct</Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gridTemplateRows: '1.5fr 1fr', gap: 14, height: 'min(680px, 75vh)' }}>
            <div className="ph" data-label="FAÇADE · maison" style={{ gridColumn: '1 / -1', borderRadius: 4 }}></div>
            <div className="ph" data-label="SÉJOUR · feu ouvert" style={{ borderRadius: 4 }}></div>
            <div className="ph" data-label="VUE · vallée" style={{ borderRadius: 4 }}></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 96, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          {[{ n: '9', unit: 'personnes', label: 'Capacité' }, { n: '4', unit: 'chambres', label: 'Toutes uniques' }, { n: '∞', unit: 'hectares', label: 'Panorama vert' }, { n: '5★', unit: 'sur 5', label: 'Quiétude absolue' }].map((s, i) => (
            <div key={i} style={{ padding: '40px 0', borderRight: i < 3 ? '1px solid var(--line)' : 'none', paddingLeft: i > 0 ? 40 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                <span className="serif" style={{ fontSize: 48, lineHeight: 1, color: 'var(--green)' }}>{s.n}</span>
                <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{s.unit}</span>
              </div>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" style={{ padding: '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'center' }}>
        <div>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 01 — LE GÎTE ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 28 }}>
            Un lieu d'exception où <span style={{ color: 'var(--green)' }}>confort et nature</span> se rencontrent.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 20 }}>
            Niché au cœur d'un environnement naturel préservé à Houyet, Trussogne offre un espace authentique pour des moments inoubliables. Quatre chambres de caractère, chacune avec sa personnalité.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 40 }}>
            Linge de maison, draps, serviettes, électricité, eau, chauffage, bois pour le feu ouvert et nettoyage final — tout est compris. Vous n'avez qu'à arriver.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Cuisine La Cornue', 'Feu ouvert', 'Linge fourni', 'Parking privé', 'Barbecue', 'Équipement bébé'].map((f, i) => (
              <span key={i} style={{ padding: '8px 16px', border: '1px solid var(--line)', borderRadius: 100, fontSize: 13, color: 'var(--ink-soft)' }}>{f}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div className="ph" data-label="CUISINE · la cornue" style={{ aspectRatio: '1/1.2', borderRadius: 4 }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="ph" data-label="SALON · canapé" style={{ flex: 1, borderRadius: 4 }}></div>
            <div className="ph" data-label="TERRASSE · vue" style={{ flex: 1, borderRadius: 4 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ROOMS = [
  { id: 'diane',   num: '01', name: 'Diane',    sub: 'La cynégétique', color: '#6B4226', headline: "L'élégance de la chasse, le confort du refuge.", desc: "Teintée des nuances chaudes de la terre et du bois, la chambre Diane rend hommage à l'art cynégétique avec raffinement. L'atmosphère feutrée invite au repos tandis que les fenêtres cadrent les panoramas de la vallée ardennaise.", features: ['Lit Queen size', 'Salle de douche privative', 'Vue imprenable', 'Mobilier chiné'], images: ['DIANE · lit', 'DIANE · fenêtre vue', 'DIANE · détails'], align: 'left' },
  { id: 'verte',   num: '02', name: 'Verte',    sub: 'La forestière',  color: '#325827', headline: "Un réveil les pieds dans le jardin.", desc: "Teintée des nuances apaisantes de la nature, elle enveloppe ses hôtes dans une atmosphère douce et ressourçante. Son atout exclusif : une porte donnant directement accès au jardin.", features: ['Lit double spring box', 'Accès direct jardin', 'Salle de douche privative', 'Lumière naturelle'], images: ['VERTE · lit', 'VERTE · porte jardin', 'VERTE · salle de bain'], align: 'right' },
  { id: 'ane',     num: '03', name: "L'Âne",    sub: 'La rustique',    color: '#5A4A3A', headline: "Le charme brut de la pierre et du chêne.", desc: "La chambre de L'Âne porte le caractère rustique de la maison ardennaise : poutres apparentes, textures franches et atmosphère minérale. Deux lits simples offrent une souplesse d'aménagement idéale.", features: ['2 lits simples', 'Poutres apparentes', 'Ambiance minérale', 'Flexibilité couchage'], images: ['ÂNE · poutres', 'ÂNE · lits', 'ÂNE · détail pierre'], align: 'left' },
  { id: 'chapelle',num: '04', name: 'Chapelle', sub: 'La méditative',  color: '#3A4A5A', headline: "Le silence, la pierre, la lumière.", desc: "Inspirée de la contemplation, la chambre Chapelle offre une atmosphère d'une sérénité rare. Pierre, textures sobres et lumière tamisée composent un écrin propice au repos profond.", features: ['Lit double', 'Salle de bain privative', 'Atmosphère pierre', 'Sérénité absolue'], images: ['CHAPELLE · lit', 'CHAPELLE · lumière', 'CHAPELLE · pierre'], align: 'right' },
];

function RoomImages({ room }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="ph" data-label={room.images[0]} style={{ aspectRatio: '4/3', borderRadius: 4 }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div className="ph" data-label={room.images[1]} style={{ aspectRatio: '1/1', borderRadius: 4 }}></div>
        <div className="ph" data-label={room.images[2]} style={{ aspectRatio: '1/1', borderRadius: 4 }}></div>
      </div>
    </div>
  );
}

function RoomSection({ room, index }) {
  const isLeft = room.align === 'left';
  return (
    <section id={room.id} style={{ padding: '160px 48px', background: index % 2 === 0 ? 'var(--paper)' : 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: isLeft ? '1.3fr 1fr' : '1fr 1.3fr', gap: 80, alignItems: 'center' }}>
        {isLeft && <RoomImages room={room} />}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <div className="sec-num">· {room.num} ·</div>
            <div style={{ width: 32, height: 1, background: 'var(--line)' }}></div>
            <div className="serif" style={{ fontSize: 16, fontStyle: 'italic', color: room.color }}>{room.sub}</div>
          </div>
          <h2 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 0.95, fontWeight: 400, marginBottom: 8, letterSpacing: '-0.02em' }}>{room.name}</h2>
          <p className="serif" style={{ fontSize: 28, lineHeight: 1.2, fontStyle: 'italic', color: room.color, marginBottom: 32, maxWidth: 460 }}>{room.headline}</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', maxWidth: 480, marginBottom: 36 }}>{room.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--line)', marginBottom: 36 }}>
            {room.features.map((f, i) => (
              <div key={i} style={{ padding: '18px 20px', borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none', borderBottom: i < 2 ? '1px solid var(--line)' : 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: room.color, flexShrink: 0 }}></span>
                {f}
              </div>
            ))}
          </div>
          <Link to="/#book" className="btn-primary" style={{ background: room.color }}>Réserver cette chambre →</Link>
        </div>
        {!isLeft && <RoomImages room={room} />}
      </div>
    </section>
  );
}

function RoomsIntro() {
  return (
    <section style={{ padding: '120px 48px 0', background: 'var(--paper)', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — NOS CHAMBRES ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 32 }}>
          Quatre chambres, quatre atmosphères.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: 600, margin: '0 auto 48px' }}>
          Décorées avec soin, chacune respire son propre caractère — du romantisme feutré au minimalisme rustique.
        </p>
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

function Amenities() {
  const groups = [
    { title: 'Cuisine & Repas', items: [{ name: 'Cuisine La Cornue', detail: 'Four, plaques, hotte aspirante de qualité professionnelle.' }, { name: 'Quooker & Nespresso', detail: 'Eau bouillante instantanée et café de qualité à volonté.' }, { name: 'Lave-vaisselle', detail: 'Grand format pour les séjours en groupe.' }, { name: 'Service traiteur', detail: 'Repas sur-mesure avec produits locaux, sur demande.' }] },
    { title: 'Confort & Détente', items: [{ name: 'Feu ouvert', detail: 'Bois fourni, pour des soirées au coin du feu.' }, { name: 'TV écran plat', detail: 'Dans le salon pour les moments de détente.' }, { name: 'Kicker & jeux', detail: 'Baby-foot et jeux de société pour petits et grands.' }, { name: 'Séances de Reiki', detail: "Soins énergétiques d'origine japonaise, sur réservation." }] },
    { title: 'Pratique', items: [{ name: 'Linge complet', detail: 'Draps de lit, draps de bain et linge de maison inclus.' }, { name: 'Charges comprises', detail: 'Électricité, eau, chauffage, bois et nettoyage final.' }, { name: 'Équipement bébé', detail: 'Lit, table à langer et chaise haute sur demande.' }, { name: 'Parking privé', detail: 'Quatre places de stationnement sur la propriété.' }] },
  ];
  return (
    <section id="equipements" style={{ padding: '160px 48px', background: 'var(--green)', color: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20, color: 'rgba(244,239,230,0.6)' }}>· 03 — ÉQUIPEMENTS ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 80, maxWidth: 800 }}>
          Tout est prévu. <span style={{ opacity: 0.6 }}>Vous n'avez qu'à arriver.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 64 }}>
          {groups.map((g, gi) => (
            <div key={gi}>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 500, paddingBottom: 20, borderBottom: '1px solid rgba(244,239,230,0.2)', marginBottom: 0 }}>{g.title}</h3>
              {g.items.map((item, ii) => (
                <div key={ii} style={{ padding: '24px 0', borderBottom: ii < g.items.length - 1 ? '1px solid rgba(244,239,230,0.1)' : 'none' }}>
                  <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{item.name}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(244,239,230,0.7)' }}>{item.detail}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
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
      <Overview />
      <RoomsIntro />
      {ROOMS.map((r, i) => <RoomSection key={r.id} room={r} index={i} />)}
      <Amenities />
      <section style={{ padding: '160px 48px', background: 'var(--cream-warm)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 36 }}>
            <LeafIcon size={32} />
          </div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 28 }}>
            Votre évasion <span style={{ color: 'var(--green)' }}>vous attend.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 520, margin: '0 auto 44px' }}>
            Réservez en direct — pas d'intermédiaire, pas de surprise.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#book" className="btn-primary" style={{ fontSize: 16, padding: '22px 36px' }}>Réserver en direct →</Link>
            <a href="tel:+32476222707" className="btn-ghost">+32 476 222 707</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
