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
  { cat: 'nature',     name: 'Promenades à Houyet',             loc: 'Au pied du gîte',        desc: "Explorez les charmes pittoresques de Houyet lors de promenades enchantées. Sentiers bordés d'arbres, paysages vallonnés et vues imprenables sur la Lesse vous attendent pour une bouffée d'air pur en pleine nature ardennaise. Une escapade idéale pour les amoureux de randonnée souhaitant découvrir l'authenticité de cette région riche en patrimoine naturel.", img: '/assets/alentours/houyet-1.webp', links: [{ label: 'Découvrir', url: 'https://houyet.be/loisirs/tourisme/promenades/' }] },
  { cat: 'nature',     name: 'Vélos Ardenne · RAVeL',           loc: 'Circuits RAVeL',          desc: "Explorez la magie des Ardennes à vélo sur les circuits exceptionnels du RAVeL. Roulez en toute sérénité sur ces anciennes voies ferrées réaménagées, traversant forêts luxuriantes, vallées pittoresques et charmants villages. Location de vélos de qualité, parcours balisés pour tous niveaux et assistance attentionnée garantis.", img: '/assets/alentours/Randonnees-a-velo-avec-Velos-Ardenne-1024x768.webp', links: [{ label: 'Ardennes vélo', url: 'https://www.ardennes.com/itinerances/a-velo-dans-les-ardennes/' }, { label: 'RAVeL', url: 'https://ravel.wallonie.be/en/home/itineraires/regional/w7-sur-la-route-des-ardennes.html' }] },
  { cat: 'nature',     name: 'Brame du cerf',                   loc: 'Forêts environnantes',    desc: "Plongez dans l'expérience sauvage et envoûtante du brame du cerf, spectacle naturel fascinant où les mâles majestueux font résonner leurs puissants cris d'amour à travers forêts et clairières. Accompagnés de guides passionnés, observez discrètement ce rituel ancestral de séduction au crépuscule automnal.", img: '/assets/alentours/Brame-du-cerf.webp', links: [{ label: 'Infos pratiques', url: 'https://www.ardennebelge.be/fr/outils/brame-cerf.php' }] },
  { cat: 'nature',     name: "Jardins d'Annevoie",              loc: 'Annevoie',                desc: "Créé au XVIIIe siècle, ce domaine exceptionnel offre un spectacle saisissant où plus de 50 fontaines et cascades dansent sans aucune pompe, par la seule force de la gravité. Jardins à la française, miroirs d'eau, perspectives romantiques et architecture végétale vous invitent à une promenade entre histoire, nature et ingéniosité.", img: '/assets/alentours/Jardins-dAnnevoie-1024x683.webp', links: [{ label: 'Infos pratiques', url: 'https://www.annevoie.be/fr/' }] },
  { cat: 'aventure',   name: 'Dinant Aventure',                 loc: 'Dinant',                  desc: "Vivez des sensations fortes à Dinant Aventure, le paradis des amateurs d'adrénaline ! Parcours d'accrobranche vertigineux, tyroliennes géantes survolant la vallée, death-ride à couper le souffle et via ferrata pour les plus audacieux. Activités sécurisées et adaptées pour tous les âges.", img: '/assets/alentours/Dinant-Aventure--1024x576.webp', links: [{ label: 'Infos pratiques', url: 'https://www.dinant-evasion.be/fr/dinant-aventure' }] },
  { cat: 'aventure',   name: 'Kayak sur la Lesse',              loc: 'Descente 12 km',          desc: "Embarquez pour une aventure aquatique inoubliable en descendant la Lesse en kayak ! Pagayez à votre rythme au fil de cette rivière sinueuse, entre falaises calcaires majestueuses et paysages verdoyants préservés. Accessible aux débutants comme aux plus expérimentés, cette descente de 12 km mêle détente et petits rapides ludiques.", img: '/assets/alentours/descente_lesse_kayak_chateau_walmin.webp', links: [{ label: 'Infos pratiques', url: 'https://www.dinant-evasion.be/fr/kayak-sur-la-lesse' }] },
  { cat: 'aventure',   name: 'Royal Golf Club',                 loc: '5 min du gîte',           desc: "Découvrez l'élégance du Royal Golf Club du Château Royal d'Ardenne, parcours prestigieux niché dans un écrin de verdure historique. Fairways impeccables, greens techniques et panoramas époustouflants sur les collines ardennaises vous attendent sur ce 18 trous de caractère. Golfeurs débutants ou confirmés y trouveront leur bonheur.", img: '/assets/alentours/gold.webp', links: [{ label: 'Infos pratiques', url: 'https://rgccra.be/' }] },
  { cat: 'aventure',   name: 'Dave City Ranch',                 loc: 'Gendron-Celles',          desc: "Galopez en toute liberté au Dave City Ranch à Gendron-Celles, où l'aventure équestre se mêle aux paysages sauvages de la vallée mosane. Cavaliers débutants ou confirmés, profitez de balades encadrées sur des sentiers panoramiques traversant forêts denses et plateaux verdoyants.", img: '/assets/alentours/dave-city-ranch.webp', links: [{ label: 'Infos pratiques', url: 'https://www.ardennebelge.be/diffusio/fr/p/decouverte-et-divertissement/centre-equestre-dave-city-ranch-houyet_TFOLOD-01-0B2G-2X6L/' }] },
  { cat: 'patrimoine', name: 'Château de Vêves',                loc: 'XIIIᵉ siècle · 15 km',  desc: "Admirez la splendeur médiévale du Château de Vêves, surnommé « le plus petit des grands châteaux ». Avec ses cinq tours majestueuses perchées sur un éperon rocheux, ce château habité depuis plus de huit siècles vous plonge dans l'histoire vivante. Intérieurs meublés, animations en costume et panorama exceptionnel sur la vallée.", img: '/assets/alentours/veveve.webp', links: [{ label: 'Découvrir', url: 'https://chateau-veves.be/en/' }] },
  { cat: 'patrimoine', name: 'Village de Celles',               loc: 'Plus Beau Village',       desc: "Flânez dans les ruelles pavées de Celles, l'un des « Plus Beaux Villages de Wallonie », où le temps semble s'être arrêté. Admirez ses maisons en pierre calcaire blonde, son église romane millénaire et son château néogothique dans un cadre bucolique préservé. Un joyau médiéval pour les amoureux de patrimoine rural.", img: '/assets/alentours/CELLES_08_©_Rita_Photographie-scaled-1-1024x576.webp', links: [{ label: 'Infos pratiques', url: 'https://beauxvillages.be/villages/celles/' }] },
  { cat: 'patrimoine', name: 'Église Saint-Hadelin',            loc: 'Celles · XIᵉ siècle',    desc: "Véritable trésor architectural du XIe siècle classé au patrimoine exceptionnel de Wallonie. Sa silhouette harmonieuse en pierre blonde, son remarquable chœur à cinq absides et ses chapiteaux sculptés témoignent d'un art roman authentique. Nichée au cœur d'un des plus beaux villages de Belgique.", img: '/assets/alentours/Eglise-Saint-Hadelin-a-Celles--1024x681.webp', links: [{ label: 'Découvrir', url: 'https://visitwallonia.be/fr-be/content/collegiale-saint-hadelin-celles' }] },
  { cat: 'patrimoine', name: 'Chapelle Saint-Roch',             loc: 'Houyet',                  desc: "Découvrez le charme discret de la Chapelle Saint-Roch à Houyet, petit édifice religieux empreint d'authenticité et d'histoire locale. Nichée dans un cadre verdoyant, cette chapelle votive érigée en l'honneur du saint protecteur contre les épidémies impressionne par sa simplicité touchante. Un havre de paix invitant à la contemplation.", img: '/assets/alentours/Chapelle-Saint-Roch-a-Houyet--e1741880503896.webp', links: [{ label: 'Infos pratiques', url: 'https://tourismehouyet.be/decouvertes/patrimoine-local/la-chapelle-saint-roch/' }] },
  { cat: 'patrimoine', name: "Halte d'Ardenne",                 loc: 'Houyet',                  desc: "Faites une pause historique à la Halte d'Ardenne, ancienne gare privée du Roi Léopold II transformée en monument remarquable. Cette élégante construction ferroviaire aux détails architecturaux raffinés témoigne du passé royal de la région, évoquant l'époque où la famille royale venait séjourner dans les Ardennes.", img: '/assets/alentours/Halte-dArdenne--1024x868.webp', links: [{ label: 'Découvrir', url: 'https://www.atlasobscura.com/places/halte-royal-dardenne-houyet-belgium' }] },
  { cat: 'patrimoine', name: 'Citadelle de Dinant',             loc: 'Dinant · 100m altitude',  desc: "Surplombant majestueusement la vallée de la Meuse à 100 mètres de hauteur, la Citadelle de Dinant est accessible par téléphérique ou 408 marches. Cette forteresse millénaire dévoile l'histoire mouvementée de la région à travers ses galeries souterraines, ses expositions immersives et ses reconstitutions militaires.", img: '/assets/alentours/La-Citadelle-de-Dinant--1024x683.webp', links: [{ label: 'Découvrir', url: 'https://www.citadellededinant.be/fr/' }] },
  { cat: 'patrimoine', name: 'Le Rocher Bayard',                loc: 'Dinant',                  desc: "Admirez le légendaire Rocher Bayard, impressionnante aiguille de pierre de 40 mètres se dressant au bord de la Meuse. Cette formation géologique spectaculaire porte l'empreinte mythique du cheval Bayard qui, selon la légende, l'aurait fendu d'un puissant coup de sabot. Site incontournable sur la route touristique de Dinant.", img: '/assets/alentours/Le-Rocher-Bayard--1024x884.webp', links: [{ label: 'Infos pratiques', url: 'https://fr.ardennes-etape.be/experience/ville/incontournable/rocher-bayard' }] },
  { cat: 'patrimoine', name: 'Abbaye de Leffe',                 loc: 'Dinant · depuis 1240',    desc: "Découvrez la prestigieuse Abbaye de Leffe, berceau d'une tradition brassicole séculaire depuis 1240. Entre spiritualité et savoir-faire artisanal, ce joyau architectural dévoile les secrets de fabrication de la célèbre bière belge à travers son musée interactif. Une histoire mouvementée à déguster avec modération.", img: '/assets/alentours/LAbbaye-de-Leffe--1024x768.webp', links: [{ label: 'Infos pratiques', url: 'https://www.abbaye-de-leffe.be/' }] },
  { cat: 'patrimoine', name: 'Abbaye de Maredsous',             loc: 'Ardennes · 1872',         desc: "Au cœur des Ardennes belges, l'Abbaye de Maredsous incarne la tradition monastique bénédictine dans toute sa splendeur. Fondée en 1872, les moines y perpétuent des savoir-faire séculaires : fromages à pâte pressée et bières artisanales (blonde, brune ou triple) racontent l'histoire d'un patrimoine authentique.", img: '/assets/alentours/Abbaye-de-Maredsous-832x1024.webp', links: [{ label: 'Infos pratiques', url: 'https://tourisme-maredsous.be/' }] },
  { cat: 'patrimoine', name: "Maison de Monsieur Sax",          loc: 'Dinant',                  desc: "Visitez la Maison de Monsieur Sax, hommage vibrant au génial inventeur du saxophone né à Dinant. Ce musée interactif vous plonge dans l'univers fascinant d'Adolphe Sax à travers des expositions originales, des instruments d'époque et des expériences sonores immersives. Un espace culturel captivant pour mélomanes et curieux.", img: '/assets/alentours/La-Maison-de-Monsieur-Sax--1024x891.webp', links: [{ label: 'Découvrir', url: 'https://sax.dinant.be/sax-the-city/maison-de-monsieur-sax' }] },
  { cat: 'patrimoine', name: 'Patrimoine médiéval mosan',       loc: 'Dinant',                  desc: "Plongez dans l'histoire fascinante de la vallée mosane à la Maison du Patrimoine médiéval mosan. Ce musée captivant vous transporte à travers les siècles avec ses collections archéologiques remarquables, ses maquettes détaillées et ses expositions interactives sur la vie quotidienne au Moyen Âge.", img: '/assets/alentours/Maison-du-Patrimoine-medieval-mosan-a-Dinant--1024x680.webp', links: [{ label: 'Infos pratiques', url: 'https://www.mpmm.be/' }] },
  { cat: 'patrimoine', name: 'Ruines du Château de Crèvecoeur', loc: 'Dinant',                  desc: "Explorez les mystérieuses ruines du Château de Crèvecoeur perchées sur les hauteurs de Dinant, vestiges évocateurs d'un passé médiéval tumultueux. Ce site offre un témoignage poignant des conflits qui ont marqué la région, et un panorama époustouflant sur la vallée de la Meuse et ses méandres.", img: '/assets/alentours/Les-ruines-du-Chateau-du-Crevecoeur-1024x768.webp', links: [{ label: 'Découvrir', url: 'https://visitwallonia.be/fr-be/content/les-ruines-du-chateau-de-crevecoeur-dinant' }] },
  { cat: 'patrimoine', name: 'Château de Lavaux-Ste-Anne',      loc: "8 siècles d'histoire",    desc: "Plongez dans huit siècles d'histoire au Château de Lavaux-Sainte-Anne, joyau architectural entouré de douves niché dans un écrin de verdure. Ce château-fort préservé dévoile trois musées : vie seigneuriale, vie rurale et nature. Le domaine où se promènent biches et chevreuils enchante toute la famille.", img: '/assets/alentours/Chateau-de-Lavaux-Ste-Anne-1024x768.webp', links: [{ label: 'Infos pratiques', url: 'https://chateau-lavaux.com/' }] },
  { cat: 'famille',    name: 'Domaine de Chevetogne',           loc: '550 ha · 12 km',          desc: "Évadez-vous au Domaine Provincial de Chevetogne, véritable écrin de nature aux multiples facettes. Sur plus de 550 hectares, découvrez des jardins thématiques enchanteurs, des plaines de jeux innovantes, des étangs paisibles et de magnifiques sentiers forestiers. Événements saisonniers et espaces de détente pour toute la famille.", img: '/assets/alentours/chevetogne.webp', links: [{ label: 'Infos pratiques', url: 'https://www.domainedechevetogne.be/' }] },
  { cat: 'famille',    name: 'Musée Histoire(s) Naturelle(s)',  loc: 'Chevetogne',              desc: "Explorez le fascinant Musée d'Histoire(s) Naturelle(s) niché au cœur du Domaine de Chevetogne, où science et imaginaire se rencontrent. Cette institution unique réinvente le musée traditionnel en proposant une immersion poétique dans les mystères du monde naturel, entre rigueur scientifique et émerveillement.", img: '/assets/alentours/Musee-dHistoires-Naturelles-au-Domaine-de-Chevetogne-1024x576.webp', links: [{ label: 'Infos pratiques', url: 'https://www.domainedechevetogne.be/activites/musee-dhistoires-naturelles/' }] },
  { cat: 'famille',    name: 'Nature Extraordinary Museum',     loc: 'Chevetogne',              desc: "Dans un écrin de verdure, le Musée Nature Extraordinary de Chevetogne vous fait voyager au cœur des merveilles naturelles. Découvrez des collections étonnantes, des écosystèmes fascinants et des expériences interactives qui éveillent la curiosité et l'émerveillement de toute la famille.", img: '/assets/alentours/Nature-extraordinary-Museum-au-Domaine-de-Chevetogne-.webp', links: [{ label: 'Infos pratiques', url: 'https://www.domainedechevetogne.be/activites/nature-extraordinary-museum/' }] },
  { cat: 'famille',    name: 'Grottes & Parc de Han',           loc: 'Han-sur-Lesse',           desc: "Émerveillez-vous au Parc animalier et Grottes de Han, où nature et merveilles souterraines se rencontrent. Observez en semi-liberté plus de 30 espèces animales dans un domaine préservé de 250 hectares, puis explorez l'une des plus belles grottes d'Europe — stalactites millénaires, galeries majestueuses, rivière souterraine.", img: '/assets/alentours/Parc-animalier-et-grottes-de-Han-1-1024x678.webp', links: [{ label: 'Infos pratiques', url: 'https://grotte-de-han.be/parc-animalier' }] },
  { cat: 'famille',    name: 'La Pataphonie',                   loc: 'Dinant',                  desc: "Plongez dans l'univers fascinant de La Pataphonie, un musée interactif où les objets du quotidien se transforment en instruments de musique extraordinaires ! Explorez, touchez et jouez avec des créations sonores uniques fabriquées à partir de matériaux recyclés. Une expérience sensorielle et ludique qui éveille la créativité.", img: '/assets/alentours/ALD-01-0009R4-1024x680.webp', links: [{ label: 'Infos pratiques', url: 'https://www.pataphonie.be/' }] },
  { cat: 'famille',    name: 'Euro Space Center',               loc: 'Transinne',               desc: "Découvrez les secrets de l'exploration spatiale à travers des simulateurs interactifs, des expositions fascinantes et des expériences immersives. Ce centre unique vous plonge dans l'univers des astronautes : manipulez des équipements spatiaux, testez des simulateurs de missions et comprenez les défis de la conquête spatiale.", img: '/assets/alentours/Eurospace-Center.webp', links: [{ label: 'Infos pratiques', url: 'https://www.eurospacecenter.be/en' }] },
  { cat: 'famille',    name: 'Redu, Village du Livre',          loc: 'Redu',                    desc: "Transformé en véritable sanctuaire littéraire, ses ruelles pittoresques abritent plus de 20 librairies et bouquineries, où chaque pas est une invitation à la flânerie intellectuelle. Livres anciens, d'occasion et neufs se côtoient, chaque échoppe raconte une histoire. Redu : un refuge pour les rêveurs et les chasseurs de trésors.", img: '/assets/alentours/Redu-le-Village-du-Livre--1024x576.webp', links: [{ label: 'Découvrir', url: 'https://www.redu-villagedulivre.be/fr/' }] },
];

