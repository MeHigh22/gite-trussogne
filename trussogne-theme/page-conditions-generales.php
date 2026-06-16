<?php
/**
 * Template : Conditions générales (porté de ConditionsGenerales.jsx).
 *
 * Page « light hero » → logo vert.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Articles du contrat (porté de ConditionsGenerales.jsx:23-86).
// Les doubles sauts de ligne séparent les paragraphes ; les simples sont préservés.
$cg_articles = array(
	array(
		'title'   => 'Article 1 — Modalités de conclusion du contrat',
		'content' => "Le contrat est un contrat de location touristique. La brève durée du contrat constitue une condition essentielle sans laquelle le contrat n'aurait pas été conclu. Le preneur ne peut établir sa résidence principale dans l'immeuble loué. L'âge minimum requis du preneur est de 32 ans, sauf autorisation dérogatoire préalable expressément demandée au propriétaire.\n\nLe bailleur adresse au locataire le présent contrat, en deux exemplaires dûment complétés et signés. Le locataire renvoie au bailleur, dans un délai maximum de 5 jours suivant la date de réception du contrat, un exemplaire complété et signé par lui. Le locataire paie l'acompte dans le même délai. Le solde est exigible 30 jours avant l'entrée en jouissance, à l'exception toutefois des réservations tardives, auquel cas le montant total de la location sera payé à l'arrivée.\n\nAu-delà du 5e jour, l'hébergement sera à nouveau proposé pour une autre location.\n\nSi le bailleur ne reçoit pas l'exemplaire du contrat lui revenant, ou l'acompte, dans le délai imparti, il peut renoncer à la location par lettre recommandée, fax ou courrier électronique confirmé par poste endéans les 8 jours qui suivent la date prévue pour le paiement de l'acompte ou du renvoi effectif du contrat signé par le locataire.",
	),
	array(
		'title'   => 'Article 2 — Usage des biens loués',
		'content' => "Le locataire use du bien loué conformément à sa destination et en bon père de famille. Il est tenu de respecter la capacité maximum prévue. Toute infraction à cette clause peut entraîner la résiliation immédiate du présent contrat, aux torts du locataire, le montant de la location restant définitivement acquis au bailleur.",
	),
	array(
		'title'   => 'Article 3 — Assurances',
		'content' => "Assurance Incendie — Le locataire doit être couvert en RC locative pour les dégâts qu'il pourrait occasionner à l'immeuble et aux meubles loués et déclare être couvert pour de tels risques par son assurance incendie personnelle (assurance villégiature). À défaut, le locataire s'engage à souscrire un contrat.\n\nAssurance Responsabilité Civile Familiale (vie privée) — Le locataire est couvert par une assurance Responsabilité Civile Familiale (vie privée).\n\nLe propriétaire décline toute responsabilité pour les dégâts, pertes ou vols de biens personnels apportés par le locataire ou les personnes qui l'accompagnent.",
	),
	array(
		'title'   => 'Article 4 — Annulation par le locataire',
		'content' => "Toute annulation doit être notifiée par lettre recommandée, fax ou courrier électronique confirmé par poste.\n\nLes frais suivants sont portés en compte :\n• De la date de réservation à 30 jours avant le début du séjour : aucun frais d'annulation.\n• De 29 à 15 jours avant la date du séjour : 30 % du montant de la location.\n• Dans les 14 derniers jours : 100 % du montant de la location.\n• En cas de force majeure pour l'une ou l'autre partie, le contrat sera suspendu et reporté à une date ultérieure à convenir. Si aucun accord n'est trouvé dans les 18 mois, les montants versés seront intégralement remboursés.\n\nL'indisponibilité d'un des locataires pour cause de maladie n'est pas un cas de force majeure ; nous recommandons de souscrire à une assurance annulation.\n\nLe locataire peut proposer au bailleur la cession de son bail, sous son entière responsabilité, à une personne désignée qui accepte de contracter aux mêmes conditions.\n\nLe départ prématuré du locataire, quelle qu'en soit la raison, n'entraîne aucun remboursement même partiel du prix du séjour.",
	),
	array(
		'title'   => 'Article 5 — Inventaire',
		'content' => "Il est procédé, au début et à la fin du séjour, à un inventaire de l'équipement du bien loué. Cet inventaire doit être signé par les deux parties. À défaut d'un inventaire signé, le locataire considérera que l'état du bien loué est sans anomalie.\n\nLe locataire doit restituer le bien dans l'état où il l'a reçu. Il répond de toute perte ou dégât. Toute différence avec l'inventaire ou anomalie doit être signalée au bailleur au plus tard à 10h00, le lendemain du jour de l'arrivée.",
	),
	array(
		'title'   => 'Article 6 — Réclamations',
		'content' => "Toute réclamation doit être envoyée au bailleur par lettre recommandée dans un délai de 8 jours après la fin du séjour. Les pièces justificatives doivent être jointes.",
	),
	array(
		'title'   => 'Article 7 — Solidarité',
		'content' => "Les obligations du présent bail sont indivisibles et solidaires à l'égard du locataire, de ses héritiers ou de ses ayants droits, à quelque titre que ce soit.",
	),
	array(
		'title'   => "Article 8 — Respect du voisinage et de l'environnement",
		'content' => "Le locataire s'engage à adopter un comportement respectueux des habitants et de l'environnement en général : faune, flore, équipements divers, etc. Le calme et la quiétude sont l'âme des lieux. Les locataires s'engagent à les respecter en s'interdisant toute diffusion de musique à l'extérieur ainsi que toute festivité bruyante.\n\nEn cas de non-respect de ces clauses, la propriétaire se réserve le droit d'exiger le départ immédiat des locataires fautifs, sans qu'aucune indemnisation ne puisse être réclamée.",
	),
	array(
		'title'   => 'Article 9 — Litiges',
		'content' => "À défaut d'accord entre parties, celles-ci soumettront leurs griefs au secrétariat des Gîtes de Wallonie qui tentera de proposer une solution amiable. À défaut d'y parvenir, seuls les tribunaux de l'arrondissement judiciaire du lieu où se trouve l'immeuble sont compétents.",
	),
);

// Politique de confidentialité (porté de ConditionsGenerales.jsx:88-123).
$privacy_sections = array(
	array(
		'title'   => 'Collecte des informations personnelles',
		'content' => "Nous collectons des informations personnelles identifiables, telles que les noms, adresses e-mail, numéros de téléphone, et autres données similaires, uniquement lorsque ces informations sont fournies volontairement par les utilisateurs via les formulaires de contact ou d'inscription sur notre site.",
	),
	array(
		'title'   => 'Utilisation des informations personnelles',
		'content' => "Les informations personnelles collectées sont utilisées pour répondre aux demandes des utilisateurs, gérer les réservations, fournir des informations sur nos services et événements, ainsi que pour communiquer des mises à jour pertinentes concernant le gîte Trussogne.",
	),
	array(
		'title'   => 'Protection des informations personnelles',
		'content' => "Nous mettons en place des mesures de sécurité appropriées pour protéger les informations personnelles contre tout accès non autorisé, altération, divulgation ou destruction.",
	),
	array(
		'title'   => 'Partage des informations personnelles',
		'content' => "Nous ne vendons, ne louons ni ne partageons les informations personnelles des utilisateurs avec des tiers, sauf dans les cas où cela est nécessaire pour répondre à une demande spécifique de l'utilisateur ou lorsque cela est exigé par la loi.",
	),
	array(
		'title'   => 'Cookies',
		'content' => "Notre site internet peut utiliser des cookies pour améliorer l'expérience de navigation des utilisateurs. Les cookies sont de petits fichiers texte placés sur l'ordinateur des utilisateurs pour collecter des informations standard de journal Internet et de comportement des visiteurs de manière anonyme. Les utilisateurs ont la possibilité de refuser l'utilisation de cookies en modifiant les paramètres de leur navigateur, mais cela peut limiter certaines fonctionnalités de notre site.",
	),
	array(
		'title'   => 'Consentement',
		'content' => "En utilisant notre site internet, vous consentez à notre politique de confidentialité et à nos pratiques en matière de collecte et d'utilisation des informations personnelles telles que décrites dans cette politique.\n\nEn cliquant sur la case « j'accepte les termes et conditions » de notre formulaire en ligne, vous reconnaissez accepter que vos données soient traitées de la manière décrite ci-dessus. Si vous ne l'acceptez pas, ne cochez pas la case et contactez-nous plutôt par téléphone ou par mail.",
	),
	array(
		'title'   => 'Mises à jour de la politique de confidentialité',
		'content' => "Cette politique de confidentialité peut être mise à jour périodiquement pour refléter les changements dans nos pratiques. Les utilisateurs seront informés de toute modification substantielle sur cette page.\n\nPour toute question concernant notre politique de confidentialité, veuillez nous contacter via l'onglet Contact ou par téléphone ou mail.\n\nDernière mise à jour : 20 avril 2025.",
	),
);

/**
 * Affiche un bloc article : titre + paragraphes (split sur double saut de ligne).
 *
 * @param array $item       Bloc { title, content }.
 * @param bool  $with_border Affiche la bordure du bas.
 * @param int   $pad        Padding vertical en px.
 */
