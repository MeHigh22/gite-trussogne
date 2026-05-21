import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

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

const CG_ARTICLES = [
  {
    title: 'Article 1 — Modalités de conclusion du contrat',
    content: `Le contrat est un contrat de location touristique. La brève durée du contrat constitue une condition essentielle sans laquelle le contrat n'aurait pas été conclu. Le preneur ne peut établir sa résidence principale dans l'immeuble loué. L'âge minimum requis du preneur est de 32 ans, sauf autorisation dérogatoire préalable expressément demandée au propriétaire.

Le bailleur adresse au locataire le présent contrat, en deux exemplaires dûment complétés et signés. Le locataire renvoie au bailleur, dans un délai maximum de 5 jours suivant la date de réception du contrat, un exemplaire complété et signé par lui. Le locataire paie l'acompte dans le même délai. Le solde est exigible 30 jours avant l'entrée en jouissance, à l'exception toutefois des réservations tardives, auquel cas le montant total de la location sera payé à l'arrivée.

Au-delà du 5e jour, l'hébergement sera à nouveau proposé pour une autre location.

Si le bailleur ne reçoit pas l'exemplaire du contrat lui revenant, ou l'acompte, dans le délai imparti, il peut renoncer à la location par lettre recommandée, fax ou courrier électronique confirmé par poste endéans les 8 jours qui suivent la date prévue pour le paiement de l'acompte ou du renvoi effectif du contrat signé par le locataire.`,
  },
  {
    title: 'Article 2 — Usage des biens loués',
    content: `Le locataire use du bien loué conformément à sa destination et en bon père de famille. Il est tenu de respecter la capacité maximum prévue. Toute infraction à cette clause peut entraîner la résiliation immédiate du présent contrat, aux torts du locataire, le montant de la location restant définitivement acquis au bailleur.`,
  },
  {
    title: 'Article 3 — Assurances',
    content: `Assurance Incendie — Le locataire doit être couvert en RC locative pour les dégâts qu'il pourrait occasionner à l'immeuble et aux meubles loués et déclare être couvert pour de tels risques par son assurance incendie personnelle (assurance villégiature). À défaut, le locataire s'engage à souscrire un contrat.

Assurance Responsabilité Civile Familiale (vie privée) — Le locataire est couvert par une assurance Responsabilité Civile Familiale (vie privée).

Le propriétaire décline toute responsabilité pour les dégâts, pertes ou vols de biens personnels apportés par le locataire ou les personnes qui l'accompagnent.`,
  },
  {
    title: 'Article 4 — Annulation par le locataire',
    content: `Toute annulation doit être notifiée par lettre recommandée, fax ou courrier électronique confirmé par poste.

Les frais suivants sont portés en compte :
• De la date de réservation à 30 jours avant le début du séjour : aucun frais d'annulation.
• De 29 à 15 jours avant la date du séjour : 30 % du montant de la location.
• Dans les 14 derniers jours : 100 % du montant de la location.
• En cas de force majeure pour l'une ou l'autre partie, le contrat sera suspendu et reporté à une date ultérieure à convenir. Si aucun accord n'est trouvé dans les 18 mois, les montants versés seront intégralement remboursés.

L'indisponibilité d'un des locataires pour cause de maladie n'est pas un cas de force majeure ; nous recommandons de souscrire à une assurance annulation.

Le locataire peut proposer au bailleur la cession de son bail, sous son entière responsabilité, à une personne désignée qui accepte de contracter aux mêmes conditions.

Le départ prématuré du locataire, quelle qu'en soit la raison, n'entraîne aucun remboursement même partiel du prix du séjour.`,
  },
  {
    title: 'Article 5 — Inventaire',
    content: `Il est procédé, au début et à la fin du séjour, à un inventaire de l'équipement du bien loué. Cet inventaire doit être signé par les deux parties. À défaut d'un inventaire signé, le locataire considérera que l'état du bien loué est sans anomalie.

Le locataire doit restituer le bien dans l'état où il l'a reçu. Il répond de toute perte ou dégât. Toute différence avec l'inventaire ou anomalie doit être signalée au bailleur au plus tard à 10h00, le lendemain du jour de l'arrivée.`,
  },
  {
    title: 'Article 6 — Réclamations',
    content: `Toute réclamation doit être envoyée au bailleur par lettre recommandée dans un délai de 8 jours après la fin du séjour. Les pièces justificatives doivent être jointes.`,
  },
  {
    title: 'Article 7 — Solidarité',
    content: `Les obligations du présent bail sont indivisibles et solidaires à l'égard du locataire, de ses héritiers ou de ses ayants droits, à quelque titre que ce soit.`,
  },
  {
    title: 'Article 8 — Respect du voisinage et de l\'environnement',
    content: `Le locataire s'engage à adopter un comportement respectueux des habitants et de l'environnement en général : faune, flore, équipements divers, etc. Le calme et la quiétude sont l'âme des lieux. Les locataires s'engagent à les respecter en s'interdisant toute diffusion de musique à l'extérieur ainsi que toute festivité bruyante.

En cas de non-respect de ces clauses, la propriétaire se réserve le droit d'exiger le départ immédiat des locataires fautifs, sans qu'aucune indemnisation ne puisse être réclamée.`,
  },
  {
    title: 'Article 9 — Litiges',
    content: `À défaut d'accord entre parties, celles-ci soumettront leurs griefs au secrétariat des Gîtes de Wallonie qui tentera de proposer une solution amiable. À défaut d'y parvenir, seuls les tribunaux de l'arrondissement judiciaire du lieu où se trouve l'immeuble sont compétents.`,
  },
];

