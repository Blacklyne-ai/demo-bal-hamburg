// ─────────────────────────────────────────────────────────────
// BAL Hamburg - Bergedorfer Autolackiererei - Site-Konfiguration.
// Alle Daten 1:1 aus bal-hamburg.de (Bestandsseite TYPO3) und
// dem Impressum übernommen. Nichts erfunden.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Bergedorfer Autolackiererei',
  shortName: 'BAL Hamburg',
  tagline: 'Modern und vielseitig',
  subtitle: 'Lackier- & Karosserie-Meisterbetrieb in Hamburg-Bergedorf',
  description:
    'Bergedorfer Autolackiererei - DEKRA-zertifizierter Lackier- & Karosserie-Meisterbetrieb in Hamburg. 22+ Jahre Erfahrung, 20+ Mitarbeiter, 2.000qm Halle. PKW bis LKW 7,5 t. PPG + Glasurit.',
  url: 'https://demo-bal-hamburg.pages.dev',

  // Festnetz
  phoneLandline: '040 721 72 58',
  phoneLandlineIntl: '+4940721 7258',
  phoneLandlineDigits: '4940721725 8',

  // Mobil
  phoneMobile: '0170 777 66 08',
  phoneMobileIntl: '+491707776608',
  phoneMobileDigits: '491707776608',

  // Fax (aus Impressum)
  fax: '040 739 37 219',

  email: 'service@bal-hamburg.de',

  owner: 'Murat Hakbilen',
  vatId: 'DE262536042',
  register: 'HRA 107974 (Amtsgericht Hamburg)',

  whatsappMessage:
    'Guten Tag, ich habe eine Frage zu einer Lackierung / Karosseriereparatur und bitte um Rückruf...',

  address: {
    street: 'Kurt-A.-Körber-Chaussee 107-109',
    postcode: '21033',
    city: 'Hamburg',
    district: 'Hamburg-Bergedorf',
    country: 'Deutschland',
    lat: 53.4928,
    lng: 10.1928,
  },

  hours: {
    note: 'Mo-Fr 08:00-18:00 Uhr',
  },

  openingHours: [
    { day: 'Montag',     open: '08:00', close: '18:00' },
    { day: 'Dienstag',   open: '08:00', close: '18:00' },
    { day: 'Mittwoch',   open: '08:00', close: '18:00' },
    { day: 'Donnerstag', open: '08:00', close: '18:00' },
    { day: 'Freitag',    open: '08:00', close: '18:00' },
    { day: 'Samstag',    open: null,    close: null    },
    { day: 'Sonntag',    open: null,    close: null    },
  ],

  // Trust-Marker für Hero-Stats
  stats: {
    experience: '22+ Jahre',
    employees: '20+ Mitarbeiter',
    hall: '2.000 qm',
    height: '7 m Arbeitshöhe',
    radius: '50 km Abholung',
    weight: 'bis 7,5 t',
  },

  // 4 USPs (verbatim aus alter Site)
  usps: [
    {
      icon: 'Truck',
      title: 'Abholung & Lieferung',
      text: 'Wir holen das Fahrzeug im Umkreis von 50 km bei Ihnen ab und bringen es nach der Reparatur zurück.',
    },
    {
      icon: 'ShieldCheck',
      title: 'DEKRA zertifiziert',
      text: 'Unsere Autolackiererei ist DEKRA zertifiziert und wird in regelmäßigen Abständen geprüft.',
    },
    {
      icon: 'Award',
      title: '3 Jahre Garantie',
      text: 'Wir gewähren drei Jahre Garantie auf unsere Lackierarbeiten.',
    },
    {
      icon: 'Car',
      title: 'Ersatzwagen',
      text: 'Bleiben Sie mobil. Wir stellen Ihnen zur Überbrückung ein Fahrzeug zur Verfügung.',
    },
  ],

  // Lackmarken (verbatim aus alter Site)
  paintBrands: [
    { name: 'PPG',      img: '/images/ppg.png',      tagline: 'We protect and beautify the world.' },
    { name: 'Glasurit', img: '/images/glasurit.jpg', tagline: 'Refinish-Qualität, weltweit bewährt.' },
  ],

  // Kundenstamm (verbatim aus alter Site)
  customerTypes: [
    'Automarken-Niederlassungen',
    'Autovermietungen',
    'Flottenservices',
    'städtische Betriebe',
  ],

  // Google Maps - adress-based query (kein API-Key)
  googleMapsEmbed:
    'https://www.google.com/maps?q=Kurt-A.-K%C3%B6rber-Chaussee+107-109,+21033+Hamburg&z=15&output=embed',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kurt-A.-K%C3%B6rber-Chaussee+107-109+21033+Hamburg',
  googleDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Kurt-A.-K%C3%B6rber-Chaussee+107-109+21033+Hamburg',
};

// ── Link-Helfer ──────────────────────────────────────────────
export const telLandline = `tel:+49407217258`;
export const telMobile = `tel:+491707776608`;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = `https://wa.me/491707776608?text=${encodeURIComponent(site.whatsappMessage)}`;

export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
  current: string;
}

// Schlanker Hauptnav
export const nav: NavItem[] = [
  { href: '/',             label: 'Start',       current: 'home' },
  { href: '/leistungen',   label: 'Leistungen',  current: 'leistungen' },
  { href: '/philosophie',  label: 'Philosophie', current: 'philosophie' },
  { href: '/qualitaet',    label: 'Qualität',    current: 'qualitaet' },
  { href: '/galerie',      label: 'Galerie',     current: 'galerie' },
  { href: '/kontakt',      label: 'Kontakt',     current: 'kontakt' },
];

// Vollnav für Footer + Mobile (gleich wie Hauptnav - keine versteckten Pages)
export const fullNav: NavItem[] = nav;

export const legalNav = [
  { href: '/impressum',         label: 'Impressum' },
  { href: '/datenschutz',       label: 'Datenschutz' },
  { href: '/haftungsausschluss',label: 'Haftungsausschluss' },
];
