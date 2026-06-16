<?php
/**
 * Template : Le Gîte (porté de Gite.jsx).
 *
 * Page « dark hero » (PageHero plein cadre) → nav inversée, pas de light hero.
 *
 * Valeurs de style : branche DESKTOP des inline styles JSX pilotés par
 * useBreakpoint(). Les bascules tablette/mobile sont gérées par les classes
 * .gite-* et .gite-room-grid / .gite-section dans theme.css.
 *
 * NOTE : plusieurs sous-composants React étaient interactifs (state). Voir le
 * rapport — le carrousel photo des chambres (RoomImages), le sélecteur d'onglets
 * « Alentours » (GiteActivities) et les flèches de défilement des avis ne sont
 * PAS portés en JS ; rendus en markup statique sur le premier élément.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Statistiques du hero (porté de Gite.jsx:37-42).
$gite_stats = array(
	array( 'n' => '9 personnes',     'label' => 'Capacité' ),
	array( 'n' => '4',               'label' => 'Chambres' ),
	array( 'n' => 'Vue imprenable',  'label' => 'Panorama' ),
	array( 'n' => 'Quiétude absolue', 'label' => 'Sérénité' ),
);

// Chambres (porté de Gite.jsx:92-97). img/images sans le préfixe /assets/.
$gite_rooms = array(
	array(
		'id'       => 'verte',
		'num'      => '01',
		'name'     => 'Verte',
		'color'    => '#325827',
		'img'      => 'quatreChambres/ChambreVerte.webp',
		'desc'     => "Teintée des nuances apaisantes de la nature, elle enveloppe ses hôtes dans une atmosphère douce et ressourçante. Son atout exclusif ? Une porte donnant directement accès au jardin et à la campagne environnante, pour un réveil en pleine nature. Dotée d'un lit double spring box et d'une salle de douche privative, cette chambre allie lumière naturelle et horizons verdoyants.",
		'features' => array( 'Lit Queen size', 'Salle de douche privative', 'Accès direct jardin' ),
		'images'   => array( 'quatreChambres/verte1.webp', 'quatreChambres/verte2.webp' ),
		'align'    => 'left',
	),
	array(
		'id'       => 'ane',
		'num'      => '02',
		'name'     => "L'Âne",
		'color'    => '#5A4A3A',
		'img'      => 'quatreChambres/ChambreAne.webp',
		'desc'     => "Avec ses tons profonds et chaleureux, cette chambre est un véritable refuge de tranquillité, elle invite à la détente et au repos. Son lit double équipé de deux matelas ainsi que sa salle de bain privative avec baignoire assurent un confort optimal.",
		'features' => array( 'Lit Queen size', 'Salle de bain privative avec baignoire', 'Vue imprenable' ),
		'images'   => array( 'quatreChambres/ane1.webp', 'quatreChambres/ane2.webp' ),
		'align'    => 'right',
	),
	array(
		'id'       => 'chapelle',
		'num'      => '03',
		'name'     => 'Chapelle',
		'color'    => '#3A4A5A',
		'img'      => 'quatreChambres/Chambre-Chapelle-scaled.webp',
		'desc'     => "Spacieuse et pensée pour le bien-être, cette chambre située au rez-de-chaussée offre un lit double équipé d'un sur-matelas pour des nuits tout en douceur. Ses teintes ocres, inspirées des paysages naturels, créent une atmosphère chaleureuse et enveloppante. Dotée d'une salle de douche privative et de nombreux rangements, elle est idéale pour un séjour alliant confort et sérénité.",
		'features' => array( 'Lit Queen size', 'Salle de douche privative', 'Rez-de-chaussée' ),
		'images'   => array( 'quatreChambres/chapelle1.webp', 'quatreChambres/chapelle3.webp' ),
		'align'    => 'left',
	),
	array(
		'id'       => 'diane',
		'num'      => '04',
		'name'     => 'Diane',
		'color'    => '#6B4226',
		'img'      => 'quatreChambres/ChambreDiane.webp',
		'desc'     => "Sa grande fenêtre panoramique vous plonge dans un décor naturel où chaque matin, le lever du soleil illumine délicatement la pièce. Aménagée d'un lit double au matelas à mémoire de forme, cette chambre est idéale pour un séjour ressourçant. Sa salle de douche privative allie confort et intimité.",
		'features' => array( 'Lit Queen size', 'Salle de douche privative', 'Vue imprenable' ),
		'images'   => array( 'quatreChambres/diane2.webp', 'quatreChambres/diane3.webp' ),
		'align'    => 'right',
	),
);

// Nombre total d'emplacements photo par chambre (porté de Gite.jsx:101).
// Les slots au-delà des photos réelles s'affichent en placeholder.
$gite_room_slots = 5;

// Valeurs (porté de Gite.jsx:222-227).
$gite_values = array(
	array( 'title' => 'Calme & Sérénité',           'desc' => "Trussogne est l'endroit idéal pour une parenthèse apaisante." ),
	array( 'title' => 'Charme & Quiétude',          'desc' => "Chaque espace a été conçu pour maximiser la vue époustouflante." ),
	array( 'title' => 'Un cadre unique',            'desc' => "Les intérieurs vous séduiront par leur atmosphère chaleureuse et accueillante." ),
	array( 'title' => 'Des extérieurs magnifiques', 'desc' => "Un cadre naturel d'exception pour des moments uniques." ),
);

// Alentours (porté de Gite.jsx:246-250). img sans le préfixe /assets/.
$gite_activities = array(
	array( 'name' => 'Domaine de Chevetogne',        'meta' => '12 km · parc 550 ha',  'desc' => 'Parc naturel belge offrant jardins, étangs, sentiers et aires de jeux.', 'tag' => 'Nature & jeux', 'img' => 'alentours/chevetogne.webp' ),
	array( 'name' => "Royal Golf Château d'Ardenne", 'meta' => '5 min · 18 trous',     'desc' => "Parcours historique alliant prestige et nature ardennaise.",            'tag' => 'Sport',         'img' => 'alentours/gold.webp' ),
	array( 'name' => 'Château de Vêves',             'meta' => '15 km · XIIIᵉ siècle', 'desc' => 'Forteresse médiévale féerique, joyau architectural posé au-dessus de la vallée.', 'tag' => 'Patrimoine', 'img' => 'alentours/veveve.webp' ),
	array( 'name' => 'Promenades à Houyet',          'meta' => 'Au pied du gîte',      'desc' => 'Sentiers le long de la Lesse, panoramas saisissants.', 'tag' => 'Marche & VTT', 'img' => 'alentours/houyet-1.webp' ),
);

// Avis (porté de Gite.jsx:289-296).
$gite_reviews = array(
	array( 'name' => 'Sophie du Fontbaré',     'locale' => 'FR', 'text' => 'Endroit paradisiaque. Maison ultra confortable. Calme, nature, balades. Cocon de rêve pour se ressourcer. Foncez.' ),
	array( 'name' => 'Monika Steinel',         'locale' => 'EN', 'text' => 'Wonderful location, the view must be one of the nicest in Belgium. The house is well-appointed and well-equipped. Recommend wholeheartedly.' ),
	array( 'name' => 'Julie Van Bockxelaere',  'locale' => 'NL', 'text' => 'Het vakantiehuis in Trussogne is absoluut een aanrader. De ligging is adembenemend en het huis zelf is ruim en comfortabel.' ),
	array( 'name' => 'Anne-Françoise Cecoster', 'locale' => 'FR', 'text' => "Top endroit ! La vue est époustouflante et le gîte ultra confort. Situé à 5 min du golf d'Ardennes." ),
	array( 'name' => 'Ernest Baele',           'locale' => 'FR', 'text' => "Reçus de manière très chaleureuse. La maison est de grande qualité avec une vue magnifique. Nous y retournerons avec plaisir." ),
	array( 'name' => 'Zoé Palacio',            'locale' => 'FR', 'text' => "En famille ou entre amis, il fait bon à Trussogne ! Raffinement et bon goût de la décoration." ),
	array( 'name' => 'Kelley Steeves',         'locale' => 'EN', 'text' => 'Trussogne is a piece of heaven. Beautiful property, incredible view. We will be back.' ),
	array( 'name' => 'Geert Coppens',          'locale' => 'NL', 'text' => 'Fantastic location. Tastefully decorated with all modern amenities. Lovely fireplace and beautiful outdoor facilities.' ),
);

// Mosaïque « Le Gîte » (porté de Gite.jsx:348-361). src sans le préfixe /assets/.
$gite_mosaic = array(
	array( 'src' => 'photo1.webp',                                 'caption' => 'La maison ardennaise' ),
	array( 'src' => 'quatreChambres/ChambreDiane.webp',            'caption' => 'Chambre Diane' ),
	array( 'src' => 'quatreSaisons/printemps.webp',               'caption' => 'Printemps à Trussogne' ),
	array( 'src' => 'quatreChambres/ChambreVerte.webp',            'caption' => 'Chambre Verte' ),
	array( 'src' => 'Marcassins-Trussogne.webp',                  'caption' => 'Marcassins dans la prairie' ),
	array( 'src' => 'quatreChambres/ChambreAne.webp',             'caption' => "Chambre de l'Âne" ),
	array( 'src' => 'quatreSaisons/ete.webp',                     'caption' => 'Été ardennais' ),
	array( 'src' => 'quatreChambres/Chambre-Chapelle-scaled.webp', 'caption' => 'Chambre Chapelle' ),
	array( 'src' => 'Photo-Lievres-amoureux-Tru.webp',           'caption' => 'Lièvres à Trussogne' ),
	array( 'src' => 'quatreSaisons/brume.webp',                  'caption' => 'Brume automnale' ),
	array( 'src' => 'alentours/chevetogne.webp',                 'caption' => 'Domaine de Chevetogne' ),
	array( 'src' => 'quatreSaisons/hiver1.webp',                 'caption' => 'Hiver sous la neige' ),
);

/**
 * Affiche le bloc images d'une chambre (porté de RoomImages, Gite.jsx:103-164).
 *
 * NOTE : le carrousel auto/IntersectionObserver n'est PAS porté. Rendu statique :
 * photo principale visible, photos secondaires + placeholders en slides masqués,
 * pucesde pagination statiques (la première active).
 *
 * @param array $room  Chambre.
 * @param int   $slots Nombre total d'emplacements photo.
 */