const RESTAURANTS = [
  { name: 'La Clochette',                loc: 'Celles',            type: 'Cuisine du terroir',        desc: "Niché au cœur du charmant village de Celles, La Clochette vous invite à découvrir une cuisine authentique où traditions locales et créativité se rencontrent. Dans une ambiance chaleureuse et conviviale, le chef sublime les produits frais du terroir en créations savoureuses. Terrasse ensoleillée et décor rustique élégant.",                                                img: '/assets/alentours/Celles-La-Clochette-1024x683.webp',  links: [{ label: 'Réserver', url: 'https://www.laclochette.be/' }] },
  { name: 'Le Val Jolie',                loc: 'Celles',            type: 'Gastronomique · vue',       desc: "Perché sur les hauteurs de Celles, Le Val Jolie vous offre un havre de paix où gastronomie et panorama d'exception se conjuguent parfaitement. Dans un cadre bucolique surplombant la vallée, une cuisine raffinée met à l'honneur les saveurs saisonnières et les spécialités régionales. Service attentionné et vue imprenable.",                                         img: '/assets/alentours/Celles-Le-Val-Joli.webp',            links: [{ label: 'Réserver', url: 'https://levaljoli.be/' }] },
  { name: 'Le Tank Brasserie',           loc: 'Celles',            type: 'Microbrasserie · bistrot',  desc: "Au cœur du village pittoresque de Celles, Le Tank Brasserie allie charme rustique et esprit contemporain. Cette microbrasserie artisanale propose des bières maison brassées sur place et une cuisine bistrot généreuse célébrant les produits locaux. Ambiance conviviale aux accents industriels chaleureux.",                                                               img: '/assets/alentours/Celles-Le-Tank-Brasserie.webp',      links: [{ label: 'Découvrir', url: 'https://fr.tripadvisor.be/Restaurant_Review-g1849705-d12524213-Reviews-Le_Tank-Celles_Hainaut_Province_Wallonia.html' }] },
  { name: 'Auberge de la Lesse',         loc: 'Gendron',           type: 'Auberge · terrasse',        desc: "Lovée au bord de la majestueuse Lesse à Gendron, l'Auberge de la Lesse invite à une escapade gourmande où nature et gastronomie s'entrelacent. La cuisine met à l'honneur les trésors culinaires ardennais revisités avec finesse. Intérieur chaleureux aux poutres apparentes, terrasse panoramique surplombant la rivière.",                                            img: '/assets/alentours/Gendron-Auberge-de-la-Lesse-.webp',  links: [{ label: 'Réserver', url: 'https://www.aubergedelalesse.be/' }] },
  { name: 'La Flobette',                 loc: 'Furfooz',           type: 'Végétarien · créatif',      desc: "La Flobette est une adresse incontournable pour les amoureux de cuisine végétarienne créative. Dans un cadre chaleureux aux accents champêtres, légumes, herbes et céréales se transforment en compositions savoureuses et inventives. Produits locaux et de saison, techniques traditionnelles et influences contemporaines.",                                               img: '/assets/alentours/Furfooz-La-Flobette-1024x684.webp',  links: [{ label: 'Réserver', url: 'https://laflobette.be/' }] },
  { name: 'Hostellerie Gilain',          loc: 'Achêne',            type: 'Étoilé · raffiné',          desc: "L'Hostellerie Gilain vous convie à une expérience gastronomique d'exception dans un écrin d'élégance discrète. Cette adresse étoilée conjugue raffinement culinaire et art de recevoir à la belge. Le Chef sublime les produits du terroir en créations audacieuses. Cave remarquable, service attentionné, atmosphère feutrée.",                                          img: '/assets/alentours/Achene-Hostellerie-Gilain.webp',      links: [{ label: 'Réserver', url: 'https://www.hostelleriegilain.com/fr/' }] },
  { name: "Auberge du Bief de la Lesse", loc: 'Villers-sur-Lesse', type: 'Terroir · convivial',       desc: "L'Auberge du Bief de la Lesse vous accueille dans un cadre authentique où le temps s'écoule au rythme paisible de la rivière voisine. Table généreuse où la cuisine du terroir ardennais s'exprime avec sincérité et savoir-faire. Terrasse ombragée surplombant les méandres de la Lesse, hospitalité sincère.",                                                          img: '/assets/alentours/auberge-du-bief-de-la.jpg',          links: [{ label: 'Réserver', url: 'https://www.biefdelalesse.com/' }] },
  { name: 'La Broche',                   loc: 'Dinant',            type: 'Grillades · vue Meuse',     desc: "Idéalement située au cœur de Dinant, La Broche met à l'honneur les grillades et rôtisseries préparées selon des méthodes ancestrales. La flamme vive sublime les viandes sélectionnées avec soin, dégageant des arômes irrésistibles qui évoquent le partage. Vue imprenable sur la Meuse et la citadelle.",                                                              img: '/assets/alentours/Dinant-La-Broche.webp',              links: [{ label: 'Réserver', url: 'https://www.labroche.be/' }] },
  { name: 'Brasserie Leffe',             loc: 'Dinant',            type: 'Brasserie · historique',    desc: "La Brasserie Leffe vous accueille dans un lieu emblématique où tradition brassicole et art culinaire belge se marient harmonieusement. Carte généreuse où les spécialités locales s'accordent avec la célèbre gamme Leffe, brassées depuis 1240. Terrasse panoramique surplombant la Meuse, cadre historique aux pierres apparentes.",                                      img: '/assets/alentours/Dinant-Brasserie-Leffe.webp',        links: [{ label: 'Découvrir', url: 'https://cafeleffe-dinant.be/' }] },
  { name: 'Château de Vignée',           loc: 'Rochefort',         type: '5★ · gastronomique',        desc: "Le Château de Vignée incarne l'élégance d'une demeure d'exception revisitée avec modernité. Ce relais gastronomique 5 étoiles conjugue haute gastronomie et produits du terroir ardennais dans un cadre somptueux. Le chef orchestre une symphonie de saveurs précises et créatives au bord de la Lesse.",                                                                  img: '/assets/alentours/Rochefort-Chateau-de-Vignee-.webp',  links: [{ label: 'Réserver', url: 'https://www.chateaudevignee.be/' }] },
];

