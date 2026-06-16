<?php
/**
 * Template : Activités & alentours (porté de Activites.jsx).
 *
 * Page « dark hero » (PageHero image) → logo paper (pas de light hero).
 *
 * Le filtre par catégorie (useState) du JSX n'est PAS porté : toutes les
 * activités sont rendues en markup statique (toutes catégories visibles).
 * Voir le rapport — barre de tabs de filtrage non interactive.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Catégories (porté de Activites.jsx:28-34). Conservé pour la barre de tabs statique.
$act_categories = array(
	array( 'id' => 'all',        'label' => 'Tout' ),
	array( 'id' => 'nature',     'label' => 'Nature & Rando' ),
	array( 'id' => 'aventure',   'label' => 'Aventure & Sport' ),
	array( 'id' => 'patrimoine', 'label' => 'Patrimoine & Culture' ),
	array( 'id' => 'famille',    'label' => 'Famille & Découverte' ),
);

// Activités (porté de Activites.jsx:36-65). Chemins image : /assets/ retiré.
$act_activities = array(
	array( 'cat' => 'nature',     'name' => 'Promenades à Houyet',             'loc' => 'Au pied du gîte',        'desc' => "Explorez les charmes pittoresques de Houyet lors de promenades enchantées. Sentiers bordés d'arbres, paysages vallonnés et vues imprenables sur la Lesse vous attendent pour une bouffée d'air pur en pleine nature ardennaise. Une escapade idéale pour les amoureux de randonnée souhaitant découvrir l'authenticité de cette région riche en patrimoine naturel.", 'img' => 'alentours/houyet-1.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://houyet.be/loisirs/tourisme/promenades/' ) ) ),
	array( 'cat' => 'nature',     'name' => 'Vélos Ardenne · RAVeL',           'loc' => 'Circuits RAVeL',         'desc' => "Explorez la magie des Ardennes à vélo sur les circuits exceptionnels du RAVeL. Roulez en toute sérénité sur ces anciennes voies ferrées réaménagées, traversant forêts luxuriantes, vallées pittoresques et charmants villages. Location de vélos de qualité, parcours balisés pour tous niveaux et assistance attentionnée garantis.", 'img' => 'alentours/Randonnees-a-velo-avec-Velos-Ardenne-1024x768.webp', 'links' => array( array( 'label' => 'Ardennes vélo', 'url' => 'https://www.ardennes.com/itinerances/a-velo-dans-les-ardennes/' ), array( 'label' => 'RAVeL', 'url' => 'https://ravel.wallonie.be/en/home/itineraires/regional/w7-sur-la-route-des-ardennes.html' ) ) ),
	array( 'cat' => 'nature',     'name' => 'Brame du cerf',                   'loc' => 'Forêts environnantes',   'desc' => "Plongez dans l'expérience sauvage et envoûtante du brame du cerf, spectacle naturel fascinant où les mâles majestueux font résonner leurs puissants cris d'amour à travers forêts et clairières. Accompagnés de guides passionnés, observez discrètement ce rituel ancestral de séduction au crépuscule automnal.", 'img' => 'alentours/Brame-du-cerf.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.ardennebelge.be/fr/outils/brame-cerf.php' ) ) ),
	array( 'cat' => 'nature',     'name' => "Jardins d'Annevoie",              'loc' => 'Annevoie',               'desc' => "Créé au XVIIIe siècle, ce domaine exceptionnel offre un spectacle saisissant où plus de 50 fontaines et cascades dansent sans aucune pompe, par la seule force de la gravité. Jardins à la française, miroirs d'eau, perspectives romantiques et architecture végétale vous invitent à une promenade entre histoire, nature et ingéniosité.", 'img' => 'alentours/Jardins-dAnnevoie-1024x683.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.annevoie.be/fr/' ) ) ),
	array( 'cat' => 'aventure',   'name' => 'Dinant Aventure',                 'loc' => 'Dinant',                 'desc' => "Vivez des sensations fortes à Dinant Aventure, le paradis des amateurs d'adrénaline ! Parcours d'accrobranche vertigineux, tyroliennes géantes survolant la vallée, death-ride à couper le souffle et via ferrata pour les plus audacieux. Activités sécurisées et adaptées pour tous les âges.", 'img' => 'alentours/Dinant-Aventure--1024x576.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.dinant-evasion.be/fr/dinant-aventure' ) ) ),
	array( 'cat' => 'aventure',   'name' => 'Kayak sur la Lesse',              'loc' => 'Descente 12 km',         'desc' => "Embarquez pour une aventure aquatique inoubliable en descendant la Lesse en kayak ! Pagayez à votre rythme au fil de cette rivière sinueuse, entre falaises calcaires majestueuses et paysages verdoyants préservés. Accessible aux débutants comme aux plus expérimentés, cette descente de 12 km mêle détente et petits rapides ludiques.", 'img' => 'alentours/descente_lesse_kayak_chateau_walmin.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.dinant-evasion.be/fr/kayak-sur-la-lesse' ) ) ),
	array( 'cat' => 'aventure',   'name' => 'Royal Golf Club',                 'loc' => '5 min du gîte',          'desc' => "Découvrez l'élégance du Royal Golf Club du Château Royal d'Ardenne, parcours prestigieux niché dans un écrin de verdure historique. Fairways impeccables, greens techniques et panoramas époustouflants sur les collines ardennaises vous attendent sur ce 18 trous de caractère. Golfeurs débutants ou confirmés y trouveront leur bonheur.", 'img' => 'alentours/gold.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://rgccra.be/' ) ) ),
	array( 'cat' => 'aventure',   'name' => 'Dave City Ranch',                 'loc' => 'Gendron-Celles',         'desc' => "Galopez en toute liberté au Dave City Ranch à Gendron-Celles, où l'aventure équestre se mêle aux paysages sauvages de la vallée mosane. Cavaliers débutants ou confirmés, profitez de balades encadrées sur des sentiers panoramiques traversant forêts denses et plateaux verdoyants.", 'img' => 'alentours/dave-city-ranch.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.ardennebelge.be/diffusio/fr/p/decouverte-et-divertissement/centre-equestre-dave-city-ranch-houyet_TFOLOD-01-0B2G-2X6L/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Château de Vêves',                'loc' => 'XIIIᵉ siècle · 15 km',   'desc' => "Admirez la splendeur médiévale du Château de Vêves, surnommé « le plus petit des grands châteaux ». Avec ses cinq tours majestueuses perchées sur un éperon rocheux, ce château habité depuis plus de huit siècles vous plonge dans l'histoire vivante. Intérieurs meublés, animations en costume et panorama exceptionnel sur la vallée.", 'img' => 'alentours/veveve.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://chateau-veves.be/en/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Village de Celles',               'loc' => 'Plus Beau Village',      'desc' => "Flânez dans les ruelles pavées de Celles, l'un des « Plus Beaux Villages de Wallonie », où le temps semble s'être arrêté. Admirez ses maisons en pierre calcaire blonde, son église romane millénaire et son château néogothique dans un cadre bucolique préservé. Un joyau médiéval pour les amoureux de patrimoine rural.", 'img' => 'alentours/CELLES_08_©_Rita_Photographie-scaled-1-1024x576.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://beauxvillages.be/villages/celles/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Église Saint-Hadelin',            'loc' => 'Celles · XIᵉ siècle',    'desc' => "Véritable trésor architectural du XIe siècle classé au patrimoine exceptionnel de Wallonie. Sa silhouette harmonieuse en pierre blonde, son remarquable chœur à cinq absides et ses chapiteaux sculptés témoignent d'un art roman authentique. Nichée au cœur d'un des plus beaux villages de Belgique.", 'img' => 'alentours/Eglise-Saint-Hadelin-a-Celles--1024x681.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://visitwallonia.be/fr-be/content/collegiale-saint-hadelin-celles' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Chapelle Saint-Roch',             'loc' => 'Houyet',                 'desc' => "Découvrez le charme discret de la Chapelle Saint-Roch à Houyet, petit édifice religieux empreint d'authenticité et d'histoire locale. Nichée dans un cadre verdoyant, cette chapelle votive érigée en l'honneur du saint protecteur contre les épidémies impressionne par sa simplicité touchante. Un havre de paix invitant à la contemplation.", 'img' => 'alentours/Chapelle-Saint-Roch-a-Houyet--e1741880503896.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://tourismehouyet.be/decouvertes/patrimoine-local/la-chapelle-saint-roch/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => "Halte d'Ardenne",                 'loc' => 'Houyet',                 'desc' => "Faites une pause historique à la Halte d'Ardenne, ancienne gare privée du Roi Léopold II transformée en monument remarquable. Cette élégante construction ferroviaire aux détails architecturaux raffinés témoigne du passé royal de la région, évoquant l'époque où la famille royale venait séjourner dans les Ardennes.", 'img' => 'alentours/Halte-dArdenne--1024x868.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://www.atlasobscura.com/places/halte-royal-dardenne-houyet-belgium' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Citadelle de Dinant',             'loc' => 'Dinant · 100m altitude', 'desc' => "Surplombant majestueusement la vallée de la Meuse à 100 mètres de hauteur, la Citadelle de Dinant est accessible par téléphérique ou 408 marches. Cette forteresse millénaire dévoile l'histoire mouvementée de la région à travers ses galeries souterraines, ses expositions immersives et ses reconstitutions militaires.", 'img' => 'alentours/La-Citadelle-de-Dinant--1024x683.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://www.citadellededinant.be/fr/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Le Rocher Bayard',                'loc' => 'Dinant',                 'desc' => "Admirez le légendaire Rocher Bayard, impressionnante aiguille de pierre de 40 mètres se dressant au bord de la Meuse. Cette formation géologique spectaculaire porte l'empreinte mythique du cheval Bayard qui, selon la légende, l'aurait fendu d'un puissant coup de sabot. Site incontournable sur la route touristique de Dinant.", 'img' => 'alentours/Le-Rocher-Bayard--1024x884.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://fr.ardennes-etape.be/experience/ville/incontournable/rocher-bayard' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Abbaye de Leffe',                 'loc' => 'Dinant · depuis 1240',   'desc' => "Découvrez la prestigieuse Abbaye de Leffe, berceau d'une tradition brassicole séculaire depuis 1240. Entre spiritualité et savoir-faire artisanal, ce joyau architectural dévoile les secrets de fabrication de la célèbre bière belge à travers son musée interactif. Une histoire mouvementée à déguster avec modération.", 'img' => 'alentours/LAbbaye-de-Leffe--1024x768.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.abbaye-de-leffe.be/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Abbaye de Maredsous',             'loc' => 'Ardennes · 1872',        'desc' => "Au cœur des Ardennes belges, l'Abbaye de Maredsous incarne la tradition monastique bénédictine dans toute sa splendeur. Fondée en 1872, les moines y perpétuent des savoir-faire séculaires : fromages à pâte pressée et bières artisanales (blonde, brune ou triple) racontent l'histoire d'un patrimoine authentique.", 'img' => 'alentours/Abbaye-de-Maredsous-832x1024.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://tourisme-maredsous.be/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => "Maison de Monsieur Sax",          'loc' => 'Dinant',                 'desc' => "Visitez la Maison de Monsieur Sax, hommage vibrant au génial inventeur du saxophone né à Dinant. Ce musée interactif vous plonge dans l'univers fascinant d'Adolphe Sax à travers des expositions originales, des instruments d'époque et des expériences sonores immersives. Un espace culturel captivant pour mélomanes et curieux.", 'img' => 'alentours/La-Maison-de-Monsieur-Sax--1024x891.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://sax.dinant.be/sax-the-city/maison-de-monsieur-sax' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Patrimoine médiéval mosan',       'loc' => 'Dinant',                 'desc' => "Plongez dans l'histoire fascinante de la vallée mosane à la Maison du Patrimoine médiéval mosan. Ce musée captivant vous transporte à travers les siècles avec ses collections archéologiques remarquables, ses maquettes détaillées et ses expositions interactives sur la vie quotidienne au Moyen Âge.", 'img' => 'alentours/Maison-du-Patrimoine-medieval-mosan-a-Dinant--1024x680.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.mpmm.be/' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Ruines du Château de Crèvecoeur', 'loc' => 'Dinant',                 'desc' => "Explorez les mystérieuses ruines du Château de Crèvecoeur perchées sur les hauteurs de Dinant, vestiges évocateurs d'un passé médiéval tumultueux. Ce site offre un témoignage poignant des conflits qui ont marqué la région, et un panorama époustouflant sur la vallée de la Meuse et ses méandres.", 'img' => 'alentours/Les-ruines-du-Chateau-du-Crevecoeur-1024x768.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://visitwallonia.be/fr-be/content/les-ruines-du-chateau-de-crevecoeur-dinant' ) ) ),
	array( 'cat' => 'patrimoine', 'name' => 'Château de Lavaux-Ste-Anne',      'loc' => "8 siècles d'histoire",   'desc' => "Plongez dans huit siècles d'histoire au Château de Lavaux-Sainte-Anne, joyau architectural entouré de douves niché dans un écrin de verdure. Ce château-fort préservé dévoile trois musées : vie seigneuriale, vie rurale et nature. Le domaine où se promènent biches et chevreuils enchante toute la famille.", 'img' => 'alentours/Chateau-de-Lavaux-Ste-Anne-1024x768.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://chateau-lavaux.com/' ) ) ),
	array( 'cat' => 'famille',    'name' => 'Domaine de Chevetogne',           'loc' => '550 ha · 12 km',         'desc' => "Évadez-vous au Domaine Provincial de Chevetogne, véritable écrin de nature aux multiples facettes. Sur plus de 550 hectares, découvrez des jardins thématiques enchanteurs, des plaines de jeux innovantes, des étangs paisibles et de magnifiques sentiers forestiers. Événements saisonniers et espaces de détente pour toute la famille.", 'img' => 'alentours/chevetogne.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.domainedechevetogne.be/' ) ) ),
	array( 'cat' => 'famille',    'name' => 'Musée Histoire(s) Naturelle(s)',  'loc' => 'Chevetogne',             'desc' => "Explorez le fascinant Musée d'Histoire(s) Naturelle(s) niché au cœur du Domaine de Chevetogne, où science et imaginaire se rencontrent. Cette institution unique réinvente le musée traditionnel en proposant une immersion poétique dans les mystères du monde naturel, entre rigueur scientifique et émerveillement.", 'img' => 'alentours/Musee-dHistoires-Naturelles-au-Domaine-de-Chevetogne-1024x576.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.domainedechevetogne.be/activites/musee-dhistoires-naturelles/' ) ) ),
	array( 'cat' => 'famille',    'name' => 'Nature Extraordinary Museum',     'loc' => 'Chevetogne',             'desc' => "Dans un écrin de verdure, le Musée Nature Extraordinary de Chevetogne vous fait voyager au cœur des merveilles naturelles. Découvrez des collections étonnantes, des écosystèmes fascinants et des expériences interactives qui éveillent la curiosité et l'émerveillement de toute la famille.", 'img' => 'alentours/Nature-extraordinary-Museum-au-Domaine-de-Chevetogne-.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.domainedechevetogne.be/activites/nature-extraordinary-museum/' ) ) ),
	array( 'cat' => 'famille',    'name' => 'Grottes & Parc de Han',           'loc' => 'Han-sur-Lesse',          'desc' => "Émerveillez-vous au Parc animalier et Grottes de Han, où nature et merveilles souterraines se rencontrent. Observez en semi-liberté plus de 30 espèces animales dans un domaine préservé de 250 hectares, puis explorez l'une des plus belles grottes d'Europe — stalactites millénaires, galeries majestueuses, rivière souterraine.", 'img' => 'alentours/Parc-animalier-et-grottes-de-Han-1-1024x678.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://grotte-de-han.be/parc-animalier' ) ) ),
	array( 'cat' => 'famille',    'name' => 'La Pataphonie',                   'loc' => 'Dinant',                 'desc' => "Plongez dans l'univers fascinant de La Pataphonie, un musée interactif où les objets du quotidien se transforment en instruments de musique extraordinaires ! Explorez, touchez et jouez avec des créations sonores uniques fabriquées à partir de matériaux recyclés. Une expérience sensorielle et ludique qui éveille la créativité.", 'img' => 'alentours/ALD-01-0009R4-1024x680.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.pataphonie.be/' ) ) ),
	array( 'cat' => 'famille',    'name' => 'Euro Space Center',               'loc' => 'Transinne',              'desc' => "Découvrez les secrets de l'exploration spatiale à travers des simulateurs interactifs, des expositions fascinantes et des expériences immersives. Ce centre unique vous plonge dans l'univers des astronautes : manipulez des équipements spatiaux, testez des simulateurs de missions et comprenez les défis de la conquête spatiale.", 'img' => 'alentours/Eurospace-Center.webp', 'links' => array( array( 'label' => 'Infos pratiques', 'url' => 'https://www.eurospacecenter.be/en' ) ) ),
	array( 'cat' => 'famille',    'name' => 'Redu, Village du Livre',          'loc' => 'Redu',                   'desc' => "Transformé en véritable sanctuaire littéraire, ses ruelles pittoresques abritent plus de 20 librairies et bouquineries, où chaque pas est une invitation à la flânerie intellectuelle. Livres anciens, d'occasion et neufs se côtoient, chaque échoppe raconte une histoire. Redu : un refuge pour les rêveurs et les chasseurs de trésors.", 'img' => 'alentours/Redu-le-Village-du-Livre--1024x576.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://www.redu-villagedulivre.be/fr/' ) ) ),
);

// Restaurants (porté de Activites.jsx:67-78). Chemins image : /assets/ retiré.
$act_restaurants = array(
	array( 'name' => 'La Clochette',                'loc' => 'Celles',            'type' => 'Cuisine du terroir',       'desc' => "Niché au cœur du charmant village de Celles, La Clochette vous invite à découvrir une cuisine authentique où traditions locales et créativité se rencontrent. Dans une ambiance chaleureuse et conviviale, le chef sublime les produits frais du terroir en créations savoureuses. Terrasse ensoleillée et décor rustique élégant.", 'img' => 'alentours/Celles-La-Clochette-1024x683.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://www.laclochette.be/' ) ) ),
	array( 'name' => 'Le Val Jolie',                'loc' => 'Celles',            'type' => 'Gastronomique · vue',      'desc' => "Perché sur les hauteurs de Celles, Le Val Jolie vous offre un havre de paix où gastronomie et panorama d'exception se conjuguent parfaitement. Dans un cadre bucolique surplombant la vallée, une cuisine raffinée met à l'honneur les saveurs saisonnières et les spécialités régionales. Service attentionné et vue imprenable.", 'img' => 'alentours/Celles-Le-Val-Joli.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://levaljoli.be/' ) ) ),
	array( 'name' => 'Le Tank Brasserie',           'loc' => 'Celles',            'type' => 'Microbrasserie · bistrot', 'desc' => "Au cœur du village pittoresque de Celles, Le Tank Brasserie allie charme rustique et esprit contemporain. Cette microbrasserie artisanale propose des bières maison brassées sur place et une cuisine bistrot généreuse célébrant les produits locaux. Ambiance conviviale aux accents industriels chaleureux.", 'img' => 'alentours/Celles-Le-Tank-Brasserie.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://fr.tripadvisor.be/Restaurant_Review-g1849705-d12524213-Reviews-Le_Tank-Celles_Hainaut_Province_Wallonia.html' ) ) ),
	array( 'name' => 'Auberge de la Lesse',         'loc' => 'Gendron',           'type' => 'Auberge · terrasse',       'desc' => "Lovée au bord de la majestueuse Lesse à Gendron, l'Auberge de la Lesse invite à une escapade gourmande où nature et gastronomie s'entrelacent. La cuisine met à l'honneur les trésors culinaires ardennais revisités avec finesse. Intérieur chaleureux aux poutres apparentes, terrasse panoramique surplombant la rivière.", 'img' => 'alentours/Gendron-Auberge-de-la-Lesse-.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://www.aubergedelalesse.be/' ) ) ),
	array( 'name' => 'La Flobette',                 'loc' => 'Furfooz',           'type' => 'Végétarien · créatif',     'desc' => "La Flobette est une adresse incontournable pour les amoureux de cuisine végétarienne créative. Dans un cadre chaleureux aux accents champêtres, légumes, herbes et céréales se transforment en compositions savoureuses et inventives. Produits locaux et de saison, techniques traditionnelles et influences contemporaines.", 'img' => 'alentours/Furfooz-La-Flobette-1024x684.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://laflobette.be/' ) ) ),
	array( 'name' => 'Hostellerie Gilain',          'loc' => 'Achêne',            'type' => 'Étoilé · raffiné',         'desc' => "L'Hostellerie Gilain vous convie à une expérience gastronomique d'exception dans un écrin d'élégance discrète. Cette adresse étoilée conjugue raffinement culinaire et art de recevoir à la belge. Le Chef sublime les produits du terroir en créations audacieuses. Cave remarquable, service attentionné, atmosphère feutrée.", 'img' => 'alentours/Achene-Hostellerie-Gilain.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://www.hostelleriegilain.com/fr/' ) ) ),
	array( 'name' => "Auberge du Bief de la Lesse", 'loc' => 'Villers-sur-Lesse', 'type' => 'Terroir · convivial',      'desc' => "L'Auberge du Bief de la Lesse vous accueille dans un cadre authentique où le temps s'écoule au rythme paisible de la rivière voisine. Table généreuse où la cuisine du terroir ardennais s'exprime avec sincérité et savoir-faire. Terrasse ombragée surplombant les méandres de la Lesse, hospitalité sincère.", 'img' => 'alentours/auberge-du-bief-de-la.jpg', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://www.biefdelalesse.com/' ) ) ),
	array( 'name' => 'La Broche',                   'loc' => 'Dinant',            'type' => 'Grillades · vue Meuse',    'desc' => "Idéalement située au cœur de Dinant, La Broche met à l'honneur les grillades et rôtisseries préparées selon des méthodes ancestrales. La flamme vive sublime les viandes sélectionnées avec soin, dégageant des arômes irrésistibles qui évoquent le partage. Vue imprenable sur la Meuse et la citadelle.", 'img' => 'alentours/Dinant-La-Broche.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://www.labroche.be/' ) ) ),
	array( 'name' => 'Brasserie Leffe',             'loc' => 'Dinant',            'type' => 'Brasserie · historique',   'desc' => "La Brasserie Leffe vous accueille dans un lieu emblématique où tradition brassicole et art culinaire belge se marient harmonieusement. Carte généreuse où les spécialités locales s'accordent avec la célèbre gamme Leffe, brassées depuis 1240. Terrasse panoramique surplombant la Meuse, cadre historique aux pierres apparentes.", 'img' => 'alentours/Dinant-Brasserie-Leffe.webp', 'links' => array( array( 'label' => 'Découvrir', 'url' => 'https://cafeleffe-dinant.be/' ) ) ),
	array( 'name' => 'Château de Vignée',           'loc' => 'Rochefort',         'type' => '5★ · gastronomique',       'desc' => "Le Château de Vignée incarne l'élégance d'une demeure d'exception revisitée avec modernité. Ce relais gastronomique 5 étoiles conjugue haute gastronomie et produits du terroir ardennais dans un cadre somptueux. Le chef orchestre une symphonie de saveurs précises et créatives au bord de la Lesse.", 'img' => 'alentours/Rochefort-Chateau-de-Vignee-.webp', 'links' => array( array( 'label' => 'Réserver', 'url' => 'https://www.chateaudevignee.be/' ) ) ),
);

// Statistiques du hero (porté de Activites.jsx:82-87).
$act_stats = array(
	array( 'n' => '30+',    'label' => 'Activités' ),
	array( 'n' => '10',     'label' => 'Restaurants' ),
	array( 'n' => '5 min',  'label' => 'Le plus proche' ),
	array( 'n' => '550 ha', 'label' => 'Chevetogne' ),
);

/**
 * Affiche une carte (activité ou restaurant) — markup commun aux deux grilles.
 *
 * Porté des <article> de ActivitiesSection / RestaurantsSection (Activites.jsx:159-191 / 213-244).
 *
 * @param string $tag_top    Étiquette mono haut-gauche (catégorie ou type).
 * @param string $tag_right  Étiquette mono haut-droite (lieu).
 * @param string $name       Titre de la carte.
 * @param string $desc       Description.
 * @param string $img        Chemin image relatif (assets/images/...).
 * @param array  $links      Liste de liens { label, url }.
 */
