<?php
/**
 * Template : À propos (porté de APropos.jsx).
 *
 * Page avec grand hero d'image sombre (gitecharme.webp) → trussogne_page_hero().
 * Le <Nav> ne reçoit PAS lightHero dans le JSX, donc on NE déclare PAS
 * trussogne_light_hero() : la nav s'inverse sur l'image sombre.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Piliers « Notre philosophie » (porté de APropos.jsx:61-86).
$ap_pillars = array(
	array(
		'num'   => '01',
		'title' => 'La reconnexion avec la nature',
		'desc'  => "Des espaces ouverts sur le paysage grâce à de grandes baies vitrées, une terrasse couverte offrant une vue imprenable sur les collines des Ardennes. Plongez en pleine nature depuis votre gîte, où chaque regard vers l'extérieur devient une invitation à la contemplation.",
		'img'   => 'a-propos/reconnexion.webp',
		'alt'   => 'La reconnexion avec la nature',
		'icon'  => 'a-propos/icons8-spa-flower-100.webp',
	),
	array(
		'num'   => '02',
		'title' => 'Les moments de partage',
		'desc'  => "Une architecture fluide et conviviale permettant à tous de se retrouver, que ce soit en famille ou entre amis. Partagez un repas préparé dans notre cuisine équipée d'une prestigieuse cuisinière La Cornue, au coin du feu dans notre salon chaleureux, ou lors d'une partie de kicker dans l'espace jeux.",
		'img'   => 'a-propos/partage.webp',
		'alt'   => 'Les moments de partage',
		'icon'  => 'a-propos/icons8-hug-100.webp',
	),
	array(
		'num'   => '03',
		'title' => 'Le bien-être et la quiétude',
		'desc'  => "Des chambres spacieuses avec salles de bain privatives, des espaces de détente soigneusement aménagés, et le calme omniprésent de notre environnement naturel. Après vos promenades, retrouvez la sérénité d'un lieu où confort et luxe discret s'allient pour votre bien-être.",
		'img'   => 'a-propos/bienetre.webp',
		'alt'   => 'Le bien-être et la quiétude',
		'icon'  => 'a-propos/icons8-spa-candle-100.webp',
	),
);

// Avis voyageurs (porté de APropos.jsx:136-145).
$ap_reviews = array(
	array( 'name' => 'Sophie du Fontbaré',     'locale' => 'FR', 'text' => 'Endroit paradisiaque. Maison ultra confortable. Calme, nature, balades. Cocon de rêve pour se ressourcer. Foncez.' ),
	array( 'name' => 'Monika Steinel',          'locale' => 'EN', 'text' => 'Wonderful location, the view must be one of the nicest in Belgium. The house is well-appointed and well-equipped. Recommend wholeheartedly.' ),
	array( 'name' => 'Julie Van Bockxelaere',   'locale' => 'NL', 'text' => 'Het vakantiehuis in Trussogne is absoluut een aanrader. De ligging is adembenemend en het huis zelf is ruim en comfortabel.' ),
	array( 'name' => 'Anne-Françoise Cecoster', 'locale' => 'FR', 'text' => "Top endroit ! La vue est époustouflante et le gîte ultra confort. Situé à 5 min du golf d'Ardennes." ),
	array( 'name' => 'Ernest Baele',            'locale' => 'FR', 'text' => "Reçus de manière très chaleureuse. La maison est de grande qualité avec une vue magnifique. Nous y retournerons avec plaisir." ),
	array( 'name' => 'Zoé Palacio',             'locale' => 'FR', 'text' => "En famille ou entre amis, il fait bon à Trussogne ! Raffinement et bon goût de la décoration." ),
	array( 'name' => 'Kelley Steeves',          'locale' => 'EN', 'text' => 'Trussogne is a piece of heaven. Beautiful property, incredible view. We will be back.' ),
	array( 'name' => 'Geert Coppens',           'locale' => 'NL', 'text' => 'Fantastic location. Tastefully decorated with all modern amenities. Lovely fireplace and beautiful outdoor facilities.' ),
);

get_header();
?>

<main>

	<section id="top" style="background: var(--paper);">
		<?php
		trussogne_page_hero(
			array(
				'image'          => 'a-propos/gitecharme.webp',
				'alt'            => 'Charme du gîte de Trussogne',
				'title'          => 'À propos de Trussogne',
				'subtitle'       => "Le fruit d'un rêve, devenu havre de paix",
				'image_position' => 'center bottom',
			)
		);
		?>
		<div class="ap-intro" style="padding: 56px 48px 8px;">
			<div style="max-width: 1280px; margin: 0 auto;">
				<div class="ap-intro-text" style="display: flex; flex-direction: column; gap: 20px; max-width: 720px;">
					<p class="ap-intro-p" style="font-size: 19px; line-height: 1.6; color: var(--ink-soft);">
						Trussogne est né d'une passion pour l'authenticité et d'un profond respect pour la nature des Ardennes. Notre bâtisse, bien que neuve, incarne le caractère d'antan tout en offrant le confort moderne que nos hôtes méritent.
					</p>
					<p class="ap-intro-p" style="font-size: 19px; line-height: 1.6; color: var(--ink-soft);">
						Située dans un écrin de verdure à Houyet, ce gîte est le fruit d'un rêve : un havre de paix où le temps s'arrête. En famille ou entre amis, reconnectez-vous à l'essentiel dans le calme d'un jardin avec vue sur la beauté naturelle qui nous entoure.
					</p>
				</div>

				<div class="ap-intro-cta" style="margin-top: 32px; display: flex; gap: 14px; align-items: center; flex-wrap: wrap;">
					<a href="#philosophie" class="btn-primary">Notre philosophie</a>
					<a href="<?php echo esc_url( home_url( '/le-gite' ) ); ?>" class="btn-ghost">Découvrir le gîte</a>
				</div>
			</div>
		</div>
	</section>

	<section id="philosophie" class="ap-section ap-pillars" style="padding: 80px 48px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="ap-pillars-head" style="text-align: center; margin-bottom: 48px;">
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; max-width: 800px; margin: 0 auto;">
					Notre <span style="color: var(--green);">philosophie</span>
				</h2>
			</div>
			<div class="ap-pillars-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">
				<?php foreach ( $ap_pillars as $p ) : ?>
					<div>
						<div style="aspect-ratio: 4/3; border-radius: 4px; overflow: hidden; margin-bottom: 24px;">
							<img src="<?php trussogne_asset_url( $p['img'] ); ?>" alt="<?php echo esc_attr( $p['alt'] ); ?>" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
						</div>
						<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
							<div style="width: 56px; height: 56px; border-radius: 50%; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
								<img src="<?php trussogne_asset_url( $p['icon'] ); ?>" alt="" style="width: 32px; height: 32px;" />
							</div>
							<div class="sec-num">· <?php echo esc_html( $p['num'] ); ?> ·</div>
						</div>
						<h3 class="serif" style="font-size: 22px; line-height: 1.2; font-weight: 400; margin-bottom: 14px;"><?php echo esc_html( $p['title'] ); ?></h3>
						<p style="font-size: 15px; line-height: 1.7; color: var(--ink-soft);"><?php echo esc_html( $p['desc'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="ap-section" style="padding: 80px 48px; background: var(--cream);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px;">· 02 — NOTRE ENGAGEMENT ·</div>
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 48px;">
				Chaque détail pensé <span style="color: var(--green);">pour vous</span>
			</h2>
			<div style="display: flex; flex-direction: column; gap: 28px; max-width: 820px;">
				<p style="font-size: 17px; line-height: 1.75; color: var(--ink-soft);">En choisissant Trussogne pour votre séjour dans les Ardennes, vous optez pour une expérience authentique où chaque détail a été pensé pour vous offrir un moment privilégié. Notre engagement est simple : vous permettre de vivre pleinement chaque instant, loin du stress quotidien, dans un cadre de calme et de nature propice aux retrouvailles.</p>
				<p style="font-size: 17px; line-height: 1.75; color: var(--ink-soft);">Que vous veniez en famille ou entre amis, pour un week-end de VTT ou un séjour plus long près de Dinant, notre plus grande satisfaction est de vous offrir des souvenirs précieux et l'envie de revenir découvrir notre gîte au travers des saisons.</p>
				<p style="font-size: 17px; line-height: 1.75; color: var(--ink-soft);">Habitant à proximité immédiate du gîte, nous restons disponibles et réactifs tout au long de votre séjour. La moindre question, le moindre besoin trouve une réponse rapide — pour que vous profitiez pleinement de chaque instant, l'esprit tranquille.</p>
			</div>
		</div>
	</section>

	<section class="ap-reviews" style="padding: 80px 48px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto; padding: 0;">
			<div class="ap-reviews-head" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; gap: 48px; flex-wrap: wrap;">
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
			<div class="review-track" data-review-track style="display: flex; gap: 24px; overflow-x: auto; padding: 0;">
				<?php
				foreach ( $ap_reviews as $i => $r ) :
					$is_green = ( 0 === $i % 3 );
					$bg       = $is_green ? 'var(--green)' : 'var(--paper)';
					$color    = $is_green ? 'var(--paper)' : 'var(--ink)';
					$border   = $is_green ? 'none' : '1px solid var(--line)';
					$top_line = $is_green ? 'rgba(244,239,230,0.2)' : 'var(--line)';
					?>
					<article class="review-card ap-review-card" style="flex: 0 0 460px; background: <?php echo esc_attr( $bg ); ?>; color: <?php echo esc_attr( $color ); ?>; border: <?php echo esc_attr( $border ); ?>; padding: 40px 36px; display: flex; flex-direction: column; min-height: 340px; border-radius: 4px;">
						<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">
							<span class="serif" style="font-size: 56px; line-height: 0.6; font-style: italic; opacity: 0.5;">"</span>
							<span class="mono-label" style="opacity: 0.65;"><?php echo esc_html( $r['locale'] ); ?></span>
						</div>
						<p class="serif" style="font-size: 22px; line-height: 1.4; font-weight: 400; flex: 1; font-style: italic;"><?php echo esc_html( $r['text'] ); ?></p>
						<div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid <?php echo esc_attr( $top_line ); ?>;">
							<div style="font-size: 14px; font-weight: 500;"><?php echo esc_html( $r['name'] ); ?></div>
							<div class="mono-label" style="margin-top: 4px; opacity: 0.6;">Voyageur·euse vérifié·e</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="ap-section" style="padding: 80px 48px; background: var(--paper); text-align: center;">
		<div style="max-width: 700px; margin: 0 auto;">
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 28px;">
				Réserver maintenant.
			</h2>
			<div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
				<a href="<?php echo esc_url( TRUSSOGNE_ELLOHA_URL ); ?>" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 15px; padding: 16px 28px;">Réserver en direct</a>
				<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-ghost" style="font-size: 15px; padding: 16px 24px;">Nous contacter</a>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
