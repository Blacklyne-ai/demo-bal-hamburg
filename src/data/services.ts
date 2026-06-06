// ─────────────────────────────────────────────────────────────
// BAL Hamburg - Leistungen verbatim aus bal-hamburg.de
// iconName: @lucide/astro Component-Name.
// ─────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  iconName: string;
  category: 'Lackierung' | 'Karosserie' | 'Service';
  title: string;
  short: string;
  long: string;
}

export const services: Service[] = [
  {
    slug: 'ganz-reparaturlackierung',
    iconName: 'Paintbrush2',
    category: 'Lackierung',
    title: 'Ganz- & Reparaturlackierungen',
    short:
      'PKW, Zweirad, Transporter & LKW bis 7,5 t - vom Kratzer bis zur kompletten Neulackierung.',
    long:
      'Vom kleinsten Lackschaden bis zur kompletten Neulackierung Ihres Fahrzeugs. Wir arbeiten an PKW, Zweirad, Transporter und LKW bis 7,5 t - in einer modernen Lackier- und Trockenkabine mit kurzwelliger Infrarot-Trocknung.',
  },
  {
    slug: 'spot-repair',
    iconName: 'CircleDot',
    category: 'Lackierung',
    title: 'Spot Repair',
    short:
      'Punktgenaue Lackreparatur für kleine Schäden - schnell, präzise, ohne Komplettlackierung.',
    long:
      'Kleine Lackschäden werden lokal repariert - mit UV-Trocknung und exakter Farbangleichung. Eine kostengünstige Alternative zur Teil- oder Komplettlackierung, wenn der Schaden lokal begrenzt ist.',
  },
  {
    slug: 'sonder-design-lackierung',
    iconName: 'Palette',
    category: 'Lackierung',
    title: 'Sonder- & Designlackierungen',
    short:
      'Individuelle Farbtöne, Effektlacke und Beschriftungen - nach Ihren Wünschen.',
    long:
      'Sie wollen Ihrem Fahrzeug einen einzigartigen Look geben? Wir realisieren Sonder- und Designlackierungen mit Effektlacken, Sonderfarben und individuellen Gestaltungen - vom Klassiker bis zur Flottenbeschriftung.',
  },
  {
    slug: 'richtbank',
    iconName: 'Wrench',
    category: 'Karosserie',
    title: 'Richtbankarbeiten',
    short:
      'Karosserie nach Unfall wieder in Form - mit moderner Vermessungs- und Richttechnik.',
    long:
      'Verzogene Karosserie nach Unfall? Wir richten Ihren Wagen auf der Richtbank fachgerecht in die ursprünglichen Hersteller-Toleranzen zurück. Unsere Karosserieabteilung hat drei Vorbereitungsplätze.',
  },
  {
    slug: 'dellenbeseitigung',
    iconName: 'CircleAlert',
    category: 'Karosserie',
    title: 'Lackfreie Dellenbeseitigung',
    short:
      'Hagelschäden, Türdellen oder Parkrempler - oft ohne Lackieren wieder weg.',
    long:
      'Kleinere Dellen, Hagelschäden und Frostschäden lassen sich häufig ohne neue Lackierung beseitigen. Das ist günstiger, schneller und der originale Werkslack bleibt erhalten.',
  },
  {
    slug: 'scheibenreparatur',
    iconName: 'Scan',
    category: 'Service',
    title: 'Scheiben-Reparatur',
    short:
      'Steinschlag, Sprung oder Einbruch - wir reparieren oder tauschen Windschutzscheiben.',
    long:
      'Ob Steinschlag, Sprung oder Einbruch - wir reparieren oder tauschen fachgerecht Windschutzscheiben. Auch hier rechnen wir direkt mit allen Versicherungsgesellschaften ab.',
  },
  {
    slug: 'hohlraum-unterboden',
    iconName: 'Shield',
    category: 'Service',
    title: 'Hohlraum & Unterbodenschutz',
    short:
      'Schutz gegen Rost und Steinschlag - Werterhalt für jedes Fahrzeug.',
    long:
      'Wir versiegeln Hohlräume und tragen Unterbodenschutz auf - der nachhaltigste Schutz gegen Rost, Streusalz und Steinschlag. Ein Werterhalt-Service, der sich gerade bei Vielfahrern und Oldtimern lohnt.',
  },
  {
    slug: 'hol-bringservice',
    iconName: 'Truck',
    category: 'Service',
    title: 'Hol- & Bringservice',
    short:
      'Wir holen Ihr Fahrzeug bis 50 km Umkreis ab - und bringen es zurück.',
    long:
      'Sie haben keine Zeit, das Auto vorbeizubringen? Wir holen es im Umkreis von 50 km ab und bringen es nach der Reparatur zurück. Auf Wunsch stellen wir Ihnen einen Ersatzwagen zur Verfügung.',
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// ── FAQ - typische Fragen rund um Lackierung & Karosserie ──
export const faqs = [
  {
    q: 'Wie lange dauert eine komplette Neulackierung?',
    a: 'Je nach Umfang und Trocknungszeit zwischen 3 und 7 Werktagen. Wir besprechen Termin und Dauer beim Erstkontakt verbindlich. Während der Standzeit stellen wir auf Wunsch einen Ersatzwagen.',
  },
  {
    q: 'Rechnen Sie direkt mit der Versicherung ab?',
    a: 'Ja. Wir wickeln Schadenfälle vollständig mit allen Versicherungsgesellschaften und Sachverständigen ab - inklusive Scheiben-Reparatur und Karosserieschaden.',
  },
  {
    q: 'Welche Garantie geben Sie auf Lackierarbeiten?',
    a: 'Drei Jahre Garantie auf alle Lackierarbeiten. Wir lackieren ausschließlich mit Markenqualität von PPG und Glasurit nach Herstellervorgaben.',
  },
  {
    q: 'Holen Sie das Fahrzeug bei mir ab?',
    a: 'Ja, im Umkreis von 50 km um Hamburg-Bergedorf. Rufen Sie uns unter 040 721 72 58 an und wir vereinbaren einen Abhol-Termin.',
  },
  {
    q: 'Lackieren Sie auch Nutzfahrzeuge und LKW?',
    a: 'Ja. Unsere Halle mit 2.000 qm Fläche und 7 m Arbeitshöhe ist auf Fahrzeuge bis 7,5 t ausgelegt - vom PKW über Transporter bis zum Nutzfahrzeug. Auch Industrie- und Möbellackierungen führen wir aus.',
  },
  {
    q: 'Was ist Spot Repair?',
    a: 'Spot Repair ist eine punktgenaue Lackreparatur für kleine, lokal begrenzte Schäden. Mit UV-Trocknung und exakter Farbangleichung wird nur der betroffene Bereich behandelt - schneller und günstiger als eine Teillackierung.',
  },
];

// ── 4 USPs als Editorial-Cards (verbatim aus alter Site) ──
export const usps = [
  {
    icon: 'Truck',
    title: 'Abholung & Lieferung',
    text: 'Wir holen das Fahrzeug im Umkreis von 50 km bei Ihnen ab und bringen es nach der Reparatur zurück.',
    chip: '50 km Umkreis',
  },
  {
    icon: 'ShieldCheck',
    title: 'DEKRA zertifiziert',
    text: 'Unsere Autolackiererei ist DEKRA zertifiziert und wird in regelmäßigen Abständen geprüft.',
    chip: 'jährlich geprüft',
  },
  {
    icon: 'Award',
    title: '3 Jahre Garantie',
    text: 'Wir gewähren drei Jahre Garantie auf alle Lackierarbeiten.',
    chip: 'auf Lackierarbeiten',
  },
  {
    icon: 'Car',
    title: 'Ersatzwagen',
    text: 'Bleiben Sie mobil. Wir stellen Ihnen zur Überbrückung ein Fahrzeug zur Verfügung.',
    chip: 'inklusive',
  },
];

// ── Stats für Über-uns-Strip ──
export const aboutStats = [
  { num: '22+', label: 'Jahre Erfahrung' },
  { num: '20+', label: 'Mitarbeiter' },
  { num: '2.000', label: 'qm Halle' },
  { num: '7', label: 'm Arbeitshöhe' },
  { num: '7,5', label: 't Fahrzeuggewicht' },
];

// ── Qualität-Equipment (aus /qualitaet/ verbatim) ──
export const equipment = [
  {
    title: 'Moderne Lackier- & Trockenkabine',
    text: 'Auch für Transporter ausgelegt. Kurzwellige Infrarot-Trockentechnik für gleichmäßige Ergebnisse.',
    icon: 'Flame',
  },
  {
    title: 'Zentrale Staub- & Füllerabsauganlage',
    text: 'Sauberer Arbeitsbereich für reproduzierbar perfekte Oberflächen.',
    icon: 'Wind',
  },
  {
    title: 'Spot Repair mit UV-Trocknung',
    text: 'Eigener Arbeitsplatz für punktuelle Reparaturen.',
    icon: 'CircleDot',
  },
  {
    title: 'Farbtonanalyse-Messkopf',
    text: 'Exakte Farbangleichung an den Original-Werkslack.',
    icon: 'Pipette',
  },
  {
    title: '12 Vorbereitungsplätze',
    text: 'Mit Hebebühnen und Absaugung. So bleibt der Durchsatz konstant hoch.',
    icon: 'Settings2',
  },
  {
    title: 'Separate Finish-Zone',
    text: 'Letzter Schliff in eigener Zone - außerhalb der Lackierumgebung.',
    icon: 'Sparkles',
  },
];
