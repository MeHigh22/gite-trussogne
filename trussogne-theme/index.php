<?php
/**
 * Template de repli (requis par WordPress).
 *
 * Les pages réelles utilisent front-page.php et les modèles page-{slug}.php.
 * Ce fichier ne sert que pour les contextes non couverts (404, archives…).
 *
 * @package Trussogne
 */

get_header();
?>

<main class="site-main" style="max-width: 1280px; margin: 0 auto; padding: 160px 48px 96px;">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<article <?php post_class(); ?>>
				<h1 class="serif" style="font-size: clamp(32px, 5vw, 56px); margin-bottom: 24px;"><?php the_title(); ?></h1>
				<div class="entry-content" style="font-size: 17px; line-height: 1.7; color: var(--ink-soft);">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile; ?>
	<?php else : ?>
		<h1 class="serif" style="font-size: clamp(32px, 5vw, 56px); margin-bottom: 16px;">Page introuvable</h1>
		<p style="font-size: 17px; color: var(--ink-soft);">Le contenu demandé n'existe pas ou plus.</p>
		<p style="margin-top: 24px;"><a class="btn-ghost" href="<?php echo esc_url( home_url( '/' ) ); ?>">Retour à l'accueil</a></p>
	<?php endif; ?>
</main>

<?php
get_footer();
