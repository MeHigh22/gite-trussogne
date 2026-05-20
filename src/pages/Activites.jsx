import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const CATEGORIES = [
  { id: 'all',        label: 'Tout',               icon: '◆' },
  { id: 'nature',     label: 'Nature & Rando',      icon: '↟' },
  { id: 'aventure',   label: 'Aventure & Sport',    icon: '⇡' },
  { id: 'patrimoine', label: 'Patrimoine & Culture', icon: '⌂' },
  { id: 'famille',    label: 'Famille & Découverte', icon: '✦' },
];

const ACTIVITIES = [
  { cat: 'nature',     name: 'Promenades à Houyet',     loc: 'Au pied du gîte',        desc: 'Sentiers pittoresques le long de la Lesse, paysages vallonnés et vues imprenables. Idéal pour randonneurs et amoureux de nature.', img: 'HOUYET · sentier lesse' },
  { cat: 'nature',     name: 'Vélos Ardenne · RAVeL',   loc: 'Circuits RAVeL',          desc: 'Anciennes voies ferrées réaménagées traversant forêts luxuriantes et charmants villages. Parcours balisés pour tous niveaux.', img: 'RAVEL · piste cyclable' },
  { cat: 'nature',     name: 'Brame du cerf',            loc: 'Forêts environnantes',    desc: "Spectacle naturel fascinant au crépuscule automnal. Observez ce rituel ancestral au cœur de la faune sauvage ardennaise.", img: 'BRAME · cerf automne' },
  { cat: 'nature',     name: "Jardins d'Annevoie",       loc: 'Annevoie',                desc: "Domaine du XVIIIᵉ siècle où 50 fontaines et cascades dansent sans pompe, par la seule force de la gravité.", img: 'ANNEVOIE · jardins eau' },
  { cat: 'aventure',   name: 'Dinant Aventure',          loc: 'Dinant',                  desc: "Parcours d'accrobranche vertigineux, tyroliennes géantes, death-ride et via ferrata. Activités sécurisées pour tous les âges.", img: 'DINANT · accrobranche' },
  { cat: 'aventure',   name: 'Kayak sur la Lesse',       loc: 'Descente 12 km',          desc: 'Descente entre falaises calcaires et paysages verdoyants. Mélange de détente, nature sauvage et rapides ludiques.', img: 'LESSE · kayak rivière' },
  { cat: 'aventure',   name: 'Royal Golf Club',          loc: '5 min du gîte',           desc: "Parcours 18 trous de prestige niché dans un écrin de verdure. Fairways impeccables et panoramas époustouflants.", img: 'GOLF · château ardenne' },
  { cat: 'aventure',   name: 'Dave City Ranch',          loc: 'Gendron-Celles',          desc: "Balades équestres encadrées sur sentiers panoramiques traversant forêts denses et plateaux verdoyants.", img: 'RANCH · chevaux' },
  { cat: 'patrimoine', name: 'Château de Vêves',         loc: 'XIIIᵉ siècle · 15 km',  desc: "Cinq tours majestueuses perchées sur un éperon rocheux. Intérieurs meublés, animations en costume.", img: 'VÊVES · château tours' },
  { cat: 'patrimoine', name: 'Village de Celles',        loc: 'Plus Beau Village',       desc: "Ruelles pavées, maisons en pierre calcaire, église romane millénaire dans un cadre bucolique préservé.", img: 'CELLES · village pierre' },
  { cat: 'patrimoine', name: 'Citadelle de Dinant',      loc: 'Dinant · 100m altitude',  desc: "Forteresse millénaire accessible par téléphérique. Galeries souterraines et panorama sur la Meuse.", img: 'CITADELLE · dinant' },
  { cat: 'patrimoine', name: 'Abbaye de Leffe',          loc: 'Dinant · depuis 1240',    desc: "Tradition brassicole séculaire et musée interactif dévoilant les secrets de fabrication de la célèbre bière.", img: 'LEFFE · abbaye' },
  { cat: 'patrimoine', name: 'Abbaye de Maredsous',      loc: 'Ardennes · 1872',         desc: "Tradition monastique bénédictine, fromages à pâte pressée et bières artisanales. Savoir-faire séculaire.", img: 'MAREDSOUS · abbaye' },
  { cat: 'patrimoine', name: "Maison de Monsieur Sax",   loc: 'Dinant',                  desc: "Musée interactif hommage à l'inventeur du saxophone. Instruments d'époque et expériences sonores.", img: 'SAX · musée dinant' },
  { cat: 'famille',    name: 'Domaine de Chevetogne',    loc: '550 ha · 12 km',          desc: "Jardins thématiques, plaines de jeux innovantes, étangs et sentiers forestiers pour toute la famille.", img: 'CHEVETOGNE · parc' },
  { cat: 'famille',    name: 'Grottes & Parc de Han',    loc: 'Han-sur-Lesse',           desc: "30 espèces animales en semi-liberté sur 250 hectares, et l'une des plus belles grottes d'Europe.", img: 'HAN · grottes parc' },
  { cat: 'famille',    name: 'Euro Space Center',        loc: 'Transinne',               desc: "Simulateurs interactifs et expériences immersives sur l'exploration spatiale.", img: 'ESPACE · simulateur' },
  { cat: 'famille',    name: 'Redu, Village du Livre',   loc: 'Redu',                    desc: "Plus de 20 librairies et bouquineries dans des ruelles pittoresques. Un refuge pour les amoureux de lecture.", img: 'REDU · librairie' },
];