function ActHero() {
  const bp = useBreakpoint();
  const stats = [
    { n: '30+',    label: 'Activités' },
    { n: '10',     label: 'Restaurants' },
    { n: '5 min',  label: 'Le plus proche' },
    { n: '550 ha', label: 'Chevetogne' },
  ];
  return (
    <section style={{
      minHeight: '100vh',
      padding: bp === 'mobile' ? '80px 20px 40px' : bp === 'tablet' ? '90px 32px 60px' : '140px 48px 80px',
      background: 'var(--paper)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: bp === 'desktop' ? '2fr 3fr' : '1fr', gap: 40, alignItems: 'center', minHeight: 'calc(100vh - 220px)' }}>
        <div>
          <h1 className="serif" style={{
            fontSize: bp === 'mobile' ? 'clamp(36px, 9vw, 52px)' : 'clamp(48px, 5.5vw, 88px)',
            lineHeight: 0.95, letterSpacing: '-0.02em', fontWeight: 400, marginBottom: 24,
          }}>
            Activités &<br /><span style={{ color: 'var(--green)' }}>alentours.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-soft)', marginBottom: bp === 'mobile' ? 24 : 44, maxWidth: 440 }}>
            Nature, patrimoine, aventure et gastronomie — les Ardennes belges regorgent de trésors à découvrir, à quelques minutes de votre porte.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#activites" className="btn-primary" style={bp === 'mobile' ? { padding: '9px 14px', fontSize: 13 } : {}}>Voir les activités →</a>
            <a href="#restaurants" className="btn-ghost" style={bp === 'mobile' ? { padding: '8px 12px', fontSize: 13 } : {}}>Restaurants</a>
          </div>

          {bp !== 'desktop' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 32, height: 240 }}>
              <div style={{ borderRadius: 4, overflow: 'hidden' }}>
                <img src="/assets/alentours/chevetogne.webp" alt="Chevetogne" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 8 }}>
                <div style={{ borderRadius: 4, overflow: 'hidden' }}>
                  <img src="/assets/alentours/gold.webp" alt="Golf" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ borderRadius: 4, overflow: 'hidden' }}>
                  <img src="/assets/alentours/houyet-1.webp" alt="Houyet" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: 48, borderTop: '1px solid var(--line)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: '20px 0',
                borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                paddingRight: i % 2 === 0 ? 24 : 0,
                paddingLeft: i % 2 === 1 ? 24 : 0,
              }}>
                <div className="mono-label" style={{ color: 'var(--ink-soft)', marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 20, lineHeight: 1.2, color: 'var(--green)', fontWeight: 500 }}>{s.n}</div>
              </div>
            ))}
          </div>
        </div>

        {bp === 'desktop' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, height: 'min(720px, 80vh)' }}>
            <div style={{ borderRadius: 4, overflow: 'hidden', flex: 1 }}>
              <img src="/assets/alentours/chevetogne.webp" alt="Chevetogne" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 4, overflow: 'hidden', flex: 1 }}>
              <img src="/assets/alentours/gold.webp" alt="Golf Château d'Ardenne" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 4, overflow: 'hidden', flex: 1 }}>
              <img src="/assets/alentours/houyet-1.webp" alt="Promenades à Houyet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}
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
              {c.label}
            </button>
          ))}
        </div>
        <div className="act-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 28px' }}>
          {filtered.map((act) => (
            <article key={act.name}>
              {act.img && act.img.startsWith('/') ? (
                <div style={{ aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden' }}>
                  <img src={act.img} alt={act.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ) : (
                <div className="ph" data-label={act.img || act.name} style={{ aspectRatio: '4/3', borderRadius: 4 }}></div>
              )}
              <div style={{ padding: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <span className="mono-label" style={{ color: 'var(--green)', fontSize: 10 }}>{act.cat}</span>
                  <span className="mono-label" style={{ color: 'var(--ink-soft)', fontSize: 10 }}>{act.loc}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>{act.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{act.desc}</p>
                {act.links && act.links.length > 0 && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                    {act.links.map((l, i) => (
                      <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase',
                        padding: '5px 12px', borderRadius: 100,
                        border: '1px solid var(--line)', color: 'var(--green)',
                        textDecoration: 'none', transition: 'all 0.2s ease',
                        fontFamily: 'inherit',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.color = 'var(--paper)'; e.currentTarget.style.borderColor = 'var(--green)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                      >{l.label}</a>
                    ))}
                  </div>
                )}
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
    <section id="restaurants" className="act-section" style={{ padding: '120px 48px 160px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div className="sec-num" style={{ marginBottom: 16 }}>· GASTRONOMIE ·</div>
            <h2 className="serif" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05, fontWeight: 400 }}>
              {RESTAURANTS.length} adresses<span style={{ color: 'var(--green)' }}> gourmandes.</span>
            </h2>
          </div>
        </div>
        <div className="act-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 28px' }}>
          {RESTAURANTS.map((r, i) => (
            <article key={i}>
              {r.img ? (
                <div style={{ aspectRatio: '4/3', borderRadius: 4, overflow: 'hidden' }}>
                  <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ) : (
                <div className="ph" data-label={r.loc.toUpperCase()} style={{ aspectRatio: '4/3', borderRadius: 4 }}></div>
              )}
              <div style={{ padding: '20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <span className="mono-label" style={{ color: 'var(--green)', fontSize: 10 }}>{r.type}</span>
                  <span className="mono-label" style={{ color: 'var(--ink-soft)', fontSize: 10 }}>{r.loc}</span>
                </div>
                <h3 className="serif" style={{ fontSize: 26, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>{r.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{r.desc}</p>
                {r.links && r.links.length > 0 && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                    {r.links.map((l, i) => (
                      <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase',
                        padding: '5px 12px', borderRadius: 100,
                        border: '1px solid var(--line)', color: 'var(--green)',
                        textDecoration: 'none', transition: 'all 0.2s ease', fontFamily: 'inherit',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.color = 'var(--paper)'; e.currentTarget.style.borderColor = 'var(--green)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                      >{l.label}</a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PetitsPlus() {
  const bp = useBreakpoint();
  return (
    <section style={{ padding: bp === 'mobile' ? '60px 20px' : bp === 'tablet' ? '80px 32px' : '160px 48px', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div className="sec-num" style={{ marginBottom: 20 }}>· NOS PETITS PLUS ·</div>
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
      <PetitsPlus />
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
