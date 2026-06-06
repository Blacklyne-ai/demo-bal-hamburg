# Bergedorfer Autolackiererei (BAL Hamburg) - Style Guide

Quellen: Logo PNG (BAL-Logo mit blauer Straßenmarkierung + grauem Schriftzug + rotem
"MEISTERBETRIEB"), Werkstatt-Halle Foto (`hero.jpg` zeigt riesigen Schriftzug an der
Halle in BAL-Blau), DEKRA Zertifikat, Lackmarken-Logos (PPG, Glasurit).

Charakter: Hamburger Großbetrieb (20+ Mitarbeiter, 2.000 qm Halle), seit 22+ Jahren,
DEKRA-zertifiziert, Meisterbetrieb. Inhaber Murat Hakbilen. Professionell-vielseitig,
nicht Bastler-Boutique - sondern Industrie-Lackiererei mit Würde.

## Farbpalette (pixel-genau aus Logo + Halle-Foto)

Das Logo zeigt zwei Blau-Töne (Straßenmarkierungen + heller Akzent + roter Schriftzug
"MEISTERBETRIEB"). Das Werkstatt-Foto zeigt den AUTOLACKIEREREI-Schriftzug an der Halle
in einem klaren, kräftigen Mittelblau (Logo-CI 1:1).

### Brand-Palette

| Token | Hex | Rolle |
|---|---|---|
| `--brand` | `#0F75BD` | BAL-Blau (Hallenschriftzug, primary CTA, Akzentwort) |
| `--brand-deep` | `#0A4D80` | Logo-Blau tief (Hover, dunkler Akzent) |
| `--brand-sky` | `#3FA5DC` | Light Blau (Highlights, Pill-Hover) |
| `--accent` | `#D62828` | Rot aus "MEISTERBETRIEB" (Trust-Akzente, Highlights) |
| `--accent-deep` | `#A41E1E` | Rot tief (Hover) |

### Anthrazit (Dark Sections)

| Token | Hex | Rolle |
|---|---|---|
| `--ink` | `#0F1419` | Dunkelste Section, Body-Text-Primary |
| `--ink-900` | `#161C24` | Card-BG dark |
| `--ink-800` | `#1E2A38` | Section-BG dark mit leichtem Blau-Touch |
| `--ink-700` | `#2C3A4B` | Borders auf dark |
| `--ink-soft` | `#2A3441` | Body-Text dark mode |
| `--ink-muted` | `#5C6B7A` | Sekundär-Text |

### Paper (Light Sections - kein cream, dezent kühl passend zum Blau)

| Token | Hex | Rolle |
|---|---|---|
| `--paper` | `#FAFBFC` | Page-BG |
| `--paper-50` | `#F3F5F8` | Subtle Layer (Off-White mit Hauch Blau) |
| `--paper-100` | `#E8EDF2` | Card-BG hell |
| `--paper-200` | `#D6DEE7` | Deeper Card |
| `--line` | `#E2E8F0` | Border light |
| `--line-dark` | `#2C3A4B` | Border dark |

### Verteilung

- **Dark Sections** (Leistungen, Final-CTA, Footer): `--ink` BG + weisser Text + Akzent `--brand` (Blau) oder `--accent` (Rot)
- **Light Sections** (Hero, USPs, Philosophie, Lackmarken, Standort): `--paper` BG + `--ink` Text
- **Akzent-Wort-Regel**: Headlines bekommen 1-2 Worte in `--brand` (Blau dominant), Rot wird sparsam für Trust-Marker eingesetzt (DEKRA, "MEISTERBETRIEB").

## Schrift

Alte TYPO3-Site nutzt PT Sans (humanistisch, neutral). Für unseren modernen Industrie-
Großbetrieb-Look wechseln wir auf:

| Use | Font | Weight | Begründung |
|---|---|---|---|
| Display (H1) | **Oswald** | 700 | Geometrisch-condensed, exakt der Logo-Charakter ("BERGEDORFER"-Schriftzug an der Halle hat genau diese Anmutung) |
| Headlines (H2-H6) | **Oswald** | 600-700 | Konsistent mit Display, gibt Editorial-Magazin-Feel |
| Body | **Inter** | 400/500 | Clean, modern, sehr lesbar, professionell |
| UI / Buttons | **Inter** | 600 | Klar, anti-cringe |
| Eyebrow / Caps | **Inter** | 600 (uppercase + tracking) | Editorial-Marker |

Via `@fontsource` oder Google Fonts direkt (analog Getriebe-Vorlage: link href Stylesheet
in Layout.astro).

