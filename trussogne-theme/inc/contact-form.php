<?php
/**
 * Traitement du formulaire de contact (sans plugin).
 *
 * Le formulaire de page-contact.php POST vers admin-post.php avec un nonce.
 * On valide, on assainit, on envoie via wp_mail() à TRUSSOGNE_EMAIL, puis on
 * redirige vers la page contact avec ?sent=1 (succès) ou ?sent=0 (erreur),
 * ce que le template traduit en état de confirmation / message d'erreur.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Libellés lisibles pour le champ « Sujet ».
 *
 * @return array
 */
function trussogne_contact_subjects() {
	return array(
		'info'          => 'Information générale',
		'disponibilite' => 'Disponibilités & tarifs',
		'reiki'         => 'Séance de Reiki',
		'traiteur'      => 'Service traiteur',
		'autre'         => 'Autre',
	);
}

/**
 * Handler du POST formulaire de contact.
 */
function trussogne_handle_contact_form() {
	$referer  = wp_get_referer();
	$fallback = home_url( '/contact' );
	$back     = $referer ? $referer : $fallback;

	// Vérification du nonce.
	if ( ! isset( $_POST['trussogne_contact_nonce'] ) || ! wp_verify_nonce( wp_unslash( $_POST['trussogne_contact_nonce'] ), 'trussogne_contact' ) ) {
		wp_safe_redirect( add_query_arg( 'sent', '0', $back ) );
		exit;
	}

	// Honeypot anti-spam : champ caché qui doit rester vide.
	if ( ! empty( $_POST['website'] ) ) {
		// On simule un succès pour ne pas renseigner les bots.
		wp_safe_redirect( add_query_arg( 'sent', '1', $back ) );
		exit;
	}

	// Consentement RGPD requis.
	if ( empty( $_POST['rgpd'] ) ) {
		wp_safe_redirect( add_query_arg( 'sent', '0', $back ) );
		exit;
	}

	$first   = isset( $_POST['first_name'] ) ? sanitize_text_field( wp_unslash( $_POST['first_name'] ) ) : '';
	$last    = isset( $_POST['last_name'] ) ? sanitize_text_field( wp_unslash( $_POST['last_name'] ) ) : '';
	$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$phone   = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$subject = isset( $_POST['subject'] ) ? sanitize_key( wp_unslash( $_POST['subject'] ) ) : 'info';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

	// Champs minimaux requis.
	if ( '' === $message || ! is_email( $email ) ) {
		wp_safe_redirect( add_query_arg( 'sent', '0', $back ) );
		exit;
	}

	$subjects     = trussogne_contact_subjects();
	$subject_label = isset( $subjects[ $subject ] ) ? $subjects[ $subject ] : 'Information générale';

	$to      = TRUSSOGNE_EMAIL;
	$subj    = sprintf( '[Trussogne] %s — %s %s', $subject_label, $first, $last );
	$body    = implode(
		"\n",
		array(
			'Nouveau message depuis le formulaire de contact :',
			'',
			'Prénom   : ' . $first,
			'Nom      : ' . $last,
			'Email    : ' . $email,
			'Téléphone: ' . $phone,
			'Sujet    : ' . $subject_label,
			'',
			'Message :',
			$message,
		)
	);
	$headers = array();
	if ( is_email( $email ) ) {
		$headers[] = 'Reply-To: ' . $first . ' ' . $last . ' <' . $email . '>';
	}

	$ok = wp_mail( $to, $subj, $body, $headers );

	wp_safe_redirect( add_query_arg( 'sent', $ok ? '1' : '0', $back ) );
	exit;
}
add_action( 'admin_post_nopriv_trussogne_contact', 'trussogne_handle_contact_form' );
add_action( 'admin_post_trussogne_contact', 'trussogne_handle_contact_form' );
