import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function ContactHero() {
  return (
    <section className="ct-hero" style={{ padding: '180px 48px 80px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h1 className="serif" style={{ fontSize: 'clamp(48px, 6vw, 86px)', lineHeight: 0.95, fontWeight: 400 }}>
          Parlons de votre <span style={{ color: 'var(--green)' }}>séjour</span>
        </h1>
      </div>
    </section>
  );
}

function InfoCards() {
  const cards = [
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: 'Téléphone', value: '+32 476 222 707', sub: 'Du lundi au samedi, 9h–19h', href: 'tel:+32476222707' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.4"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, label: 'Email', value: 'trussogne@gmail.com', sub: 'Réponse sous 24 heures', href: 'mailto:trussogne@gmail.com' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Adresse', value: 'Grande Trussogne, 9C', sub: '5561 Houyet, Belgique', href: 'https://www.google.com/maps/place/?q=place_id:ChIJ52xMq2PHwUcRXcEK6ROKYFs' },
    { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.4"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, label: 'Réseaux', value: 'Instagram', sub: '@trussogne', href: 'https://www.instagram.com/trussogne/' },
  ];

  return (
    <section className="ct-section" style={{ padding: '0 48px 60px', background: 'var(--paper)' }}>
      <div className="ct-cards-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)' }}>
        {cards.map((c, i) => (
          <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener' : undefined}
            style={{ borderRight: i < 3 ? '1px solid var(--line)' : 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: '40px 36px', textDecoration: 'none', color: 'inherit', transition: 'background 0.3s ease' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</div>
            <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>{c.label}</div>
            <div className="serif" style={{ fontSize: 24, lineHeight: 1.2, fontWeight: 500 }}>{c.value}</div>
            <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>{c.sub}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FormAndMap() {
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState('info');

  return (
    <section className="ct-section" style={{ padding: '0 48px 80px', background: 'var(--paper)' }}>
      <div className="ct-form-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        <div className="ct-form-panel" style={{ background: 'var(--cream)', padding: 56, borderRight: '1px solid var(--line)' }}>
          {!submitted ? (
            <>
              <div className="sec-num" style={{ marginBottom: 16 }}>· FORMULAIRE ·</div>
              <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 40 }}>Écrivez-nous</h2>
              <div className="ct-name-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                <div className="field"><label>Prénom</label><input type="text" placeholder="Votre prénom" /></div>
                <div className="field"><label>Nom</label><input type="text" placeholder="Votre nom" /></div>
              </div>
              <div className="field" style={{ marginBottom: 24 }}><label>Email</label><input type="email" placeholder="vous@email.com" /></div>
              <div className="field" style={{ marginBottom: 24 }}><label>Téléphone</label><input type="tel" placeholder="+32 ..." /></div>
              <div className="field" style={{ marginBottom: 24 }}>
                <label>Sujet</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                  <option value="info">Information générale</option>
                  <option value="disponibilite">Disponibilités & tarifs</option>
                  <option value="reiki">Séance de Reiki</option>
                  <option value="traiteur">Service traiteur</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="field" style={{ marginBottom: 24 }}><label>Message</label><textarea rows="5" placeholder="Comment pouvons-nous vous aider ?"></textarea></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 36 }}>
                <input type="checkbox" id="rgpd" style={{ marginTop: 3, accentColor: 'var(--green)', flexShrink: 0 }} />
                <label htmlFor="rgpd" style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5, cursor: 'pointer' }}>
                  J'accepte que le gîte Trussogne collecte et traite mes données conformément à sa <Link to="/conditions-generales" style={{ color: 'var(--green)', textDecoration: 'underline' }}>charte RGPD</Link>.
                </label>
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSubmitted(true)}>Envoyer le message</button>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green)', color: 'var(--paper)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 24 }}>✓</div>
              <h3 className="serif" style={{ fontSize: 40, marginBottom: 16, fontWeight: 400 }}>Message envoyé</h3>
              <p style={{ fontSize: 16, color: 'var(--ink-soft)', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>Sandra revient vers vous dans les 24 heures.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
                <Link to="/le-gite" className="btn-ghost">Le gîte</Link>
                <Link to="/galerie" className="btn-ghost">Galerie</Link>
                <button className="btn-ghost" onClick={() => setSubmitted(false)}>Nouveau message</button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, minHeight: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d5.0889!3d50.2064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1c763ab4ccae7%3A0x5b638a13e90ac15d!2sGite%20de%20Trussogne%20-%20Vakantiehuis%2C%20Ardennes!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
              width="100%" height="100%" style={{ border: 'none', display: 'block', minHeight: 400 }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localisation Trussogne"
            ></iframe>
          </div>
          <div style={{ padding: '28px 32px', background: 'var(--green-deep)', color: 'var(--paper)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="mono-label" style={{ color: 'rgba(244,239,230,0.5)', marginBottom: 6 }}>Adresse</div>
              <div style={{ fontSize: 15 }}>Grande Trussogne, 9C · 5561 Houyet, Belgique</div>
            </div>
            <div className="mono-label" style={{ color: 'rgba(244,239,230,0.4)' }}>50.183°N · 5.000°E</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Directions() {
  const routes = [
    { from: 'Bruxelles', time: '± 1h25', road: 'E411 direction Namur → sortie Custinne → Houyet', dist: '103 km' },
    { from: 'Namur', time: '± 35 min', road: 'E411 direction Luxembourg → sortie Custinne → Houyet', dist: '39 km' },
    { from: 'Liège', time: '± 1h', road: 'E25 → E42 → E411 → sortie Custinne → Houyet', dist: '95 km' },
    { from: 'Gand', time: '± 2h15', road: 'E40 → R0 → E411 direction Namur → Houyet', dist: '159 km' },
    { from: 'Saint-Nicolas', time: '± 2h05', road: 'E17 → E19 → E411 direction Namur → Houyet', dist: '159 km' },
    { from: 'Rotterdam', time: '± 3h', road: 'A16/E19 → Anvers → E411 direction Namur → Houyet', dist: '234 km' },
  ];
  return (
    <section className="ct-section" style={{ padding: '60px 48px 80px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="ct-directions-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96 }}>
          <div>
            <div className="sec-num" style={{ marginBottom: 20 }}>· COMMENT VENIR ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400, marginBottom: 24 }}>
              Nous <span style={{ color: 'var(--green)' }}>trouver</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-soft)', marginBottom: 36 }}>
              Trussogne se situe à Houyet, au cœur des Ardennes belges.
            </p>
          </div>
          <div>
            {routes.map((r, i) => (
              <div key={i} className="ct-route-row" style={{ display: 'grid', gridTemplateColumns: '160px 1fr 80px', gap: 24, alignItems: 'center', padding: '28px 0', borderBottom: i < routes.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div className="serif" style={{ fontSize: 22, lineHeight: 1.1, fontWeight: 400 }}>{r.from}</div>
                <div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 4 }}>{r.road}</div>
                  <div className="mono-label" style={{ color: 'var(--green)' }}>{r.time}</div>
                </div>
                <div className="mono-label" style={{ color: 'var(--ink-soft)', textAlign: 'right' }}>{r.dist}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Quel est le tarif pour une nuit ?', a: "Les tarifs varient selon la saison et le nombre de voyageurs. Contactez-nous directement pour une proposition personnalisée — c'est toujours moins cher en direct." },
    { q: 'Les draps et serviettes sont-ils fournis ?', a: "Oui, tout le linge est inclus : draps de lit, draps de bain et linge de maison. Vous n'avez rien à apporter." },
    { q: 'Acceptez-vous les animaux ?', a: "Les animaux de compagnie sont acceptés sous conditions. Contactez-nous pour en discuter avant votre réservation." },
    { q: "Quelles sont les heures d'arrivée et de départ ?", a: "Arrivée à partir de 16h, départ avant 10h. Des arrangements sont possibles selon la disponibilité." },
    { q: "Y a-t-il un minimum de nuits ?", a: "Un minimum de 2 nuits est généralement demandé, 3 nuits en haute saison." },
    { q: "Les charges sont-elles comprises ?", a: "Oui, tout est inclus : électricité, eau, chauffage, bois pour le feu et nettoyage final. Aucun supplément caché." },
  ];
  const [open, setOpen] = useState(null);

  return (
    <section className="ct-section" style={{ padding: '80px 48px', background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="sec-num" style={{ marginBottom: 20 }}>· FAQ ·</div>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.05, fontWeight: 400 }}>
            Questions fréquentes
          </h2>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', textAlign: 'left', padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
              <span style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>{faq.q}</span>
              <span style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18, transition: 'all 0.3s ease', transform: open === i ? 'rotate(45deg)' : 'none', background: open === i ? 'var(--green)' : 'transparent', color: open === i ? 'var(--paper)' : 'var(--ink)' }}>+</span>
            </button>
            <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease, padding 0.4s ease', paddingBottom: open === i ? 28 : 0 }}>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 700 }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} lightHero />
      <ContactHero />
      <InfoCards />
      <FormAndMap />
      <Directions />
      <FAQ />
      <Footer />
    </>
  );
}
