// Dictionnaires
const I18N = {
  fr: {
    title: "Politique de confidentialité – Boothorama 360",
    meta_desc: "Politique de confidentialité de l'application Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_legal: "Mentions légales",
    nav_faq: "FAQ",
    badge_rgpd: "Conforme RGPD",
    h1: "Politique de confidentialité",
    intro: "Nous expliquons ici quelles données sont traitées par <strong>Boothorama 360</strong>, pourquoi et pendant combien de temps. Aucune publicité, aucun traqueur.",
    s1: "1. Données traitées",
    s1_l1: "<strong>Médias locaux</strong> : vidéos et images enregistrées via l’app — stockées <em>sur l’appareil</em>.",
    s1_l2: "<strong>Partage Google Drive (optionnel)</strong> : si activé, un lien de partage est mémorisé localement.",
    s1_l3: "<strong>Diagnostic</strong> : journaux d’erreur anonymes (si activé dans iOS) pour la stabilité.",
    s2: "2. Finalités",
    s2_p: "Fournir la capture, le post-traitement et le partage dans le cadre d’un photobooth 360.",
    s3: "3. Base légale",
    s3_p: "Exécution du contrat (utilisation de l’app) et intérêt légitime d’assurer le bon fonctionnement.",
    s4: "4. Conservation",
    s4_l1: "<strong>Sur l’appareil</strong> : jusqu’à suppression par l’utilisateur.",
    s4_l2: "<strong>Sur Google Drive</strong> : tant que le fichier est conservé dans votre Drive.",
    s5: "5. Partage et tiers",
    s5_p: "Aucune vente de données. L’upload Drive implique Google en tant que fournisseur tiers, soumis à ses propres politiques.",
    s6: "6. Vos droits",
    s6_l1: "Suppression locale des vidéos depuis l’app.",
    s6_l2: "Suppression des fichiers depuis votre compte Google Drive.",
    s6_l3: "Contactez-nous pour toute demande.",
    s7: "7. Contact",
    contact_label: "Questions privacy :",
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
    intro: "This page explains which data is processed by <strong>Boothorama 360</strong>, why, and for how long. No ads, no trackers.",
    s1: "1. Data we process",
    s1_l1: "<strong>Local media</strong>: videos and images captured in the app — stored <em>on your device</em>.",
    s1_l2: "<strong>Google Drive sharing (optional)</strong>: when enabled, a share link is kept locally.",
    s1_l3: "<strong>Diagnostics</strong>: anonymous crash logs (if enabled in iOS) to improve stability.",
    s2: "2. Purposes",
    s2_p: "Provide capture, post-processing, and sharing features for a 360 photobooth workflow.",
    s3: "3. Legal basis",
    s3_p: "Performance of a contract (use of the app) and our legitimate interest in ensuring proper operation.",
    s4: "4. Retention",
    s4_l1: "<strong>On device</strong>: until deleted by the user.",
    s4_l2: "<strong>On Google Drive</strong>: as long as you keep the file in your Drive.",
    s5: "5. Sharing & third parties",
    s5_p: "We don't sell data. When you upload to Drive, Google acts as a third-party provider under its own policies.",
    s6: "6. Your rights",
    s6_l1: "Delete local videos from the app.",
    s6_l2: "Remove files directly from your Google Drive account.",
    s6_l3: "Contact us for any request.",
    s7: "7. Contact",
    contact_label: "Privacy questions:",
    updated: "Last updated:"
  }
};

// Détecte la langue du système (navigateur) -> 'fr' ou 'en', fallback 'fr'
function detectLang() {
  const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
  for (const l of list) {
    const base = String(l || "").toLowerCase().slice(0,2);
    if (base === "fr") return "fr";
    if (base === "en") return "en";
    if (base === "es") return "es";
  }
  return "en";
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;

  // html@lang
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // title + meta description
  document.title = dict.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.meta_desc);

  // Remplacement des éléments data-i18n (support HTML)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // année footer si présente
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}

// Init au chargement
document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLang();
  applyI18n(lang);
});