function trussogne_act_card( $tag_top, $tag_right, $name, $desc, $img, $links ) {
	?>
	<article>
		<div style="aspect-ratio: 4/3; border-radius: 4px; overflow: hidden;">
			<img src="<?php trussogne_asset_url( $img ); ?>" alt="<?php echo esc_attr( $name ); ?>" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
		</div>
		<div style="padding: 20px 0;">
			<div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
				<span class="mono-label" style="color: var(--green); font-size: 10px;"><?php echo esc_html( $tag_top ); ?></span>
				<span class="mono-label" style="color: var(--ink-soft); font-size: 10px;"><?php echo esc_html( $tag_right ); ?></span>
			</div>
			<h3 class="serif" style="font-size: 26px; line-height: 1.15; font-weight: 500; margin-bottom: 10px;"><?php echo esc_html( $name ); ?></h3>
			<p style="font-size: 14px; line-height: 1.6; color: var(--ink-soft);"><?php echo esc_html( $desc ); ?></p>
			<?php if ( ! empty( $links ) ) : ?>
				<div style="display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap;">
					<?php foreach ( $links as $l ) : ?>
						<a href="<?php echo esc_url( $l['url'] ); ?>" target="_blank" rel="noopener noreferrer" class="act-card-link" style="font-size: 11px; letter-spacing: 0.07em; text-transform: uppercase; padding: 5px 12px; border-radius: 100px; border: 1px solid var(--line); color: var(--green); text-decoration: none; font-family: inherit;"><?php echo esc_html( $l['label'] ); ?></a>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	</article>
	<?php
}