const PRIVACY_SECTIONS = [
  {
    title: 'Collecte des informations personnelles',
    content: `Nous collectons des informations personnelles identifiables, telles que les noms, adresses e-mail, numéros de téléphone, et autres données similaires, uniquement lorsque ces informations sont fournies volontairement par les utilisateurs via les formulaires de contact ou d'inscription sur notre site.`,
  },
  {
    title: 'Utilisation des informations personnelles',
    content: `Les informations personnelles collectées sont utilisées pour répondre aux demandes des utilisateurs, gérer les réservations, fournir des informations sur nos services et événements, ainsi que pour communiquer des mises à jour pertinentes concernant le gîte Trussogne.`,
  },
  {
    title: 'Protection des informations personnelles',
    content: `Nous mettons en place des mesures de sécurité appropriées pour protéger les informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.`,
  },
  {
    title: 'Partage des informations personnelles',
    content: `Nous ne vendons, ne louons ni ne partageons les informations personnelles des utilisateurs avec des tiers, sauf dans les cas où cela est nécessaire pour répondre à une demande spécifique de l'utilisateur ou lorsque cela est exigé par la loi.`,
  },
  {
    title: 'Cookies',
    content: `Notre site internet peut utiliser des cookies pour améliorer l'expérience de navigation des utilisateurs. Les cookies sont de petits fichiers texte placés sur l'ordinateur des utilisateurs pour collecter des informations standard de journal Internet et de comportement des visiteurs de manière anonyme. Les utilisateurs ont la possibilité de refuser l'utilisation de cookies en modifiant les paramètres de leur navigateur, mais cela peut limiter certaines fonctionnalités de notre site.`,
  },
  {
    title: 'Consentement',
    content: `En utilisant notre site internet, vous consentez à notre politique de confidentialité et à nos pratiques en matière de collecte et d'utilisation des informations personnelles telles que décrites dans cette politique.

En cliquant sur la case « j'accepte les termes et conditions » de notre formulaire en ligne, vous reconnaissez accepter que vos données soient traitées de la manière décrite ci-dessus. Si vous ne l'acceptez pas, ne cochez pas la case et contactez-nous plutôt par téléphone ou par mail.`,
  },
  {
    title: 'Mises à jour de la politique de confidentialité',
    content: `Cette politique de confidentialité peut être mise à jour périodiquement pour refléter les changements dans nos pratiques. Les utilisateurs seront informés de toute modification substantielle sur cette page.

Pour toute question concernant notre politique de confidentialité, veuillez nous contacter via l'onglet Contact ou par téléphone ou mail.

Dernière mise à jour : 20 avril 2025.`,
  },
];

export default function ConditionsGenerales() {
  const bp = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const pad = bp === 'mobile' ? '40px 20px' : bp === 'tablet' ? '60px 32px' : '80px 48px';

  return (
    <>
      <Nav scrolled={scrolled} />

      {/* Hero */}
      <section style={{ padding: bp === 'mobile' ? '100px 20px 40px' : bp === 'tablet' ? '110px 32px 48px' : '140px 48px 60px', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 20 }}>· Informations légales ·</div>
          <h1 className="serif" style={{ fontSize: bp === 'mobile' ? 'clamp(36px, 8vw, 46px)' : 'clamp(48px, 6vw, 86px)', lineHeight: 0.95, fontWeight: 400, marginBottom: 24 }}>
            Conditions <span style={{ color: 'var(--green)' }}>générales.</span>
          </h1>
          <p style={{ fontSize: bp === 'mobile' ? 14 : 16, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: 560 }}>
            Contrat de location touristique — Gîte de Trussogne, Grande-Trussogne 9C, 5561 Houyet, Belgique.
          </p>
        </div>
      </section>

      {/* Conditions générales */}
      <section style={{ padding: pad, background: 'var(--cream)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 01 — CONDITIONS GÉNÉRALES DE LOCATION ·</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {CG_ARTICLES.map((a, i) => (
              <div key={i} style={{ padding: '36px 0', borderBottom: i < CG_ARTICLES.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <h2 className="serif" style={{ fontSize: 20, fontWeight: 400, marginBottom: 16, color: 'var(--green)' }}>{a.title}</h2>
                {a.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: 12, whiteSpace: 'pre-line' }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Politique de confidentialité */}
      <section style={{ padding: pad, background: 'var(--paper)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="sec-num" style={{ marginBottom: 20 }}>· 02 — POLITIQUE DE CONFIDENTIALITÉ & RGPD ·</div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: 40, maxWidth: 700 }}>
            En tant que client ou visiteur de notre site Internet, nous souhaitons vous informer, respecter vos droits et vous permettre de contrôler ce qu'il advient de vos données personnelles, en conformité avec le RGPD 2016/679 du 27 avril 2016.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PRIVACY_SECTIONS.map((s, i) => (
              <div key={i} style={{ padding: '32px 0', borderBottom: i < PRIVACY_SECTIONS.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <h2 className="serif" style={{ fontSize: 20, fontWeight: 400, marginBottom: 14, color: 'var(--green)' }}>{s.title}</h2>
                {s.content.split('\n\n').map((para, j) => (
                  <p key={j} style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: 10, whiteSpace: 'pre-line' }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