function trussogne_gite_room_images( $room, $slots ) {
	// Photos réelles (principale + secondaires).
	$real = array_merge( array( $room['img'] ), $room['images'] );
	$count = max( count( $real ), $slots );
	?>
	<div class="gite-room-images" style="display: flex; flex-direction: column; gap: 14px;">
		<div style="position: relative; aspect-ratio: 4/3; border-radius: 4px; overflow: hidden;">
			<?php for ( $i = 0; $i < $count; $i++ ) : ?>
				<?php $src = isset( $real[ $i ] ) ? $real[ $i ] : null; ?>
				<div style="position: absolute; inset: 0; opacity: <?php echo 0 === $i ? '1' : '0'; ?>; transition: opacity 0.5s ease; pointer-events: <?php echo 0 === $i ? 'auto' : 'none'; ?>;">
					<?php if ( $src ) : ?>
						<img src="<?php trussogne_asset_url( $src ); ?>" alt="<?php echo esc_attr( $room['name'] . ' — photo ' . ( $i + 1 ) ); ?>" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
					<?php else : ?>
						<div class="ph" data-label="<?php echo esc_attr( $room['id'] . ' — photo ' . ( $i + 1 ) ); ?>" style="width: 100%; height: 100%;"></div>
					<?php endif; ?>
				</div>
			<?php endfor; ?>
		</div>

		<?php if ( $count > 1 ) : ?>
			<div style="display: flex; gap: 8px; justify-content: center;">
				<?php for ( $i = 0; $i < $count; $i++ ) : ?>
					<button type="button" aria-label="<?php echo esc_attr( 'Aller à la photo ' . ( $i + 1 ) ); ?>" style="width: <?php echo 0 === $i ? '22px' : '8px'; ?>; height: 8px; border-radius: 100px; background: <?php echo 0 === $i ? esc_attr( $room['color'] ) : 'var(--line)'; ?>; border: none; cursor: pointer; transition: all 0.3s ease; padding: 0;"></button>
				<?php endfor; ?>
			</div>
		<?php endif; ?>
	</div>
	<?php
}