function trussogne_cg_block( $item, $with_border, $pad ) {
	$border = $with_border ? 'border-bottom: 1px solid var(--line);' : '';
	echo '<div style="padding: ' . esc_attr( $pad ) . 'px 0; ' . $border . '">';
	echo '<h2 class="serif" style="font-size: 20px; font-weight: 400; margin-bottom: 16px; color: var(--green);">' . esc_html( $item['title'] ) . '</h2>';
	foreach ( explode( "\n\n", $item['content'] ) as $para ) {
		echo '<p style="font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 12px; white-space: pre-line;">' . esc_html( $para ) . '</p>';
	}
	echo '</div>';
}

trussogne_light_hero();
get_header();
?>

<main>

	<section class="cg-hero" style="padding: 140px 48px 60px; background: var(--paper);">
		<div style="max-width: 860px; margin: 0 auto;">
			<div class="mono-label" style="color: var(--ink-soft); margin-bottom: 20px;">· Informations légales ·</div>
			<h1 class="serif" style="font-size: clamp(48px, 6vw, 86px); line-height: 0.95; font-weight: 400; margin-bottom: 24px;">
				Conditions <span style="color: var(--green);">générales</span>
			</h1>
			<p style="font-size: 16px; line-height: 1.6; color: var(--ink-soft); max-width: 560px;">
				Contrat de location touristique — Gîte de Trussogne, Grande-Trussogne 9C, 5561 Houyet, Belgique.
			</p>
		</div>
	</section>

	<section class="cg-section" style="padding: 80px 48px; background: var(--cream);">
		<div style="max-width: 860px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px;">· 01 — CONDITIONS GÉNÉRALES DE LOCATION ·</div>
			<div style="display: flex; flex-direction: column; gap: 0;">
				<?php
				$last = count( $cg_articles ) - 1;
				foreach ( $cg_articles as $i => $a ) {
					trussogne_cg_block( $a, $i < $last, 36 );
				}
				?>
			</div>
		</div>
	</section>

	<section class="cg-section" style="padding: 80px 48px; background: var(--paper);">
		<div style="max-width: 860px; margin: 0 auto;">
			<div class="sec-num" style="margin-bottom: 20px;">· 02 — POLITIQUE DE CONFIDENTIALITÉ & RGPD ·</div>
			<p style="font-size: 15px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 40px; max-width: 700px;">
				En tant que client ou visiteur de notre site Internet, nous souhaitons vous informer, respecter vos droits et vous permettre de contrôler ce qu'il advient de vos données personnelles, en conformité avec le RGPD 2016/679 du 27 avril 2016.
			</p>
			<div style="display: flex; flex-direction: column; gap: 0;">
				<?php
				$last = count( $privacy_sections ) - 1;
				foreach ( $privacy_sections as $i => $s ) {
					trussogne_cg_block( $s, $i < $last, 32 );
				}
				?>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