const RESTAURANTS = [
  { name: 'La Clochette',              loc: 'Celles',            type: 'Cuisine du terroir',        desc: 'Traditions locales et créativité dans un cadre rustique élégant.' },
  { name: 'Le Val Jolie',              loc: 'Celles',            type: 'Gastronomique · vue',       desc: "Cuisine raffinée et panorama d'exception surplombant la vallée." },
  { name: 'Le Tank Brasserie',         loc: 'Celles',            type: 'Microbrasserie · bistrot',  desc: 'Bières artisanales brassées sur place et cuisine bistrot généreuse.' },
  { name: 'Auberge de la Lesse',       loc: 'Gendron',           type: 'Auberge · terrasse',        desc: 'Trésors culinaires ardennais revisités, terrasse panoramique sur la rivière.' },
  { name: 'La Flobette',               loc: 'Furfooz',           type: 'Végétarien · créatif',      desc: 'Cuisine végétarienne inventive avec produits locaux et de saison.' },
  { name: 'Hostellerie Gilain',        loc: 'Achêne',            type: 'Étoilé · raffiné',          desc: 'Haute gastronomie et produits du terroir sublimés avec audace.' },
  { name: "Auberge du Bief de la Lesse", loc: 'Villers-sur-Lesse', type: 'Terroir · convivial',   desc: 'Cuisine ardennaise sincère, terrasse ombragée au bord de la Lesse.' },
  { name: 'La Broche',                 loc: 'Dinant',            type: 'Grillades · vue Meuse',     desc: 'Rôtisseries au feu vif, vue imprenable sur la Meuse et la citadelle.' },
  { name: 'Brasserie Leffe',           loc: 'Dinant',            type: 'Brasserie · historique',    desc: 'Spécialités locales accordées à la gamme Leffe, terrasse sur la Meuse.' },
  { name: 'Château de Vignée',         loc: 'Rochefort',         type: '5★ · gastronomique',        desc: "Symphonie de saveurs dans une demeure d'exception au bord de la Lesse." },
];

