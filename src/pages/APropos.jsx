import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ELLOHA_URL } from '../components/BookingWidget';

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

function AboutHero() {
  const bp = useBreakpoint();
  return (
    <section id="top" style={{ background: 'var(--paper)' }}>
      <PageHero
        image="/assets/a-propos/gitecharme.webp"
        alt="Charme du gîte de Trussogne"
        title="À propos de Trussogne"
        subtitle="Le fruit d'un rêve, devenu havre de paix"
        imagePosition="center bottom"
      />
      <div style={{ padding: bp === 'mobile' ? '32px 20px 8px' : bp === 'tablet' ? '40px 32px 8px' : '56px 48px 8px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: bp === 'mobile' ? 16 : 20, maxWidth: 720 }}>
            <p style={{ fontSize: bp === 'mobile' ? 15 : 19, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Trussogne est né d'une passion pour l'authenticité et d'un profond respect pour la nature des Ardennes. Notre bâtisse, bien que neuve, incarne le caractère d'antan tout en offrant le confort moderne que nos hôtes méritent.
            </p>
            <p style={{ fontSize: bp === 'mobile' ? 15 : 19, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Située dans un écrin de verdure à Houyet, ce gîte est le fruit d'un rêve : un havre de paix où le temps s'arrête. En famille ou entre amis, reconnectez-vous à l'essentiel dans le calme d'un jardin avec vue sur la beauté naturelle qui nous entoure.
            </p>
          </div>

          <div style={{ marginTop: bp === 'mobile' ? 24 : 32, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#philosophie" className="btn-primary" style={bp === 'mobile' ? { padding: '12px 18px', fontSize: 13 } : {}}>Notre philosophie</a>
            <Link to="/le-gite" className="btn-ghost" style={bp === 'mobile' ? { padding: '11px 16px', fontSize: 13 } : {}}>Découvrir le gîte</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function Pillars() {
  const bp = useBreakpoint();
  const pillars = [
    {
      num: '01',
      title: 'La reconnexion avec la nature',
      desc: "Des espaces ouverts sur le paysage grâce à de grandes baies vitrées, une terrasse couverte offrant une vue imprenable sur les collines des Ardennes. Plongez en pleine nature depuis votre gîte, où chaque regard vers l'extérieur devient une invitation à la contemplation.",
      img: '/assets/a-propos/reconnexion.webp',
      alt: 'La reconnexion avec la nature',
      icon: <img src="/assets/a-propos/icons8-spa-flower-100.webp" alt="" style={{ width: 32, height: 32 }} />
    },
    {
      num: '02',
      title: 'Les moments de partage',
      desc: "Une architecture fluide et conviviale permettant à tous de se retrouver, que ce soit en famille ou entre amis. Partagez un repas préparé dans notre cuisine équipée d'une prestigieuse cuisinière La Cornue, au coin du feu dans notre salon chaleureux, ou lors d'une partie de kicker dans l'espace jeux.",
      img: '/assets/a-propos/partage.webp',
      alt: 'Les moments de partage',
      icon: <img src="/assets/a-propos/icons8-hug-100.webp" alt="" style={{ width: 32, height: 32 }} />
    },
    {
      num: '03',
      title: 'Le bien-être et la quiétude',
      desc: "Des chambres spacieuses avec salles de bain privatives, des espaces de détente soigneusement aménagés, et le calme omniprésent de notre environnement naturel. Après vos promenades, retrouvez la sérénité d'un lieu où confort et luxe discret s'allient pour votre bien-être.",
      img: '/assets/a-propos/bienetre.webp',
      alt: 'Le bien-être et la quiétude',
      icon: <img src="/assets/a-propos/icons8-spa-candle-100.webp" alt="" style={{ width: 32, height: 32 }} />
    },
  ];

  return (
    <section id="philosophie" className="ap-section" style={{ padding: bp === 'mobile' ? '40px 20px' : bp === 'tablet' ? '60px 32px' : '80px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: bp === 'mobile' ? 32 : 48 }}>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, maxWidth: 800, margin: '0 auto' }}>
            Notre <span style={{ color: 'var(--green)' }}>philosophie</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: bp === 'desktop' ? 'repeat(3, 1fr)' : '1fr', gap: bp === 'mobile' ? 40 : 40 }}>
          {pillars.map((p, i) => (
            <div key={i}>
              <div style={{ aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
                <img src={p.img} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.icon}</div>
                <div className="sec-num">· {p.num} ·</div>
              </div>
              <h3 className="serif" style={{ fontSize: 22, lineHeight: 1.2, fontWeight: 400, marginBottom: 14 }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engagement() {
  return (
    <section className="ap-section" style={{ padding: '80px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — NOTRE ENGAGEMENT ·</div>
        <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 48 }}>
          Chaque détail pensé <span style={{ color: 'var(--green)' }}>pour vous</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 820 }}>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)' }}>En choisissant Trussogne pour votre séjour dans les Ardennes, vous optez pour une expérience authentique où chaque détail a été pensé pour vous offrir un moment privilégié. Notre engagement est simple : vous permettre de vivre pleinement chaque instant, loin du stress quotidien, dans un cadre de calme et de nature propice aux retrouvailles.</p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)' }}>Que vous veniez en famille ou entre amis, pour un week-end de VTT ou un séjour plus long près de Dinant, notre plus grande satisfaction est de vous offrir des souvenirs précieux et l'envie de revenir découvrir notre gîte au travers des saisons.</p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--ink-soft)' }}>Habitant à proximité immédiate du gîte, nous restons disponibles et réactifs tout au long de votre séjour. La moindre question, le moindre besoin trouve une réponse rapide — pour que vous profitiez pleinement de chaque instant, l'esprit tranquille.</p>
        </div>
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
  return (
    <section style={{ padding: bp === 'mobile' ? '40px 20px' : bp === 'tablet' ? '60px 32px' : '80px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
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
      <Pillars />
      <Engagement />
      <Reviews />
      <section className="ap-section" style={{ padding: '80px 48px', background: 'var(--paper)', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 28 }}>
            Réserver maintenant.
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={ELLOHA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 15, padding: '16px 28px' }}>Réserver en direct</a>
            <Link to="/contact" className="btn-ghost" style={{ fontSize: 15, padding: '16px 24px' }}>Nous contacter</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
