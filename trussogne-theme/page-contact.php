<?php
/**
 * Template : Contact (porté de Contact.jsx).
 *
 * Page « light hero » → logo vert.
 * Le formulaire POST vers admin-post.php (action=trussogne_contact), traité
 * dans inc/contact-form.php, qui redirige avec ?sent=1|0.
 * L'accordéon FAQ est piloté par assets/js/main.js.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// État de soumission via le paramètre ?sent (1 = succès, 0 = erreur).
$ct_sent  = isset( $_GET['sent'] ) ? sanitize_key( wp_unslash( $_GET['sent'] ) ) : '';
$ct_ok    = ( '1' === $ct_sent );
$ct_error = ( '0' === $ct_sent );

// Cartes d'info (porté de Contact.jsx:19-24).
$ct_cards = array(
	array(
		'icon'  => 'phone',
		'label' => 'Téléphone',
		'value' => '+32 476 222 707',
		'sub'   => 'Du lundi au samedi, 9h–19h',
		'href'  => 'tel:+32476222707',
	),
	array(
		'icon'  => 'mail',
		'label' => 'Email',
		'value' => 'trussogne@gmail.com',
		'sub'   => 'Réponse sous 24 heures',
		'href'  => 'mailto:trussogne@gmail.com',
	),
	array(
		'icon'  => 'pin',
		'label' => 'Adresse',
		'value' => 'Grande Trussogne, 9C',
		'sub'   => '5561 Houyet, Belgique',
		'href'  => 'https://www.google.com/maps/place/?q=place_id:ChIJ52xMq2PHwUcRXcEK6ROKYFs',
	),
	array(
		'icon'  => 'insta',
		'label' => 'Réseaux',
		'value' => 'Instagram',
		'sub'   => '@trussogne',
		'href'  => 'https://www.instagram.com/trussogne/',
	),
);

// SVG par clé (porté des icônes inline de Contact.jsx).
function trussogne_contact_icon( $key ) {
	$icons = array(
		'phone' => '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
		'mail'  => '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
		'pin'   => '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
		'insta' => '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
	);
	$path = isset( $icons[ $key ] ) ? $icons[ $key ] : '';
	return '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.4">' . $path . '</svg>';
}

// Itinéraires (porté de Contact.jsx:116-123).
$ct_routes = array(
	array( 'from' => 'Bruxelles',     'time' => '± 1h25',  'road' => 'E411 direction Namur → sortie Custinne → Houyet',      'dist' => '103 km' ),
	array( 'from' => 'Namur',         'time' => '± 35 min', 'road' => 'E411 direction Luxembourg → sortie Custinne → Houyet', 'dist' => '39 km' ),
	array( 'from' => 'Liège',         'time' => '± 1h',     'road' => 'E25 → E42 → E411 → sortie Custinne → Houyet',          'dist' => '95 km' ),
	array( 'from' => 'Gand',          'time' => '± 2h15',   'road' => 'E40 → R0 → E411 direction Namur → Houyet',             'dist' => '159 km' ),
	array( 'from' => 'Saint-Nicolas', 'time' => '± 2h05',   'road' => 'E17 → E19 → E411 direction Namur → Houyet',            'dist' => '159 km' ),
	array( 'from' => 'Rotterdam',     'time' => '± 3h',     'road' => 'A16/E19 → Anvers → E411 direction Namur → Houyet',     'dist' => '234 km' ),
);

// FAQ (porté de Contact.jsx:156-163).
$ct_faqs = array(
	array( 'q' => 'Quel est le tarif pour une nuit ?', 'a' => "Les tarifs varient selon la saison et le nombre de voyageurs. Contactez-nous directement pour une proposition personnalisée — c'est toujours moins cher en direct." ),
	array( 'q' => 'Les draps et serviettes sont-ils fournis ?', 'a' => "Oui, tout le linge est inclus : draps de lit, draps de bain et linge de maison. Vous n'avez rien à apporter." ),
	array( 'q' => 'Acceptez-vous les animaux ?', 'a' => "Les animaux de compagnie sont acceptés sous conditions. Contactez-nous pour en discuter avant votre réservation." ),
	array( 'q' => "Quelles sont les heures d'arrivée et de départ ?", 'a' => "Arrivée à partir de 16h, départ avant 10h. Des arrangements sont possibles selon la disponibilité." ),
	array( 'q' => 'Y a-t-il un minimum de nuits ?', 'a' => "Un minimum de 2 nuits est généralement demandé, 3 nuits en haute saison." ),
	array( 'q' => 'Les charges sont-elles comprises ?', 'a' => "Oui, tout est inclus : électricité, eau, chauffage, bois pour le feu et nettoyage final. Aucun supplément caché." ),
);

trussogne_light_hero();
get_header();
?>

<main>

	<section class="ct-hero" style="padding: 180px 48px 80px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<h1 class="serif" style="font-size: clamp(48px, 6vw, 86px); line-height: 0.95; font-weight: 400;">
				Parlons de votre <span style="color: var(--green);">séjour</span>
			</h1>
		</div>
	</section>

	<section class="ct-section" style="padding: 0 48px 60px; background: var(--paper);">
		<div class="ct-cards-grid" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--line);">
			<?php
			foreach ( $ct_cards as $i => $c ) :
				$is_http = ( 0 === strpos( $c['href'], 'http' ) );
				$border  = $i < 3 ? 'border-right: 1px solid var(--line);' : '';
				?>
				<a href="<?php echo esc_url( $c['href'] ); ?>"<?php echo $is_http ? ' target="_blank" rel="noopener"' : ''; ?>
					style="<?php echo $border; ?> display: flex; flex-direction: column; gap: 16px; padding: 40px 36px; text-decoration: none; color: inherit; transition: background 0.3s ease;">
					<div style="width: 56px; height: 56px; border-radius: 50%; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center;">
						<?php echo trussogne_contact_icon( $c['icon'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped — SVG statique. ?>
					</div>
					<div class="mono-label" style="color: var(--ink-soft);"><?php echo esc_html( $c['label'] ); ?></div>
					<div class="serif" style="font-size: 24px; line-height: 1.2; font-weight: 500;"><?php echo esc_html( $c['value'] ); ?></div>
					<div style="font-size: 14px; color: var(--ink-soft);"><?php echo esc_html( $c['sub'] ); ?></div>
				</a>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="ct-section" style="padding: 0 48px 80px; background: var(--paper);">
		<div class="ct-form-grid" style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
			<div class="ct-form-panel" style="background: var(--cream); padding: 56px; border-right: 1px solid var(--line);">
				<?php if ( $ct_ok ) : ?>
					<div style="text-align: center; padding: 80px 0;">
						<div style="width: 72px; height: 72px; border-radius: 50%; background: var(--green); color: var(--paper); display: inline-flex; align-items: center; justify-content: center; font-size: 32px; margin-bottom: 24px;">✓</div>
						<h3 class="serif" style="font-size: 40px; margin-bottom: 16px; font-weight: 400;">Message envoyé</h3>
						<p style="font-size: 16px; color: var(--ink-soft); max-width: 360px; margin: 0 auto; line-height: 1.6;">Sandra revient vers vous dans les 24 heures.</p>
						<div style="display: flex; gap: 12px; justify-content: center; margin-top: 36px; flex-wrap: wrap;">
							<a href="<?php echo esc_url( home_url( '/le-gite' ) ); ?>" class="btn-ghost">Le gîte</a>
							<a href="<?php echo esc_url( home_url( '/galerie' ) ); ?>" class="btn-ghost">Galerie</a>
							<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn-ghost">Nouveau message</a>
						</div>
					</div>
				<?php else : ?>
					<div class="sec-num" style="margin-bottom: 16px;">· FORMULAIRE ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 40px;">Écrivez-nous</h2>

					<?php if ( $ct_error ) : ?>
						<p style="background: rgba(168,50,40,0.08); border: 1px solid rgba(168,50,40,0.3); color: #a83228; padding: 14px 18px; border-radius: 8px; font-size: 14px; margin-bottom: 24px;">
							Une erreur est survenue (ou le consentement RGPD est manquant). Merci de réessayer.
						</p>
					<?php endif; ?>

					<form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
						<input type="hidden" name="action" value="trussogne_contact" />
						<?php wp_nonce_field( 'trussogne_contact', 'trussogne_contact_nonce' ); ?>
						<!-- Honeypot anti-spam : doit rester vide. -->
						<input type="text" name="website" tabindex="-1" autocomplete="off" style="position: absolute; left: -9999px;" aria-hidden="true" />

						<div class="ct-name-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
							<div class="field"><label for="first_name">Prénom</label><input id="first_name" name="first_name" type="text" placeholder="Votre prénom" /></div>
							<div class="field"><label for="last_name">Nom</label><input id="last_name" name="last_name" type="text" placeholder="Votre nom" /></div>
						</div>
						<div class="field" style="margin-bottom: 24px;"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="vous@email.com" required /></div>
						<div class="field" style="margin-bottom: 24px;"><label for="phone">Téléphone</label><input id="phone" name="phone" type="tel" placeholder="+32 ..." /></div>
						<div class="field" style="margin-bottom: 24px;">
							<label for="subject">Sujet</label>
							<select id="subject" name="subject">
								<?php foreach ( trussogne_contact_subjects() as $val => $label ) : ?>
									<option value="<?php echo esc_attr( $val ); ?>"><?php echo esc_html( $label ); ?></option>
								<?php endforeach; ?>
							</select>
						</div>
						<div class="field" style="margin-bottom: 24px;"><label for="message">Message</label><textarea id="message" name="message" rows="5" placeholder="Comment pouvons-nous vous aider ?" required></textarea></div>
						<div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 36px;">
							<input type="checkbox" id="rgpd" name="rgpd" value="1" required style="margin-top: 3px; accent-color: var(--green); flex-shrink: 0;" />
							<label for="rgpd" style="font-size: 13px; color: var(--ink-soft); line-height: 1.5; cursor: pointer;">
								J'accepte que le gîte Trussogne collecte et traite mes données conformément à sa <a href="<?php echo esc_url( home_url( '/conditions-generales' ) ); ?>" style="color: var(--green); text-decoration: underline;">charte RGPD</a>.
							</label>
						</div>
						<button type="submit" class="btn-primary" style="width: 100%; justify-content: center;">Envoyer le message</button>
					</form>
				<?php endif; ?>
			</div>

			<div style="display: flex; flex-direction: column;">
				<div style="flex: 1; min-height: 400px;">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d5.0889!3d50.2064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1c763ab4ccae7%3A0x5b638a13e90ac15d!2sGite%20de%20Trussogne%20-%20Vakantiehuis%2C%20Ardennes!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
						width="100%" height="100%" style="border: none; display: block; min-height: 400px;"
						loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localisation Trussogne"></iframe>
				</div>
				<div style="padding: 28px 32px; background: var(--green-deep); color: var(--paper); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
					<div>
						<div class="mono-label" style="color: rgba(244,239,230,0.5); margin-bottom: 6px;">Adresse</div>
						<div style="font-size: 15px;">Grande Trussogne, 9C · 5561 Houyet, Belgique</div>
					</div>
					<div class="mono-label" style="color: rgba(244,239,230,0.4);">50.183°N · 5.000°E</div>
				</div>
			</div>
		</div>
	</section>

	<section class="ct-section" style="padding: 60px 48px 80px; background: var(--cream);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div class="ct-directions-grid" style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 96px;">
				<div>
					<div class="sec-num" style="margin-bottom: 20px;">· COMMENT VENIR ·</div>
					<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400; margin-bottom: 24px;">
						Nous <span style="color: var(--green);">trouver</span>
					</h2>
					<p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft); margin-bottom: 36px;">
						Trussogne se situe à Houyet, au cœur des Ardennes belges.
					</p>
				</div>
				<div>
					<?php
					$last_route = count( $ct_routes ) - 1;
					foreach ( $ct_routes as $i => $r ) :
						$rb = $i < $last_route ? 'border-bottom: 1px solid var(--line);' : '';
						?>
						<div class="ct-route-row" style="display: grid; grid-template-columns: 160px 1fr 80px; gap: 24px; align-items: center; padding: 28px 0; <?php echo $rb; ?>">
							<div class="serif" style="font-size: 22px; line-height: 1.1; font-weight: 400;"><?php echo esc_html( $r['from'] ); ?></div>
							<div>
								<div style="font-size: 14px; color: var(--ink-soft); margin-bottom: 4px;"><?php echo esc_html( $r['road'] ); ?></div>
								<div class="mono-label" style="color: var(--green);"><?php echo esc_html( $r['time'] ); ?></div>
							</div>
							<div class="mono-label" style="color: var(--ink-soft); text-align: right;"><?php echo esc_html( $r['dist'] ); ?></div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</section>

	<section class="ct-section" style="padding: 80px 48px; background: var(--paper);">
		<div style="max-width: 1280px; margin: 0 auto;">
			<div style="text-align: center; margin-bottom: 72px;">
				<div class="sec-num" style="margin-bottom: 20px;">· FAQ ·</div>
				<h2 class="serif" style="font-size: clamp(28px, 4vw, 52px); line-height: 1.05; font-weight: 400;">
					Questions fréquentes
				</h2>
			</div>
			<?php foreach ( $ct_faqs as $i => $faq ) : ?>
				<div class="faq-item" style="border-bottom: 1px solid var(--line);">
					<button type="button" class="faq-toggle" aria-expanded="false" style="width: 100%; text-align: left; padding: 28px 0; display: flex; justify-content: space-between; align-items: center; gap: 24px;">
						<span style="font-size: 17px; font-weight: 500; line-height: 1.4;"><?php echo esc_html( $faq['q'] ); ?></span>
						<span class="faq-plus" style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; transition: all 0.3s ease;">+</span>
					</button>
					<div class="faq-answer" style="max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease;">
						<p style="font-size: 15px; line-height: 1.6; color: var(--ink-soft); max-width: 700px; padding-bottom: 28px;"><?php echo esc_html( $faq['a'] ); ?></p>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</section>

</main>

<?php get_footer(); ?>