get_header();
?>

<main>

	<section id="top" style="background: var(--paper);">
		<?php
		trussogne_page_hero(
			array(
				'image'    => 'alentours/veveve.webp',
				'alt'      => 'Château de Vêves',
				'title'    => 'Activités & alentours',
				'subtitle' => 'Nature, patrimoine, aventure et gastronomie à quelques minutes de votre porte',
			)
		);
		?>
		<div class="act-hero-intro" style="padding: 56px 48px 8px;">
			<div style="max-width: 1280px; margin: 0 auto;">
				<p style="font-size: 19px; line-height: 1.6; color: var(--ink-soft); max-width: 720px;">
					Les Ardennes belges regorgent de trésors à découvrir — sentiers et forêts, châteaux médiévaux, sports en pleine nature et tables gourmandes, tout est à portée de main depuis le gîte.
				</p>
				<div class="act-hero-row" style="display: flex; flex-direction: row; align-items: center; gap: 56px; margin-top: 32px; flex-wrap: wrap;">
					<div style="display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
						<a href="#activites" class="btn-primary">Voir les activités</a>
						<a href="#restaurants" class="btn-ghost">Restaurants</a>
					</div>
					<div class="act-hero-stats" style="display: flex; gap: 56px; flex-wrap: wrap;">
						<?php foreach ( $act_stats as $s ) : ?>
							<div>
								<div class="mono-label" style="color: var(--ink-soft); margin-bottom: 6px;"><?php echo esc_html( $s['label'] ); ?></div>
								<div style="font-size: 20px; line-height: 1.2; color: var(--green); font-weight: 500;"><?php echo esc_html( $s['n'] ); ?></div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="activites" class="act-section" style="padding: 60px 48px 80px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; gap: 32px; flex-wrap: wrap;">
				<div>
					<div class="sec-num" style="margin-bottom: 16px;">· DÉCOUVRIR ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400;">
						<?php echo count( $act_activities ); ?> activités<span style="color: var(--green);"> à découvrir</span>
					</h2>
				</div>
			</div>
			<div style="display: flex; gap: 10px; margin-bottom: 56px; flex-wrap: wrap;">
				<?php foreach ( $act_categories as $i => $c ) : ?>
					<span class="act-cat-tab<?php echo 0 === $i ? ' is-active' : ''; ?>" style="padding: 10px 20px; border-radius: 100px; border: 1px solid <?php echo 0 === $i ? 'var(--green)' : 'var(--line)'; ?>; background: <?php echo 0 === $i ? 'var(--green)' : 'transparent'; ?>; color: <?php echo 0 === $i ? 'var(--paper)' : 'var(--ink-soft)'; ?>; font-size: 13px; letter-spacing: 0.06em;"><?php echo esc_html( $c['label'] ); ?></span>
				<?php endforeach; ?>
			</div>
			<div class="act-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px 28px;">
				<?php
				foreach ( $act_activities as $act ) {
					trussogne_act_card( $act['cat'], $act['loc'], $act['name'], $act['desc'], $act['img'], $act['links'] );
				}
				?>
			</div>
		</div>
	</section>

	<section id="restaurants" class="act-section" style="padding: 60px 48px 80px; background: var(--cream);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; gap: 32px; flex-wrap: wrap;">
				<div>
					<div class="sec-num" style="margin-bottom: 16px;">· GASTRONOMIE ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400;">
						<?php echo count( $act_restaurants ); ?> adresses<span style="color: var(--green);"> gourmandes</span>
					</h2>
				</div>
			</div>
			<div class="act-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px 28px;">
				<?php
				foreach ( $act_restaurants as $r ) {
					trussogne_act_card( $r['type'], $r['loc'], $r['name'], $r['desc'], $r['img'], $r['links'] );
				}
				?>
			</div>
		</div>
	</section>

	<section class="act-section" style="padding: 80px 48px; background: var(--cream);">
		<div style="max-width: 1280px; margin: 0 auto; text-align: center;">
			<div class="sec-num" style="margin-bottom: 20px;">· NOS PETITS PLUS ·</div>
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 96px;">
				Pour aller plus loin
			</h2>
			<div class="act-petits-plus-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 56px; text-align: left;">
				<div>
					<div style="aspect-ratio: 5/3; border-radius: 4px; margin-bottom: 32px; overflow: hidden;">
						<img src="<?php trussogne_asset_url( 'plusLoin/reiki.jpg' ); ?>" alt="Séances de Reiki" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					</div>
					<h3 class="serif" style="font-size: 40px; line-height: 1.1; font-weight: 400; margin-bottom: 16px;">
						Séances de <span style="color: var(--green);">Reiki</span>
					</h3>
					<p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft);">
						Méthode de soins énergétiques d'origine japonaise. Par l'imposition des mains, le Reiki aide à équilibrer les énergies du corps.
					</p>
				</div>
				<div>
					<div style="aspect-ratio: 5/3; border-radius: 4px; margin-bottom: 32px; overflow: hidden;">
						<img src="<?php trussogne_asset_url( 'plusLoin/traiteur.jpg' ); ?>" alt="Service traiteur" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					</div>
					<h3 class="serif" style="font-size: 40px; line-height: 1.1; font-weight: 400; margin-bottom: 16px;">
						Service traiteur
					</h3>
					<p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft);">
						Repas gourmands sur mesure, créations culinaires préparées avec des produits locaux et de saison.
					</p>
				</div>
			</div>
			<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-ghost" style="margin-top: 64px;">
				Demander une proposition sur-mesure
			</a>
		</div>
	</section>

	<section class="act-section" style="padding: 60px 48px; background: var(--green); color: var(--paper); text-align: center;">
		<div style="max-width: 800px; margin: 0 auto;">
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 32px;">
				Votre évasion <span style="opacity: 0.6;">vous attend</span>
			</h2>
			<div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
				<a href="<?php echo esc_url( TRUSSOGNE_ELLOHA_URL ); ?>" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background: var(--paper); color: var(--green); font-size: 15px; padding: 16px 28px;">Réserver en direct</a>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn-ghost" style="font-size: 15px; padding: 16px 24px; border-color: rgba(244,239,230,0.3); color: var(--paper);">Retour à l'accueil</a>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
