<?php
/**
 * Template : Galerie (porté de Galerie.jsx).
 *
 * Page « light hero » (pas d'image sombre en haut) → logo vert.
 * Filtres + lightbox pilotés par assets/js/main.js.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Données portées de Galerie.jsx:7-43.
$photos = array(
	// Extérieur & Gîte.
	array( 'src' => 'photo1.webp',                                'cat' => 'exterieur', 'caption' => 'Le gîte de Trussogne' ),
	array( 'src' => 'le-gite/le-gite.webp',                       'cat' => 'exterieur', 'caption' => 'Façade du gîte' ),
	array( 'src' => 'le-gite/le-gite-2.webp',                     'cat' => 'exterieur', 'caption' => "Le gîte — vue d'ensemble" ),
	array( 'src' => 'le-gite/le-gite-3.webp',                     'cat' => 'exterieur', 'caption' => 'Le gîte — détail extérieur' ),
	array( 'src' => 'Chambre-Chapelle-scaled.webp',              'cat' => 'exterieur', 'caption' => 'Vue sur la chapelle' ),
	// Nature & Saisons.
	array( 'src' => 'quatreSaisons/brume.webp',                  'cat' => 'nature',    'caption' => 'Brume matinale sur la vallée' ),
	array( 'src' => 'quatreSaisons/ete.webp',                    'cat' => 'nature',    'caption' => 'Été à Trussogne' ),
	array( 'src' => 'quatreSaisons/hiver1.webp',                 'cat' => 'nature',    'caption' => 'Hiver en Ardennes' ),
	array( 'src' => 'quatreSaisons/printemps.webp',              'cat' => 'nature',    'caption' => 'Printemps en fleurs' ),
	array( 'src' => 'Marcassins-Trussogne.webp',                 'cat' => 'nature',    'caption' => 'Marcassins à Trussogne' ),
	array( 'src' => 'Photo-Lievres-amoureux-Tru.webp',           'cat' => 'nature',    'caption' => 'Lièvres amoureux' ),
	array( 'src' => 'ane-trussogne.webp',                        'cat' => 'nature',    'caption' => "L'âne de Trussogne" ),
	// Chambres.
	array( 'src' => 'quatreChambres/Chambre-Chapelle-scaled.webp', 'cat' => 'interieur', 'caption' => 'Chambre Chapelle' ),
	array( 'src' => 'quatreChambres/chapelle1.webp',             'cat' => 'interieur', 'caption' => 'Chambre Chapelle — détail' ),
	array( 'src' => 'quatreChambres/chapelle3.webp',             'cat' => 'interieur', 'caption' => 'Chambre Chapelle — ambiance' ),
	array( 'src' => 'quatreChambres/ChambreAne.webp',            'cat' => 'interieur', 'caption' => "Chambre de l'Âne" ),
	array( 'src' => 'quatreChambres/ane1.webp',                  'cat' => 'interieur', 'caption' => "Chambre de l'Âne — vue" ),
	array( 'src' => 'quatreChambres/ane2.webp',                  'cat' => 'interieur', 'caption' => "Chambre de l'Âne — détail" ),
	array( 'src' => 'quatreChambres/ChambreDiane.webp',          'cat' => 'interieur', 'caption' => 'Chambre Diane' ),
	array( 'src' => 'quatreChambres/diane2.webp',                'cat' => 'interieur', 'caption' => 'Chambre Diane — ambiance' ),
	array( 'src' => 'quatreChambres/diane3.webp',                'cat' => 'interieur', 'caption' => 'Chambre Diane — détail' ),
	array( 'src' => 'quatreChambres/ChambreVerte.webp',          'cat' => 'interieur', 'caption' => 'Chambre Verte' ),
	array( 'src' => 'quatreChambres/verte1.webp',                'cat' => 'interieur', 'caption' => 'Chambre Verte — vue' ),
	array( 'src' => 'quatreChambres/verte2.webp',                'cat' => 'interieur', 'caption' => 'Chambre Verte — détail' ),
);

// Libellés de catégorie pour l'overlay (porté du ternaire Galerie.jsx:134).
$cat_labels = array(
	'exterieur' => 'Extérieur',
	'interieur' => 'Intérieur',
	'nature'    => 'Nature',
	'details'   => 'Détails',
);

$filters = array(
	array( 'id' => 'all',       'label' => 'Toutes les photos' ),
	array( 'id' => 'exterieur', 'label' => 'Extérieur' ),
	array( 'id' => 'interieur', 'label' => 'Intérieur' ),
	array( 'id' => 'nature',    'label' => 'Nature' ),
	array( 'id' => 'details',   'label' => 'Détails & Ambiance' ),
);

trussogne_light_hero();
get_header();
?>

<main class="galerie-page">

	<section class="gal-hero" style="padding: 120px 48px 60px; text-align: center;">
		<div style="max-width: 800px; margin: 0 auto;">
			<h1 class="serif" style="font-size: clamp(48px, 6vw, 86px); line-height: 0.95; font-weight: 400; margin-bottom: 24px;">
				<span style="color: var(--green);">Galerie</span> photos
			</h1>
			<p style="font-size: 17px; line-height: 1.6; color: var(--ink-soft); max-width: 480px; margin: 0 auto;">
				Découvrez Trussogne en images — les espaces, la nature, les détails qui font le charme de ce lieu d'exception.
			</p>
		</div>
	</section>

	<div class="gal-filters" style="display: flex; gap: 10px; justify-content: center; padding: 0 48px 56px; flex-wrap: wrap;">
		<?php foreach ( $filters as $i => $f ) : ?>
			<button type="button" class="gal-filter<?php echo 0 === $i ? ' active' : ''; ?>" data-filter="<?php echo esc_attr( $f['id'] ); ?>">
				<?php echo esc_html( $f['label'] ); ?>
			</button>
		<?php endforeach; ?>
		<span class="mono-label" data-gallery-count style="align-self: center; margin-left: 16px; color: var(--ink-soft); opacity: 0.5;">
			<?php echo count( $photos ); ?> photos
		</span>
	</div>

	<div class="gallery-grid" style="padding-bottom: 120px;">
		<?php
		foreach ( $photos as $photo ) :
			$url      = trussogne_asset( $photo['src'] );
			$cat      = $photo['cat'];
			$cat_text = isset( $cat_labels[ $cat ] ) ? $cat_labels[ $cat ] : 'Détails';
			?>
			<div class="gallery-item"
				data-cat="<?php echo esc_attr( $cat ); ?>"
				data-full="<?php echo esc_url( $url ); ?>"
				data-caption="<?php echo esc_attr( $photo['caption'] ); ?>">
				<img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( $photo['caption'] ); ?>" loading="lazy" />
				<div class="overlay">
					<div class="serif" style="font-size: 20px; font-style: italic; margin-bottom: 4px;"><?php echo esc_html( $photo['caption'] ); ?></div>
					<div class="mono-label" style="font-size: 9px; color: rgba(244,239,230,0.6);"><?php echo esc_html( $cat_text ); ?></div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>

	<section class="gal-cta" style="padding: 60px 48px; text-align: center; border-top: 1px solid var(--line);">
		<div style="max-width: 700px; margin: 0 auto;">
			<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 32px;">
				Réservez votre parenthèse
			</h2>
			<div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
				<a href="<?php echo esc_url( TRUSSOGNE_ELLOHA_URL ); ?>" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 15px; padding: 16px 28px;">Réserver en direct</a>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn-ghost" style="font-size: 15px; padding: 16px 24px;">Retour à l'accueil</a>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>

<!-- Lightbox (piloté par main.js) -->
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