get_header();
?>

<main>

	<!-- GiteHero (porté de Gite.jsx:35-78) -->
	<section id="top" style="background: var(--paper);">
		<?php
		trussogne_page_hero(
			array(
				'image'    => 'le-gite/le-gite-2.webp',
				'alt'      => 'Le gîte de Trussogne',
				'title'    => 'Votre parenthèse enchantée',
				'subtitle' => "Gîte de caractère pouvant accueillir jusqu'à 9 personnes dans un cadre naturel d'exception",
			)
		);
		?>
		<div class="gite-hero-intro" style="padding: 56px 48px 8px;">
			<div style="max-width: 1280px; margin: 0 auto;">
				<p style="font-size: 19px; line-height: 1.6; color: var(--ink-soft); max-width: 720px;">
					Niché au cœur d'un environnement préservé, Trussogne offre un espace authentique pour des moments inoubliables. <span class="serif" style="font-style: italic; color: var(--green);">Votre évasion vous attend&nbsp;!</span>
				</p>

				<div class="gite-hero-cta" style="display: flex; flex-direction: row; align-items: center; gap: 56px; margin-top: 32px; flex-wrap: wrap;">
					<a href="#verte" class="btn-primary">Découvrir les chambres</a>
					<div style="display: flex; gap: 56px; flex-wrap: wrap;">
						<?php foreach ( $gite_stats as $s ) : ?>
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

	<!-- BookingWidget (porté de Gite.jsx:81-90) -->
	<section class="gite-booking" style="background: var(--paper); padding: 32px 48px 40px;">
		<div style="max-width: 1280px; margin: 0 auto;">
			<?php echo do_shortcode( '[trussogne_booking]' ); ?>
		</div>
	</section>

	<!-- GiteMosaic (porté de Gite.jsx:363-423) -->
	<section class="gite-section" style="background: var(--paper); padding: 64px 48px 80px;">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div style="margin-bottom: 48px;">
				<div class="sec-num" style="margin-bottom: 16px;">· 01 — LE GÎTE ·</div>
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; max-width: 640px;">
					Un lieu d'exception où <span style="color: var(--green);">confort et nature</span> se rencontrent
				</h2>
			</div>
			<div class="gallery-grid gallery-grid--contained">
				<?php
				foreach ( $gite_mosaic as $p ) :
					$url = trussogne_asset( $p['src'] );
					?>
					<div class="gallery-item"
						data-full="<?php echo esc_url( $url ); ?>"
						data-caption="<?php echo esc_attr( $p['caption'] ); ?>">
						<img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( $p['caption'] ); ?>" loading="lazy" />
						<div class="overlay">
							<div class="serif" style="font-size: 18px; font-style: italic; color: var(--paper);"><?php echo esc_html( $p['caption'] ); ?></div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- RoomsIntro (porté de Gite.jsx:198-218) -->
	<section class="gite-rooms-intro" style="padding: 80px 48px 0; background: var(--paper); text-align: center;">
		<div style="max-width: 900px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px;">· 02 — NOS CHAMBRES ·</div>
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 48px;">
				Quatre chambres, quatre atmosphères
			</h2>
			<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
				<?php foreach ( $gite_rooms as $r ) : ?>
					<a href="#<?php echo esc_attr( $r['id'] ); ?>" style="display: inline-flex; align-items: center; gap: 10px; padding: 12px 22px; border: 1px solid var(--line); border-radius: 100px; font-size: 14px; font-weight: 500; transition: all 0.3s ease;">
						<span style="width: 8px; height: 8px; border-radius: 50%; background: <?php echo esc_attr( $r['color'] ); ?>;"></span>
						<?php echo esc_html( $r['name'] ); ?>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- RoomSection × 4 (porté de Gite.jsx:168-196) -->
	<?php
	foreach ( $gite_rooms as $index => $room ) :
		$is_left = 'left' === $room['align'];
		// Desktop : 1.3fr 1fr (gauche) ou 1fr 1.3fr (droite).
		$cols = $is_left ? '1.3fr 1fr' : '1fr 1.3fr';
		$bg   = 0 === $index % 2 ? 'var(--paper)' : 'var(--cream)';
		?>
		<section id="<?php echo esc_attr( $room['id'] ); ?>" class="gite-section" style="padding: 80px 48px; background: <?php echo esc_attr( $bg ); ?>;">
			<div class="gite-room-grid" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: <?php echo esc_attr( $cols ); ?>; gap: 80px; align-items: center;">
				<?php
				// Desktop : images à gauche si align=left ; sinon le texte d'abord.
				if ( $is_left ) {
					trussogne_gite_room_images( $room, $gite_room_slots );
				}
				?>
				<div>
					<div class="sec-num" style="margin-bottom: 20px;">· <?php echo esc_html( $room['num'] ); ?> ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 0.95; font-weight: 400; margin-bottom: 28px; letter-spacing: -0.02em; color: <?php echo esc_attr( $room['color'] ); ?>;"><?php echo esc_html( $room['name'] ); ?></h2>
					<p style="font-size: 16px; line-height: 1.7; color: var(--ink-soft); max-width: 480px; margin-bottom: 36px;"><?php echo esc_html( $room['desc'] ); ?></p>
					<div style="display: flex; flex-direction: column; border: 1px solid var(--line);">
						<?php
						$last_f = count( $room['features'] ) - 1;
						foreach ( $room['features'] as $fi => $f ) :
							$fborder = $fi < $last_f ? 'border-bottom: 1px solid var(--line);' : '';
							?>
							<div style="padding: 16px 20px; <?php echo $fborder; ?> font-size: 14px; display: flex; align-items: center; gap: 10px;">
								<span style="width: 6px; height: 6px; border-radius: 50%; background: <?php echo esc_attr( $room['color'] ); ?>; flex-shrink: 0;"></span>
								<?php echo esc_html( $f ); ?>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
				<?php
				// Desktop : images à droite quand align=right.
				if ( ! $is_left ) {
					trussogne_gite_room_images( $room, $gite_room_slots );
				}
				?>
			</div>
		</section>
	<?php endforeach; ?>

	<!-- GiteValues (porté de Gite.jsx:220-241) -->
	<section class="gite-values" style="padding: 100px 48px; background: var(--cream);">
		<div class="gite-values-grid" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px;">
			<?php foreach ( $gite_values as $i => $v ) : ?>
				<div style="padding-top: 24px; border-top: 1px solid var(--line);">
					<div class="mono-label" style="color: var(--green); margin-bottom: 16px;">0<?php echo esc_html( $i + 1 ); ?></div>
					<h3 class="serif" style="font-size: 22px; font-weight: 400; line-height: 1.2; margin-bottom: 12px;"><?php echo esc_html( $v['title'] ); ?></h3>
					<p style="font-size: 15px; line-height: 1.6; color: var(--ink-soft);"><?php echo esc_html( $v['desc'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</section>

	<!-- GiteActivities (porté de Gite.jsx:243-284) — onglets NON portés, 1er actif -->
	<section class="gite-activities" style="padding: 80px 48px; background: var(--green); color: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px; color: rgba(244,239,230,0.7);">· ALENTOURS ·</div>
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.1; font-weight: 400; margin-bottom: 24px; max-width: 900px;">
				Un environnement <span style="opacity: 0.6;">à couper le souffle</span>, à quelques minutes de la porte
			</h2>
			<div class="tab-strip" style="border-color: rgba(244,239,230,0.18); margin-bottom: 32px; margin-left: -12px; flex-wrap: wrap;">
				<?php foreach ( $gite_activities as $i => $it ) : ?>
					<button type="button" class="tab-btn<?php echo 0 === $i ? ' active' : ''; ?>" style="color: <?php echo 0 === $i ? 'var(--paper)' : 'rgba(244,239,230,0.55)'; ?>;">
						<span style="margin-right: 10px; opacity: 0.6;">0<?php echo esc_html( $i + 1 ); ?></span> <?php echo esc_html( $it['name'] ); ?>
					</button>
				<?php endforeach; ?>
			</div>
			<?php $active = $gite_activities[0]; ?>
			<div class="gite-activities-grid" style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: center;">
				<div style="aspect-ratio: 4/3; border-radius: 4px; overflow: hidden;">
					<img src="<?php trussogne_asset_url( $active['img'] ); ?>" alt="<?php echo esc_attr( $active['name'] ); ?>" style="width: 100%; height: 100%; object-fit: cover; display: block; transition: opacity 0.4s;" />
				</div>
				<div>
					<div style="display: inline-flex; padding: 6px 14px; border-radius: 100px; border: 1px solid rgba(244,239,230,0.3); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 24px;"><?php echo esc_html( $active['tag'] ); ?></div>
					<h3 class="serif" style="font-size: 36px; line-height: 1.1; font-weight: 400; margin-bottom: 16px;"><?php echo esc_html( $active['name'] ); ?></h3>
					<div class="mono-label" style="color: rgba(244,239,230,0.6); margin-bottom: 24px;"><?php echo esc_html( $active['meta'] ); ?></div>
					<p style="font-size: 18px; line-height: 1.6; color: rgba(244,239,230,0.85);"><?php echo esc_html( $active['desc'] ); ?></p>
				</div>
			</div>
			<div style="text-align: center; margin-top: 64px;">
				<a href="<?php echo esc_url( home_url( '/activites' ) ); ?>" class="btn-ghost" style="border-color: rgba(244,239,230,0.35); color: var(--paper);">Voir toutes les activités</a>
			</div>
		</div>
	</section>

	<!-- GiteReviews (porté de Gite.jsx:286-346) — flèches de défilement NON portées -->
	<section class="gite-reviews" style="padding: 60px 48px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto; padding: 0;">
			<div class="sec-num" style="margin-bottom: 20px;">· AVIS ·</div>
			<div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; gap: 48px; flex-wrap: wrap;">
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; max-width: 720px;">
					Ce que disent <span style="color: var(--green);">nos voyageurs</span>
				</h2>
				<div style="display: flex; align-items: center; gap: 24px;">
					<div style="display: flex; flex-direction: column;">
						<div class="serif" style="font-size: 48px; line-height: 1; color: var(--green);">5.00</div>
						<div class="mono-label" style="color: var(--ink-soft);">moyenne · 17 avis</div>
					</div>
					<div style="display: flex; gap: 8px;">
						<button type="button" data-review-prev style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--line); display: inline-flex; align-items: center; justify-content: center;">←</button>
						<button type="button" data-review-next style="width: 48px; height: 48px; border-radius: 50%; border: 1px solid var(--line); background: var(--green); color: var(--paper); display: inline-flex; align-items: center; justify-content: center;">→</button>
					</div>
				</div>
			</div>
		</div>
		<div style="max-width: 1280px; margin: 0 auto; padding: 0;">
			<div class="review-track" style="display: flex; gap: 24px; overflow-x: auto; padding: 0;">
				<?php
				foreach ( $gite_reviews as $i => $r ) :
					$is_green = 0 === $i % 3;
					$bg       = $is_green ? 'var(--green)' : 'var(--paper)';
					$color    = $is_green ? 'var(--paper)' : 'var(--ink)';
					$border   = $is_green ? 'none' : '1px solid var(--line)';
					$divider  = $is_green ? 'rgba(244,239,230,0.2)' : 'var(--line)';
					?>
					<article class="review-card gite-review-card" style="flex: 0 0 460px; background: <?php echo $bg; ?>; color: <?php echo $color; ?>; border: <?php echo $border; ?>; padding: 40px 36px; display: flex; flex-direction: column; min-height: 340px; border-radius: 4px;">
						<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
							<span class="serif" style="font-size: 56px; line-height: 0.6; font-style: italic; opacity: 0.5;">"</span>
							<span class="mono-label" style="opacity: 0.65;"><?php echo esc_html( $r['locale'] ); ?></span>
						</div>
						<p class="serif" style="font-size: 22px; line-height: 1.4; font-weight: 400; flex: 1; font-style: italic;"><?php echo esc_html( $r['text'] ); ?></p>
						<div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid <?php echo $divider; ?>;">
							<div style="font-size: 14px; font-weight: 500;"><?php echo esc_html( $r['name'] ); ?></div>
							<div class="mono-label" style="margin-top: 4px; opacity: 0.6;">Voyageur·euse vérifié·e</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>

<!-- Lightbox de la mosaïque (piloté par main.js) -->
<div class="lightbox" id="lightbox">
	<button type="button" class="lb-close" aria-label="Fermer">✕</button>
	<button type="button" class="lb-nav lb-prev" aria-label="Précédent">←</button>
	<button type="button" class="lb-nav lb-next" aria-label="Suivant">→</button>
	<div class="lb-stage" onclick="event.stopPropagation()" style="text-align: center;">
		<img class="lb-img" src="" alt="" />
		<div style="margin-top: 20px;">
			<div class="serif lb-caption" style="font-size: 22px; font-style: italic; margin-bottom: 6px;"></div>
			<div class="mono-label lb-counter" style="color: rgba(244,239,230,0.4);"></div>
		</div>
	</div>
</div>
