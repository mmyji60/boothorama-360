// i18n-legal.js – FR / EN / ES, default fallback: EN
const I18N = {
  fr: {
    title: "Mentions légales – Boothorama 360",
    meta_desc: "Mentions légales et informations éditeur de Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_legal: "Mentions légales",
    nav_faq: "FAQ",
    badge_app: "Application mobile",
    h1: "Mentions légales",
    intro: "Informations relatives à l’éditeur, à l’hébergement et aux droits.",
    s1: "1. Éditeur du site",
    company_name_label: "Société :",
    company_addr_label: "Adresse :",
    company_addr: "À compléter",
    company_contact_label: "Contact :",
    s2: "2. Directeur de la publication",
    publisher: "Le directeur de la publication est le représentant légal de Boothorama.",
    s3: "3. Hébergement",
    hosting: "Site servi par GitHub Pages – GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.",
    s4: "4. Propriété intellectuelle",
    ip: "Le contenu (textes, visuels, logo et éléments de design) est protégé par le droit d’auteur. Toute reproduction ou réutilisation nécessite une autorisation préalable.",
    s5: "5. Données personnelles",
    privacy_link: 'Le traitement des données personnelles est décrit dans la <a href="./">politique de confidentialité</a>.',
    s6: "6. Signalement de contenu",
    notice: 'Pour signaler un contenu ou une vulnérabilité, contactez <a href="mailto:security@exemple.com">security@exemple.com</a>.',
    updated: "Dernière mise à jour :"
  },
  en: {
    title: "Legal Notice – Boothorama 360",
    meta_desc: "Legal information and site publisher details for Boothorama 360.",
    nav_privacy: "Privacy",
    nav_legal: "Legal Notice",
    nav_faq: "FAQ",
    badge_app: "Mobile app",
    h1: "Legal Notice",
    intro: "Information about the publisher, hosting and intellectual property.",
    s1: "1. Publisher",
    company_name_label: "Company:",
    company_addr_label: "Address:",
    company_addr: "To be filled in",
    company_contact_label: "Contact:",
    s2: "2. Editorial responsibility",
    publisher: "The legal representative of Boothorama acts as the editorial director.",
    s3: "3. Hosting",
    hosting: "Hosted via GitHub Pages – GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.",
    s4: "4. Intellectual property",
    ip: "All content (texts, visuals, logo and design elements) is protected by copyright. Any reproduction or reuse requires prior authorization.",
    s5: "5. Personal data",
    privacy_link: 'Personal data processing is described in the <a href="./">privacy policy</a>.',
    s6: "6. Report content",
    notice: 'To report content or a vulnerability, contact <a href="mailto:security@exemple.com">security@exemple.com</a>.',
    updated: "Last updated:"
  },
  es: {
    title: "Aviso legal – Boothorama 360",
    meta_desc: "Información legal y detalles del editor del sitio de Boothorama 360.",
    nav_privacy: "Privacidad",
    nav_legal: "Aviso legal",
    nav_faq: "FAQ",
    badge_app: "Aplicación móvil",
    h1: "Aviso legal",
    intro: "Información sobre el editor, el alojamiento y la propiedad intelectual.",
    s1: "1. Editor del sitio",
    company_name_label: "Empresa:",
    company_addr_label: "Dirección:",
    company_addr: "Por completar",
    company_contact_label: "Contacto:",
    s2: "2. Responsable editorial",
    publisher: "El representante legal de Boothorama actúa como responsable editorial de Boothorama.",
    s3: "3. Alojamiento",
    hosting: "Sitio alojado mediante GitHub Pages – GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, EE. UU.",
    s4: "4. Propiedad intelectual",
    ip: "El contenido (textos, imágenes, logotipo y elementos de diseño) está protegido por derechos de autor. Cualquier reproducción o reutilización requiere autorización previa.",
    s5: "5. Datos personales",
    privacy_link: 'El tratamiento de datos personales se describe en la <a href="./">política de privacidad</a>.',
    s6: "6. Notificación de contenido",
    notice: 'Para informar sobre un contenido o una vulnerabilidad, contacta con <a href="mailto:security@exemple.com">security@exemple.com</a>.',
    updated: "Última actualización:"
  }
};

// Detect browser language -> 'fr' | 'en' | 'es'; default to EN if unsupported
function detectLang() {
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
  const d = I18N[lang] || I18N.en;

  document.documentElement.lang = lang;
  document.title = d.title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', d.meta_desc);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });

  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => applyI18n(detectLang()));
