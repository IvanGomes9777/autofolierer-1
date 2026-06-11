/**
 * Geteilte Inhalte für alle Design-Varianten — überall mit den echten
 * Kundendaten von GV Werbetechnik (siehe lib/site.ts).
 * Preise sind BEISPIEL-PREISE und als solche gekennzeichnet
 * (Endpreis nach kostenloser Begutachtung).
 */

export const finishes = [
  { icon: '🖤', name: 'Matt', desc: 'Understated und edel — nimmt Reflexen das Grelle.' },
  { icon: '✨', name: 'Satin', desc: 'Seidiger, tiefer Glanz zwischen Matt und Hochglanz.' },
  { icon: '🪞', name: 'Satin-Chrome / Gebürstetes Metall', desc: 'Premium und auffällig, fängt das Licht in feinen Linien.' },
  { icon: '🌈', name: 'Color-Shift / Chamäleon', desc: 'Farbwechsel je nach Lichtwinkel — lebendig und einzigartig.' },
  { icon: '🏁', name: 'Carbon-Optik', desc: 'Sportliche Akzente in feiner Carbon-Struktur.' },
  { icon: '🎨', name: 'Custom-Design', desc: 'Individuell — vom Teildesign bis zum kompletten Unikat.' },
];

export const services = [
  { icon: '🚗', name: 'Vollfolierung (Farbwechsel)', desc: 'Komplette Designfolierung — neue Farbe, voller Werterhalt.', price: 'ab 1.990 €', dauer: '2–4 Tage' },
  { icon: '🎯', name: 'Teilfolierung & Akzente', desc: 'Dach, Spiegel, Motorhaube — gezielte Akzente.', price: 'ab 290 €', dauer: '' },
  { icon: '🛡️', name: 'Lackschutzfolie (PPF)', desc: 'Unsichtbarer Steinschlagschutz für den Originallack.', price: 'ab 890 €', dauer: '' },
  { icon: '🌑', name: 'Scheibentönung', desc: 'Nur zugelassene ABE-Folien, hintere Scheiben & Heck.', price: 'ab 149 €', dauer: '' },
  { icon: '✂️', name: 'Chrome-Delete', desc: 'Zierleisten in Schwarz oder Satin — cleaner Look.', price: 'ab 240 €', dauer: '' },
  { icon: '📣', name: 'Werbebeschriftung & Flotten', desc: 'Gewerbliche Fahrzeugwerbung — Einzelfahrzeug bis Flotte.', price: 'Angebot', dauer: '' },
];

export const steps = [
  { no: '01', title: 'Anfrage & Wunsch', desc: 'Formular mit Finish-Wunsch — gern mit Fotos deines Fahrzeugs.' },
  { no: '02', title: 'Beratung & Angebot', desc: 'Wir besprechen Material, Finish und Preis.' },
  { no: '03', title: 'Termin & Folierung', desc: 'Saubere, fachgerechte Verarbeitung auf Studio-Niveau.' },
  { no: '04', title: 'Abnahme & Pflege', desc: 'Gemeinsame Abnahme und konkrete Pflegehinweise.' },
  { no: '05', title: 'Papiere & Versicherung', desc: 'Bei Farbwechsel: Hinweis zu Fahrzeugpapieren & Versicherung.' },
];

export const trustPoints = [
  'Premium-Folien (3M, Avery Dennison, KPMF, Hexis)',
  'Saubere, fachgerechte Verarbeitung',
  'Werterhalt — Originallack bleibt geschützt',
  'Rückstandslos entfernbar',
  'Faire Preise, persönliche Beratung',
];

export const materialPartners = ['3M', 'Avery Dennison', 'KPMF', 'Hexis', 'Oracal'];

/** Galerie-Platzhalter (rechtssichere CSS-Kompositionen, 16:10).
 *  BEISPIEL – durch echte GV-Aufnahmen ersetzen, Kennzeichen unkenntlich machen. */
export const gallery = [
  { finish: 'Matt', vehicle: 'Sportlimousine', g: 'linear-gradient(135deg,#1c1c1c,#0a0a0a 60%,#202020)' },
  { finish: 'Satin', vehicle: 'SUV', g: 'linear-gradient(135deg,#34302a,#14120f 65%,#3a352d)' },
  { finish: 'Color-Shift', vehicle: 'Coupé', g: 'linear-gradient(135deg,#2a1f3d,#141018 50%,#3d2e1a)' },
  { finish: 'Custom', vehicle: 'Kompaktwagen', g: 'linear-gradient(135deg,#1a2733,#0a0f14 60%,#2e2417)' },
  { finish: 'Carbon', vehicle: 'Kombi', g: 'linear-gradient(135deg,#232323,#0c0c0c 60%,#1a1a1a)' },
  { finish: 'Satin-Chrome', vehicle: 'Roadster', g: 'linear-gradient(135deg,#3a3024,#16120c 60%,#4a3c28)' },
];