function ActHero() {
  return (
    <section className="act-hero" style={{ minHeight: '70vh', padding: '180px 48px 120px', display: 'flex', alignItems: 'center', background: 'var(--green)', color: 'var(--paper)', position: 'relative', overflow: 'hidden' }}>
      <div className="serif" style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', fontSize: 'min(50vw, 600px)', lineHeight: 0.8, fontStyle: 'italic', color: 'rgba(244,239,230,0.04)', userSelect: 'none', pointerEvents: 'none' }}>30+</div>
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 800 }}>
          <div className="mono-label" style={{ color: 'rgba(244,239,230,0.6)', marginBottom: 24 }}>· Aux alentours du gîte de Trussogne ·</div>
          <h1 className="serif" style={{ fontSize: 'clamp(56px, 8vw, 120px)', lineHeight: 0.95, fontWeight: 400, marginBottom: 28 }}>
            Activités <span style={{ opacity: 0.55 }}>à faire</span><br />aux alentours.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(244,239,230,0.8)', maxWidth: 520 }}>
            Nature, patrimoine, aventure et gastronomie — les Ardennes belges regorgent de trésors à découvrir, à quelques minutes de votre porte.
          </p>
        </div>
        <div className="act-hero-stats" style={{ display: 'flex', gap: 64, marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(244,239,230,0.15)' }}>
          {[{ n: '30+', label: 'Activités' }, { n: '10', label: 'Restaurants' }, { n: '5 min', label: 'Le plus proche' }, { n: '550 ha', label: 'Chevetogne' }].map((s, i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: 40, lineHeight: 1 }}>{s.n}</div>
              <div className="mono-label" style={{ marginTop: 8, color: 'rgba(244,239,230,0.55)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? ACTIVITIES : ACTIVITIES.filter(a => a.cat === filter);

  return (
    <section id="activites" className="act-section" style={{ padding: '120px 48px 160px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div className="sec-num" style={{ marginBottom: 16 }}>· DÉCOUVRIR ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05, fontWeight: 400 }}>
              {filtered.length} activités<span style={{ color: 'var(--green)' }}> à découvrir.</span>
            </h2>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 56, flexWrap: 'wrap' }}>
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setFilter(c.id)} style={{
              padding: '10px 20px', borderRadius: 100,
              border: '1px solid ' + (filter === c.id ? 'var(--green)' : 'var(--line)'),
              background: filter === c.id ? 'var(--green)' : 'transparent',
              color: filter === c.id ? 'var(--paper)' : 'var(--ink-soft)',
              fontSize: 13, letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.3s ease'
            }}>
              <span style={{ marginRight: 6 }}>{c.icon}</span>{c.label}
            </button>
          ))}
        </div>
        <div className="act-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 28px' }}>
          {filtered.map((act) => (
            <article key={act.name}>
              <div className="ph" data-label={act.img} style={{ aspectRatio: '4/3', borderRadius: 4 }}></div>
              <div style={{ padding: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <span className="mono-label" style={{ color: 'var(--green)', fontSize: 10 }}>{act.cat}</span>
                  <span className="mono-label" style={{ color: 'var(--ink-soft)', fontSize: 10 }}>{act.loc}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>{act.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{act.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RestaurantsSection() {
  return (
    <section id="restaurants" className="act-section" style={{ padding: '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="act-resto-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 96 }}>
          <div style={{ position: 'sticky', top: 140, alignSelf: 'start' }}>
            <div className="sec-num" style={{ marginBottom: 20 }}>· GASTRONOMIE ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 24 }}>
              Nos adresses gourmandes.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 32 }}>
              Des tables authentiques, du bistrot convivial au gastronomique étoilé.
            </p>
            <div className="serif" style={{ fontSize: 80, lineHeight: 0.9, color: 'var(--green)', opacity: 0.25 }}>10</div>
            <div className="mono-label" style={{ color: 'var(--ink-soft)', marginTop: 8 }}>adresses sélectionnées</div>
          </div>
          <div>
            {RESTAURANTS.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '24px 0', borderBottom: i < RESTAURANTS.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div className="ph" data-label={r.loc.toUpperCase()} style={{ width: 120, height: 80, borderRadius: 4, flexShrink: 0 }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h3 className="serif" style={{ fontSize: 24, fontWeight: 500 }}>{r.name}</h3>
                    <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', fontWeight: 500 }}>{r.type}</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{r.desc}</p>
                </div>
                <div className="mono-label" style={{ color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>{r.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Activites() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <ActHero />
      <ActivitiesSection />
      <RestaurantsSection />
      <section className="act-section" style={{ padding: '120px 48px', background: 'var(--green)', color: 'var(--paper)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 32 }}>
            Votre évasion <span style={{ opacity: 0.6 }}>vous attend.</span>
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#book" className="btn-primary" style={{ background: 'var(--paper)', color: 'var(--green)', fontSize: 16, padding: '22px 36px' }}>Réserver en direct →</Link>
            <Link to="/" className="btn-ghost" style={{ borderColor: 'rgba(244,239,230,0.3)', color: 'var(--paper)' }}>Retour à l'accueil</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
