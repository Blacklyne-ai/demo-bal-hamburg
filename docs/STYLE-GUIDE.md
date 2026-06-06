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

### Brand-Palette (1:1 aus alter BAL-CSS extrahiert)

Original-Site Häufigkeit: `#002850` (43x = dominanter Brand-Color), `#0075bd` (22x = primary CTAs).
Diese beiden bilden das Brand-Blau-Paar:

| Token | Hex | Rolle | Original-Verwendung |
|---|---|---|---|
| `--brand` | `#0075BD` | Primary CTA, Akzentwort, Buttons | 22x in alter CSS |
| `--brand-dark` | `#002850` | Headlines-Akzent, Hover, Marine | 43x (dominant!) |
| `--brand-deep` | `#001A33` | Footer-Tone, tiefster Akzent | eigene Erweiterung |
| `--brand-sky` | `#3FA5DC` | Light Blau (Highlights, Dark-Section-Akzent) | Logo-helle Variante |
| `--accent` | `#D62828` | Rot aus "MEISTERBETRIEB" Schriftzug (Trust-Pill) | Logo-Rot |
| `--accent-deep` | `#A41E1E` | Rot tief (Hover) | eigene Erweiterung |

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

## Schrift (1:1 aus Original-CSS)

Alte TYPO3-Site nutzt **PT Sans** als einzige Custom-Font (im DynCSS verifiziert:
`font-family: "PT Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
Arial, sans-serif`). Wir bleiben **authentisch bei der Original-Familie** und
kombinieren mit **PT Sans Narrow** für Editorial-Display-Headlines (selbe Familie,
condensed Variante - gibt Magazin-Feel ohne Bruch zur Marke).

| Use | Font | Weight | Begründung |
|---|---|---|---|
| Display (H1) | **PT Sans Narrow** | 700 | Condensed Variante der Original-Familie - schlank-elegant für Editorial-Headlines |
| Headlines (H2-H6) | **PT Sans Narrow** | 700 | Konsistent mit Display |
| Body | **PT Sans** | 400/700 | 1:1 aus Original-CSS - humanistisch, neutral, sehr lesbar |
| UI / Buttons | **PT Sans** | 600 | Klar, anti-cringe |
| Eyebrow / Caps | **PT Sans** | 700 (uppercase + tracking) | Editorial-Marker |

Eingebunden via Google Fonts in `src/layouts/Layout.astro`:
`https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Sans+Narrow:wght@400;700&display=swap`

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
