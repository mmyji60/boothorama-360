<script>
const I18N = {
  fr: {
    title: "Politique de confidentialité – Boothorama 360",
    meta_desc: "Politique de confidentialité de l'application Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_legal: "Mentions légales",
    nav_faq: "FAQ",
    badge_rgpd: "Conforme RGPD",
    h1: "Politique de confidentialité",
    intro:
      "Nous expliquons ici quelles données sont traitées par <strong>Boothorama 360</strong>, pourquoi et pendant combien de temps. Aucune publicité, aucun traqueur.",

    who: "1. Qui est responsable ?",
    who_p: 'Le responsable de traitement est <strong>Boothorama</strong> (voir <a href="mentions-legales.html">mentions légales</a>). Contact DPO/Privacy : <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    account: "2. Comptes et authentification",
    account_l1: "<strong>Compte anonyme</strong> : aucun identifiant nominatif n’est collecté.",
    account_l2: "<strong>Connexion Google (optionnelle)</strong> : via OAuth pour exporter des vidéos dans VOTRE Google Drive. Nous recevons uniquement les jetons nécessaires aux fonctionnalités choisies.",

    s1: "3. Données traitées",
    s1_l1: "<strong>Médias locaux</strong> : vidéos/images capturées dans l’app — stockées <em>sur l’appareil</em>. Aucun envoi vers nos serveurs.",
    s1_l2: "<strong>Export Google Drive (option)</strong> : si activé, les vidéos montées sont téléversées dans votre Drive. L’app conserve localement l’ID fichier/lien de partage pour faciliter la gestion (QR code).",
    s1_l3: "<strong>Permissions</strong> : accès <em>caméra</em> et <em>micro</em> (pour filmer), <em>stockage</em> (pour enregistrer), et <em>réseau</em> (pour l’upload).",
    s1_l4: "<strong>Abonnement</strong> : état de l’abonnement (actif/expiré) et identifiant d’achat App Store/Google Play. Aucune donnée de carte bancaire n’est traitée par Boothorama.",
    s1_l5: "<strong>Diagnostic</strong> : journaux d’erreur anonymes (si activé dans le système) pour la stabilité.",

    s2: "4. Finalités",
    s2_p1: "Fournir la capture 360°, le post-traitement et l’export/partage des vidéos.",
    s2_p2: "Permettre le partage par <strong>QR code</strong> d’un lien Drive.",
    s2_p3: "Gérer les achats intégrés/abonnements.",
    s2_p4: "Améliorer la stabilité via diagnostics (option système).",

    s3: "5. Bases légales",
    s3_p1: "<strong>Exécution du contrat</strong> : fonctionnement de l’app (capture, enregistrement local, lecture).",
    s3_p2: "<strong>Consentement</strong> : autorisations caméra/micro ; export vers Google Drive ; génération de lien partage/QR.",
    s3_p3: "<strong>Intérêt légitime</strong> : sécurité, lutte contre la fraude, amélioration technique via diagnostics anonymes.",

    s4: "6. Durées de conservation",
    s4_l1: "<strong>Sur l’appareil</strong> : jusqu’à suppression par vous depuis l’app.",
    s4_l2: "<strong>Sur Google Drive</strong> : tant que le fichier reste dans votre Drive.",
    s4_l3: "<strong>Jetons OAuth</strong> : durée strictement nécessaire pour l’export, renouvelés/invalidés par Google à échéance.",
    s4_l4: "<strong>Preuves d’achat</strong> : durée nécessaire à la gestion de l’abonnement et obligations légales.",

    s5: "7. Destinataires et tiers",
    s5_p: "Nous ne vendons pas vos données. L’export Drive implique Google (Google LLC), soumis à ses propres politiques et garanties de transfert. Les paiements/abonnements sont traités par Apple App Store et/ou Google Play.",

    transfer: "8. Transferts hors UE",
    transfer_p: "L’export vers Google Drive peut impliquer des traitements hors UE (p. ex. USA). Google applique des garanties adéquates (Clauses Contractuelles Types). En activant Drive, vous consentez à ce transfert.",

    qr: "9. Partage par lien / QR code",
    qr_p: "Si vous activez le lien de partage, toute personne ayant le lien/QR peut accéder à la vidéo selon les paramètres Drive. Vous pouvez désactiver le partage ou supprimer le fichier à tout moment.",

    delete: "10. Suppression",
    delete_l1: "<strong>Depuis l’app</strong> : bouton « Supprimer » (local) ; si activé, suppression également sur Drive.",
    delete_l2: "<strong>Depuis Google Drive</strong> : supprimez le fichier ou révoquez son partage.",

    rights: "11. Vos droits",
    rights_l1: "Accès, rectification, effacement, portabilité, limitation, opposition.",
    rights_l2: "Retrait du consentement (Drive/partage) à tout moment.",
    rights_l3: "Réclamation auprès de la CNIL (cnil.fr).",
    rights_how: 'Pour exercer vos droits : <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    security: "12. Sécurité",
    security_p: "Mesures techniques et organisationnelles adaptées (chiffrement en transit, stockage local, minimisation). Sécurisez votre appareil et votre compte Google (2FA).",

    minors: "13. Mineurs",
    minors_p: "L’app n’est pas destinée aux moins de 13 ans. Pour 13–16 ans, l’autorisation parentale peut être requise selon le pays.",

    changes: "14. Modifications",
    changes_p: "Nous pouvons mettre à jour cette politique. Les changements significatifs sont annoncés dans l’app.",

    updated: "Dernière mise à jour :"
  },

  en: {
    title: "Privacy Policy – Boothorama 360",
    meta_desc: "Privacy policy for the Boothorama 360 app.",
    nav_privacy: "Privacy",
    nav_legal: "Legal Notice",
    nav_faq: "FAQ",
    badge_rgpd: "GDPR Compliant",
    h1: "Privacy Policy",
    intro:
      "This page explains which data is processed by <strong>Boothorama 360</strong>, why, and for how long. No ads, no trackers.",

    who: "1. Who is the controller?",
    who_p: 'The data controller is <strong>Boothorama</strong> (see <a href="mentions-legales.html?lang=en">legal notice</a>). DPO/Privacy contact: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    account: "2. Accounts & authentication",
    account_l1: "<strong>Anonymous account</strong>: no personal identifier is collected.",
    account_l2: "<strong>Google Sign-In (optional)</strong>: OAuth to export videos to YOUR Google Drive. We only receive tokens required for the chosen features.",

    s1: "3. Data we process",
    s1_l1: "<strong>Local media</strong>: videos/images captured in the app — stored <em>on your device</em>. No upload to our servers.",
    s1_l2: "<strong>Google Drive export (optional)</strong>: when enabled, rendered videos are uploaded to your Drive. The app stores locally the file ID/share link to manage QR sharing.",
    s1_l3: "<strong>Permissions</strong>: camera & microphone (to record), storage (to save), and network (to upload).",
    s1_l4: "<strong>Subscription</strong>: subscription status and purchase identifier from the App Store / Google Play. We do not process card data.",
    s1_l5: "<strong>Diagnostics</strong>: anonymous crash logs (if enabled at OS level).",

    s2: "4. Purposes",
    s2_p1: "Provide 360° capture, post-processing and export/sharing.",
    s2_p2: "Enable QR-code sharing of a Drive link.",
    s2_p3: "Manage in-app purchases/subscriptions.",
    s2_p4: "Improve stability via diagnostics.",

    s3: "5. Legal bases",
    s3_p1: "<strong>Contract</strong>: core app features (capture, local storage, playback).",
    s3_p2: "<strong>Consent</strong>: camera/mic permissions; Google Drive export; share link/QR code.",
    s3_p3: "<strong>Legitimate interest</strong>: security, fraud prevention, technical improvement using anonymous diagnostics.",

    s4: "6. Retention",
    s4_l1: "<strong>On device</strong>: until you delete it in the app.",
    s4_l2: "<strong>On Google Drive</strong>: as long as you keep it in your Drive.",
    s4_l3: "<strong>OAuth tokens</strong>: only as long as needed for export; renewed/invalidated by Google.",
    s4_l4: "<strong>Purchase records</strong>: as required to manage the subscription and comply with legal obligations.",

    s5: "7. Recipients & third parties",
    s5_p: "We do not sell data. Drive export involves Google (Google LLC) under its own policies and transfer safeguards. Payments/subscriptions are handled by Apple App Store and/or Google Play.",

    transfer: "8. International transfers",
    transfer_p: "Drive export may involve processing outside the EU (e.g., US). Google applies appropriate safeguards (Standard Contractual Clauses). Enabling Drive implies your consent to this transfer.",

    qr: "9. Link/QR sharing",
    qr_p: "If you enable link sharing, anyone with the link/QR can access the video according to Drive settings. You may disable sharing or delete the file at any time.",

    delete: "10. Deletion",
    delete_l1: "<strong>From the app</strong>: “Delete” button (local); if enabled, also deletes on Drive.",
    delete_l2: "<strong>From Google Drive</strong>: delete the file or revoke sharing.",

    rights: "11. Your rights",
    rights_l1: "Access, rectification, erasure, portability, restriction, objection.",
    rights_l2: "Withdraw consent (Drive/sharing) at any time.",
    rights_l3: "Complain to your supervisory authority (e.g., CNIL in France).",
    rights_how: 'Exercise your rights: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    security: "12. Security",
    security_p: "Appropriate technical/organizational measures (in-transit encryption, on-device storage, minimization). Secure your device and Google account (2FA).",

    minors: "13. Minors",
    minors_p: "Not intended for children under 13. For 13–16, parental authorization may be required depending on the country.",

    changes: "14. Changes",
    changes_p: "We may update this policy. Significant changes will be announced in-app.",

    updated: "Last updated:"
  },

  es: {
    title: "Política de privacidad – Boothorama 360",
    meta_desc: "Política de privacidad de la aplicación Boothorama 360.",
    nav_privacy: "Privacidad",
    nav_legal: "Aviso legal",
    nav_faq: "FAQ",
    badge_rgpd: "Cumple con RGPD",
    h1: "Política de privacidad",
    intro:
      "Aquí explicamos qué datos procesa <strong>Boothorama 360</strong>, por qué y durante cuánto tiempo. Sin anuncios ni rastreadores.",

    who: "1. Responsable del tratamiento",
    who_p: 'El responsable es <strong>Boothorama</strong> (ver <a href="mentions-legales.html?lang=es">aviso legal</a>). Contacto privacidad/DPO: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    account: "2. Cuentas y autenticación",
    account_l1: "<strong>Cuenta anónima</strong>: no se recoge ningún identificador personal.",
    account_l2: "<strong>Inicio de sesión con Google (opcional)</strong>: OAuth para exportar vídeos a TU Google Drive. Solo recibimos los tokens necesarios para las funciones elegidas.",

    s1: "3. Datos tratados",
    s1_l1: "<strong>Medios locales</strong>: vídeos/imágenes en el dispositivo. No se suben a nuestros servidores.",
    s1_l2: "<strong>Exportación a Google Drive (opcional)</strong>: si está activada, los vídeos se suben a tu Drive. La app guarda localmente el ID/enlace para gestionar el QR.",
    s1_l3: "<strong>Permisos</strong>: cámara y micrófono; almacenamiento; red.",
    s1_l4: "<strong>Suscripción</strong>: estado de la suscripción e identificador de compra del App Store/Google Play. No tratamos datos de tarjetas.",
    s1_l5: "<strong>Diagnóstico</strong>: registros anónimos de fallos (si está activado en el sistema).",

    s2: "4. Finalidades",
    s2_p1: "Proporcionar captura 360°, posprocesado y exportación/compartición.",
    s2_p2: "Habilitar el <strong>código QR</strong> de un enlace de Drive.",
    s2_p3: "Gestionar compras integradas/suscripciones.",
    s2_p4: "Mejorar la estabilidad mediante diagnósticos.",

    s3: "5. Bases jurídicas",
    s3_p1: "<strong>Ejecución del contrato</strong>: funciones básicas.",
    s3_p2: "<strong>Consentimiento</strong>: permisos cámara/micrófono; exportación a Drive; enlace/QR.",
    s3_p3: "<strong>Interés legítimo</strong>: seguridad, prevención de fraude, mejora técnica con diagnósticos anónimos.",

    s4: "6. Conservación",
    s4_l1: "<strong>En el dispositivo</strong>: hasta que lo elimines.",
    s4_l2: "<strong>En Google Drive</strong>: mientras lo conserves.",
    s4_l3: "<strong>Tokens OAuth</strong>: solo el tiempo necesario; Google los renueva/inhabilita.",
    s4_l4: "<strong>Registros de compra</strong>: según requisitos legales y de gestión.",

    s5: "7. Destinatarios y terceros",
    s5_p: "No vendemos datos. La exportación a Drive implica a Google (Google LLC) con sus propias políticas y garantías de transferencia. Pagos/suscripciones gestionados por Apple App Store y/o Google Play.",

    transfer: "8. Transferencias internacionales",
    transfer_p: "La exportación a Drive puede implicar tratamiento fuera de la UE. Google aplica salvaguardias (Cláusulas Contractuales Tipo). Activar Drive implica tu consentimiento.",

    qr: "9. Enlace/QR",
    qr_p: "Si habilitas el enlace de compartición, cualquiera con el enlace/QR puede acceder según la configuración de Drive. Puedes desactivar el enlace o eliminar el archivo cuando quieras.",

    delete: "10. Eliminación",
    delete_l1: "<strong>Desde la app</strong>: botón “Eliminar” (local) y, si está activado, también en Drive.",
    delete_l2: "<strong>Desde Google Drive</strong>: elimina el archivo o revoca la compartición.",

    rights: "11. Tus derechos",
    rights_l1: "Acceso, rectificación, supresión, portabilidad, limitación, oposición.",
    rights_l2: "Retirar el consentimiento (Drive/compartición) en cualquier momento.",
    rights_l3: "Reclamar ante la autoridad de control (p. ej., CNIL).",
    rights_how: 'Ejercer derechos: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    security: "12. Seguridad",
    security_p: "Medidas técnicas/organizativas adecuadas (cifrado en tránsito, almacenamiento en el dispositivo, minimización). Protege tu dispositivo y cuenta de Google (2FA).",

    minors: "13. Menores",
    minors_p: "No destinada a menores de 13 años. Para 13–16, puede requerirse autorización parental según el país.",

    changes: "14. Cambios",
    changes_p: "Podemos actualizar esta política. Los cambios significativos se anunciarán en la app.",

    updated: "Última actualización:"
  }
};

// Detect browser language -> 'en' | 'fr' | 'es'; default to EN if unsupported
function detectLang() {
  const params = new URLSearchParams(location.search);
  const forced = params.get("lang");
  if (forced && ["en","fr","es"].includes(forced)) return forced;

  const list = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || "en"];
  for (const l of list) {
    const base = String(l || "").toLowerCase().slice(0, 2);
    if (["en", "fr", "es"].includes(base)) return base;
  }
  return "en"; // default fallback
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.title = dict.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', dict.meta_desc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyI18n(lang);
});
</script>