## Brand-Charakter (4 Adjektive)

1. **Professionell** - DEKRA-zertifiziert, jährlich geprüft, 22+ Jahre Erfahrung, Meisterbetrieb. Keine Bastelbude.
2. **Vielseitig** - PKW bis 7,5t, Lack + Karosserie + Scheiben + Hohlraumversiegelung + Spot-Repair. Alles aus einer Halle.
3. **Verlässlich** - 3 Jahre Garantie, Abholung im 50km-Umkreis, Ersatzwagen, direkt mit Versicherungen abrechnen.
4. **Würdig** - Inhabergeführt (Murat Hakbilen), 20+ feste Mitarbeiter, 2.000qm Halle in Hamburg-Bergedorf seit 2012. Großbetrieb mit Handwerker-Seele.

## Section-Pattern Mapping (Route66 / AMF -> BAL Hamburg)

| Section | Vorbild | BAL-Adaption |
|---|---|---|
| Hero | Route66 Hero | Werkstattfoto rechts (hero.jpg mit BAL-Schriftzug), Editorial-Headline mit Blau-Akzent, Floating Trust-Cards (DEKRA + Inhaber), Trust-Strip mit · Trennern, Ghost-Watermark "BAL" |
| 4 USPs | AMF "Vier gute Gründe" | 2x2 symmetrisches Grid - Abholung/DEKRA/Garantie/Ersatzwagen mit Lucide Icons (Truck/ShieldCheck/Award/Car) |
| Leistungen | AMF Services Dark | Dark BG mit Grid-Overlay, Category-Label `LACKIERUNG · KAROSSERIE · SERVICE`, 2x4 oder 3x3 svc-tile Grid |
| Über uns | Route66 Story | 2-spaltig: philosophie.jpg + Content, Stats-Strip darunter (Mitarbeiter/Halle/Höhe/Abholung/Tonnen) |
| Philosophie + DEKRA | Eigenes Editorial | Light Section, "Eine gute Arbeit beginnt mit dem Zuhören" als Mega-Quote, DEKRA-Bild prominent rechts mit Floating-Card |
| Lackmarken | AMF Brand-Strip | PPG + Glasurit als Image-Cards, sparse Layout |
| Standort | Route66 Footer-Kontakt | 2-spaltig: 3 Kontakt-Tiles (Festnetz/Mobil/E-Mail) links, Google Maps Embed rechts |
| Final CTA | Freigang Dark-CTA | werkstatt-foto-bg mit Overlay, zentrierte Headline, 2 CTAs (Anrufen + Mail) |

## Akzent-Wort-Map (Headlines)

| Headline | Akzent in `--brand` (Blau) |
|---|---|
| Hero H1 | "Ihr Fachbetrieb in Hamburg." (Akzent: "Fachbetrieb") |
| USPs | "Vier Gründe, warum unsere Kunden uns vertrauen." (Akzent: "vertrauen") |
| Leistungen | "Lackierung, Karosserie, Scheiben - aus einer Halle." (Akzent: "einer Halle") |
| Über uns | "Modern und vielseitig seit über 22 Jahren." (Akzent: "22 Jahren") |
| Philosophie | "Eine gute Arbeit beginnt mit dem Zuhören." (Akzent: "Zuhören") - DAS ist Gold |
| Lackmarken | "Wir lackieren mit Qualitätsprodukten." (Akzent: "Qualitätsprodukten") |
| Standort | "Kurt-A.-Körber-Chaussee 107-109, Hamburg-Bergedorf." (Akzent: "Hamburg-Bergedorf") |
| Final CTA | "Lackschaden? Karosserie? Wir schauen drauf." (Akzent: "schauen drauf") |

Rot (`--accent`) wird gezielt für `MEISTERBETRIEB` / `DEKRA ZERTIFIZIERT` / `3 JAHRE GARANTIE` als Trust-Pill verwendet, nie für Headline-Akzent.

## Anti-Cringe Whitelist

JA: DEKRA zertifiziert · jährlich geprüft · Meisterbetrieb · 3 Jahre Garantie · Spot
Repair · Richtbankarbeiten · Hohlraumversiegelung · Reparaturlackierung · PPG ·
Glasurit · Erstausrüsterqualität · Lackier- & Karosserie-Fachbetrieb · 7,5 Tonnen ·
Murat Hakbilen · Bergedorf · "Eine gute Arbeit beginnt mit dem Zuhören"

NEIN: Premium Excellence · Magic · Wo Lack auf Leidenschaft trifft · Master of Color ·
Premium-Lackier-Boutique · Crafted with love
