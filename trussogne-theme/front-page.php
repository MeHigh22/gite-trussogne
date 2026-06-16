<?php
/**
 * Template : Accueil (porté de Home.jsx).
 *
 * front-page.php : utilisé automatiquement par WordPress pour la page d'accueil statique.
 *
 * Le hook useBreakpoint() du React (600 / 900px) est remplacé par les valeurs
 * desktop en inline + des classes home-* dont les @media vivent dans theme.css.
 * Les comportements JS (sliders saisons/onglets/avis) ne sont PAS portés — voir
 * le rapport. Le scroll-reveal reste géré par .reveal (main.js).
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Section « Quatre saisons » (porté de Home.jsx:77-82).
$home_senses = array(
	array( 'num' => '01', 'label' => 'Printemps', 'caption' => "Sentez l'odeur de la pluie après une après-midi chaude", 'photo' => 'quatreSaisons/printemps.webp' ),
	array( 'num' => '02', 'label' => 'Été',       'caption' => "Une expérience sensorielle au cœur de la pleine nature", 'photo' => 'quatreSaisons/ete.webp' ),
	array( 'num' => '03', 'label' => 'Automne',   'caption' => "Écoutez le chant des oiseaux dans les sapins",           'photo' => 'quatreSaisons/brume.webp' ),
	array( 'num' => '04', 'label' => 'Hiver',     'caption' => "Laissez-vous envelopper par le calme de la saison",      'photo' => 'quatreSaisons/hiver1.webp' ),
);

// Section « Le Gîte » (porté de Home.jsx:175-182).
$home_features = array(
	array( 'num' => '01', 'title' => 'Cuisine premium',    'desc' => 'La Cornue, Quooker, cafetière Nespresso, lave-vaisselle, fours.' ),
	array( 'num' => '02', 'title' => 'Linge fourni',       'desc' => 'Draps de lit, draps de bain, linge de maison inclus.' ),
	array( 'num' => '03', 'title' => 'Équipement bébé',    'desc' => 'Lit, table à langer, chaise haute disponibles sur demande.' ),
	array( 'num' => '04', 'title' => 'Charges comprises',  'desc' => 'Électricité, eau, chauffage, bois, nettoyage final.' ),
	array( 'num' => '05', 'title' => 'Confort cosy',       'desc' => 'Feu ouvert, TV écran plat, kicker, barbecue extérieur.' ),
	array( 'num' => '06', 'title' => 'Stationnement',      'desc' => 'Parking privé pour quatre véhicules sur la propriété.' ),
);

// Section « Chambres » (porté de Home.jsx:221-226).
$home_rooms = array(
	array( 'id' => 'diane',    'name' => 'Diane',    'beds' => 'Lit Queen size · salle de douche privative · vue panoramique',     'img' => 'quatreChambres/ChambreDiane.webp' ),
	array( 'id' => 'verte',    'name' => 'Verte',    'beds' => 'Lit Queen size · salle de douche privative · accès direct jardin',  'img' => 'quatreChambres/ChambreVerte.webp' ),
	array( 'id' => 'ane',      'name' => "L'Âne",    'beds' => 'Lit Queen size · salle de bain privative avec baignoire',           'img' => 'quatreChambres/ChambreAne.webp' ),
	array( 'id' => 'chapelle', 'name' => 'Chapelle', 'beds' => 'Lit Queen size · salle de douche privative · rez-de-chaussée',      'img' => 'quatreChambres/Chambre-Chapelle-scaled.webp' ),
);

// Section « Alentours » (porté de Home.jsx:258-263).
$home_activities = array(
	array( 'name' => 'Domaine de Chevetogne',        'meta' => '12 km · parc 550 ha',  'desc' => 'Parc naturel belge offrant jardins, étangs, sentiers et aires de jeux.',           'tag' => 'Nature & jeux', 'img' => 'alentours/chevetogne.webp' ),
	array( 'name' => "Royal Golf Château d'Ardenne", 'meta' => '5 min · 18 trous',     'desc' => "Parcours historique alliant prestige et nature ardennaise.",                       'tag' => 'Sport',         'img' => 'alentours/gold.webp' ),
	array( 'name' => 'Château de Vêves',             'meta' => '15 km · XIIIᵉ siècle', 'desc' => 'Forteresse médiévale féerique, joyau architectural posé au-dessus de la vallée.',  'tag' => 'Patrimoine',    'img' => 'alentours/veveve.webp' ),
	array( 'name' => 'Promenades à Houyet',          'meta' => 'Au pied du gîte',      'desc' => 'Sentiers le long de la Lesse, panoramas saisissants.',                             'tag' => 'Marche & VTT',  'img' => 'alentours/houyet-1.webp' ),
);

// Section « Avis » (porté de Home.jsx:346-355).
$home_reviews = array(
	array( 'name' => 'Sophie du Fontbaré',     'locale' => 'FR', 'text' => 'Endroit paradisiaque. Maison ultra confortable. Calme, nature, balades. Cocon de rêve pour se ressourcer. Foncez.' ),
	array( 'name' => 'Monika Steinel',         'locale' => 'EN', 'text' => 'Wonderful location, the view must be one of the nicest in Belgium. The house is well-appointed and well-equipped. Recommend wholeheartedly.' ),
	array( 'name' => 'Julie Van Bockxelaere',  'locale' => 'NL', 'text' => 'Het vakantiehuis in Trussogne is absoluut een aanrader. De ligging is adembenemend en het huis zelf is ruim en comfortabel.' ),
	array( 'name' => 'Anne-Françoise Cecoster', 'locale' => 'FR', 'text' => "Top endroit ! La vue est époustouflante et le gîte ultra confort. Situé à 5 min du golf d'Ardennes." ),
	array( 'name' => 'Ernest Baele',           'locale' => 'FR', 'text' => "Reçus de manière très chaleureuse. La maison est de grande qualité avec une vue magnifique. Nous y retournerons avec plaisir." ),
	array( 'name' => 'Zoé Palacio',            'locale' => 'FR', 'text' => "En famille ou entre amis, il fait bon à Trussogne ! Raffinement et bon goût de la décoration." ),
	array( 'name' => 'Kelley Steeves',         'locale' => 'EN', 'text' => 'Trussogne is a piece of heaven. Beautiful property, incredible view. We will be back.' ),
	array( 'name' => 'Geert Coppens',          'locale' => 'NL', 'text' => 'Fantastic location. Tastefully decorated with all modern amenities. Lovely fireplace and beautiful outdoor facilities.' ),
);

// Section « Réservation » : coordonnées (porté de Home.jsx:430-433).
$home_contact = array(
	array( 'label' => 'Adresse',   'value' => "Grande Trussogne, 9C\n5561 Houyet, Belgique" ),
	array( 'label' => 'Téléphone', 'value' => '+32 476 222 707' ),
	array( 'label' => 'Email',     'value' => 'trussogne@gmail.com' ),
	array( 'label' => 'Capacité',  'value' => '6 à 9 voyageurs' ),
);

// Section « Réservation » : 4 piliers (porté de Home.jsx:443-447).
$home_pillars = array(
	array( 'n' => '01', 'title' => 'Calme & Sérénité',         'desc' => "Trussogne est l'endroit idéal pour une parenthèse apaisante." ),
	array( 'n' => '02', 'title' => 'Charme & Quiétude',        'desc' => "Chaque espace a été conçu pour maximiser la vue époustouflante." ),
	array( 'n' => '03', 'title' => 'Un cadre unique',          'desc' => "Les intérieurs vous séduiront par leur atmosphère chaleureuse et accueillante." ),
	array( 'n' => '04', 'title' => 'Des extérieurs magnifiques', 'desc' => "Un cadre naturel d'exception pour des moments uniques." ),
);

get_header();
?>

<main>

	<!-- ── Hero (porté de Home.jsx Hero, l.35-73) ───────────────────────── -->
	<section id="top" style="background: var(--paper);">
		<?php
		trussogne_page_hero(
			array(
				'image'    => 'photo1.webp',
				'alt'      => 'Maison ardennaise',
				'title'    => 'Gîte de Trussogne',
				'subtitle' => 'Gîte de charme en Ardenne',
			)
		);
		?>
		<div class="home-hero-pad" style="padding: 56px 48px 72px;">
			<div style="max-width: 1280px; margin: 0 auto;">
				<p class="home-hero-intro" style="font-size: 19px; line-height: 1.6; color: var(--ink-soft); max-width: 720px;">
					Nichée au cœur d'un environnement naturel préservé à Houyet dans nos Ardennes, notre propriété est le fruit d'un rêve : créer un havre de paix où le temps semble s'arrêter. À Trussogne, chacun peut se reconnecter à l'essentiel, profiter du calme et découvrir la beauté naturelle de cette région privilégiée.
				</p>

				<div class="home-hero-actions" style="display: flex; flex-direction: row; align-items: center; gap: 56px; margin-top: 32px; flex-wrap: wrap;">
					<a href="#story" class="btn-primary">Découvrir le lieu</a>
					<div style="display: flex; gap: 56px;">
						<div>
							<div class="serif" style="font-size: 36px; line-height: 1; color: var(--green);">6—9</div>
							<div class="mono-label" style="margin-top: 8px; color: var(--ink-soft);">Voyageurs</div>
						</div>
						<div>
							<div class="serif" style="font-size: 36px; line-height: 1; color: var(--green);">04</div>
							<div class="mono-label" style="margin-top: 8px; color: var(--ink-soft);">Chambres</div>
						</div>
					</div>
				</div>

				<div class="home-hero-booking" style="margin-top: 56px;">
					<?php echo do_shortcode( '[trussogne_booking]' ); ?>
				</div>
			</div>
		</div>
	</section>

	<!-- ── Sensory (porté de Home.jsx Sensory, l.75-137) ────────────────── -->
	<!-- NOTE : en React le slider permutait les 4 saisons (opacity/scale + onglets cliquables).
	     En PHP statique on affiche la 1re saison (Printemps) ; voir le rapport. -->
	<section style="background: var(--green-deep); color: var(--paper); padding: 0; position: relative;">
		<div class="home-sensory-stage" style="position: relative; height: 85vh; min-height: 560px; overflow: hidden;">
			<?php foreach ( $home_senses as $i => $s ) : ?>
				<img src="<?php trussogne_asset_url( $s['photo'] ); ?>" alt="<?php echo esc_attr( $s['label'] ); ?>" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: <?php echo 0 === $i ? '1' : '0'; ?>; transform: <?php echo 0 === $i ? 'scale(1)' : 'scale(1.05)'; ?>; transition: opacity 1.2s ease, transform 1.8s ease;" />
			<?php endforeach; ?>
			<div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(31,58,24,0.7) 0%, rgba(31,58,24,0.3) 40%, rgba(31,58,24,0.3) 50%, rgba(31,58,24,0.85) 100%); pointer-events: none;"></div>

			<div class="home-sensory-top" style="position: absolute; top: 0; left: 0; right: 0; padding: 80px 48px 0;">
				<div style="max-width: 1280px; margin: 0 auto;">
					<div class="sec-num" style="margin-bottom: 16px; color: #fff;">· UNE EXPÉRIENCE SENSORIELLE ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.0; font-weight: 400; color: #fff;">
						Quatre saisons, un lieu
					</h2>
				</div>
			</div>

			<div class="home-sensory-bottom" style="position: absolute; bottom: 0; left: 0; right: 0; padding: 0 48px 64px;">
				<div class="home-sensory-row" style="max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-end; gap: 48px; flex-wrap: wrap;">
					<div style="max-width: 480px;">
						<p class="serif home-sensory-caption" style="font-size: 28px; line-height: 1.25; font-weight: 400; margin-bottom: 12px; color: #fff;"><?php echo esc_html( $home_senses[0]['caption'] ); ?></p>
						<p class="home-sensory-sub" style="font-size: 14px; color: rgba(244,239,230,0.6); line-height: 1.5;">
							Trussogne se vit autant qu'elle se regarde. Les fenêtres ouvertes, le bois qui crépite, le silence des Ardennes.
						</p>
					</div>

					<div class="home-sensory-tabs" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; width: auto;">
						<?php foreach ( $home_senses as $i => $s ) : ?>
							<button type="button" class="home-sensory-tab" style="padding: 16px 28px; background: <?php echo 0 === $i ? 'rgba(244,239,230,0.15)' : 'transparent'; ?>; border: none; cursor: pointer; border-bottom: <?php echo 0 === $i ? '2px solid var(--paper)' : '2px solid transparent'; ?>; transition: all 0.4s ease; text-align: left;">
								<div class="mono-label" style="font-size: 9px; color: <?php echo 0 === $i ? 'var(--paper)' : 'rgba(244,239,230,0.5)'; ?>; margin-bottom: 4px;"><?php echo esc_html( $s['num'] ); ?></div>
								<div class="home-sensory-tab-label" style="font-size: 14px; font-weight: 500; color: <?php echo 0 === $i ? '#fff' : 'rgba(244,239,230,0.65)'; ?>; letter-spacing: 0.02em;"><?php echo esc_html( $s['label'] ); ?></div>
							</button>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ── Story (porté de Home.jsx Story, l.139-171) ───────────────────── -->
	<section id="story" class="home-story" style="padding: 80px 48px; background: var(--paper);">
		<div class="home-story-grid reveal" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 96px; align-items: center;">
			<img src="<?php trussogne_asset_url( 'ane-trussogne.webp' ); ?>" alt="L'âne de Trussogne" style="aspect-ratio: 4/5; border-radius: 4px; width: 100%; object-fit: cover;" />
			<div>
				<div class="sec-num" style="margin-bottom: 20px;">· 02 — NOTRE HISTOIRE ·</div>
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; margin-bottom: 32px; font-weight: 400;">
					Le fruit d'un rêve, devenu havre de paix
				</h2>
				<p style="font-size: 18px; line-height: 1.7; color: var(--ink-soft); margin-bottom: 24px; max-width: 560px;">
					Nichée au cœur d'un environnement naturel préservé à Houyet dans nos Ardennes, notre propriété est née d'une envie simple : créer un lieu où le temps ralentit, où l'on respire profondément, et où la beauté discrète de la région se révèle au fil des heures.
				</p>
				<p style="font-size: 18px; line-height: 1.7; color: var(--ink-soft); max-width: 560px;">
					À Trussogne, chacun peut se reconnecter à l'essentiel — le crépitement d'un feu, le bois fendu, les longues marches, et le silence des sapins.
				</p>
				<div style="margin-top: 56px; display: flex; gap: 64px; flex-wrap: wrap;">
					<div>
						<div class="serif" style="font-size: 40px; color: var(--green); line-height: 1;">Sandra</div>
						<div class="mono-label" style="margin-top: 8px; color: var(--ink-soft);">Votre hôtesse</div>
					</div>
					<div style="border-left: 1px solid var(--line); padding-left: 32px; align-self: center;">
						<div class="mono-label" style="color: var(--ink-soft); margin-bottom: 8px;">Coordonnées</div>
						<div style="font-size: 15px;">+32 476 222 707</div>
						<div style="font-size: 15px;">trussogne@gmail.com</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ── Le Gîte (porté de Home.jsx GiteSection, l.173-217) ────────────── -->
	<section id="gite" class="home-gite" style="padding: 80px 48px; background: var(--cream);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="home-gite-head" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 80px; gap: 48px; flex-wrap: wrap;">
				<div>
					<div class="sec-num" style="margin-bottom: 20px;">· 03 — LE GÎTE ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; max-width: 720px;">
						Tout est prévu. <span style="color: var(--green);">Vous n'avez qu'à arriver</span>
					</h2>
				</div>
				<p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft); max-width: 360px;">
					Une location pensée pour 6 à 9 personnes, en famille ou entre amis.
				</p>
			</div>
			<div class="home-gite-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--line); background: var(--paper);">
				<?php foreach ( $home_features as $f ) : ?>
					<div class="home-gite-cell" style="padding: 40px 36px;">
						<div class="serif" style="font-size: 14px; color: var(--green); letter-spacing: 0.2em; margin-bottom: 24px;">· <?php echo esc_html( $f['num'] ); ?> ·</div>
						<h3 class="serif" style="font-size: 28px; margin-bottom: 12px; font-weight: 500;"><?php echo esc_html( $f['title'] ); ?></h3>
						<p style="font-size: 14px; line-height: 1.6; color: var(--ink-soft);"><?php echo esc_html( $f['desc'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
			<div style="text-align: center; margin-top: 48px;">
				<a href="<?php echo esc_url( home_url( '/le-gite' ) ); ?>" class="btn-ghost">Voir le gîte en détail</a>
			</div>
		</div>
	</section>

	<!-- ── Chambres (porté de Home.jsx Chambres, l.219-254) ──────────────── -->
	<section id="chambres" class="home-chambres" style="padding: 80px 48px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px;">· 04 — CHAMBRES ·</div>
			<div style="margin-bottom: 64px;">
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; max-width: 720px;">
					Quatre chambres, quatre atmosphères
				</h2>
			</div>
			<div class="home-chambres-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
				<?php foreach ( $home_rooms as $i => $r ) : ?>
					<a href="<?php echo esc_url( home_url( '/le-gite#' . $r['id'] ) ); ?>" class="room-card" style="cursor: pointer; text-decoration: none; color: inherit; display: block;">
						<div style="aspect-ratio: 16/9; border-radius: 4px; margin-bottom: 16px; overflow: hidden;">
							<img src="<?php trussogne_asset_url( $r['img'] ); ?>" alt="<?php echo esc_attr( $r['name'] ); ?>" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						</div>
						<div style="display: flex; justify-content: space-between; align-items: baseline;">
							<h3 class="serif" style="font-size: 28px; font-weight: 500; color: var(--green);"><?php echo esc_html( $r['name'] ); ?></h3>
							<span class="mono-label" style="color: var(--ink-soft);">0<?php echo (int) $i + 1; ?></span>
						</div>
						<div style="font-size: 13px; color: var(--ink-soft);"><?php echo esc_html( $r['beds'] ); ?></div>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ── Alentours (porté de Home.jsx ActivitiesPreview, l.256-301) ────── -->
	<!-- NOTE : en React les onglets permutaient l'activité affichée (image + texte).
	     En PHP statique on affiche la 1re activité (Domaine de Chevetogne) ; voir le rapport. -->
	<section id="alentours" class="home-alentours" style="padding: 80px 48px; background: var(--green); color: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px; color: rgba(244,239,230,0.7);">· 05 — ALENTOURS ·</div>
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.1; font-weight: 400; margin-bottom: 24px; max-width: 900px;">
				Un environnement <span style="opacity: 0.6;">à couper le souffle</span>, à quelques minutes de la porte
			</h2>
			<div class="tab-strip" style="border-color: rgba(244,239,230,0.18); margin-bottom: 32px; margin-left: -12px; flex-wrap: wrap;">
				<?php foreach ( $home_activities as $i => $it ) : ?>
					<button type="button" class="tab-btn<?php echo 0 === $i ? ' active' : ''; ?>" style="color: <?php echo 0 === $i ? 'var(--paper)' : 'rgba(244,239,230,0.55)'; ?>;">
						<span style="margin-right: 10px; opacity: 0.6;">0<?php echo (int) $i + 1; ?></span> <?php echo esc_html( $it['name'] ); ?>
					</button>
				<?php endforeach; ?>
			</div>
			<div class="home-alentours-grid" style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: center;">
				<div style="aspect-ratio: 4/3; border-radius: 4px; overflow: hidden;">
					<img src="<?php trussogne_asset_url( $home_activities[0]['img'] ); ?>" alt="<?php echo esc_attr( $home_activities[0]['name'] ); ?>" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: opacity 0.4s ease;" />
				</div>
				<div>
					<div style="display: inline-flex; padding: 6px 14px; border-radius: 100px; border: 1px solid rgba(244,239,230,0.3); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 24px;">
						<?php echo esc_html( $home_activities[0]['tag'] ); ?>
					</div>
					<h3 class="serif" style="font-size: 36px; line-height: 1.1; font-weight: 400; margin-bottom: 16px;"><?php echo esc_html( $home_activities[0]['name'] ); ?></h3>
					<div class="mono-label" style="color: rgba(244,239,230,0.6); margin-bottom: 24px;"><?php echo esc_html( $home_activities[0]['meta'] ); ?></div>
					<p style="font-size: 18px; line-height: 1.6; color: rgba(244,239,230,0.85);"><?php echo esc_html( $home_activities[0]['desc'] ); ?></p>
				</div>
			</div>
			<div style="text-align: center; margin-top: 64px;">
				<a href="<?php echo esc_url( home_url( '/activites' ) ); ?>" class="btn-ghost" style="border-color: rgba(244,239,230,0.35); color: var(--paper);">
					Voir toutes les activités
				</a>
			</div>
		</div>
	</section>

	<!-- ── Nos petits plus (porté de Home.jsx Extras, l.303-342) ─────────── -->
	<section class="home-extras" style="padding: 80px 48px; background: var(--cream-warm);">
		<div style="max-width: 1280px; margin: 0 auto; text-align: center;">
			<div class="sec-num" style="margin-bottom: 20px;">· 06 — NOS PETITS PLUS ·</div>
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 96px;">
				Pour aller plus loin
			</h2>
			<div class="home-extras-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 56px; text-align: left;">
				<div>
					<div style="aspect-ratio: 5/3; border-radius: 4px; margin-bottom: 32px; overflow: hidden;">
						<img src="<?php trussogne_asset_url( 'plusLoin/reiki.jpg' ); ?>" alt="Séances de Reiki" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
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
						<img src="<?php trussogne_asset_url( 'plusLoin/traiteur.jpg' ); ?>" alt="Service traiteur" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
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

	<!-- ── Avis (porté de Home.jsx Reviews, l.344-409) ───────────────────── -->
	<!-- NOTE : les flèches ←/→ pilotaient scrollBy() en React. La piste .review-track
	     reste défilable horizontalement (CSS scroll-snap) ; les boutons sont décoratifs
	     sans JS dédié — voir le rapport. -->
	<section id="avis" class="home-avis" style="padding: 80px 48px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto; padding: 0;">
			<div class="sec-num" style="margin-bottom: 20px;">· 07 — AVIS ·</div>
			<div class="home-avis-head" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; gap: 48px; flex-wrap: wrap;">
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; max-width: 720px;">
					Ce que disent <span style="color: var(--green);">nos voyageurs</span>
				</h2>
				<div style="display: flex; align-items: center; gap: 24px;">
					<div style="display: flex; flex-direction: column;">
						<div class="serif" style="font-size: 48px; line-height: 1; color: var(--green);">5.00</div>
						<div class="mono-label" style="color: var(--ink-soft);">moyenne · 17 avis</div>
					</div>
					<div style="display: flex; gap: 8px;">
						<button type="button" style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--line); display: inline-flex; align-items: center; justify-content: center;">←</button>
						<button type="button" style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--line); background: var(--green); color: var(--paper); display: inline-flex; align-items: center; justify-content: center;">→</button>
					</div>
				</div>
			</div>
		</div>
		<div style="max-width: 1280px; margin: 0 auto; padding: 0;">
			<div class="review-track" style="display: flex; gap: 24px; overflow-x: auto; padding: 0;">
				<?php foreach ( $home_reviews as $i => $r ) : ?>
					<?php
					$is_green = ( 0 === $i % 3 );
					$bg       = $is_green ? 'var(--green)' : 'var(--paper)';
					$color    = $is_green ? 'var(--paper)' : 'var(--ink)';
					$border   = $is_green ? 'none' : '1px solid var(--line)';
					$rule     = $is_green ? 'rgba(244,239,230,0.2)' : 'var(--line)';
					?>
					<article class="review-card home-review-card" style="flex: 0 0 460px; background: <?php echo esc_attr( $bg ); ?>; color: <?php echo esc_attr( $color ); ?>; border: <?php echo esc_attr( $border ); ?>; padding: 40px 36px; display: flex; flex-direction: column; min-height: 340px; border-radius: 4px;">
						<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
							<span class="serif" style="font-size: 56px; line-height: 0.6; font-style: italic; opacity: 0.5;">&ldquo;</span>
							<span class="mono-label" style="opacity: 0.65;"><?php echo esc_html( $r['locale'] ); ?></span>
						</div>
						<p class="serif" style="font-size: 22px; line-height: 1.4; font-weight: 400; flex: 1; font-style: italic;"><?php echo esc_html( $r['text'] ); ?></p>
						<div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid <?php echo esc_attr( $rule ); ?>;">
							<div style="font-size: 14px; font-weight: 500;"><?php echo esc_html( $r['name'] ); ?></div>
							<div class="mono-label" style="margin-top: 4px; opacity: 0.6;">Voyageur·euse vérifié·e</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ── Réservation (porté de Home.jsx Booking, l.411-458) ────────────── -->
	<section id="book" class="home-book" style="padding: 80px 48px; background: var(--cream);">
		<div class="home-book-grid" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center;">
			<div>
				<div class="sec-num" style="margin-bottom: 20px;">· 08 — RÉSERVATION ·</div>
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 32px;">
					Réservez en direct
				</h2>
				<p style="font-size: 17px; line-height: 1.6; color: var(--ink-soft); max-width: 460px; margin-bottom: 48px;">
					Réservez directement via notre système de réservation. Tarifs établis pour 6 à 9 personnes.
				</p>
				<a href="<?php echo esc_url( TRUSSOGNE_ELLOHA_URL ); ?>" target="_blank" rel="noopener noreferrer" class="btn-primary">
					Voir les disponibilités
				</a>
			</div>
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px;">
				<?php foreach ( $home_contact as $c ) : ?>
					<div>
						<div class="mono-label" style="color: var(--ink-soft); margin-bottom: 8px;"><?php echo esc_html( $c['label'] ); ?></div>
						<div style="font-size: 15px; line-height: 1.5; white-space: pre-line;"><?php echo esc_html( $c['value'] ); ?></div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<div class="home-book-pillars" style="max-width: 1280px; margin: 64px auto 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;">
			<?php foreach ( $home_pillars as $p ) : ?>
				<div style="padding-top: 24px; border-top: 1px solid var(--line);">
					<div class="mono-label" style="color: var(--green); margin-bottom: 16px;"><?php echo esc_html( $p['n'] ); ?></div>
					<h3 class="serif" style="font-size: 22px; font-weight: 400; line-height: 1.2; margin-bottom: 12px;"><?php echo esc_html( $p['title'] ); ?></h3>
					<p style="font-size: 15px; line-height: 1.6; color: var(--ink-soft);"><?php echo esc_html( $p['desc'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</section>

</main>

<?php get_footer(); ?>
